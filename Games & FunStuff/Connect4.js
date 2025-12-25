document.addEventListener("DOMContentLoaded", function () {
  const board = document.querySelector(".Connect4Board");
  const status = document.querySelector(".status");
  const resetBtn = document.getElementById("reset-btn");
  const columnsDisplay = document.getElementById("columnsDisplay");
  const columnsInput = document.getElementById("columnsInput");
  const rowsDisplay = document.getElementById("rowsDisplay");
  const rowsInput = document.getElementById("rowsInput");
  const winner = document.querySelector(".winner");
  let currentPlayer = "red";
  let isGameOver = false;
  let rows = 6;
  let cols = 7;

  let gameBoard = Array.from({ length: rows }, () => Array(cols).fill(null));
  
  resetBtn.addEventListener("click", function () {
    isGameOver = false;
    gameBoard = Array.from({ length: rows }, () => Array(cols).fill(null));
    board.querySelectorAll(".cell").forEach((cell) => {
      cell.classList.remove("red", "yellow");
    });
    currentPlayer = "red";
	winner.textContent = "";
	status.style.display = "block";
    status.classList.add(`${currentPlayer}-selected`);
  });

  function createGameBoard() {
    status.classList.add(`${currentPlayer}-selected`);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const disc = document.createElement("div");
        disc.classList.add("cell");
        disc.setAttribute("data-col", c);
        disc.setAttribute("data-row", r);
        board.appendChild(disc);
      
      }
    }
  }

  createGameBoard();

  board.addEventListener("click", function (e) {
	if (!e.target.classList.contains("cell") || isGameOver) return;
    let col = parseInt(e.target.getAttribute("data-col")); 
	
	
		
    if (e.target.classList.contains("cell") && !isGameOver) {
      for (let row = rows - 1; row >= 0; row--) {
        let clickedCell = board.querySelector(
          `[data-row="${row}"][data-col="${col}"]`
        );
        if (
          !clickedCell.classList.contains("red") &&
          !clickedCell.classList.contains("yellow")
        ) {
          clickedCell.classList.add(currentPlayer);
          gameBoard[row][col] = currentPlayer;
  
          
          if (checkForWin()) {
            status.style.display = "block";
            status.style.display = "none";

            winner.innerText = `${currentPlayer.toUpperCase()} wins!`;
            isGameOver = true;
            return; 
          }
  
			let previousPlayer = currentPlayer;
			currentPlayer = currentPlayer === "red" ? "yellow" : "red";

			status.classList.remove(`${previousPlayer}-selected`);
			status.classList.add(`${currentPlayer}-selected`);

          break;
        }
      }
    }
  });
  

  function checkForWin() {
   
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c <= cols - 4; c++) {
        const player = gameBoard[r][c];
        if (player) {
          if (
            player === gameBoard[r][c + 1] &&
            player === gameBoard[r][c + 2] &&
            player === gameBoard[r][c + 3]
          ) {
            return true;
          }
        }
      }
    }
  
   
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r <= rows - 4; r++) {
        const player = gameBoard[r][c];
        if (player) {
          if (
            player === gameBoard[r + 1][c] &&
            player === gameBoard[r + 2][c] &&
            player === gameBoard[r + 3][c]
          ) {
            return true;
          }
        }
      }
    }
 
    for (let r = 0; r <= rows - 4; r++) {
      for (let c = 0; c <= cols - 4; c++) {
        const player = gameBoard[r][c];
        if (player) {
          
          if (
            player === gameBoard[r + 1][c + 1] &&
            player === gameBoard[r + 2][c + 2] &&
            player === gameBoard[r + 3][c + 3]
          ) {
           
            return true;
          }
        }
      }
    }
  
    
    for (let r = 3; r < rows; r++) {
      for (let c = 0; c <= cols - 4; c++) {
        const player = gameBoard[r][c];
        if (player) {
        
          if (
            player === gameBoard[r - 1][c + 1] &&
            player === gameBoard[r - 2][c + 2] &&
            player === gameBoard[r - 3][c + 3]
          ) {
          
            return true;
          }
        }
      }
    }

  
    return false;
  }
  

});

function exitConnect4(){
document.location = "../MainPages/Games%20&%20FunStuff.html"
}

function update(){
	columnsDisplay.innerHTML = `Columns: ${columnsInput.value}`;
	rowsDisplay.innerHTML = `Rows: ${rowsInput.value}`;
}

setInterval(update, 10);