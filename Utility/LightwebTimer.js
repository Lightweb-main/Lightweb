let timerInterval;
const timer = document.getElementById('DigitalTimer');
let seconds = 0;
let minutes = 0;
let hours = 0;
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
  } else {
    if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else if (hours > 0) {
      hours--;
      minutes = 59;
      seconds = 59;
    }
  }
	
  updateDisplay();
}

function start() {
  if (!timerToggle) {
    timerToggle = true;
    timerInterval = setInterval(countdown, 10);
  }
}

function stop() {
  timerToggle = false;
  clearInterval(timerInterval);
}

function onesecondAdd() {
  seconds += 1;
  normalizeTime();
  updateDisplay();
}

function fivesecondAdd() {
  seconds += 5;
  normalizeTime();
  updateDisplay();
}

function tensecondAdd() {
  seconds += 10;
  normalizeTime();
  updateDisplay();
}
function thirtysecondAdd() {
  seconds += 30;
  normalizeTime();
  updateDisplay();
}
function oneMinuteAdd() {
  minutes += 1;
  normalizeTime();
  updateDisplay();
}
function twoMinuteAdd() {
  minutes += 2;
  normalizeTime();
  updateDisplay();
}
function fiveMinuteAdd() {
  minutes += 5;
  normalizeTime();
  updateDisplay();
}
function tenMinuteAdd() {
  minutes += 10;
  normalizeTime();
  updateDisplay();
}
function thirtyMinuteAdd() {
  minutes += 30;
  normalizeTime();
  updateDisplay();
}
function oneHourAdd() {
  hours += 1;
  normalizeTime();
  updateDisplay();
}
function twoHourAdd() {
  hours += 2;
  normalizeTime();
  updateDisplay();
}
function sixHourAdd() {
  hours += 6;
  normalizeTime();
  updateDisplay();
}
function twelveHourAdd() {
  hours += 12;
  normalizeTime();
  updateDisplay();
}
function twentyfourHourAdd() {
  hours += 24;
  normalizeTime();
  updateDisplay();
}

function resetTimer(){
seconds = 0;
minutes = 0;
hours = 0;
normalizeTime();
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