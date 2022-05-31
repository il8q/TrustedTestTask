import EventListElement from "./domain-model/EventListElement";
import moment from "moment";

export default class DemoDataGenerator
{
    public static generate(): Array<EventListElement>
    {
        const nowTime: Date = new Date();
        return [
            this.generateNextElement(
                moment(nowTime).add(1, 'w').toDate(),
                "Test description"
            ),
            this.generateNextElement(
                moment(nowTime).add(2, 'w').toDate(),
                "Test description 2"
            ),
            this.generateNextElement(
                moment(nowTime).add(-2, 'w').toDate(),
                "Overdue -2"
            ),
            this.generateNextElement(
                moment(nowTime).add(-4, 'w').toDate(),
                "Overdue -4"
            ),
        ]
    }

    private static generateNextElement(data: Date, description: string): EventListElement
    {
        return new EventListElement(data, description);
    }
}