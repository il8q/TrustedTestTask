import AddEventElementListPanel from "../AddEventElementListPanel";
import {DomainModelEvent} from "../../../domain-model/domain-model-event";
import {EventHandler as DomainEventHandler} from "../../../domain-model";

export default class EventHandler implements DomainEventHandler {
    private parent: AddEventElementListPanel;

    constructor(parent: AddEventElementListPanel) {
        this.parent = parent;
    }

    public applyEvent(event: DomainModelEvent)
    {
        switch (event.eventName)
        {
            case "error":
                this.parent.updateErrorMessage(event.parameters.get("message"));
                break;
            default:
                throw new Error("AddEventElementListPanel принял не своё событие \"" + event.eventName + "\"");
        }
    }
}