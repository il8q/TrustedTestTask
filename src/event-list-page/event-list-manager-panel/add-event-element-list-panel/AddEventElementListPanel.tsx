import React from "react";
import {DomainModelEvent} from "../../domain-model/domain-model-event";
import EventHandler from "./event-handler/event-handler";
import {EventHandler as DomainEventHandler} from "../../domain-model";
import EventSubscriber from "../../domain-model/event-subscriber";
import "./css/add-event-element-list-panel.css";

type PageProperties = {
    eventHandler: DomainEventHandler;
    subscribeTo: EventSubscriber;
};
type PageState = {
    errorMessage: string;
    description: string;
};

export default class AddEventElementListPanel extends React.Component<PageProperties, PageState> {
    private readonly eventHandler: EventHandler;

    constructor(props: PageProperties) {
        super(props);

        this.eventHandler = new EventHandler(this);
        this.props.subscribeTo.subscribe("addEventElementListPanel", this.eventHandler);
        this.state = {
            errorMessage: "",
            description: "",
        };
    }

    render() {
        return (
            <div className="add-event-element-list-panel">
                <div className="add-event-element-list-panel-content">
                    <div className="add-event-element-list-panel__error-message">
                        {this.state.errorMessage}
                    </div>
                    <div className="add-event-element-list-panel__description-label">Описание</div>
                    <textarea className="add-event-element-list-panel__description"
                              name="description"
                              ref="description"
                              value={this.state.description}
                              onChange={(event)=>{
                                  this.setState({
                                      description: event.target.value,
                                  });
                              }}>
                    </textarea>
                    <div className="add-event-element-list-panel__button-container text-to-center">
                        <a className="button-container__button" onClick={() => {
                            this.props.eventHandler.applyEvent(
                                new DomainModelEvent(
                                    "addToEventList",
                                    new Map<string, string>([
                                        ["description", this.state.description],
                                    ])
                                )
                            )
                        }}>
                            <b>Создать</b>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    public updateErrorMessage(errorMessage: string) {
        this.setState({
            errorMessage: "Ошибка: " + errorMessage,
        });
    }
}