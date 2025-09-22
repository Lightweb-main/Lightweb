let timerInterval;
const timer = document.getElementById('DigitalTimer');
let seconds = parseInt(localStorage.getItem("LightwebTimer-Seconds")) || 0;
let minutes = parseInt(localStorage.getItem("LightwebTimer-Minutes")) || 0;
let hours = parseInt(localStorage.getItem("LightwebTimer-Hours")) || 0;
let timerToggle = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timer.textContent = `${h}:${m}:${s}`;
}

function countdown() {
  if (!timerToggle) return;

  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(timerInterval);
    timerToggle = false;
    return;
  }

  if (seconds > 0) {
    seconds--;
	  saveTime();
  } else {
    if (minutes > 0) {
      minutes--;
      seconds = 59;
	  saveTime();
    } else if (hours > 0) {
      hours--;
      minutes = 59;
      seconds = 59;
	  saveTime();
    }
  }
	
  updateDisplay();
}

function start() {
  if (!timerToggle) {
    timerToggle = true;
    timerInterval = setInterval(countdown, 1000);
  }
}

function stop() {
  timerToggle = false;
  clearInterval(timerInterval);
}

function saveTime(){
localStorage.setItem("LightwebTimer-Seconds", seconds);
  localStorage.setItem("LightwebTimer-Minutes", minutes);
  localStorage.setItem("LightwebTimer-Hours", hours);	
}
function onesecondAdd() {
  seconds += 1;
  normalizeTime();
  updateDisplay();
  saveTime();
}

function fivesecondAdd() {
  seconds += 5;
  normalizeTime();
  updateDisplay();
  saveTime();
}

function tensecondAdd() {
  seconds += 10;
  normalizeTime();
  updateDisplay();
  saveTime();
}
function thirtysecondAdd() {
  seconds += 30;
  normalizeTime();
  updateDisplay();
  saveTime();
}
function oneMinuteAdd() {
  minutes += 1;
  normalizeTime();
  updateDisplay();
  saveTime();
}
function twoMinuteAdd() {
  minutes += 2;
  normalizeTime();
  updateDisplay();
  saveTime();
}
function fiveMinuteAdd() {
  minutes += 5;
  normalizeTime();
  updateDisplay();
  saveTime();
}
function tenMinuteAdd() {
  minutes += 10;
  normalizeTime();
  updateDisplay();
  saveTime();
}
function thirtyMinuteAdd() {
  minutes += 30;
  normalizeTime();
  updateDisplay();
  saveTime();
}
function oneHourAdd() {
  hours += 1;
  normalizeTime();
  updateDisplay();
  saveTime();
}
function twoHourAdd() {
  hours += 2;
  normalizeTime();
  updateDisplay();
  saveTime();
}
function sixHourAdd() {
  hours += 6;
  normalizeTime();
  updateDisplay();
  saveTime();
}
function twelveHourAdd() {
  hours += 12;
  normalizeTime();
  updateDisplay();
  saveTime();
}
function twentyfourHourAdd() {
  hours += 24;
  normalizeTime();
  updateDisplay();
  saveTime();
}

function resetTimer(){
seconds = 0;
minutes = 0;
hours = 0;
normalizeTime();
saveTime();
  updateDisplay();
}
function normalizeTime() {
  if (seconds > 59) {
    minutes += Math.floor(seconds / 60);
    seconds %= 60;
  }
  if (minutes > 59) {
    hours += Math.floor(minutes / 60);
    minutes %= 60;
  }

}
updateDisplay();