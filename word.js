//Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

//linking the letter.js page
Letters = require("./letter.js");

var Word = function (word, character) {
   
    this.numberGuessesLeft = 9;
    this.userGuesses = 0;

    var arrayOfWords = word.split("");

    //takes the number of characters from the word
    this.numberOfCharacters = arrayOfWords.length;

    var letterOrBlank = new Letters(character);

    for (var i = 0; i < arrayOfWords.length; i++) {

        arrayOfWords[i] = letterOrBlank.blank;
    };
    //after running thru the new object returns to string
    this.display = arrayOfWords.join("");

    this.checker = (word, character, wordDisplay) => {

        var arrayOfWords = word.split("");

        var letterOrBlank = new Letters(character);

        //variable for the wrong character
        var correctGuess = false;

        this.characterArray = wordDisplay.split("");

        for (var j = 0; j < arrayOfWords.length; j++) {

            if (this.characterArray[j] === "_") {
                //if equals a character
                if (arrayOfWords[j] === character) {

                    this.characterArray[j] = letterOrBlank.character;

                    correctGuess = true;

                    this.userGuesses++;
                }
                //if not stays a blank
                else {
                    this.characterArray[j] = letterOrBlank.blank;

                };
            };
        };
        //joined back in a string
        this.display = this.characterArray.join("");

        if (correctGuess === false) {

            //this.userGuesses++;

            this.numberGuessesLeft--;
        };

        return this.display;
    };
};

module.exports = Word;