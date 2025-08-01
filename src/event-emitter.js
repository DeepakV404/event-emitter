class EventEmitter {
    constructor() {
        this.listeners = {};
    }

    on(event, callback){
        if(!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event].push(callback)
    }

    off(event, callback){
        if(!this.listeners[event]) return;
        this.listeners[event] = this.listeners[event].filter(_callback => _callback !== callback)
    }

    emit(event, payload){
        if(!this.listeners[event]) return
        this.listeners[event].forEach((_callback) => {
            try {
                _callback(payload)
            } catch (error) {
                console.log(`error in event ${event}:`, error)
            }
        })
    }
}

export const eventEmitter = new EventEmitter();