import "./css/event-element-list.css"

type ElementProperties = {
    data: string,
    description: string,
    isOverdue: boolean,
}

export default function EventElementList({ data, description, isOverdue }: ElementProperties) {
    let dateStyle = "event-element-list__data ";
    let dateStateText = "";
    if (isOverdue) {
        dateStyle += "event-element-list__data_overdue";
        dateStateText = "Overdue"
    }
    return (
        <div className="event-element-list">
            <div className={dateStyle}>
                <b>{dateStateText}</b> {data}
            </div>
            <div className="event-element-list__description">
                {description}
            </div>
        </div>
    );
}