import DemoDataGenerator from "./demo-data-generator";
import EventListElementFactory from "./event-list-element-factory";
import EventListElement from "./event-list-element";
import EventHandler from "./event-handler";
import {DomainModelEvent} from "./domain-model-event";
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
                this.eventListElements.push(this.eventListElementFactory.create(
                    this.eventCounter,
                    <string>event.parameters.get("description")
                ));
                this.updateEventList();
                break;
            case "clearEventList":
                this.eventListElements = new Array<EventListElement>;
                this.updateEventList();
                break;
            case "error":
                throw new Error(<string>event.parameters.get("description"));
            default:
                throw new Error("Unknown event \""  + event.eventName + "\"");
        }
    }

    public updateEventList()
    {
        let eventList = this.subscribers.get("eventList");
        // @ts-ignore
        eventList.applyEvent(
            new DomainModelEvent(
                "updateEventList",
                new Map<string, any>(),
            )
        )
    }

    public getEventList(): Array<EventListElement>
    {
        return this.eventListElements;
    }

    public subscribe(ownName: string, subscriber: EventHandler): void {
        this.subscribers.set(ownName, subscriber);
    }
}
