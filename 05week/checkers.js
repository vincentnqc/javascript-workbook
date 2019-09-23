'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checkers() {
  
// Why am I here?
  
}



class checkers {
  constructor(symbol){
    this.symbol = symbol;
  }
}

class Board {
  constructor(grid, checkers) {
    this.grid = [];
    this.redPiece = "r";
    this.blackPiece = "b";
    this.checkers = [];
  }

// only be able to move piece if the ending column is one more or one less than the starting column

    legalMove(whichPiece, toWhere){
      let start = whichPiece.split("")
      let end = toWhere.split("")
      console.log(parseInt(start[0]) + 1 == end[0] || parseInt(start[0]) -1 == end[0])
      if(parseInt(start[0]) + 1 == end[0] || parseInt(start[0]) -1 == end[0])
        return true;
    }
      

  

  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column]);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
    
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }


  // Using posistions of odd or even spaces to put pieces on the board.
  initializeGrid(){
    for(let row1 = 0; row1 < 3; row1++){
      for(let col1 = 0; col1 < 8; col1++){
        if(row1 % 2 === 0 && col1 % 2 === 1){
          this.grid[row1][col1] = this.redPiece;
          this.checkers.push(this.redPiece);
        }
        if(row1 % 2 === 1 && col1 % 2 === 0){
          this.grid[row1][col1] = this.redPiece;
          this.checkers.push(this.redPiece);
        }
      }
    }
    for(let row2 = 5; row2 < 8; row2++){
      for(let col2 = 0; col2 < 8; col2++){
        if(row2 % 2 == 0 & col2 % 2 == 1){
          this.grid[row2][col2] = this.blackPiece;
          this.checkers.push(this.blackPiece);

        } if(row2 % 2 == 1 & col2 % 2 == 0){
          this.grid[row2][col2] = this.blackPiece;
          this.checkers.push(this.blackPiece);
        }
      }
    }
  }
}

// Using split to move pieces across the game board by making an array and having it displayed as a string. 

class Game {
  constructor() {
    this.board = new Board;
  }

  moveChecker(whichPiece, toWhere) {
    let move = whichPiece.split("");
    let where = toWhere.split("");
    if(this.board.legalMove(whichPiece, toWhere) === true) {
    this.board.grid[where[0]][where[1]] = this.board.grid[move[0]][move[1]];
    this.board.grid[move[0]][move[1]] = null;
  }
     
    console.log(this.board.grid[move[0]][move[1]]);
    this.killCheck(whichPiece, toWhere)
}

// jumping checker's endng position is two less or two more than it's starting column posision

  killCheck(whichPiece, toWhere) {

    let premove = whichPiece.split("");
    let prewhere = toWhere.split("");

    let move = parseInt(premove[0]);
    let where = parseInt(prewhere[0]);
    let move1 = parseInt(premove[1]);
    let where1 = parseInt(prewhere[1]);
    
    console.log(move, move1, where, where1);
    console.log(this.board.grid[move -1][move1 +1])

// create if statements for if the checker doing the jumping is red or black and depnding on which direction it's moving.

// checker getting jumped is checked if it's position is one les or one more than the jumping checker and equals null so it gets killed.

    if(this.board.grid[move -1][move1 +1] && move -2 === where && move1 +2 === where1){
      this.board.grid[move -1][move1 +1] = null;
      this.board.checkers.pop();
      this.board.grid[prewhere[0]][prewhere[1]] = this.board.grid[premove[0]][premove[1]];
      this.board.grid[premove[0]][premove[1]] = null;
      console.log(this.board.checkers.length)
    
       return true;
    }

    if(this.board.grid[move +1][move1 -1] && move +2 === where && move1 -2 === where1){
      this.board.grid[move +1][move1 -1] = null;
      this.board.checkers.pop();
      this.board.grid[prewhere[0]][prewhere[1]] = this.board.grid[premove[0]][premove[1]];
      this.board.grid[premove[0]][premove[1]] = null;
      console.log(this.board.checkers.length)
    
       return true;
    }

    if(this.board.grid[move -1][move1 -1] && move -2 === where && move1 +2 === where1){
      this.board.grid[move -1][move1 -1] = null;
      this.board.checkers.pop();
      this.board.grid[prewhere[0]][prewhere[1]] = this.board.grid[premove[0]][premove[1]];
      this.board.grid[premove[0]][premove[1]] = null;
      console.log(this.board.checkers.length)
    
       return true;
    }

    if(this.board.grid[move +1][move1 +1] && move +2 === where && move1 +2 === where1){
      this.board.grid[move +1][move1 +1] = null;
      this.board.checkers.pop();
      this.board.grid[prewhere[0]][prewhere[1]] = this.board.grid[premove[0]][premove[1]];
      this.board.grid[premove[0]][premove[1]] = null;
      console.log(this.board.checkers.length)
    
       return true;
    }
  }



  // Also make the string position eqaul to null to make pieces previous position disapear.

  start() {
    this.board.createGrid();
    this.board.initializeGrid();
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
