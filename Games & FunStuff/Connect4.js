document.addEventListener("DOMContentLoaded", function () {
  const board = document.querySelector(".Connect4Board");
  const boardTPM = document.querySelector(".Connect4BoardThreePlayer");
  const status = document.querySelector(".status");
  const statusTPM = document.querySelector(".statusTPM");
  const resetBtn = document.getElementById("reset-btn");
  const resetBtnTPM = document.getElementById("reset-btn-TPM");
  const winner = document.querySelector(".winner");
  const winnerTPM = document.querySelector(".winnerTPM");
  const ThreePlayerMode = document.querySelector(".ThreePlayerMode");
  let currentPlayer = "red";
  let currentPlayerTPM = "red";
  let isGameOver = false;
  let isGameOverTPM = false;
  let rows = 6;
  let cols = 7;
  let rows2 = 9;
  let cols2 = 11;
  setInterval(update, 10);
  function update(){
	  boardTPM.style.display = "none";
	  board.style.display = "none";
	  statusTPM.style.display = "none";
	  status.style.display = "none";
	  winnerTPM.style.display = "none";
	  winner.style.display = "none";
	  resetBtn.style.display = "none";
	  resetBtnTPM.style.display = "none";
	  if(ThreePlayerMode.checked){
		  boardTPM.style.display = "grid";
		  winnerTPM.style.display = "block";
		  statusTPM.style.display = "block";
		  resetBtnTPM.style.display = "block";
	  } else {
		  board.style.display = "grid";
		  winner.style.display = "block";
		  status.style.display = "block";
		  resetBtn.style.display = "block";
	  }
  }
  let gameBoard = Array.from({ length: rows }, () => Array(cols).fill(null));
  let gameBoardTPM = Array.from({ length: rows2 }, () => Array(cols2).fill(null));
  
  resetBtn.addEventListener("click", function () {
    isGameOver = false;
    gameBoard = Array.from({ length: rows }, () => Array(cols).fill(null));
    board.querySelectorAll(".cell").forEach((cell) => {
      cell.classList.remove("red", "yellow", "blue");
    });
	
    currentPlayer = "red";
	winner.textContent = "";
	status.style.display = "block";
    status.classList.add(`${currentPlayer}-selected`);
  });
  
  resetBtnTPM.addEventListener("click", function () {
    isGameOverTPM = false;
    gameBoardTPM = Array.from({ length: rows2 }, () => Array(cols2).fill(null));
    boardTPM.querySelectorAll(".cell").forEach((cell) => {
      cell.classList.remove("red", "yellow", "blue");
    });
	
    currentPlayerTPM = "red";
	winnerTPM.textContent = "";
	statusTPM.style.display = "block";
    statusTPM.classList.add(`${currentPlayerTPM}-selected`);
  });
  

  function createGameBoard() {
    status.classList.add(`${currentPlayer}-selected`);
    statusTPM.classList.add(`${currentPlayer}-selected`);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const disc = document.createElement("div");
        disc.classList.add("cell");
        disc.setAttribute("data-col", c);
        disc.setAttribute("data-row", r);
        board.appendChild(disc);
      }
    }
	
	for (let r = 0; r < rows2; r++) {
      for (let c = 0; c < cols2; c++) {
        const disc = document.createElement("div");
        disc.classList.add("cell");
        disc.setAttribute("data-col", c);
        disc.setAttribute("data-row", r);
        boardTPM.appendChild(disc);
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
  
  
  boardTPM.addEventListener("click", function (e) {
	if (!e.target.classList.contains("cell") || isGameOverTPM) return;
    let col = parseInt(e.target.getAttribute("data-col")); 
	
	
		
    if (e.target.classList.contains("cell") && !isGameOverTPM) {
      for (let row = rows2 - 1; row >= 0; row--) {
        let clickedCell = boardTPM.querySelector(
          `[data-row="${row}"][data-col="${col}"]`
        );
        if (
          !clickedCell.classList.contains("red") &&
          !clickedCell.classList.contains("yellow") && 
          !clickedCell.classList.contains("blue")
        ) {
          clickedCell.classList.add(currentPlayerTPM);
          gameBoardTPM[row][col] = currentPlayerTPM;
  
          
          if (checkForWinTPM()) {
            statusTPM.style.display = "block";
            statusTPM.style.display = "none";

            winnerTPM.innerText = `${currentPlayerTPM.toUpperCase()} wins!`;
            isGameOverTPM = true;
            return; 
          }
  
			let previousPlayerTPM = currentPlayerTPM;
			
			if(currentPlayerTPM === "red"){
				currentPlayerTPM = "yellow";
			} else if(currentPlayerTPM === "yellow"){
				currentPlayerTPM = "blue";
			} else if(currentPlayerTPM === "blue"){
				currentPlayerTPM = "red";
			}
		
			statusTPM.classList.remove(`${previousPlayerTPM}-selected`);
			statusTPM.classList.add(`${currentPlayerTPM}-selected`);

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
  
  function checkForWinTPM() {
   
    for (let r = 0; r < rows2; r++) {
      for (let c = 0; c <= cols2 - 4; c++) {
        const player = gameBoardTPM[r][c];
        if (player) {
          if (
            player === gameBoardTPM[r][c + 1] &&
            player === gameBoardTPM[r][c + 2] &&
            player === gameBoardTPM[r][c + 3]
          ) {
            return true;
          }
        }
      }
    }
  
   
    for (let c = 0; c < cols2; c++) {
      for (let r = 0; r <= rows2 - 4; r++) {
        const player = gameBoardTPM[r][c];
        if (player) {
          if (
            player === gameBoardTPM[r + 1][c] &&
            player === gameBoardTPM[r + 2][c] &&
            player === gameBoardTPM[r + 3][c]
          ) {
            return true;
          }
        }
      }
    }
 
    for (let r = 0; r <= rows2 - 4; r++) {
      for (let c = 0; c <= cols2 - 4; c++) {
        const player = gameBoardTPM[r][c];
        if (player) {
          
          if (
            player === gameBoardTPM[r + 1][c + 1] &&
            player === gameBoardTPM[r + 2][c + 2] &&
            player === gameBoardTPM[r + 3][c + 3]
          ) {
           
            return true;
          }
        }
      }
    }
  
    
    for (let r = 3; r < rows2; r++) {
      for (let c = 0; c <= cols2 - 4; c++) {
        const player = gameBoardTPM[r][c];
        if (player) {
        
          if (
            player === gameBoardTPM[r - 1][c + 1] &&
            player === gameBoardTPM[r - 2][c + 2] &&
            player === gameBoardTPM[r - 3][c + 3]
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
	
}

setInterval(update, 10);