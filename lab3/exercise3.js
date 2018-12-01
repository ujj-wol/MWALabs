const EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor() {
        super();
        this.emitingFunction();
    }

    emitingFunction() {
        setInterval(() => {
            this.emit('go');
        }, 1000);
    }
}

let gymInstance = new Gym();
gymInstance.on('go', () => console.log('Athlete is working out!!'));
//console.log(gymInstance.hasOwnProperty('emitingFunction'));