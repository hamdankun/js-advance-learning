const wrapperFunc = null;

const addOne = (number) => number+1;
const addTwo = (number) => number+2;
const addThree = (number) => number+3;
const addFour = (number) => number+4;
const addFive = (number) => number+5;

const funcs = [addOne, addTwo, addThree, addFour, addFive];

const compose = (...funcs) => {

    return (data) => {


        for(let i = 0; i < funcs.length; i++) {

            data = funcs[i](data);

        }

        return data
    }

}

const addMultiple = compose(...funcs);

console.log(addMultiple(1));

// Programmer Principle when create function
// - Clear + UNderstanble
// - Easy TO Extend
// - Easy to Maintain
// - Memory Efficient
// - DRY