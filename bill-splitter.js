const prompt = require('prompt-sync')();
const userInput1 = prompt("Please enter the total for person 1: ");
const userInput2 = prompt("Please enter the total for person 2: ");
const numberUserInput1 = Number(userInput1);
const numberUserInput2 = Number(userInput2);

const total = ((numberUserInput1) + (numberUserInput2));
const numberTotal = Number(total);
const numberHalfTotal = (Number(numberTotal) / 2)

if ((numberUserInput1) > (numberUserInput2)) {
    console.log("Person 2 owes Person 1 ", ((numberHalfTotal) - (numberUserInput2)));
} else if ((numberUserInput2) > (numberUserInput1)) {
    console.log("Person 1 owes Person 2 ", ((numberHalfTotal) - (numberUserInput1)));
} else if ((numberUserInput2) === (numberUserInput1)) {
    console.log("The bill is split evenly already. ");
}