import EventElementList from "./EventElementList";
import {DomainModel, EventListElement, EventHandler as DomainEventHandler} from "./domain-model";
import React from "react";
import EventListManagerPanel from "./event-list-manager-panel/EventListManagerPanel";
import EventHandler from "./event-list-manager-panel/event-handler/event-handler";
import AddEventElementListPanel from "./event-list-manager-panel/add-event-element-list-panel/AddEventElementListPanel";

type PageProperties = {};
type PageState = {
    events: Array<EventListElement>;
    showAddEventPanel: boolean;
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
            showAddEventPanel: false,
        };
    }

    public render() {
        return (
            <div className="event-list-page">
                <h1 className="text-to-center">События</h1>
                <EventListManagerPanel eventHandler={this.domainModel}/>
                {this.renderEventList()}
                {this.renderPopup()}
            </div>
        );
    }

    private renderEventList() {
        return this.state.events.map((member) => (
            <EventElementList key={member.getData().toString()}
                              date={member.getData().toString()}
                              description={member.getDescription()}
                              isOverdue={member.isOverdue}/>
        ));
    }

    public updateEventList() {
        this.setState({
            events: this.domainModel.getEventList(),
        });
    }

    public openAddEventPanel() {
        this.setState({
            showAddEventPanel: true,
        });
    }

    public closeAddEventPanel() {
        this.setState({
            showAddEventPanel: false,
        });
    }

    private renderPopup() {
        if (this.state.showAddEventPanel) {
            return <AddEventElementListPanel
                eventHandler={this.domainModel}
                subscribeTo={this.domainModel}
            />;
        }
        return (<div></div>);
    }
}