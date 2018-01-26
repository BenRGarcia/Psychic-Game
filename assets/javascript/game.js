/*============================================================================*
 *----------------------------- Global Variables -----------------------------*
 *============================================================================*/

let winCountTotal = 0;
let lossCountTotal = 0;
let guessesRemaining = 9;
let secretLetter = "";
let lettersGuessed = [];

const alphabet = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
/*____________________________________________________________________________*/



/*============================================================================*
 *-------------------------------- Game Play ---------------------------------*
 *============================================================================*/

generateRandomLetter();

document.addEventListener('keypress', (event) => {
  let guess = event.key.toUpperCase();
  gameEngine(guess);
});

function gameEngine(guess) {
  if (inputIsValid(guess)) {
    
    if (letterIsMatch(guess)) {
      incrementWinCountTotal();
      alertUserOfWin();
      resetGame();
    } else {
      decrementGuessesLeft();
      addToGuessArray(guess);
    }

    if (gameIsOver()) {
      alertUserOfLoss();
      incrementLossCountTotal();
      resetGame();
    }
    renderDOM();
  }
}
/*___________________________________________________________________________*/



/*============================================================================*
 *-------------------------------- Functions ---------------------------------*
 *============================================================================*/

/******* Generate random letter per round, validate keypress was letter *******/
function generateRandomLetter() {
  secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}

function inputIsValid(userInput) {
  if (alphabet.indexOf(userInput) !== -1 && 
      lettersGuessed.indexOf(userInput) === -1) {
    return true;
  } else {
    return false;
  }
}
/*----------------------------------------------------------------------------*/


/************************ If player guesses correctly *************************/
function letterIsMatch(guess) {
  if (guess === secretLetter) return true;
  else return false;
}

function incrementWinCountTotal() {
  winCountTotal++;
}

function alertUserOfWin() {
  alert(`You won that round!\n\nThe letter was: ${secretLetter}`);
}
/*----------------------------------------------------------------------------*/


/********************** If a player guesses incorrectly ***********************/
function decrementGuessesLeft() {
  guessesRemaining--;
}

function addToGuessArray(guess) {
  lettersGuessed.push(guess);
}
/*----------------------------------------------------------------------------*/


/********************** If a player runs out of guesses ***********************/
function gameIsOver() {
  if (guessesRemaining <= 0) return true;
  else return false;
}

function alertUserOfLoss() {
  alert(`You lost that round!\n\nThe letter was: ${secretLetter}`);
}

function incrementLossCountTotal() {
  lossCountTotal++;
}
/*----------------------------------------------------------------------------*/


/************************* Reset game for next round **************************/
function resetGame() {
  guessesRemaining = 9;
  lettersGuessed = [];
  generateRandomLetter();
}
/*----------------------------------------------------------------------------*/


/*************************** Update page elements *****************************/
function renderDOM() {
  document.getElementById("js-win-count").innerHTML = winCountTotal;
  document.getElementById("js-loss-count").innerHTML = lossCountTotal;
  document.getElementById("js-guesses-remaining").innerHTML = guessesRemaining;
  document.getElementById("js-guesses-so-far").innerHTML = lettersGuessed;
}
/*----------------------------------------------------------------------------*/


/*============================================================================*
 *----------------------------------- End ------------------------------------*
 *============================================================================*/
