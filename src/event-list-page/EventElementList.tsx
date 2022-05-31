import "./css/event-element-list.css"

type ElementProperties = {
    data: string,
    description: string
}

export default function EventElementList({ data, description }: ElementProperties) {
    return (
        <div className="event-element-list">
            <div className="event-element-list__data"><b>{data}</b></div>
            <div className="event-element-list__description">{description}</div>
        </div>
    );
}