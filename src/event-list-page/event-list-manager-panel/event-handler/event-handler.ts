import {EventHandler as DomainEventHandler} from "../../domain-model";
import EventListPage from "../../EventListPage";

export default class EventHandler implements DomainEventHandler {
    private parent: EventListPage;

    constructor(parent: EventListPage) {
        this.parent = parent;
    }

    public applyEvent(name: string, parameters: any)
    {
        switch (name) {
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
                throw new Error("EventPage принял не своё событие \"" + name + "\"");
        }
    }
}