// Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.



const Letters = function (character) {
    this.character = character.toUpperCase();
    this.blank = "_ ";

};
// being sent to the word page 
module.exports = Letters;