let blockSize = 40;
let rows = 17;
let cols = 17;
let highscore = parseInt(localStorage.getItem('snakeHighscore')) || 0;
let currentScore = 0;
let board;
let boardContext;
let interval;



const status = document.getElementById("status");
const highscoreDisplay = document.getElementById("highscore");
const currentScoreDisplay = document.getElementById("currentScore");

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let snakeSpeedX = 0;
let snakeSpeedY = 1;

let snakeBody = [];
snakeBody.length = 3;

let foodX;
let foodY;

let gameOver = false;

window.onload = function () {
	board = document.getElementById("snakeBoard");
	board.height = rows * blockSize;
	board.width = cols * blockSize;
	boardContext = board.getContext("2d");
	
	placeFood();
	document.addEventListener("keyup", changeDirection);
	interval = setInterval(update, 100);
}

function update(){
	if(gameOver){
		gameEnd();
		return;
	}
	
	highscoreDisplay.textContent = `Highscore: ${highscore}`;
	currentScoreDisplay.textContent = `Current Score: ${currentScore}`;
	
	boardContext.fillStyle = "#8cef77";
	boardContext.fillRect(0, 0, board.width, board.height);
	
	boardContext.fillStyle = "yellow";
	boardContext.fillRect(foodX, foodY, blockSize, blockSize);
	
	if(snakeX == foodX && snakeY == foodY) {
		snakeBody.push([foodX, foodY]);
		currentScore++;
		placeFood();
	}
	
	if(currentScore > highscore){
		highscore = currentScore;
		localStorage.setItem('snakeHighscore', highscore);
	}
	for(let i = snakeBody.length - 1; i > 0; i--){
		snakeBody[i] = snakeBody[i - 1];
	}
	
	if(snakeBody.length){
		snakeBody[0] = [snakeX, snakeY];
	}
		
	boardContext.fillStyle = "#ff4242";
	snakeX += snakeSpeedX * blockSize;
	snakeY += snakeSpeedY * blockSize;
	boardContext.fillRect(snakeX, snakeY, blockSize, blockSize);
		
		
	for(let i = 0; i < snakeBody.length; i++) {
		if(i % 2 == 0){
			boardContext.fillStyle = "#18b716";
		} else {
			boardContext.fillStyle = "#00980d";
		}
		boardContext.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
	}
	
	if(snakeX < 0
		|| snakeX > cols * blockSize
		|| snakeY < 0
		|| snakeY > rows * blockSize
	   ) {
		gameEnd();
	}
	
	for(let i = 0; i < snakeBody.length; i++){
		if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
			gameEnd();
		}
	}
}

function changeDirection(e) {
	if((e.code == "ArrowUp" || e.code == "KeyW") && snakeSpeedY != 1){
		snakeSpeedX = 0;
		snakeSpeedY = -1;
	} else if((e.code == "ArrowDown" || e.code == "KeyS") && snakeSpeedY != -1){
		snakeSpeedX = 0;
		snakeSpeedY = 1;
	} else if((e.code == "ArrowLeft" || e.code == "KeyA") && snakeSpeedX != 1){
		snakeSpeedX = -1;
		snakeSpeedY = 0;
	} else if((e.code == "ArrowRight" || e.code == "KeyD") && snakeSpeedX != -1){
		snakeSpeedX = 1;
		snakeSpeedY = 0;
	}
}

function placeFood(){
	
	foodX = Math.floor(Math.random() * cols) * blockSize;
	
	foodY = Math.floor(Math.random() * rows) * blockSize;
}

function gameEnd(){
	gameOver = true;
	
	boardContext.fillStyle = "red";
	boardContext.fillRect(0, 0, board.width, board.height);
	
	boardContext.fillStyle = "purple";
	boardContext.fillRect(foodX, foodY, blockSize, blockSize);
	
}

function gameReset(){
	gameOver = false;
	boardContext.clearRect(0, 0, board.width, board.height);
	clearInterval(interval);
	board.height = rows * blockSize;
	board.width = cols * blockSize;
	boardContext = board.getContext("2d");
	snakeBody.length = 0;
	setTimeout( () => {
		interval = setInterval(update, 100);
	}, 450);
	snakeX = blockSize * 5;
	snakeY = blockSize * 5;
	snakeBody.length = 3;
	snakeSpeedX = 0;
	snakeSpeedY = 1;
	placeFood();
}

function exitSnake(){
	document.location = "../MainPages/Games%20&%20FunStuff.html";
}

function highscoreReset(){
	highscore = 0;
	localStorage.setItem('snakeHighscore', highscore);
}

function upInputed(){
	if(snakeSpeedY != 1){
		snakeSpeedX = 0;
		snakeSpeedY = -1;
	}
}

function downInputed(){
	if(snakeSpeedY != -1){
		snakeSpeedX = 0;
		snakeSpeedY = 1;
	}
}

function leftInputed(){
	if(snakeSpeedX != 1){
		snakeSpeedX = -1;
		snakeSpeedY = 0;
	}
}

function rightInputed(){
	if(snakeSpeedX != -1){
		snakeSpeedX = 1;
		snakeSpeedY = 0;
	}
}

