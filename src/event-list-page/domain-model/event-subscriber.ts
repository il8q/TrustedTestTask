import EventHandler from "./event-handler";

export default interface EventSubscriber {
    subscribe(ownName: string, subscriber: EventHandler): void;
}