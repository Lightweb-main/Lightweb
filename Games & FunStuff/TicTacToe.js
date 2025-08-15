let PlayerXScoreA = 0;
let PlayerOScoreA = 0;
const TicTacTacGaGoo = document.getElementById('TicTacToeGame');
const TextyToo = document.getElementById('GameState');
const PlayerXScoreBoard = document.getElementById('PlayerXScore');
const PlayerOScoreBoard = document.getElementById('PlayerOScore');
let TicTacToeBoard = Array(9).fill("");
let currentPlayerTurn = "X";
let gameState = false;
PlayerXScoreBoard.textContent = "Player X Score: " + playerXScore;
PlayerOScoreBoard.textContent = "Player O Score: " + playerOScore;
function drawBoard(){ 
TicTacTacGaGoo.innerHTML = ""; 
TicTacToeBoard.forEach((cell, index) => { 
const div = document.createElement("div"); 
div.className = "cell"; div.textContent = cell; 
div.addEventListener("click", () => makeMove(index)); 
TicTacTacGaGoo.appendChild(div); }); }
function makeMove(index) {
  if (TicTacToeBoard[index] !== "" || gameState) return;
  TicTacToeBoard[index] = currentPlayerTurn;
  if (checkWinner(currentPlayerTurn)) {
    TextyToo.textContent = `Player ${currentPlayerTurn} wins!`;
    gameState = true;
    if (currentPlayerTurn === "X") {
  PlayerXScoreA += 1;
  PlayerXScoreBoard.textContent = "Player X Score: " + playerXScore;
} else {
  PlayerOScoreA += 1;
  PlayerOScoreBoard.textContent = "Player O Score: " + playerOScore;
    
  } else if (TicTacToeBoard.every(cell => cell !== "")) {
    TextyToo.textContent = "It's a draw!";
    gameState = true;
  } else {
    currentPlayerTurn = currentPlayerTurn === "X" ? "O" : "X";
    TextyToo.textContent = `Player ${currentPlayerTurn}'s turn`;
  }
  drawBoard();
}

function checkWinner(player) {
  const winCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return winCombos.some(combo =>
    combo.every(index => TicTacToeBoard[index] === player) 
  );
}

function resetGame() {
  TicTacToeBoard = Array(9).fill("");
  currentPlayerTurn = "X";
  gameState = false;
  TextyToo.textContent = `Player ${currentPlayerTurn}'s turn`;
  drawBoard();
}

function exitTicTacToe() {
  document.location = "../MainPages/Games%20&%20FunStuff.html"
}

function resetScore(){
PlayerXScore = 0;
PlayerOScore = 0;
}
drawBoard();












