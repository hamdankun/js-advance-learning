const promise = new Promise((resolve) => {
    resolve('Worted Stuff Resolved!');
});

const promiseReject = new Promise((resolve, reject) => {
    reject('Worted Stuff Reject!');
});

promise.then((result) => result + '!')
    .then(result => result + '!')
    .catch(error => console.log('error')) // catch just scope then before
    .then(result => {
        // throw Error
    }) // will not scope with catch above


// all settled -> will force all to then event has reject promise

Promise.allSettled([promise, promiseReject])
    .then(values => console.log(values));

// Promise any (es 2021)

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
// });

// (async function () {
// const result = await Promise.any([p1, p2, p3]);
// console.log(result); // Prints "A", "B" or "C"
// })();