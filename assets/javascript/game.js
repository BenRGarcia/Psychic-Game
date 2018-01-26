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
 *   secretLetter - stores the value of the randomly selected letter
 * 
 * arrays
 *   array of alphabet, static
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
const alphabet = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

let lettersGuessed = [];
/*-------------------------*/


/*
scratchpad: initial state object?

const gameState = {
  winCountTotal: 0,
  lossCountTotal: 0,
  guessesRemaining: 9,
  secretLetter: "",

  validateInput(guess) {
    if (alphabet.indexOf(userInput) !== -1 && lettersGuessed.indexOf(userInput) === -1) {
    this.secretLetter = guess;
    } else {
      return false;
    }
  }

};

*/


/*************
 * Variables *
 *************/
let winCountTotal = 0;

let lossCountTotal = 0;

let guessesRemaining = 9;

let secretLetter = "";
/*-------------------------*/





/*************
 * Functions *
 *************/


document.addEventListener('keypress', (event) => {
  let guess = event.key.toUpperCase();
  gameEngine(guess)
});

function gameEngine(guess) {
  if (validateInput(guess)) {
    addGuessToArray(guess);
    
    if (testForMatch(guess)) {
      incrementWinCountTotal();
      alertUserOfWin();
    }
  }

  isGameOver ? alertUserOfLoss(): decrementGuessesLeft();
}


function isGameOver() {
  if (guessesRemaining <= 0) return true;
  else return false;
}

function generateRandomLetter() {
  let secretLetter = alphabet[Math.floor(Math.random() * alphabet.length - 1)];
  return secretLetter;
}

function addGuessToArray(guess) {
  lettersGuessed.push(guess);
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
  alert(`You won that round!\n\n*The letter I was thinking was: ${secretLetter}`);
}

function alertUserOfLoss() {
  alert(`You lost that round!\n\nThe letter I was thinking was: ${secretLetter}`);
}

function renderDOM() {
  document.getElementById("js-win-count").innerHTML = winCountTotal;
  document.getElementById("js-loss-count").innerHTML = lossCountTotal;
  document.getElementById("js-guesses-remaining").innerHTML = guessesRemaining;
  document.getElementById("js-guesses-so-far").innerHTML = lettersGuessed;
}

function testForMatch(guess) {
  if (guess === secretLetter) return true;
  else return false;
}

function resetGame() {
  guessesRemaining = 9;
  lettersGuessed = [];
}

// Only pass to game engine 1) letters 2) not-previously-guessed
function validateInput(userInput) {
  if (alphabet.indexOf(userInput) !== -1 && lettersGuessed.indexOf(userInput) === -1) return true;
  else return false;
}
