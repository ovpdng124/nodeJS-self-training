function Emitter()
{
    this.events = {}
}

Emitter.prototype.on = function (eventName, listener) {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName].push(listener)
}

Emitter.prototype.emit = function (eventName) {
    if (this.events[eventName]) {
        this.events[eventName].forEach(function (listener) {
            listener()
        })
    }
}

module.exports = Emitter
