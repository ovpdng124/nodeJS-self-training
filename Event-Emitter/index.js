let Emitter = require('./emitter')
let EventEmitter = require('events')

let emitter = new Emitter()
let eventEmitter = new EventEmitter()

//Create event
emitter.on('test', function () {
    console.log('Call event successfully!')
})

//Call event
emitter.emit('test')
eventEmitter.on('test1', function () {
    console.log('Test 1')
})
eventEmitter.emit('test1')
