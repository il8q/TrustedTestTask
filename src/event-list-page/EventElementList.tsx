import "./css/event-element-list.css"
import React from "react";

type Properties = {
    date: string,
    description: string,
    isOverdue: boolean,
};
type State = {};

export default class EventListManagerPanel extends React.Component<Properties, State> {
    constructor(props: Properties) {
        super(props);
    }

    public render() {
        let dateStyle: string = "event-element-list__data ";
        let dateStateText: string = "";
        if (this.props.isOverdue) {
            dateStyle += "event-element-list__data_overdue";
            dateStateText = "Overdue";
        }

        return (
            <div className="event-element-list">
                <div className={dateStyle}>
                    <b>{dateStateText}</b> {this.props.date}
                </div>
                <div className="event-element-list__description">
                    {this.props.description}
                </div>
            </div>
        );
    }
}