let questions = [];
let answers = [];
let flashcardsToggle = 0;
let toggle = 1;
let toggleA = 0;


setInterval(update, 10);
function update(){
	flashcardGenerating.style.display = "none";
	flashcardDisplaying.style.display = "none"; 
	if(toggle == 1){
		flashcardGenerating.style.display = "block";
	} else if(toggle == 2){
		flashcardDisplaying.style.display = "block"; 
	}
}

selectMode.querySelectorAll("button")[0].addEventListener("click", () => {
	if(toggle == 1){
		toggle = 0;
	} else {
		toggle = 1;
	}
});

selectMode.querySelectorAll("button")[1].addEventListener("click", () => {
	if(toggle == 2){
		toggle = 0;
	} else {
		toggle = 2;
	}
});

questionsDiv.innerHTML = "";

for(let i = 1; i <= 3; i++){
	
	
	const questionDiv = document.createElement("div");
	questionDiv.id = "questionDiv" + i;
	questionDiv.classList.add("questionDiv");
	
	const questionIndexDisplay = document.createElement("h3");
	questionIndexDisplay.textContent = `Question #${i}:`;
	questionDiv.appendChild(questionIndexDisplay);
	
	
	const questionDisplay = document.createElement("p");
	questionDisplay.textContent = "What is the fourth planet in the solar system?"
	questionDisplay.id = `Question #${i}QuestionDisplay`;
	questionDisplay.classList.add("questions");
	questionDiv.appendChild(questionDisplay);
	
	const answerDisplay = document.createElement("p");
	answerDisplay.textContent = "Mars"
	answerDisplay.id = `Question #${i}AnswerDisplay`;
	answerDisplay.classList.add("answers");
	questionDiv.appendChild(answerDisplay);
	
	const questionChangeInput = document.createElement("button");
	questionChangeInput.textContent  = `Change Question #${i}`;
	
	questionChangeInput.addEventListener("click", () => {
		let newQuestion = prompt("Enter the new question: ", document.getElementById(`Question #${i}QuestionDisplay`).textContent)
		if(newQuestion !== null && newQuestion !== ""){
			document.getElementById(`Question #${i}QuestionDisplay`).textContent = newQuestion;
			setArrays();
		}
	});
	
	const answerChangeInput = document.createElement("button");
	answerChangeInput.textContent  = `Change Answer of Question #${i}`;
	
	answerChangeInput.addEventListener("click", () => {
		let newAnswer = prompt("Enter the new answer: ", document.getElementById(`Question #${i}AnswerDisplay`).textContent);
		if(newAnswer !== null && newAnswer !== ""){
			document.getElementById(`Question #${i}AnswerDisplay`).textContent = newAnswer;
			setArrays();
		}
	});
	questionDiv.appendChild(questionChangeInput);
	questionDiv.appendChild(answerChangeInput);

	setArrays();
	
	questionsDiv.appendChild(questionDiv);
}

downloadCSV.addEventListener("click", downloadAsCSV);
importCSV.addEventListener("click", importCSVFile);



function downloadAsCSV(){
	const allQuestions = Array.from(document.querySelectorAll(".question"));
	const allAnswers = Array.from(document.querySelectorAll(".answer"));
	
	const questionsAnswersArray = [["Questions", "Answers"]];
	
	for(let i = 0; i < allQuestions.length; i++){
		const value1 = allQuestions[i].textContent.trim();
		const value2 = allAnswers[i].textContent.trim();
		if(/[",\n]/.test(value1)){
			value1 = '"' + value1.replace(/"/g, '""') + '"';
		}
		
		if(/[",\n]/.test(value2)){
			value2 = '"' + value2.replace(/"/g, '""') + '"';
		}
		
		questionsAnswersArray.push([value1, value2]);
	}
	
	const questionsModified = questionsAnswersArray.map(row => row.join(",")).join("\n");
	
	const blob = new Blob([questionsModified], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "lightwebFlashcards.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

async function importCSVFile(){
	const csvFileInputValue = csvFileInput.files[0];
	const csvFileInputText = await csvFileInputValue.text();
	
	const csvFileRows = csvFileInputText.split("\n").map(text => text.split(","));
	questionsDiv.innerHTML = "";
	questions = [];
	answers = [];
	for(let i = 1; i < csvFileRows.length; i++){
		const [question, answer] = csvFileRows[i];
		
		const questionDiv = document.createElement("div");
	questionDiv.id = "questionDiv" + i;
	questionDiv.classList.add("questionDiv");
	
	const questionIndexDisplay = document.createElement("h3");
	questionIndexDisplay.textContent = `Question #${i}:`;
	questionDiv.appendChild(questionIndexDisplay);
	
	
	const questionDisplay = document.createElement("p");
	questionDisplay.textContent = question.replace(/"/g, "");
	questionDisplay.id = `Question #${i}QuestionDisplay`;
	questionDisplay.classList.add("questions");
	questionDiv.appendChild(questionDisplay);
	
	const answerDisplay = document.createElement("p");
	answerDisplay.textContent = answer.replace(/"/g, "");
	answerDisplay.id = `Question #${i}AnswerDisplay`;
	answerDisplay.classList.add("answers");
	questionDiv.appendChild(answerDisplay);
	
	const questionChangeInput = document.createElement("button");
	questionChangeInput.textContent  = `Change Question #${i}`;
	
	questionChangeInput.addEventListener("click", () => {
		let newQuestion = prompt("Enter the new question: ", document.getElementById(`Question #${i}QuestionDisplay`).textContent)
		if(newQuestion !== null && newQuestion !== ""){
			document.getElementById(`Question #${i}QuestionDisplay`).textContent = newQuestion;
			setArrays();
		}
	});
	
	const answerChangeInput = document.createElement("button");
	answerChangeInput.textContent  = `Change Answer of Question #${i}`;
	
	answerChangeInput.addEventListener("click", () => {
		let newAnswer = prompt("Enter the new answer: ", document.getElementById(`Question #${i}AnswerDisplay`).textContent);
		if(newAnswer !== null && newAnswer !== ""){
			document.getElementById(`Question #${i}AnswerDisplay`).textContent = newAnswer;
			setArrays();
		}
	});
	
	setArrays();
	
	questionDiv.appendChild(questionChangeInput);
	questionDiv.appendChild(answerChangeInput);

	
	
	questionsDiv.appendChild(questionDiv);
	}
	console.log(questions);
	console.log(answers);
};

clearBtn.addEventListener("click", () => {
	questionsDiv.innerHTML = "";
});

generateQuestionsAmountButton.addEventListener("click", () => {
	questionsDiv.innerHTML = "";
	questions = [];
	answers = [];
	for(let i = 1; i <= generateQuestionsAmount.value; i++){
		const questionDiv = document.createElement("div");
	questionDiv.id = "questionDiv" + i;
	questionDiv.classList.add("questionDiv");
	
	const questionIndexDisplay = document.createElement("h3");
	questionIndexDisplay.textContent = `Question #${i}:`;
	questionDiv.appendChild(questionIndexDisplay);
	
	
	const questionDisplay = document.createElement("p");
	questionDisplay.textContent = "What is the fourth planet in the solar system?"
	questionDisplay.id = `Question #${i}QuestionDisplay`;
	questions.push(questionDisplay.textContent);
	questionDisplay.classList.add("question");
	questionDiv.appendChild(questionDisplay);
	
	const answerDisplay = document.createElement("p");
	answerDisplay.textContent = "Mars"
	answerDisplay.id = `Question #${i}AnswerDisplay`;
	answers.push(answerDisplay.textContent);
	answerDisplay.classList.add("answer");
	questionDiv.appendChild(answerDisplay);
	
	const questionChangeInput = document.createElement("button");
	questionChangeInput.textContent  = `Change Question #${i}`;
	
	questionChangeInput.addEventListener("click", () => {
		let newQuestion = prompt("Enter the new question: ", document.getElementById(`Question #${i}QuestionDisplay`).textContent)
		if(newQuestion !== null && newQuestion !== ""){
			document.getElementById(`Question #${i}QuestionDisplay`).textContent = newQuestion;
			setArrays();
		}
	});
	
	const answerChangeInput = document.createElement("button");
	answerChangeInput.textContent  = `Change Answer of Question #${i}`;
	
	answerChangeInput.addEventListener("click", () => {
		let newAnswer = prompt("Enter the new answer: ", document.getElementById(`Question #${i}AnswerDisplay`).textContent);
		if(newAnswer !== null && newAnswer !== ""){
			document.getElementById(`Question #${i}AnswerDisplay`).textContent = newAnswer;
			setArrays();
		}
	});
	questionDiv.appendChild(questionChangeInput);
	questionDiv.appendChild(answerChangeInput);

	setArrays();
	
	questionsDiv.appendChild(questionDiv);
	}
	
});

let index;

startFlashcards.addEventListener("click", function(){
	if(flashcardsToggle === 0){
		flashcardsToggle = 1;
	} else {
		flashcardsToggle = 0;
	}
	if(flashcardsToggle == 1){
	index = Math.floor(Math.random() * questions.length);
	flashcardFront.textContent = questions[index];
	flashcardBack.textContent = answers[index];
	flashcardFront.style.display = "flex";
	flashcardBack.style.display = "flex";
	flashcardsDiv.addEventListener("click", () => {
		flashcardsDivInner.classList.toggle("flipped");
	});
	}
});

flashcardsDivControls.querySelector("button").addEventListener("click", () => {
	if(flashcardsToggle == 1){
		index = Math.floor(Math.random() * questions.length);
		flashcardFront.textContent = questions[index];
		flashcardBack.textContent = answers[index];
	}
});

function setArrays(){
	questions = [];
	answers = [];
	
	questionsDiv.querySelectorAll(".questions").forEach(question => {
		questions.push(question.textContent);
	});
	
	questionsDiv.querySelectorAll(".answers").forEach(answer => {
		answers.push(answer.textContent);
	});
	
	console.log(questions);
	console.log(answers);
}