'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  //using to split to split solution into an array of substrings
  let solutionArray = solution.split("")
  let guessArray = guess.split("")
  let correctLetterLocations = 0
  for(var i = 0; i <=3; i++){
  // i less then 2
  if(solutionArray[i] === guessArray[i]){
  correctLetterLocations ++
  solutionArray[i] = null;
  }
  }
  let correctLetters = 0
  for(var i = 0; i <=3; i++) {
  var targetIndex = solutionArray.indexOf(guessArray[i])
  if(targetIndex > -1) {
    correctLetters ++
    solutionArray[targetIndex] = null
  }
  }
  return `${correctLetters}-${correctLetterLocations}`
  // if the solutionArray is equal to the guess Array then the letters are in the correct locations
}

function mastermind(guess) {
  solution = 'abcd'; 
  if (solution === guess){
    return "You guessed it!"
  }
  // you won
  var hint = generateHint(guess);

  var combined = guess+hint
board.push(combined)
if(board.length === 10){
  board = []
  console.log( `You ran out of turns! The solution was ${solution}`)
  //if you use more than 10 guesses, you lose
}
else 'Guess Again'
}
//if you havent used 10 guesses then you can guess again


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
