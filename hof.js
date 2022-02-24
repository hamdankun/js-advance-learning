function multiply(number) {
    return function(number2) {
        return number*number2;
    }
}

const multiplyByTwo = multiply(2);
const multiplyByFive = multiply(5);
console.log(multiplyByTwo(10))
console.log(multiplyByFive(10))