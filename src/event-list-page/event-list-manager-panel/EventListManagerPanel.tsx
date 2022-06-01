import React from "react";
import EventHandler from "../domain-model/event-handler";
import "./css/event-list-manager-panel.css";
import {DomainModelEvent} from "../domain-model/domain-model-event";

type PageProperties = {
    eventHandler: EventHandler;
};
type PageState = {
};

export default class EventListManagerPanel extends React.Component<PageProperties, PageState> {
    constructor(props: PageProperties) {
        super(props);
    }

    public render() {
        return (
            <div className="event-list-manager-panel">
                <ul>
                    <li key={"event-list-manager-panel-0"} className="event-list-manager-panel__clear-button">
                        <a onClick={() => {
                            this.props.eventHandler.applyEvent(
                                new DomainModelEvent(
                                    "clearEventList",
                                    new Map<string, string>()
                                )
                            )
                        }}>Очистить</a>
                    </li>
                    <li key={"event-list-manager-panel-1"} className="event-list-manager-panel__add-button">
                        <a onClick={() => {
                            this.props.eventHandler.applyEvent(
                                new DomainModelEvent(
                                    "openAddEventPanel",
                                    new Map<string, string>()
                                )
                        )}}>Добавить</a>
                    </li>
                </ul>
            </div>
        );
    }
}