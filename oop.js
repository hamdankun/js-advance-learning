// class Hamdan {

// }

// class Hanafi extends Hamdan {
//     firstName = 'Hamdan'
//     lastName = 'Hanafi'
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// // const hamdan = new Hanafi();

// Hanafi.prototype.getLastName = function() {
//     return this.lastName;
// }

// console.log(new Hanafi().getLastName());

// factory function -> funcation that return object

// OOP using using es5
function Hamdan(firstName, lastName) {
    return {
        firstName,
        lastName,
        getFullName() {
            return `${firstName} ${lastName}`
        }
    }
}

const hamdan = Hamdan('Hamdan', 'Hanafi')
console.log(hamdan.getFullName());

// Functions Constructor
function MyClass(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName;
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

const myClass = new MyClass('Hamdan', 'Hanafi');
var kunkin = 'hanafi';
console.log(globalThis);


// es6 classes

class MyClassesClass {

    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attach with ' + this.weapon;
    }
}

const classesClass = new MyClassesClass("Hamdan", "Stone")

classesClass.attack();

console.log(classesClass instanceof MyClassesClass)


// 4 ways use this

// new binding
function NewBinding(fistName, lastName) {
    this.firstName = fistName;
    this.lastName = lastName
}

// implisit binding
const implisitBinding = {
    fistName: 'Hamdan',
    lastName: 'Hanafi',
    sayHello() {
        return this.firstName + " " + this.lastName
    }
}

// explicit binding
const explicitBinding = {
    fistName: 'Kun',
    lastName: 'Kin',
    sayHello: function() {
        return this.lastName + ' ' + this.fistName
    }.bind(implisitBinding)
}

// arrow function
const arrowFunction = {
    fistName: 'Hamdan',
    lastName: 'Hanafi',
    hi: function() {
        var inner = () => {
            console.log(this.fistName + ' ' + this.lastName);
        }
        return inner();
    }
}

console.log(arrowFunction.hi());


// inheritance

// using classes
class Character {
    attack() {
        return this.name + " " + this.weapon;
    }
}

class HamdanCharacter extends Character {
    constructor(name, weapon) {
        super();
        this.name = name;
        this.weapon = weapon;
    }
}

const hamdanObject = new HamdanCharacter("Hamdan", "mp4");

console.log(hamdanObject.attack());
