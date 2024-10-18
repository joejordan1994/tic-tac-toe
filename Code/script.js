// Game board object
const gameBoard = {
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],

  // Get the board to show up
  displayBoard: function () {
    this.board.forEach((row) => console.log(row.join(" | ")));
  },

  // Update the board (run this after every move)
  // This should probably go in another object
  updateBoard: function (row, col, symbol) {
    if (this.board[row][col] === "") {
      this.board[row][col] = symbol;
    } else {
      console.log("Spot already taken!");
    }
  },
};

// Testing to see if it works
// gameBoard.updateBoard(1, 2, "X");
// gameBoard.updateBoard(2, 1, "O");
// gameBoard.displayBoard();

// Player object
// (Name, symbol)
// (makeMove method)

// GameController object
// (currentPlayer, turnCount properties)
// (switchPlayer, checkWinner, checkDraw methods)

// Display object
// (showMessage, showBoard methods)

// Input handler object
// (getPlayerInput, validateInput methods)
