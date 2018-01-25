/* 
 * ===============================
 * id's for html '<span>' elements
 * ===============================
 * 1) js-win-count
 * 2) js-loss-count
 * 3) js-guesses-remaining
 * 4) js-guesses-so-far
 * ===============================
 */





// Psuedocode:
/*
 * hard code array of letters from alphabet
 * 
 * generate a random letter from array of letters, store in variable
 * 
 * listen for keyboard button press/release events
 * 
 * if keyboard button pressed is a letter, 
 *   make lower case letter
 *   add letter to array js-guesses-so-far
 *   ignore button presses which are not letters
 * 
 * if button pressed matches random letter variable
 *   alert user "You won this round!"
 *   increment js-win-count
 *   reset js-guesses-so-far to empty array
 *   reset js-guesses-remaining to default value
 * 
 * but if button pressed doesn't match random letter variable
 *   
 *   decrement js-guesses-remaining
 * 
 * if js-guesses-remaining equals zero
 *   alert user "You lost this round"
 *   increment js-loss-count
 *   reset js-guesses-so-far to empty array
 *   reset js-guesses-remaining to default value
 */





// Program components:
/*
 * variables
 *   winCountTotal - keeps track of total number of wins
 *   lossCountTotal - keeps track of total number of losses
 *   guessesRemaining - keeps track of number of remaining guesses
 *   secretRandomLetter - stores the value of the randomly selected letter
 * 
 * arrays
 *   array of alphabetArray, static
 *   array of guessedLetters, dynamic
 * 
 * functions/things program needs to do
 *   select randomized letter from alphabet array, store in variable
 *   event listener, listens for keyboard button presses (ignores non-letters)
 *   makes letters guessed lowercase
 *   adds letter to guessedLetters array
 *   check to see if letter guessed matches random letter
 *   increments winCountTotal
 *   increments lossCountTotal
 *   decrements guessesRemaining
 *   update/refresh DOM elements with each new incorrect guess
 *   alert user to a win
 *   alert user to a loss
 *   alert user to the secret hidden letter when win/loss occurs
 *   reset guessesRemaining and guessedLetters
*/





// Variables
let winCountTotal = 0;

let lossCountTotal = 0;

let guessesRemaining = 9;

let secretRandomLetter;





// Arrays
const alphabetArray = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

let guessedLetterArray = [];





// Functions
secretRandomLetter = alphabetArray[Math.ceil(Math.random() * 26)]