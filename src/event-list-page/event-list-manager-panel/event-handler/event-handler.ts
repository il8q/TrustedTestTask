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
        switch (event.eventName)
        {
            case "openAddEventPanel":
                this.parent.openAddEventPanel();
                break;
            case "closeAddEventPanel":
                this.parent.closeAddEventPanel();
                break;
            case "updateEventList":
                this.parent.updateEventList();
                break;
            default:
                throw new Error("EventPage принял не своё событие \"" + event.eventName + "\"");
        }
    }
}