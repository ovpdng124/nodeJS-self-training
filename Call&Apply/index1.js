let util = require('util')

function Person()
{
    this.firstName = 'Abc'
    this.lastName = 'xyz'
}

Person.prototype.sayHello = function () {
    console.log(this)
    // console.log(`Hello ${this.firstName} ${this.lastName}`)
}

function Student()
{
    Person.apply(this)
    this.id = '123'
}

util.inherits(Student, Person)

let student = new Student()
student.sayHello()
Person.prototype.sayHello()
