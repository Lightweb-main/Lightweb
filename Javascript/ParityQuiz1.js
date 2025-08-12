// Total questions
const TOTAL = 10;
let current = 0;
let score = 0;
let currentNumber;
let Percent = (score / TOTAL) * 100;
let LetterGradeV2 = "";
let runTime = 0;
let AverageTime = (runTime / TOTAL)
const qEl = document.getElementById("Input");
const textVisual = document.getElementById("textVisual");
const CorrectIncorrectAnswers = document.getElementById("score");
const Input1 = document.getElementById("Input1");
const Input2 = document.getElementById("Input2");
const returnButton = document.getElementById("retakeButton");
const exitButton = document.getElementById("exitButton");
const LetterGradeVisual = document.getElementById('LetterGrade');
const TestTime = document.getElementById('Time');
const TimePerQuestion = document.getElementById('AverageTime');
const CorrectIncorrectAnswersRatio = document.getElementById('CorrectIncorrectAnswerPercentage');
    
setInterval(timerCount, 10)
function newQuestion() {
  currentNumber = Math.floor(Math.random() * 26);
  qEl.textContent = `Is ${currentNumber} even or odd?`;
  textVisual.textContent = "";
  CorrectIncorrectAnswers.textContent = `Question ${current + 1} of ${TOTAL}`;
}

function checkAnswer(answer) {
  const isEven = currentNumber % 2 === 0;
  if ((answer === "even" && isEven) || (answer === "odd" && !isEven)) {
    score++;
  } else {
	  
  }

  current++;
  if (current < TOTAL) {
	  newQuestion();
  } else {
     endQuiz();
  }
}
 
function endQuiz(){
	Percent = ((score / TOTAL) * 100).toFixed(0);
		AverageTime = (runTime / TOTAL).toFixed(2);
	   const runTimeDisplay = runTime.toFixed(2);
	if(Percent <= 50){
		LetterGradeV2 = "F-"
		}
		if(Percent >= 55 ){
		LetterGradeV2 = "F"
		}
		if(Percent >= 56){
		LetterGradeV2 = "F+"
		}
		if(Percent >= 60){
		LetterGradeV2 = "D-"
		}
		if(Percent >="65" ){
		LetterGradeV2 = "D"
		}
		if(Percent >= 66){
		LetterGradeV2 = "D+"
		}
		if(Percent >= 70){
		LetterGradeV2 = "C-"
		}
		if(Percent >="75" ){
		LetterGradeV2 = "C"
		}
		if(Percent >= 76){
		LetterGradeV2 = "C+"
		}
		if(Percent >= 80){
		LetterGradeV2 = "B-"
		}
		if(Percent >="85" ){
		LetterGradeV2 = "B"
		}
		if(Percent >= 86){
		LetterGradeV2 = "B+"
		}
		if(Percent >= 90){
		LetterGradeV2 = "A-"
		}
		if(Percent >= 95){
		LetterGradeV2 = "A"
		}
		if(Percent >= 96){
		LetterGradeV2 = "A+"
		}
	 Quiz.classList.add('hidden');
      CorrectIncorrectVisual.classList.remove('hidden');
      CorrectAnswers.textContent = `You scored ${score} / ${TOTAL}`;
	  CorrectIncorrectAnswersRatio.textContent = `Percentage: ${Percent}%`;
	  LetterGrade.textContent = `Grade: ${LetterGradeV2}`;
	  TestTime.textContent = `Time: ${runTimeDisplay} sec`;
	  TimePerQuestion.textContent = `Time Per Question: ${AverageTime} sec per question (Average)`;
	
      
}

exitButton.addEventListener('click', () => {
      document.location = '../../MainPages/Quizzes.html'
    });
    retakeButton.addEventListener('click', () => {
      current = 0;
	  score = 0;
	  percent = 0;
	  runTime = 0;
	  percent = 0;
      Quiz.classList.remove('hidden');
      CorrectIncorrectVisual.classList.add('hidden');
      newQuestion();
    });
Input1.addEventListener("click", () => checkAnswer("even"));
Input2.addEventListener("click", () => checkAnswer("odd"));

function timerCount(){
	runTime += 0.01
	}
newQuestion();