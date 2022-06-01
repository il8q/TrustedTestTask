import {EventHandler as DomainEventHandler} from "../../domain-model";
import {DomainModelEvent} from "../../domain-model/domain-model-event";
import EventListPage from "../../EventListPage";

export default class EventHandler implements DomainEventHandler {
    private parent: EventListPage;

    constructor(parent: EventListPage) {
        this.parent = parent;
    }

    public applyEvent(event: DomainModelEvent)
    {
        if (this.checkEventName(event.eventName))
        {
            this.parent.updateState();
        }
    }

    private checkEventName(eventName: string) {
        switch (eventName)
        {
            case "updateEventList":
                return true;
            default:
                throw new Error("EventPage принял не своё событие \"" + eventName + "\"");
        }
    }
}