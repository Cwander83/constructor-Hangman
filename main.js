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
//adding the array of word to search for into the object
const myWord = new Word(random, characterGuess);
//let displayGuesses = myWord.guesses;
let showWord = myWord.arrayJoinedAgain;
//let displayGuessesLeft = myWord.numberLeft;

console.log("word: " + JSON.stringify(myWord, null, 2));
console.log("showword: " + showWord);
// simple question to start the game and run the gameRun() function or not play
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
//game function for asking for the letter will repeat til won or numbers run out
function gameRun() {
    inquirer.prompt([{
            name: "hangman",
            type: "input",
            message: "Pick Your Letter?",

        }])
        .then((letterEntered) => {
            //turning the answer from inquirer in a variable
            characterGuess = letterEntered.hangman;
            //adding that answer into the method from word.js
            showWord = myWord.checker(random, characterGuess, showWord);

            //seeing whats happening in the word object as the letters are entered
            console.log('myWord: '+JSON.stringify(myWord,null,2));
            console.log('characterguess: '+ characterGuess);
            console.log('random: '+ random);
            console.log('showword: ' + showWord);
            //where the enter letter request repeats itself
            gameRun();

            // where i'll add the section for winning and losing the game 
            // then have it go back the inqurier prompt of "are you ready to play"

        })
}