class Index
{
    constructor()
    {
        this.config()
        this.listen()
    }

    config()
    {
        this.elements = {
            firstName: 'Abc',
            lastName: 'Xyz',
        }
    }

    listen()
    {
        this.sayHello()
    }

    sayHello()
    {
        let firstName = this.elements.firstName
        let lastName = this.elements.lastName
        console.log(firstName + lastName)
    }
}

let test = new Index()
