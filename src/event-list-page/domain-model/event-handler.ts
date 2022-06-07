export default interface EventHandler {
    applyEvent(name: string, parameters: any): void;
}