export type Parameters = Map<string, any>;

export class DomainModelEvent
{
    public eventName: string;
    public parameters: Parameters;

    constructor(eventName: string, parameters: Parameters) {
        this.eventName = eventName;
        this.parameters = parameters;
    }
}