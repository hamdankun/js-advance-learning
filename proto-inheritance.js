var array = [];

console.log(array.__proto__)


// simple using bind

var parent = {
    firstName: 'hamdan',
    lastName: 'hanafi',
    sayHello() {
        return `${this.firstName} ${this.lastName}`
    }
}

var child = {
    firstName: 'Hamdan1',
    lastName: 'Hanafi2'
}

var childInheritance = parent.sayHello.bind(child);

// console.log(childInheritance());


// another way to inheritance
var child2 = {
    firstName: 'Naruto'
};

// dont' do this, it will issue on performance
child2.__proto__ = parent;

console.log(child2.sayHello())

// inheritance using object.create

let human = {
    mortal: true
}

let socrates = Object.create(human);

console.log(human.isPrototypeOf(socrates));


// prototype chain
// our function -> Function -> Object -> null

function MyOwnFunction() {
    this.firstName = 'Hamdan';
}

MyOwnFunction.prototype.getFirstName = function() {
    return this.firstName;
}

console.log(new MyOwnFunction().getFirstName());

Array.prototype.myCustom = () => 'Hello Word';

console.log([].myCustom());


console.log('global', this);

const Animal = () => {
    this.name = 'Animal';
    console.log(this);
    // this.getName = () => {
    //     return this.name;
    // }
}

// const Bird = Object.create(Animal);

// console.log(Bird)

console.log(Animal());