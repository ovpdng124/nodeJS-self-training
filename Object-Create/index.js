let person = {
    firstName: 'ABC',
    lastName: 'XYZ',
    fullName: function () {
        return this.firstName + this.lastName
    },
}

let test1 = Object.create(person)

console.log(test1.fullName())
console.log(person.fullName())
