//Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.



//linking the letter.js page
Letters = require("./Letters");

var Words = function (word, letter) {
    let array = word.split("");
    this.word = array.length;
    this.guesses = 9;
    this.letterBlank = [];
    


}

module.exports = Words;