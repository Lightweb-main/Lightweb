document.addEventListener("DOMContentLoaded", function(){
	const board = document.querySelector(".GomokuBoard");
	const status = document.querySelector(".status");
	const winner = document.querySelector(".winner");
	const resetBtn = document.getElementById("reset-btn");
	let row = 15;
	let col = 15;
	let isGameOver = false;
	let currentPlayer;
	let gameBoard = Array.from({ length: row }, () => Array(col).fill(null));
	if(Math.floor(Math.random() * 2) >= 1){
		currentPlayer = "black";
	} else {
		currentPlayer = "white";
	}
	resetBtn.addEventListener('click', function(){
		isGameOver = false;
		gameBoard = Array.from({ length: row }, () => Array(col).fill(null));
		board.querySelectorAll(".boardSlot").forEach( function(cell){
			cell.classList.remove("black", "white");
		});
	
	});
	status.classList.add(`${currentPlayer}-selected`);
	function createGameBoard(){
		for(let i = 0; i < row; i++){
			for(let j = 0; j < col; j++){
				let boardSlot = document.createElement('div');
				boardSlot.classList.add("boardSlot");
				boardSlot.setAttribute("data-col", j);
				boardSlot.setAttribute("data-row", i);
				board.appendChild(boardSlot);
			}
		}
	}
	
	board.addEventListener('click', function (e) {
		if(!e.target.classList.contains("boardSlot") || isGameOver){
			return;
		}
		let cols = parseInt(e.target.getAttribute("data-col")); 
		let rows = parseInt(e.target.getAttribute("data-row")); 
		
		if(e.target.classList.contains("boardSlot") && !isGameOver){
			let clickedCell = board.querySelector(`[data-col="${cols}"][data-row="${rows}"]`);
				
			if(
				!clickedCell.classList.contains("black") &&
				!clickedCell.classList.contains("white")
			){
				clickedCell.classList.add(currentPlayer);
				gameBoard[rows][cols] = currentPlayer;
			}
			
			if(checkForWin()){
			status.style.display = "none"; 
			isGameOver = true;
			winner.innerText = `${currentPlayer.toUpperCase()} is the Winner!`;
			return;
			}
		
			let previousPlayer = currentPlayer;
			currentPlayer = currentPlayer === "black" ? "white" : "black";
			status.classList.remove(`${previousPlayer}-selected`);
			status.classList.add(`${currentPlayer}-selected`);
		}   
	});
	
	function checkForWin(){
		for(let r = 0; r < row; r++){
			for(let c = 0; c < col - 5; c++){
				const player = gameBoard[r][c];
				if(player){
					if(
						player === gameBoard[r][c + 1] &&
						player === gameBoard[r][c + 2] &&
						player === gameBoard[r][c + 3] &&
						player === gameBoard[r][c + 4]
					){
						return true;
					}
				}
			}
		}
		
		for(let r = 0; r < row - 5; r++){
			for(let c = 0; c < col; c++){
				const player = gameBoard[r][c];
				if(player){
					if(
						player === gameBoard[r + 1][c] &&
						player === gameBoard[r + 2][c] &&
						player === gameBoard[r + 3][c] &&
						player === gameBoard[r + 4][c]
					){
						return true;
					}
				}
			}
		}
		
		for(let r = 0; r < row - 5; r++){
			for(let c = 0; c < col - 5; c++){
				const player = gameBoard[r][c];
				if(player){
					if(
						player === gameBoard[r + 1][c + 1] &&
						player === gameBoard[r + 2][c + 2] &&
						player === gameBoard[r + 3][c + 3] &&
						player === gameBoard[r + 4][c + 4]
					){
						return true;
					}
				}
			}
		}
		
		for(let r = 4; r < row; r++){
			for(let c = 0; c < col - 5; c++){
				const player = gameBoard[r][c];
				if(player){
					if(
						player === gameBoard[r - 1][c + 1] &&
						player === gameBoard[r - 2][c + 2] &&
						player === gameBoard[r - 3][c + 3] &&
						player === gameBoard[r - 4][c + 4]
					){
						return true;
					}
				}
			}
		}
	}
	
	
	function resetGame(){
		gameBoard.querySelectorAll(".cell").forEach((cell) => {
			cell.classList.remove("red", "yellow", "blue");
		});
	}
	
	createGameBoard();
});
