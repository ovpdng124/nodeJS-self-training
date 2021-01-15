function Person()
{
    this.message = 'Type Class 3'
    this.callType = function () {
        console.log(this.message)
    }
}

module.exports = new Person
