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
 *   decrement js-guesses-remaining
 * 
 * if js-guesses-remaining equals zero
 *   alert user "You lost this round"
 *   increment js-loss-count
 *   reset js-guesses-so-far to empty array
 *   reset js-guesses-remaining to default value
 */





// Function list:
/*

*/