import EventListElement from "./domain-model/EventListElement";
import EventElementList from "./EventElementList";
import DemoDataGenerator from "./demo-data-generator";

export default function EventList() {
    let events: Array<EventListElement> = DemoDataGenerator.generate();

    return (
        <div className="event-list-page">
            <h1 className="text-to-center">События</h1>
            {events.map((member) => (
                <EventElementList data={member.getData().toString()}
                                  description={member.getDescription()}/>
            ))}
        </div>
    );
}