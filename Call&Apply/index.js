let person = {
    name : 'Abc',
    sayHello: function (birthday, hometown) {
        console.log(`Hello ${this.name} ${this.age} ages. Born at ${birthday} in ${hometown}`)
    }
}

person.sayHello('2021', 'Da Nang')
person.sayHello.call({name: 'XYZ', age: 12}, 1995, 'Da Nang')
person.sayHello.apply({name: 'XYZ', age: 12}, [2020, 'Da Nang'])
