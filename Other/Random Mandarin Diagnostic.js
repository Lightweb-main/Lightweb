const questionNumDisplay = document.getElementById("questionNumDisplay");
const questionDisplay = document.getElementById("questionDisplay");
const questionSetDisplay = document.getElementById("questionSetDisplay");
const choicesDiv = document.getElementById("choicesDiv");
const submitBtn = document.getElementById("submitBtn");



let questionIndex = 0;
let score = 0;
let scoreBasicIntroductions = 0;
let rng = 0;
let questionsAnswered = [];
let selectedAnswer;


const questions = {
		"Basic Introductions": [
			{
				questionId: 0,
				question: "What does this introduction mean?: 你好。 (Nǐ hǎo.)",
				options: ["Hello.", "Goodbye.", "Good!", "How are you?"],
				correctAnswer: "Hello."
			},
			{
				questionId: 1,
				question: "What does this introduction mean?: 你好吗? (Nǐ hǎo ma?)",
				options: ["Me", "You", "Very good", "How are you?"],
				correctAnswer: "How are you?"
			},
			{
				questionId: 6,
				question: `Fill in the blanks for this short conversation:
				<br>Person A: 你好。 (Nǐ hǎo.),
				<br>Person B: 你好。 (Nǐ hǎo.),
				<br>Person A: 你好吗? (Nǐ hǎo ma?),
				<br>Person B: _____,
				`,
				options: ["我很好。 (Wǒ hěn hǎo.）", "你好吗。 (Nǐ hǎo ma.）", "再见。 (Zàijiàn.）", "你是。 (Nǐ shì.）"],
				correctAnswer: "我很好。 (Wǒ hěn hǎo.）"
			},
			{
				questionId: 2,
				question: "What does this mean?: 很好! (Hěn hǎo!)",
				options: ["Very good!", "Goodbye!", "Good!", "Are you okay!"],
				correctAnswer: "Very good!"
			},
			{
				questionId: 3,
				question: "How would you respond to this phrase in English?: 你好吗。 (Nǐ hǎo ma.)",
				options: ["I'm doing good.", "You're doing good.", "Why?", "Over there."],
				correctAnswer: "I'm doing good."
			},
			{
				questionId: 7,
				question: "What does this introduction mean?: 你好吗? (Nǐ hǎo ma?)",
				options: ["Me", "You", "Very good", "How are you?"],
				correctAnswer: "How are you?"
			},
			{
				questionId: 4,
				question: "What does this mean?: 很好! (Hěn hǎo!)",
				options: ["Very good!", "Goodbye!", "Good!", "Are you okay!"],
				correctAnswer: "Very good!"
			},
			{
				questionId: 8,
				question: "What does this mean?: 我叫... (Wǒ jiào...)",
				options: ["My name is...", "My number is...", "My password is...", "My birthday is..."],
				correctAnswer: "My name is..."
			},
			{
				questionId: 9,
				question: `Fill in the blanks:
				<br>A person wants to say what their name is but doesn't know what character to put! Could you help give them the correct character:
				<br>你好。 我_... (Nǐ hǎo. Wǒ __...)`,
				options: ["叫 (jiào)", "很 (hěn)", "好 (hǎo)", "你 (nǐ)"],
				correctAnswer: "叫 (jiào)"
			},
			{
				questionId: 10,
				question: `True or False: 你好 (Nǐ hǎo) isn't the only way how to say "hello" in Mandarin.`,
				options: ["True", "False"],
				correctAnswer: "True"
			},
			{
				questionId: 11,
				question: `Is this sentence grammatically correct?: 你好! 你叫什么名字？ (Nǐ hǎo! Nǐ jiào shénme míngzì?)`,
				options: ["Yes", "No"],
				correctAnswer: "Yes"
			},
			{
				questionId: 12,
				question: `Is this sentence grammatically correct?: 再见! 你叫什么名字？ (Zàijiàn! Nǐ jiào shénme míngzì?)`,
				options: ["Yes", "No"],
				correctAnswer: "No"
			},
			{
				questionId: 13,
				question: `What does this mean?: 谢谢! (Xièxiè!)`,
				options: ["Thank you!", "No thanks!", "You're welcome!", "Good job!"],
				correctAnswer: "Thank you!"
			},
			{
				questionId: 14,
				question: `What does this mean?: 对不起! (Duìbùqǐ!)`,
				options: ["Sorry!", "Thanks!", "You're welcome!", "Wait!"],
				correctAnswer: "Sorry!"
			},
			{
				questionId: 5,
				question: "What does this phrase mean?: 我很好. (Wǒ hěn hǎo）",
				options: ["I don't.", "You're good.", "I'm doing bad.", "I'm good."],
				correctAnswer: "I'm good."
			}
		],
		
		"Adept Introductions": [
			{
				questionId: 15,
				question: "When would you use this introduction in day to day life?: 喂 (wéi)",
				options: ["During a phone conversation.", "During a formal conversation.", "Whenever.", "During a conversation with relatives."],
				correctAnswer: "During a phone conversation."
			},
		]
	};
	
let questionSet = "Basic Introductions";
let questionSetTrimmed = questionSet.trim();
let questionSetTrue = questions[questionSetTrimmed];



submitBtn.addEventListener('click', () => {
	checkAnswer(selectedAnswer);
});

setInterval(update, 10);
function update(){
	questionNumDisplay.textContent = `Question #${questionIndex}`;
	questionSetDisplay.textContent = `${questionSet}`;
	scoreDisplay.textContent = `Score: ${score}`;
	
	questionSetTrimmed = questionSet.trim();
	questionSetTrue = questions[questionSetTrimmed];
	
	if(questionIndex <= 10){
		questionSet = "Basic Introductions";
	} 
	if(questionIndex > 10){
		if(score <= 7){
			questionSet = "Adept Introductions";
		} else if(score >= 8){
			questionSet = "Advanced Introductions";
		}			
	}
}


function generateNewQuestion(){
	questionIndex++;
	selectedAnswer = "";
	rng = Math.floor(Math.random() * questionSetTrue.length); 
	while(questionsAnswered.includes(rng)){
		rng = Math.floor(Math.random() * questionSetTrue.length); 
	}
	
	for(let i = 0; i < questionSetTrue[rng].options.length; i++){
		const options = questionSetTrue[rng].options;
		const j = Math.floor(Math.random() * (i + 1)); 
		[options[i], options[j]] = [options[j], options[i]];
	}
	questionDisplay.innerHTML = questionSetTrue[rng].question;
	
	
	choicesDiv.innerHTML = "";
	for(let i = 0; i < questionSetTrue[rng].options.length; i++){
		const buttonOption = document.createElement("div");
		buttonOption.setAttribute("data-optionId", i);
		
		buttonOption.style.fontSize = `20px`;
		buttonOption.style.width = `100%`;
		buttonOption.style.height = `100%`;
		buttonOption.style.textAlign = `center`;
		buttonOption.style.backgroundColor = `#dddddd`;
		buttonOption.style.border = `2px solid #bbbbbb`;
		buttonOption.style.borderRadius = `5px`;
		buttonOption.style.cursor = `pointer`;
		
		buttonOption.textContent = questionSetTrue[rng].options[i];
		
		
		buttonOption.addEventListener("click", () => {
			selectedAnswer = buttonOption.textContent;
			const allOptions = choicesDiv.querySelectorAll("div[data-optionId]"); 
			allOptions.forEach(opt => opt.classList.remove("selected"));
			buttonOption.classList.add("selected");
			
		});
		
		buttonOption.addEventListener("mouseover", () => {
			buttonOption.style.backgroundColor = `#bbbbbb`;
			buttonOption.style.borderColor = `#aaaaaa`;
		});
		
		
		buttonOption.addEventListener("mouseout", () => {
			buttonOption.style.backgroundColor = `#dddddd`;
			buttonOption.style.borderColor = `#bbbbbb`;
		});
		
		choicesDiv.appendChild(buttonOption);
	}
}

function checkAnswer(){
	const correct = questionSetTrue[rng].correctAnswer;
	questionsAnswered.push(rng);
	if(selectedAnswer == correct){
		score++;
		scoreBasicIntroductions++;
	}
	console.log(questionsAnswered);
	generateNewQuestion();
}

