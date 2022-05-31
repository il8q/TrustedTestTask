import EventElementList from "./EventElementList";
import DemoDataGenerator from "./domain-model/demo-data-generator";
import {DomainModel, EventListElement} from "./domain-model";
import React from "react";

type PageProperties = {
};
type PageState = {
    events: Array<EventListElement>;
};

export default class EventListPage extends React.Component<PageProperties, PageState> {
    private domainModel: DomainModel;
    public state: PageState;

    constructor(props: PageProperties) {
        super(props);

        this.domainModel = new DomainModel();
        this.state = {
            events: this.domainModel.getDemoData(),
        };
    }

    public render() {
        return (
            <div className="event-list-page">
                <h1 className="text-to-center">События</h1>
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
}