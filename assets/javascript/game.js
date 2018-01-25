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





/*****************************************************************************
 ******************************* Begin Program *******************************
 *****************************************************************************/





/**********
 * Arrays *
 **********/
const alphabetArray = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

let guessedLetterArray = [];
/*-------------------------*/





/*************
 * Variables *
 *************/
let winCountTotal = 0;

let lossCountTotal = 0;

let guessesRemaining = 9;

let secretRandomLetter = alphabetArray[
  Math.floor(Math.random() * alphabetArray.length - 1)
];
/*-------------------------*/





/*************
 * Functions *
 *************/

// Listen for keypress events
document.addEventListener('keypress', (event) => {

  // Declare variable, assign it the value of keypress
  let userGuess = event.key.toLowerCase();

  // Only pass letters to game engine
  if (alphabetArray.indexOf(userGuess) !== -1) {
    gameEngine(userGuess);
  }

});

// Game engine that calls the shots
function gameEngine(userGuess) {
  // call function the checks to see if a match
  testForMatch(userGuess);
  // call function to update DOM
  // call function that adds 
}

function updateDOM() {
  document.getElementById("js-win-count").innerHTML = winCountTotal;
  document.getElementById("js-loss-count").innerHTML = lossCountTotal;
  document.getElementById("js-guesses-remaining").innerHTML = guessesRemaining;
  document.getElementById("js-guesses-so-far").innerHTML = guessedLetterArray;
}

function addGuessToArray(guess) {
  guessedLetterArray.push(guess);
  console.log(`Guesses so far are ${guessedLetterArray}`);
}

function testForMatch(userLetterGuess) {
  if (userLetterGuess === secretRandomLetter) {
    incrementWinCountTotal();
  } else {
    incrementLossCountTotal();
  }
}

function isGameOver() {
  if (guessesRemaining <= 0) {
    incrementLossCountTotal();
  }
}

function incrementWinCountTotal() {
  winCountTotal++;
  alertUserOfWin();
}

function incrementLossCountTotal() {
  lossCountTotal++;
  alertUserOfLoss();
}

function alertUserOfWin() {
  alert(`Congrats! You won that round!\n\n*The letter I was thinking of was: ${secretRandomLetter}`);
  resetGame();
}

function alertUserOfLoss() {
  alert(`Too bad, so sad... You lost that round!\n\nThe letter I was thinking of was: ${secretRandomLetter}`);
  resetGame();
}

function resetGame() {
  guessesRemaining = 9;
  guessedLetterArray = [];
}
/*-------------------------*/
