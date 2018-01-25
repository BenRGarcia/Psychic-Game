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
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

let guessedLetterArray = [];
/*-------------------------*/





/*************
 * Variables *
 *************/
let winCountTotal = 0;

let lossCountTotal = 0;

let guessesRemaining = 9;

let secretRandomLetter = "";
/*-------------------------*/





/*************
 * Functions *
 *************/

// call function that generates psuedo-random letter
generateRandomLetter();

// Listen for keypress events
document.addEventListener('keypress', (event) => {
  let userGuess = event.key.toUpperCase();
  qualifyInput(userGuess);
});


// Only pass to game engine 1) letters 2) not-previously-guessed
function qualifyInput(userInput) {
  if (alphabetArray.indexOf(userInput) !== -1 &&
      guessedLetterArray.indexOf(userInput) === -1) 
  {
    gameEngine(userInput);
  }
}


// Game engine that calls the shots
function gameEngine(userGuess) {
  renderDOM();

  // call function that adds the guessed letter to array
  addGuessToArray(userGuess);
  renderDOM();

  // call function the checks to see if a match
  testForMatch(userGuess);
  renderDOM();

  // call function that tests if game is over
  if (guessesRemaining <= 0) {
    incrementLossCountTotal();
    renderDOM();
    alertUserOfLoss();
    renderDOM();
  }
}

function generateRandomLetter() {
  secretRandomLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length - 1)];
}

// A function that updates the DOM
function renderDOM() {
  document.getElementById("js-win-count").innerHTML = winCountTotal;
  document.getElementById("js-loss-count").innerHTML = lossCountTotal;
  document.getElementById("js-guesses-remaining").innerHTML = guessesRemaining;
  document.getElementById("js-guesses-so-far").innerHTML = guessedLetterArray;
}

function addGuessToArray(guess) {
  guessedLetterArray.push(guess);
}

function testForMatch(userLetterGuess) {
  if (userLetterGuess === secretRandomLetter) {
    incrementWinCountTotal();
    alertUserOfWin();
  } else {
    decrementGuessesLeft();
  }
}

function incrementWinCountTotal() {
  winCountTotal++;
}

function incrementLossCountTotal() {
  lossCountTotal++;
}

function decrementGuessesLeft() {
  guessesRemaining--;
}

function alertUserOfWin() {
  alert(`CONGRATS! You won that round!\n\n*The letter I was thinking of was: ${secretRandomLetter}`);
  resetGame();
}

function alertUserOfLoss() {
  alert(`Too bad, so sad... You lost that round!\n\nThe letter I was thinking of was: ${secretRandomLetter}\nBetter luck next time!`);
  resetGame();
}

function resetGame() {
  guessesRemaining = 9;
  guessedLetterArray = [];
  renderDOM();
  generateRandomLetter();
}
/*-------------------------*/
