import { eventEmitter } from "./event-emitter"

const Emitter = () => {
  return (
    <div>
        Emitter
        <button onClick={() => {
            eventEmitter.emit("event_1", "Deepak")
        }}>
            Emit Deepak
        </button>  

        <button onClick={() => {
            eventEmitter.emit("event_new", {"newEvent": "Emitting New Event with payload"})
        }}>
            Emit New
        </button>        
    </div>
  )
}

export default Emitter