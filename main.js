//main page where everything comes together and runs the game
console.log("Hangman game");
//Inquirer node 
const inquirer = require('inquirer');
//calling other constructor functions
const Word = require("./word");




const wordList = ["blue", "red", "black", "pink", "green", "white"];
//the array of words scrambled
const random = wordList[Math.floor(Math.random() * wordList.length)];
const characterGuess = "";
//the object" that with be compared for the game
const myWord = new Word(random, characterGuess);
let displayGuesses = myWord.guesses;
let displayWord = myWord.arrayJoined;
//let displayGuessesLeft = myWord.numberLeft;

console.log("word: " + JSON.stringify(myWord, null, 2));
console.log("number of guesses: " + myWord.numberLeft);

inquirer.prompt([{
        type: "confirm",
        message: "Are you Ready to start Game?",
        name: "confirm",
        default: true
    }])
    .then(function (inquirerResponse) {
        if (inquirerResponse.confirm) {
            gameRun();

        } else if (!inquirerResponse.confirm) {
            console.log("Okay, Maybe next time ?)");
            return;
        }
    });

function gameRun() {
    inquirer.prompt([{
            name: "hangman",
            type: "input",
            message: "Pick Your Letter?",

        }])
        .then(function (letterEntered) {
            characterGuess = letterEntered.hangman;
            displayWord = myWord.checker(random, characterGuess, displayWord);
            console.log(displayWord);

            gameRun();
        })
}