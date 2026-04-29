 const dot = document.getElementById('dot');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highscore');
const resetHighScore = document.getElementById('resetHighScore');
const resetTime = document.getElementById('resetTime');
const timeDisplay1 = document.getElementById('time');
const timeDisplay2 = document.getElementById('totalTime');
const timeDisplay3 = document.getElementById('reactionTime');
const exitButton = document.getElementById('exitButton');
let score = 0;
let time = 0;
let highscore = localStorage.getItem('highscore') || 0;
highScoreDisplay.textContent = `Highscore: ${highscore}`;
let totalTime = localStorage.getItem('totalTime') || 0;

function moveDot(){
let x = Math.random() * (window.innerWidth - 50);
let y = Math.random() * (window.innerHeight - 50);
dot.style.left = `${x}px`;
dot.style.top = `${y}px`;
}

dot.addEventListener('click', () => {
score++
scoreDisplay.textContent = `Score: ${score}`;
timeDisplay3.textContent = time;
moveDot();
time = 0;
});

setInterval(tick, 100);

function tick() {
  time++;
  totalTime++;
  localStorage.setItem('totalTime', totalTime);
  timeDisplay1.textContent = time;
  timeDisplay2.textContent = totalTime;

  if (time > 30) {
    gameReset();
  }
}

document.body.addEventListener('click', (event) => {
  if (event.target !== dot && event.target !== exitButton && event.target !== resetHighScore && event.target !== resetTime) {
	gameReset();
  }
});

function gameReset(){
	if(score > highscore) {
		highscore = score;
		localStorage.setItem('highscore', highscore);
		highScoreDisplay.textContent = `Highscore: ${highscore}`;
	}
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    time = 0;
    moveDot(); 
}

function exitClickTheDot(){
gameReset();
window.location.href = "../MainPages/Games%20&%20FunStuff.html";
}

function resetHighScoreA() {
  highscore = 0;
  localStorage.setItem('highscore', highscore);
  highScoreDisplay.textContent = `Highscore: ${highscore}`;
}

function resetTimeA() {
  totalTime = 0;
  localStorage.setItem('totalTime', totalTime);
  timeDisplay2.textContent = totalTime;

}

moveDot();
