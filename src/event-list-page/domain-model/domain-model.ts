import DemoDataGenerator from "./demo-data-generator";
import EventListElementFactory from "./event-list-element-factory";
import EventListElement from "./event-list-element";
import EventHandler from "./event-handler";
import {DomainModelEvent, Parameters} from "./domain-model-event";
import EventSubscriber from "./event-subscriber";

export default class DomainModel implements EventHandler, EventSubscriber
{
    private demoDataGenerator: DemoDataGenerator;
    private readonly eventListElementFactory: EventListElementFactory;
    private eventListElements: Array<EventListElement>;
    private readonly eventCounter: number;
    private subscribers: Map<string, EventHandler>;

    constructor() {
        this.eventListElementFactory = new EventListElementFactory();
        this.demoDataGenerator = new DemoDataGenerator(this.eventListElementFactory);
        this.eventListElements = this.demoDataGenerator.generate();
        this.eventCounter = this.demoDataGenerator.getCounter();
        this.subscribers = new Map<string, EventHandler>();
    }

    public applyEvent(event: DomainModelEvent)
    {
        switch (event.eventName) {
            case "addToEventList":
                this.addToEventList(event);
                break;
            case "clearEventList":
                this.clearEventList();
                break;
            case "openAddEventPanel":
                this.openAddEventPanel();
                break;
            default:
                throw new Error("Unknown event \""  + event.eventName + "\"");
        }
    }

    public sendToSubscriber(
        name: string,
        eventName: string,
        eventParameters: Map<string, any> = new Map<string, any>()
    ) {
        let eventList = this.subscribers.get(name);
        // @ts-ignore
        eventList.applyEvent(
            new DomainModelEvent(eventName, eventParameters)
        )
    }

    public getEventList(): Array<EventListElement>
    {
        return this.eventListElements;
    }

    public subscribe(ownName: string, subscriber: EventHandler): void {
        this.subscribers.set(ownName, subscriber);
    }

    private addToEventList(event: DomainModelEvent) {
        try {
            this.eventListElements.push(this.eventListElementFactory.create(
                this.eventCounter,
                <string>event.parameters.get("description")
            ));
            this.sendToSubscriber("eventList", "updateEventList");
            this.sendToSubscriber("eventList", "closeAddEventPanel");
        } catch (exception) {
            this.sendToSubscriber(
                "addEventElementListPanel",
                "error",
                this.extractErrorMessage(exception)
            );
        }
    }

    private clearEventList() {
        this.eventListElements = new Array<EventListElement>;
        this.sendToSubscriber("eventList", "updateEventList");
    }

    private openAddEventPanel() {
        this.sendToSubscriber("eventList", "openAddEventPanel");
    }

    private extractErrorMessage(exception: any): Parameters {
        let parameters = new Map<string, any>();
        if (exception instanceof Error) {
            parameters.set("message", exception.message);
        } else {
            parameters.set("message", exception);
        }
        return parameters;
    }
}
