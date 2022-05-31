import EventListElement from "./event-list-element";
import moment from "moment";

export default class EventListElementFactory
{
    private static MAX_DESCRIPTION_LENGTH: number = 240;

    public create(counter: number, description: string): EventListElement
    {
        const date: Date = this.generateData(counter);
        this.checkDescription(description);
        return new EventListElement(
            date,
            description,
            this.defineOverdueState(date)
        );
    }

    private generateData(counter: number): Date
    {
        return moment(new Date()).add(counter, 'w').toDate();
    }

    private defineOverdueState(date: Date) {
        return moment(date).isBefore(new Date());
    }

    private checkDescription(description: string) {
        if (description.length > EventListElementFactory.MAX_DESCRIPTION_LENGTH) {
            throw new Error("В описании больше " + EventListElementFactory.MAX_DESCRIPTION_LENGTH + " символов");
        }
    }
}