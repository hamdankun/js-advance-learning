var a = 5;
var b = a // a will be copy to b as value

b++

console.log(a);
console.log(b);


// pass by reference
const obj1 = {
    firstName: 'hamdan',
    lastName: 'hanafi'
}

const obj2 = obj1 // obj1 will be copy as reference

obj2.lastName = 'Kun';

console.log(obj1); // will be kun
console.log(obj2); // will be kun

const array1 = [1, 2, 3, 4, 5];
const array2 = array1;

array2.push('last');

console.log(array1, array2)

// clone object for void reference
const obj3 = Object.assign({}, obj1);

obj1.firstName = 'naruto'

let obj4 = {}

// console.log(obj3);

function changeObj() {
    obj4 = obj1; 
    obj1.firstName = 'Sasuke'
} 

changeObj();

console.log(obj4);