let PlayerXScore = 0;
let PlayerYScore = 0;
let PlayerZScore = 0;
const TicTacTacGaGoo = document.getElementById('TicTacToeGame');
const TextyToo = document.getElementById('GameState');
const PlayerXScoreBoard = document.getElementById('PlayerXScore');
const PlayerYScoreBoard = document.getElementById('PlayerYScore');
const PlayerZScoreBoard = document.getElementById('PlayerZScore');
let TicTacToeBoard = Array(16).fill("");
let currentPlayerTurn = "X";
let gameState = false;

function drawBoard() {
  TicTacTacGaGoo.innerHTML = "";
  TicTacToeBoard.forEach((cell, index) => {
    const div = document.createElement("div");
    div.className = "cell";
    div.textContent = cell;
    div.addEventListener("click", () => makeMove(index));
    TicTacTacGaGoo.appendChild(div);
  });
}

function makeMove(index) {
  if (TicTacToeBoard[index] !== "" || gameState) return;
  TicTacToeBoard[index] = currentPlayerTurn;
  if (checkWinner(currentPlayerTurn)) {
    TextyToo.textContent = `Player ${currentPlayerTurn} wins!`;
    gameState = true;
    if (currentPlayerTurn == "X") {
      PlayerXScore += 1;
      PlayerXScoreBoard.textContent = "Player X Score: " + PlayerXScore;
    } else if(currentPlayerTurn == "Y"){
      PlayerYScore += 1;
      PlayerYScoreBoard.textContent = "Player Y Score: " + PlayerYScore;
    } else if(currentPlayerTurn == "Z"){
      PlayerZScore += 1;
      PlayerZScoreBoard.textContent = "Player Z Score: " + PlayerZScore;
    }
  } else if (TicTacToeBoard.every(cell => cell !== "")) {
    TextyToo.textContent = "It's a draw!";
    gameState = true;
  } else {
    if(currentPlayerTurn == "X"){
	currentPlayerTurn = "Y"
	} else if (currentPlayerTurn == "Y"){
	currentPlayerTurn = "Z"
	} else if(currentPlayerTurn == "Z"){
	currentPlayerTurn = "X"
	}
    TextyToo.textContent = `Player ${currentPlayerTurn}'s turn`;
  }
  drawBoard();
}

function checkWinner(player) {
  const winCombos = [
    [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
	[0, 5, 10, 15], [3, 6, 9, 12],
	[0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15]
  ];
  return winCombos.some(combo =>
    combo.every(index => TicTacToeBoard[index] === player) 
  );
}

function resetGame() {
  TicTacToeBoard = Array(16).fill("");
  currentPlayerTurn = "X";
  gameState = false;
  TextyToo.textContent = `Player ${currentPlayerTurn}'s turn`;
  drawBoard();
}

function exitTicTacToe() {
  document.location = "../MainPages/Games%20&%20FunStuff.html";
}

drawBoard();






