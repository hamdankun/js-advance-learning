// using async/await for calling api

const sayHello = (name) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Hello ${name}`);
    }, 1000);
});

// traditional ways
sayHello('Hamdan')
    .then((helloMessage) => sayHello(`${helloMessage}`))
    .then((helloMessage) => sayHello(`${helloMessage}`))
    .then((helloMessage) => sayHello(`${helloMessage}`))
    .then((message) => {
        console.log('message', message)
    })

// using async/await
async function sayHelloAsync() {
    const firstName = await sayHello("Hamdan");

    const hello1 = await sayHello(firstName);
    const hello2 = await sayHello(hello1);
    const hello3 = await sayHello(hello2);

    console.log(hello3);
}

sayHelloAsync();