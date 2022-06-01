import {DomainModelEvent} from "./domain-model-event";

export default interface EventHandler {
    applyEvent(event: DomainModelEvent): void;
}