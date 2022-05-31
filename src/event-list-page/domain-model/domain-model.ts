import DemoDataGenerator from "./demo-data-generator";
import EventListElementFactory from "./event-list-element-factory";
import EventListElement from "./event-list-element";

export default class DomainModel
{
    private demoDataGenerator: DemoDataGenerator;
    private readonly eventListElementFactory: EventListElementFactory;

    constructor() {
        this.eventListElementFactory = new EventListElementFactory();
        this.demoDataGenerator = new DemoDataGenerator(this.eventListElementFactory);
    }

    public getDemoData(): Array<EventListElement>
    {
        return this.demoDataGenerator.generate();
    }
}
