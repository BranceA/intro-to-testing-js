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

function isVowel(input) {
    if (typeof input === "string") {
        return (input.toLowerCase() === ("a" || "e" || "i" || "o" || "u"))
    } else if (typeof input === "number") {
        return false
    } else {
        return false
    }
}

function add(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return NaN;
    } else
    return (parseFloat(num1) + parseFloat(num2));
}