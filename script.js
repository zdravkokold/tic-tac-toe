// Initialize variables
let board = Array(9).fill("");
let currentPlayer = "X";

// Get DOM elements
const squares = document.querySelectorAll(".square");
const resetButton = document.getElementById("reset");

// Add event listeners
squares.forEach((square, index) => {
  square.addEventListener("click", () => {
    if (board[index] === "") {
      square.classList.add("marked");
      square.textContent = currentPlayer;
      board[index] = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

resetButton.addEventListener("click", resetGame);

// Define game functions
function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
      announceWinner(currentPlayer);
    }
  }

  if (!board.includes("")) {
    announceTie();
  }
}

function announceWinner(player) {
  alert(player + " wins!");
  resetGame();
}

function announceTie() {
  alert("It's a tie!");
  resetGame();
}

function resetGame() {
  board = Array(9).fill("");
  squares.forEach(square => {
    square.classList.remove("marked");
    square.textContent = "";
  });
  currentPlayer = "X";
}