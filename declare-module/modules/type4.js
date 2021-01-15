function Person()
{
    this.message = 'Type Class 4'
    this.callType = function () {
        console.log(this.message)
    }
}

module.exports = Person
