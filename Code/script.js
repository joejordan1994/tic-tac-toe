// Game board object
const gameBoardObject = {
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],

  // displayBoard method (to print the board in the console)
  displayBoard: function () {
    this.board.forEach((row) => console.log(row.join(" | ")));
  },

  // updateBoard method (to place "X" or "O" on the board)
  updateBoard: function (row, col, symbol) {
    if (this.board[row][col] === "") {
      this.board[row][col] = symbol;
    } else {
      console.log("Spot already taken!");
    }
  },
};

gameBoardObject.displayBoard();

// Player object
const playerObject = {};
// (Name, symbol properties)
// (makeMove method)

// Game controller object
const gameControllerObject = {};
// (currentPlayer, turnCount properties)
// (switchPlayer, checkWinner, checkDraw methods)

// Display object
const displayObject = {};
// (showMessage, showBoard methods)

// Input handler object
const inputHandlerObject = {};
// (getPlayerInput, validateInput methods)
