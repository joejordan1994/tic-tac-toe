const Gameboard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  const render = () => {
    let boardHTML = "";
    gameboard.forEach((square, index) => {
      boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
    });
    document.querySelector("#gameboard").innerHTML = boardHTML;
  };

  const update = (index, value) => {
    gameboard[index] = value;
    render();
  };

  const getSquare = (index) => {
    return gameboard[index];
  };

  const getBoard = () => {
    return gameboard;
  };

  const reset = () => {
    gameboard = ["", "", "", "", "", "", "", "", ""];
  };

  return {
    render,
    update,
    getSquare,
    getBoard,
    reset,
  };
})();

const createPlayer = (name, mark) => {
  return {
    name,
    mark,
  };
};

const Game = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameOver;

  const start = () => {
    players = [
      createPlayer(document.querySelector("#player1").value || "Player 1", "X"),
      createPlayer(document.querySelector("#player2").value || "Player 2", "O"),
    ];
    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.reset();
    Gameboard.render();

    const gameboardElement = document.querySelector("#gameboard");
    gameboardElement.addEventListener("click", handleClick);

    document.querySelector("#message").textContent = "";
  };

  const handleClick = (event) => {
    if (!event.target.classList.contains("square")) return;

    let index = parseInt(event.target.id.split("-")[1]);

    if (Gameboard.getSquare(index) !== "" || gameOver) return;

    Gameboard.update(index, players[currentPlayerIndex].mark);

    if (checkWin(players[currentPlayerIndex].mark)) {
      gameOver = true;
      document.querySelector(
        "#message"
      ).textContent = `${players[currentPlayerIndex].name} wins!`;
      return;
    } else if (checkTie()) {
      gameOver = true;
      document.querySelector("#message").textContent = `It's a tie!`;
      return;
    }

    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
  };

  const checkWin = (mark) => {
    const winningCombinations = [
      // Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningCombinations.some((combination) => {
      return combination.every((index) => Gameboard.getSquare(index) === mark);
    });
  };

  const checkTie = () => {
    // If all squares are filled and no winner
    return Gameboard.getBoard().every((square) => square !== "");
  };

  return {
    start,
  };
})();

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
  Game.start();
});
