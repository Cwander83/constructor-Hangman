//main page where everything comes together and runs the game
console.log("Hangman game");
//Inquirer node 
var inquirer = require('inquirer');
//calling other constructor functions
Words = require("./word.js");
randomWord = require("./random.js");


//the object that with be compared for the game



inquirer.prompt([{
        type: "confirm",
        message: "Are you Ready to start Game?",
        name: "confirm",
        default: true
    }])
    .then(function (inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.confirm) {
            console.log("\nWelcome " + inquirerResponse);
            console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
        } else {
            console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
        }
    });