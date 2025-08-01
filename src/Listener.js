import { useState } from "react"
import { useEvent } from "./useEvent"


const Listener = () => {
    const [eventData, setEventData] = useState();

    useEvent("event_1", (data) => {
        setEventData(data)
    })

    return (
        <div>Listener {eventData}</div>
    )
}

export default Listener