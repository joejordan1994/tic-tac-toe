// Game board as an array inside of a gameBoard object
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

gameBoard.displayBoard();
