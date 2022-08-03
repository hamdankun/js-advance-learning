// Composition -> combine multiple function
// many operations on fixed data, stateless, all function are fure (no side effect), declarative

// Inheritance -> superclass and child class
// few operators on common data, statefull, side effect, imperative


// Inheritance
class MySuperClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }

    printName() {
        return `${this.firstName} ${this.lastName}`;
    }

}

class People extends MySuperClass {
    constructor(firstName, lastName) {
        super(firstName, lastName)
    }
}

const people = new People("Hamdan", "Hanafi");

console.log(people.printName());
console.log(people.sayHello());

// Composition

function getSayHelloFunc(people) {
    return Object.assign({}, people, {
        sayHello: function() { console.log(this); return `Hello ${this.firstName} ${this.lastName}` }
    })
}

function getPrintHelloFunc(people) {
    return Object.assign({}, people, {
        printName: function() { return `${this.firstName} ${this.lastName}` }
    })
}

const peopleComposition = (firstName, lastName) => {
    const people = {
        firstName,
        lastName
    }

    return Object.create({
        ...getSayHelloFunc(people),
        ...getPrintHelloFunc(people),
    })
}

console.log('compsition', peopleComposition("Hamdan", "Hanafi").sayHello())
console.log('compsition', peopleComposition("Hamdan", "Hanafi").printName())