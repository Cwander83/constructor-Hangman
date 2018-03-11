
var inquirer = require('inquirer');

var Word = require("./word");

var wordList = ["blue", "red", "black", "pink", "green", "white"];
//the array of words scrambled
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

var characterGuess = "";

var myWord = new Word(randomWord, characterGuess);
var wordLength = myWord.numberOfCharacters;
var showWord = myWord.display;
var numberOfGuesses = myWord.userGuesses;
var guessesLeft = myWord.numberGuessesLeft;

var results = "";



console.log("|***********************|\n");
console.log("     Hangman game\n");
console.log("*************************");

//console.log(JSON.stringify(myWord, null, 2));
//console.log("showword: " + showWord);
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
    console.log(`************************`);
    console.log(`Word to Guess: ${myWord.display}`);
    console.log(`User Guesses: ${myWord.userGuesses}`);
    console.log(`Number of Guesses Left: ${myWord.numberGuessesLeft}`);
    inquirer.prompt([{
            name: "hangman",
            type: "input",
            message: "Pick Your Letter?",

        }])
        .then((letterEntered) => {
          
            characterGuess = letterEntered.hangman;
         
            showWord = myWord.checker(randomWord, characterGuess, showWord);
          
            if (myWord.userGuesses === wordLength) {
                results = "won";
                gameOver();
                return;

            } else if (myWord.guessesLeft === 0) {
                results = "lost";
                gameOver();
                return;
            }
            gameRun();
        });
};

function gameOver() {
    console.log("***************");
    console.log("GAME OVER!!");
    console.log("***************");
    
    if (results === "won") {
        console.log("You Won!  Congrads!");

    } else if (results === "lost") {

        console.log("Sorry try again :(");
    };
};