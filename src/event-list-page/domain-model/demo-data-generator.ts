import EventListElement from "./event-list-element";
import EventListElementFactory from "./event-list-element-factory";

export default class DemoDataGenerator
{
    private eventCounter: number = 0;
    private elementFactory: EventListElementFactory;

    constructor(elementFactory: EventListElementFactory) {
        this.elementFactory = elementFactory;
    }

    public generate(): Array<EventListElement> {
        return [
            this.elementFactory.create(this.eventCounter++, "Test description"),
            this.elementFactory.create(this.eventCounter++, "Second description"),
            this.elementFactory.create(-2, "Overdue -2"),
            this.elementFactory.create(-4, "Overdue -4"),
        ];
    }

    public getCounter(): number {
        return this.eventCounter;
    }
}