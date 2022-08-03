// IIFE pattern

var MyModule = (function() {

    var name = 'hamdan'

    // all var, func etc will encapsulation here
    function sayHello() {
        return `Hello World ${name}`
    }

    return {
        sayHello
    }
})();

console.log(MyModule.sayHello());