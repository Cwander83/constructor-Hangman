//main page where everything comes together and runs the game
console.log("Hangman game");
//Inquirer node 
const inquirer = require('inquirer');
//calling other constructor functions
const Word = require("./word");


const wordList = ["blue", "red", "black", "pink", "green", "white"];
//the array of words scrambled
const random = wordList[Math.floor(Math.random() * wordList.length)];
let characterGuess = "";
//the object" that with be compared for the game
const myWord = new Word(random, characterGuess);
//let displayGuesses = myWord.guesses;
let showWord = myWord.arrayJoinedAgain;
//let displayGuessesLeft = myWord.numberLeft;

console.log("word: " + JSON.stringify(myWord, null, 2));
console.log("showword: " + showWord);

inquirer.prompt([{
        type: "confirm",
        message: "Are you Ready to start Game?",
        name: "confirm",
        default: true
    }])
    .then((inquirerResponse) => {
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
        .then((letterEntered) => {
            characterGuess = letterEntered.hangman;
            showWord = myWord.checker(random, characterGuess, showWord);
            console.log('myWord: '+JSON.stringify(myWord,null,2));
            console.log('characterguess: '+ characterGuess);
            console.log('random: '+ random);
            console.log('showword: ' + showWord);

            gameRun();
        })
}