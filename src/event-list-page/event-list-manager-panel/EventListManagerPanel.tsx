import React from "react";
import EventHandler from "../domain-model/event-handler";
import "./css/event-list-manager-panel.css";

type PageProperties = {
    eventHandler: EventHandler;
};
type PageState = {};

export default class EventListManagerPanel extends React.Component<PageProperties, PageState> {
    constructor(props: PageProperties) {
        super(props);
    }

    public render() {
        return (
            <div className="event-list-manager-panel">
                <ul>
                    <li className="event-list-manager-panel__clear-button">
                        <a onClick={() => {
                            this.props.eventHandler.applyEvent("clearEventList", {});
                        }}>Очистить</a>
                    </li>
                    <li className="event-list-manager-panel__add-button">
                        <a onClick={() => {
                            this.props.eventHandler.applyEvent("openAddEventPanel", {});
                        }}>Добавить</a>
                    </li>
                </ul>
            </div>
        );
    }
}