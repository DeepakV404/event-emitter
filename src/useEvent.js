import { useEffect } from "react";
import { eventEmitter } from "./event-emitter";

export function useEvent(event, callback){
    useEffect(() => {
        eventEmitter.on(event, callback);
        return () => {
            eventEmitter.off(event, callback)
        };
    }, [event, callback])
}