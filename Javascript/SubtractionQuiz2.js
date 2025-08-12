	const TOTAL = 7;
    let number1, number2;          
    let current = 0;  
    let score = 0;
	let Percent = (score / TOTAL) * 100;
	let LetterGradeV2 = "";
	let runTime = 0;
	let AverageTime = (runTime / TOTAL)
	

    const qVisual = document.getElementById('Question');
    const inputVisual = document.getElementById('Input');
    const submitButton = document.getElementById('submitButton');
    const textVisual = document.getElementById('msg');
    const progressQuiz = document.getElementById('progress');
    const AdditionQuiz1 = document.getElementById('Quiz');
    const CorrectIncorrectVisual = document.getElementById('summary');
    const CorrectAnswers = document.getElementById('CorrectAnswers');
	const CorrectIncorrectAnswersRatio = document.getElementById('CorrectIncorrectAnswerPercentage');
    const retakeButton = document.getElementById('retakeButton');
	const exitButton = document.getElementById('ExitButton');
	const LetterGradeVisual = document.getElementById('LetterGrade');
	const TestTime = document.getElementById('Time');
	const TimePerQuestion = document.getElementById('AverageTime');
 
	setInterval(timerCount, 10)
    function newQuestion() {
      number1 = Math.floor(Math.random() * 26);
      number2 = Math.floor(Math.random() * 26);
	  if(number2 > number1){
	  numberReroll();
	  }
      qVisual.textContent = `What is ${number1} - ${number2}?`;
      inputVisual.value = '';
      inputVisual.focus();
      textVisual.textContent = '';
      progressQuiz.textContent = `Question ${current + 1} of ${TOTAL}`;
    }

    function endQuiz() {
		Percent = ((score / TOTAL) * 100).toFixed(0);
		AverageTime = (runTime / TOTAL).toFixed(2);
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
      AdditionQuiz1.classList.add('hidden');
      CorrectIncorrectVisual.classList.remove('hidden');
      CorrectAnswers.textContent = `You scored ${score} / ${TOTAL}`;
	  CorrectIncorrectAnswersRatio.textContent = `Percentage: ${Percent}%`;
	  LetterGrade.textContent = `Grade: ${LetterGradeV2}`;
	  TestTime.textContent = `Time: ${runTimeDisplay} sec`;
	  TimePerQuestion.textContent = `Time Per Question: ${AverageTime} sec per question (Average)`;
	}
	inputVisual.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
    submitButton.click(); 
		}
		});
    submitButton.addEventListener('click', () => {
      const val = Number(inputVisual.value);
      if (inputVisual.value === '') return;

      if (val ===  (number1 - number2)) {
        score++;
      } else {
		  
      }
	
      current++;
      if (current < TOTAL) {
        setTimeout(newQuestion, 0);
      } else {
        setTimeout(endQuiz, 0);
      }
	
    });
	 exitButton.addEventListener('click', () => {
      document.location = '../../MainPages/Quizzes.html'
    });
    retakeButton.addEventListener('click', () => {
      current = 0;
      score = 0; runTime = 0; current = 0; percent = 0;
      AdditionQuiz1.classList.remove('hidden');
      CorrectIncorrectVisual.classList.add('hidden');
      newQuestion();
    });
	
	function timerCount(){
	runTime += 0.01
	}

	function numberReroll(){
	number1 = Math.floor(Math.random() * 26);
      number2 = Math.floor(Math.random() * 26);
	  if(number2 > number1){
	  numberReroll();
	  }
	}
    // start
    newQuestion();
