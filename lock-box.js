const prompt = require('prompt-sync')();
const userInput = prompt("Please enter your pin code: ") ;
const pinCode = '1234' ;

if (userInput === pinCode) {
    console.log("Correct")
} else {
    console.log("Error")
}



