//Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

//linking the letter.js page
Letters = require("./letter.js");

console.log("letter: " + Letters);

const Word = function (word, characters) {

    //variables for guesses
    this.numberLeft = 9;
    this.userGuesses = 0;
    //spliting up the word to array of characters
    let arrayOfWords = word.split("");
    this.characterNumber = arrayOfWords.length;

    var Blank = new Letters(characters);
    for (let i = 0; i < arrayOfWords.length; i++) {
        arrayOfWords[i] = Blank.blank;
    };
    this.arrayJoined = arrayOfWords.join("");
    this.checker = function (word, characters, showWord) {
        let Blank = new Letters(characters);
        let arrayOfWords = word.split("");
        //variable for the wrong character
        let rightCharacter = true;
        this.characterArray = showWord.split("");
        for (let j = 0; j < arrayOfWords.length; j++) {
            if (this.characterArray[i] === "_ ") {
                if (arrayOfWords[j] !== letters) {
                    this.characterArray[j] = Blank.blank;
                    rightCharacter = false;
                } else if (arrayOfWords[j] === letters) {
                    this.characterArray[j] = Blank.letters;
                    this.userGuesses++;
                };
            };
        };
        this.arrayJoined = this.showWord.join("");
        if (!rightCharacter) {
            this.userGuesses--;
            this.numberLeft--;
        };
        return this.arrayJoined;
    };
};

//console.log('word: '+JSON.stringify(Word, null, 2));
module.exports = Word;