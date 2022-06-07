import DemoDataGenerator from "./demo-data-generator";
import EventListElementFactory from "./event-list-element-factory";
import EventListElement from "./event-list-element";
import EventHandler from "./event-handler";
import EventSubscriber from "./event-subscriber";

export default class DomainModel implements EventHandler, EventSubscriber
{
    private demoDataGenerator: DemoDataGenerator;
    private readonly eventListElementFactory: EventListElementFactory;
    private eventListElements: Array<EventListElement>;
    private eventCounter: number;
    private subscribers: Map<string, EventHandler>;

    constructor() {
        this.eventListElementFactory = new EventListElementFactory();
        this.demoDataGenerator = new DemoDataGenerator(this.eventListElementFactory);
        this.eventListElements = this.demoDataGenerator.generate();
        this.eventCounter = this.demoDataGenerator.getCounter();
        this.subscribers = new Map<string, EventHandler>();
    }

    public applyEvent(name: string, parameters: any)
    {
        switch (name) {
            case "addToEventList":
                this.addToEventList(name, parameters);
                break;
            case "clearEventList":
                this.clearEventList();
                break;
            case "openAddEventPanel":
                this.openAddEventPanel();
                break;
            case "closeAddEventPanel":
                this.closeAddEventPanel();
                break;
            default:
                throw new Error("Unknown event \""  + name + "\"");
        }
    }

    public sendToSubscriber(
        name: string,
        eventName: string,
        eventParameters: any = {}
    ) {
        let eventList: EventHandler = <EventHandler>this.subscribers.get(name);
        eventList.applyEvent(eventName, eventParameters);
    }

    public getEventList(): Array<EventListElement>
    {
        return this.eventListElements;
    }

    public subscribe(ownName: string, subscriber: EventHandler): void {
        this.subscribers.set(ownName, subscriber);
    }

    private addToEventList(name: string, parameters: any) {
        try {
            this.eventListElements.push(this.eventListElementFactory.create(
                this.eventCounter,
                parameters["description"]
            ));
            this.eventCounter++;
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

    private closeAddEventPanel() {
        this.sendToSubscriber("eventList", "closeAddEventPanel");
    }

    private extractErrorMessage(exception: any): { "message": string } {
        let parameters: {"message": string} = {"message": ""};
        if (exception instanceof Error) {
            parameters = {"message": exception.message};
        } else {
            parameters = {"message": exception};
        }
        return parameters;
    }
}
