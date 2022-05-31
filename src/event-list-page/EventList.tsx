import EventElementList from "./EventElementList";
import DemoDataGenerator from "./domain-model/demo-data-generator";
import {DomainModel, EventListElement} from "./domain-model";

export default function EventList() {
    let domainModel = new DomainModel();
    let events: Array<EventListElement> = domainModel.getDemoData();

    return (
        <div className="event-list-page">
            <h1 className="text-to-center">События</h1>
            {events.map((member) => (
                <EventElementList data={member.getData().toString()}
                                  description={member.getDescription()}
                                  isOverdue={member.isOverdue}/>
            ))}
        </div>
    );
}