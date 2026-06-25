const greenColor = document.getElementById("greenColor"); 
const yellowColor = document.getElementById("yellowColor");
const redColor = document.getElementById("redColor");
const blueColor = document.getElementById("blueColor");
const colorButtons = document.querySelectorAll(".colorButton");
const HighScoreDisplay = document.getElementById("HighScoreDisplay");
const CurrentScoreDisplay = document.getElementById("CurrentScoreDisplay");

let colorString = [];
let colorAmount = 1;
let highscore = parseInt(localStorage.getItem("highscoreColorMemory")) || 0;
let currentScore = 0;
let gameOver = false;
let acceptInput = false;

setInterval(update, 10);

function start(){
	if(gameOver == false){
		for(let i = 0; i < colorAmount; i++){
			switch(Math.floor(Math.random() * 4) + 1){
				case 1:
					colorString.push(1);
				break;
				case 2:
					colorString.push(2);
				break;
				case 3:
					colorString.push(3);
				break;
				case 4:
					colorString.push(4);
				break;
			}
		}
		for(let i = 0; i < colorString.length; i++){
			let delay = i * 1000;
			setTimeout( function(){
				if(colorString[i] == 1){
					greenColor.style.backgroundColor = "green";
				} else if(colorString[i] == 2){
					yellowColor.style.backgroundColor = "yellow";
				} else if(colorString[i] == 3){
					redColor.style.backgroundColor = "red";
				} else if(colorString[i] == 4){
					blueColor.style.backgroundColor = "blue";
				}
				setTimeout( function(){
				greenColor.style.backgroundColor = "#333";
				redColor.style.backgroundColor = "#333";
				blueColor.style.backgroundColor = "#333";
				yellowColor.style.backgroundColor = "#333";
				}, 750);
			}, delay + 250);
		}
		setTimeout( function(){
		acceptInput = true;
		console.log("e");
		}, colorAmount * 1000 + 250);
	}
}


colorButtons.forEach(button => {
	button.addEventListener("click", e => {
	if(acceptInput == true){
		if(e.target.id == "greenColor"){
			if(colorString[0] == 1){
				console.log("You smart");
				colorString.shift();
				greenColor.style.backgroundColor = "green";
				acceptInput = false;
				setTimeout( function(){
					greenColor.style.backgroundColor = "#333";
					acceptInput = true;
				}, 750);
				if(colorString.length == 0){
					correctString();
				}
			} else {
				gameOverOver();
				return;
			}
		} else if(e.target.id == "yellowColor"){
			if(colorString[0] == 2){
				console.log("You smart");
				yellowColor.style.backgroundColor = "yellow";
				acceptInput = false;
				colorString.shift();
				setTimeout( function(){
					yellowColor.style.backgroundColor = "#333";
					acceptInput = true;
				}, 750);
				if(colorString.length == 0){
					correctString();
				}
			} else {
				gameOverOver();
				return;
			}
		} else if(e.target.id == "redColor"){
			if(colorString[0] == 3){
				console.log("You smart");
				redColor.style.backgroundColor = "red";
				acceptInput = false;
				colorString.shift();
				setTimeout( function(){
					redColor.style.backgroundColor = "#333";
					acceptInput = true;
				}, 750);
				if(colorString.length == 0){
					correctString();
				}
			} else {
				gameOverOver();
				return;
			}
		} else if(e.target.id == "blueColor"){
			if(colorString[0] == 4){
				console.log("You smart");
				blueColor.style.backgroundColor = "blue";
				acceptInput = false;
				colorString.shift();
				setTimeout( function(){
					blueColor.style.backgroundColor = "#333";
					acceptInput = true;
				}, 750);
				if(colorString.length == 0){
					correctString();
				}
			} else {
				gameOverOver();
				return;
			}
		}
	}
	});
});

function gameOverOver() {
	console.log("hello world");
	gameOver = true;
	currentScore = 0;
	setTimeout( function(){
		greenColor.style.backgroundColor = "#ff0000";
		redColor.style.backgroundColor = "#ff0000";
		blueColor.style.backgroundColor = "#ff0000";
		yellowColor.style.backgroundColor = "#ff0000";
		acceptInput = false;
	}, 250);
}

function correctString(){
	acceptInput = false;
	setTimeout( function(){
		greenColor.style.backgroundColor = "#333";
		redColor.style.backgroundColor = "#333";
		blueColor.style.backgroundColor = "#333";
		yellowColor.style.backgroundColor = "#333";
		acceptInput = false;
	}, 250);
	setTimeout( function(){
		greenColor.style.backgroundColor = "green";
		redColor.style.backgroundColor = "green";
		blueColor.style.backgroundColor = "green";
		yellowColor.style.backgroundColor = "green";
		acceptInput = false;
	}, 1000);
	setTimeout( function(){
		greenColor.style.backgroundColor = "#333";
		redColor.style.backgroundColor = "#333";
		blueColor.style.backgroundColor = "#333";
		yellowColor.style.backgroundColor = "#333";
		acceptInput = false;
	}, 2000);
	setTimeout( function(){
	start();
	colorAmount++;
	currentScore++;
	}, 4000);
}

function update(){
	if(currentScore > highscore){
		highscore = currentScore;
		localStorage.setItem("highscoreColorMemory", highscore);
	}
	
	HighScoreDisplay.textContent = `High Score: ${highscore}`;
	CurrentScoreDisplay.textContent = `Current Score: ${currentScore}`;
}

function resetGame(){
	currentScore = 0;
	gameOver = false;
	acceptInput = false;
	colorString = [];
	colorAmount = 1;
	highscore = parseInt(localStorage.getItem("highscoreColorMemory")) || 0;
	currentScore = 0;
	gameOver = false;
	acceptInput = false;
	greenColor.style.backgroundColor = "#333";
	redColor.style.backgroundColor = "#333";
	blueColor.style.backgroundColor = "#333";
	yellowColor.style.backgroundColor = "#333";
	start();
	
}

function resetHighscore(){
	highscore = 0;
}

function exitColorMemory(){
	window.location.href = "../MainPages/Games%20&%20FunStuff.html";
}


highscore = parseInt(localStorage.getItem("highscoreColorMemory")) || 0;
start();