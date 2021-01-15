let EventEmitter = require('events')
let util = require('util')

function Dialog()
{
    this.message = 'Hello'
}

util.inherits(Dialog, EventEmitter)

let dialog = new Dialog()

Dialog.prototype.sayHello = function (data) {
    // Dialog.prototype.emit('hello', data)
    // dialog.emit('hello', data)
    this.emit('hello', data)
}

// Dialog.prototype.on('hello', function (data) {
//     console.log(`Hello: ${data}`)
// })
dialog.on('hello', function (data) {
    console.log(`Hello: ${data}`)
})

// Dialog.prototype.sayHello("ovpdng124")
dialog.sayHello("ovpdng124")
