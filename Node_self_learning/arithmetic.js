const prompt = require('prompt-sync')();

// console.log("Program started");


console.log("1.ADD ")
console.log("2.SUB ")
console.log("3.MUL ")
console.log("4.DIV ")

const choice = parseInt(prompt("Enter Your Choice: "));

const num = prompt("Enter first Number: ");
const num1 = Number(num);
const numm = prompt("Enter second Number: ");
const num2 = Number(numm)





switch (choice) {
    case 1:
        console.log("Result " + num1 + num2)
        break;

    case 2:
        console.log("Result " + num1 - num2)
        break;
    case 3:
        console.log("Result " + num1 * num2)
        break;
    case 3:
        console.log("Result " + num1 / num2)
        break;
}

