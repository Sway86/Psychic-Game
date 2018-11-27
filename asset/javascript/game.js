console.log("-------")

var letters = ["a", "b", "c"];

//holdes the letters user guesses
var guessedLetter = [];

//
var letterToGuess = null;

//counts down guesses
var guessesLeft = 9;

var wins = 0;
var losses = 0;

var updateGuessLeft = function () {
    //displays to the HTML
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLettersToGuess = function () {
    //a random letter is generated and assigned
    lettersToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function () {
    //take the letters guessed and display to the HTML seperated by commas
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

//resets game
var reset = function () {
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessLeft();
    updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();

//records keyboard entries
document.onkeydown = function (event) {

    //reduces guess count by one
    guessesLeft--;

    //Lowercases the letter
    var letter = String.fromCharCode(event.which).toLowerCase();

    //addes to guessedLetters array
    guessedLetter.push(letter);

    //runs the function
    updateGuessLeft();
    updateGuessesSoFar();

    if (letter === letterToGuess) {
        wins++;

        //determins if there is a win, if so then updates HTML
        document.querySelector("#wins").innerHTML = wins;

        reset();
    }

    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").inner = losses;

        reset();
    }
}