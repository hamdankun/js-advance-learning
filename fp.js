const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

user.cart = addToCard(user.cart, { name: 'Hamdan', qty: 10 });
user.cart = addToCard(user.cart, { name: 'Hanafi', qty: 5 });

function addToCard(currentCart, newItem) {
    return [...currentCart, newItem];
}

// perfect function, consists: 
// have one task, return statement, pure, no shared state, immutable state, composable, predicable


// idempotence => function that always give you same result whenever call over and over


function sameResult(num) {
    return num * 3;
}

console.log(sameResult(10));
console.log(sameResult(10));
console.log(sameResult(10));
console.log(sameResult(10));


// Imperative (manual) -> we own the logic for resolve some issue or create some function

const humas = ['hamdan', 'hanafi', 'kun'];

for(let i = 0; i < humas.length; i++) {
    console.log(humas[i]);
}

// Declarative (using abstraction) -> we use abstraction(helper function) that resolve our problem or program
humas.forEach(human => {
    console.log(human)
})


console.log(String);
console.log(Number);
console.log(Boolean);
console.log(BigInt);
console.log(Symbol);
console.log(null);
console.log(undefined);

var name = 'Hamdan';
var nameConstruct = new String('Hamdan')

// HOC => return function
const hof = () => () => 5

console.log(hof()());

// Closure
const closureFunc = () => {
    let number1 = 1;
    return closureFUnc2 = () => {
        let number2 = 2;
        return closureFunc3 = () => {
            let number3 = 3;
            return `${number1} ${number2} ${number3}`
        }
    }
}

console.log(closureFunc()()());

for(let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 300);
}

// currying
const multipy = (a, b) => a * b;
const curryingMultiply = (a) => (b) => a*b;

const curreidFive = curryingMultiply(5);
const curreidSix = curryingMultiply(6);

console.log('mantul', curreidFive(2))
console.log('mantul',curreidSix(2))

// currying with bind
const decrease = (a, b , c) => a - b - c;
const paritalDecreaseBy5 = decrease.bind(null, 5);
console.log(paritalDecreaseBy5(2, 2));


// Composer -> combine execution several function to be 1 call only
const compose = (fn1, fn2) => {
    return (param) => {
        return fn1(fn2(param))
    }
}

const pipe = (fn1, fn2) => {
    return (param) => {
        return fn1(fn2(param))
    }
}

const multipyBy5 = (number) => number + 5;
const decreaseBy3 = (number) => number - 3;

const multipyAndDecrease = compose(multipyBy5, decreaseBy3);

console.log('compose', multipyAndDecrease(10))

// Pipe -> seems like compose but pipe started from latest to fisrt queue function

const multipyAndDecreasePipe = pipe(multipyBy5, decreaseBy3);


console.log('pipe', multipyAndDecreasePipe(10))

// arity -> 