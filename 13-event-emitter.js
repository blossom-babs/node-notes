// using events in node modules


const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.on('response', () => {
    console.log(`this life that I have is the life of Christ in me. This life that I have is the life of God.`);
})

eventEmitter.emit('response')

//console.log(eventEmitter);