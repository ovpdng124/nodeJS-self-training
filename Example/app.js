function Person(name, password)
{
    this.name = name
    this.password = password
}

Person.prototype.getName = function () {
    return this.name
}

Person.prototype.getPassword = function () {
    return this.password
}

Person.prototype.getLevel = function () {
    return this.level
}

Person.prototype.level = 'Admin'

function User(name, password)
{
    this.name = name
    this.password = password
}

(function () {
    let test = 'aaaaabc'
    console.log(test)
}())

User.prototype = new Person()

let person = new Person('abc', '123123')
let user = new User('xyz', '123321')

console.log(person.getName())
console.log(person.getLevel())
console.log(person.getPassword())

Date.prototype.vnFormat = function () {
    let yyyy = this.getFullYear()
    let mm = this.getMonth() + 1
    let dd = this.getDate()

    return `${dd}/${mm}/${yyyy}`
}

let now = new Date()
let xms = new Date(2021, 1, 13)

console.log(now.vnFormat())
console.log(xms.vnFormat())


