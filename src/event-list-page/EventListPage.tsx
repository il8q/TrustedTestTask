import EventElementList from "./EventElementList";
import {DomainModel, EventListElement, EventHandler as DomainEventHandler} from "./domain-model";
import React from "react";
import EventListManagerPanel from "./event-list-manager-panel/EventListManagerPanel";
import EventHandler from "./event-list-manager-panel/event-handler/event-handler";

type PageProperties = {
};
type PageState = {
    events: Array<EventListElement>;
};


export default class EventListPage extends React.Component<PageProperties, PageState> {
    private readonly domainModel: DomainModel;
    public state: PageState;
    private readonly eventHandler: EventHandler;

    constructor(props: PageProperties) {
        super(props);

        this.domainModel = new DomainModel();
        this.eventHandler = new EventHandler(this);
        this.domainModel.subscribe("eventList", this.eventHandler);
        this.state = {
            events: this.domainModel.getEventList(),
        };
    }

    public render() {
        return (
            <div className="event-list-page">
                <h1 className="text-to-center">События</h1>
                <EventListManagerPanel eventHandler={this.domainModel}/>
                {this.renderEventList()}
            </div>
        );
    }

    private renderEventList() {
        return this.state.events.map((member) => (
            <EventElementList data={member.getData().toString()}
                              description={member.getDescription()}
                              isOverdue={member.isOverdue}/>
        ));
    }

    public updateState()
    {
        this.setState({
            events: this.domainModel.getEventList(),
        });
    }
}