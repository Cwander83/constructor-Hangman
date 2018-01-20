//Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

//linking the letter.js page
Letters = require("./letter.js");

console.log("letter: " + Letters);

const Word = function (word, character) {
    //variables for guesses
    this.numberLeft = 9;
    this.userGuesses = 0;
    //spliting up the word to array of characters
    let arrayOfWords = word.split("");
    //takes the number of characters from the word
    this.characterNumber = arrayOfWords.length;

    let Blank = new Letters(character);
    for (let i = 0; i < arrayOfWords.length; i++) {
        arrayOfWords[i] = Blank.blank;
    };
    //after running thru the new object returns to string
    this.arrayJoinedAgain = arrayOfWords.join("");

    this.checker = (word, character, showWord) => {
        let arrayOfWords = word.split("");
        let Blank = new Letters(character);

        //variable for the wrong character
        let wrongCharacter = false;
        this.characterArray = showWord.split("");
        for (let j = 0; j < arrayOfWords.length; j++) {
            if (this.characterArray[j] === "_ ") {

                if (arrayOfWords[j] === character) {
                    this.characterArray[j] = Blank.character;
                    wrongCharacter = true;
                     this.userGuesses++;
                } else {
                    this.characterArray[j] = Blank.blank;
                   
                };
            };
        };

        if (wrongCharacter) {
            this.userGuesses++;
            this.numberLeft--;
        };
        return this.arrayJoinedAgain;
    };
};

module.exports = Word;