// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
};

function sayHello(input) {
    if (typeof input === "undefined") {
        return "Hello, World!"
    } else if (typeof input === "boolean") {
        return "Hello, World!"
    } else
    return "Hello, " + input + "!";
}

function isFive(input) {
    return (parseFloat(input) === 5);
}

function isEven(input) {
    return (parseFloat(input) % 2) === 0;
}