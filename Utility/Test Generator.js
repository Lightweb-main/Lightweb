let questions = [];
let answers = [];

csvFileInput.addEventListener("change", async () => {
	
	const file = csvFileInput.files[0];
	const fileText = await file.text();
	console.log("File Text: " + fileText);
	
	const rows = fileText
		.split("\n")
		.map(row => row.replace("\r", "").split(",").map(cell => cell.trim()));

	rows.pop();
	console.log("Rows: \n");
	console.log(rows);
	
	for(let i = 0; i < rows.length; i++){
		const questionDiv = document.createElement("div");
		questionDiv.classList.add("qDiv");
		questionDiv.style.borderColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`
		
		const questionDisplay = document.createElement("p");
		questionDisplay.textContent = `Question #${i + 1}: ` + rows[i][0];
		
		const answerDisplay = document.createElement("p");
		answerDisplay.textContent = "Answer: " + rows[i][1];
		
		questions.push(rows[i][0]);
		answers.push(rows[i][1]);
		
		questionDiv.appendChild(questionDisplay);
		questionDiv.appendChild(answerDisplay);
		
		QADisplay.appendChild(questionDiv);
	}	
});


generateQuiz.addEventListener("click", () => {
	testDiv.innerHTML = "";
	
	
	
	for(let i = questions.length; i > 0; i--){
		const j = Math.floor(Math.random() * questions.length);
		const k = Math.floor(Math.random() * questions.length);
		[questions[j], questions[k]] = [questions[k], questions[j]];
		[answers[j], answers[k]] = [answers[k], answers[j]];
	}
	
	console.log(questions);
	console.log(answers);
	
	const testTitle = document.createElement("h2");
	testTitle.style.textAlign = "center";
	testTitle.textContent = testName.value;
	testDiv.appendChild(testTitle);
	
	for(let i = 0; i < questionAmount.value; i++){
		const questionType = Math.floor(Math.random() * 4) + 1;
		
		const questionDiv = document.createElement("div");
		testDiv.appendChild(questionDiv);
		
		if(questionType == 1){
			const question = questions[Math.floor(Math.random() * questions.length)];
			const instructions = document.createElement("p");
			instructions.innerHTML = `Write your answer below the question. <br> Question #${i + 1}: ${question}<br><br><br>`;
			questionDiv.appendChild(instructions);
		} else if(questionType == 2){
			const questionIndex = Math.floor(Math.random() * questions.length)
			const question = questions[questionIndex];
			const instructions = document.createElement("p");
			instructions.innerHTML = `Circle or mark the correct answer. <span style="text-align: center;">Question #${i + 1}: ${question}</span><br>`;
			questionDiv.appendChild(instructions);
			
			let possibleAnswersArray = [];
			possibleAnswersArray.push(answers[questionIndex]);
			while(possibleAnswersArray.length < 4){
				
				let randomAnswer;
				randomAnswer = answers[Math.floor(Math.random() * answers.length)];
				
				if(randomAnswer !== answers[i] && !possibleAnswersArray.includes(randomAnswer)){
					possibleAnswersArray.push(randomAnswer);
				};
			}
			
			const multipleChoiceDiv = document.createElement("div");
			multipleChoiceDiv.style.display = "grid";
			multipleChoiceDiv.style.gridTemplateColumns = "repeat(2, 1fr)";
			multipleChoiceDiv.style.width = "400px";
			multipleChoiceDiv.style.margin = "auto";
			multipleChoiceDiv.style.textAlign = "center";
			
			possibleAnswersArray.forEach((value, index) => {
				const display = document.createElement("p");
				display.textContent = `${String.fromCharCode(index + 65)})  ` + value;
				multipleChoiceDiv.appendChild(display);
			});
			
			questionDiv.appendChild(multipleChoiceDiv);
		} else if(questionType == 3){
			const questionIndex = Math.floor(Math.random() * questions.length)
			const question = questions[questionIndex];
			const instructions = document.createElement("p");    
			instructions.innerHTML = `For the following question, circle "True" if the answer matches the question, circle "False" if otherwise. <br> Question #${i + 1}: ${question}<br>`;
			
			let answer;
			if(Math.random() > 0.5){
				answer = answers[questionIndex];
			} else {
				answer = answers[Math.floor(Math.random() * answers.length)];
				while(answer == answers[i]){
					answer = answers[Math.floor(Math.random() * answers.length)];
				}
			}
			const answerDisplay = document.createElement("p");
			answerDisplay.textContent = "Possible Answer: " + answer;
			
			const trueDisplay = document.createElement("p");
			trueDisplay.textContent = "True";
			
			const falseDisplay = document.createElement("p");
			falseDisplay.textContent = "False";
			
			const displayDiv = document.createElement("div");
			displayDiv.style.display = "grid";
			displayDiv.style.gridTemplateColumns = "repeat(2, 1fr)";
			displayDiv.style.width = "400px";
			displayDiv.style.margin = "auto";
			displayDiv.style.textAlign = "center";
			
			displayDiv.appendChild(trueDisplay);
			displayDiv.appendChild(falseDisplay);
			
			questionDiv.appendChild(instructions);
			questionDiv.appendChild(answerDisplay);
			questionDiv.appendChild(displayDiv);
		} else if(questionType == 4){
			const questionIndex = Math.floor(Math.random() * questions.length)
			const question = questions[questionIndex];
			const instructions = document.createElement("p");
			instructions.innerHTML = `Match each answer with its question. <br> Question #${i + 1}:`;
			
			let questionArray = [];
			const matchingDivDiv = document.createElement("div");
			matchingDivDiv.style.width = "100%";
			matchingDivDiv.style.display = "grid";
			matchingDivDiv.style.margin = "auto";
			matchingDivDiv.style.border = "1px solid black";
			matchingDivDiv.style.gridTemplateColumns = "repeat(2, 1fr)";
			matchingDivDiv.style.lineHeight = "0.7";
			const matchingDiv = document.createElement("div");
			matchingDiv.style.width = "50%";
			matchingDiv.style.margin = "auto";
			matchingDiv.style.display = "inline";
			matchingDiv.style.textAlign = "center";
			matchingDiv.style.whiteSpace = "pre";
			const matchingDiv2 = document.createElement("div");
			matchingDiv2.style.width = "50%";
			matchingDiv2.style.margin = "auto";
			matchingDiv2.style.display = "inline";
			matchingDiv2.style.textAlign = "center";
			matchingDiv2.style.whiteSpace = "pre";
			
			matchingDivDiv.appendChild(matchingDiv);
			matchingDivDiv.appendChild(matchingDiv2);
			let questionAmount = Math.floor(Math.random() * 5) + 2;
			if(questionAmount > questions.length){
				questionAmount = questions.length;
			}
			for(let i = 0; i < questionAmount; i++){
				let questionIndex;
				do {
					questionIndex = Math.floor(Math.random() * questions.length);
				} while (questionArray.includes(questionIndex));


				questionArray.push(questionIndex);	
			}
			
			for(let i = questionArray.length; i > 0; i--){
				const j = Math.floor(Math.random() * questionArray.length);
				[questionArray[i], questionArray[j]] = [questionArray[j], questionArray[i]];
			}
			
			for(let i = 0; i < questionArray.length; i++){
				const paragraph = document.createElement("p");
				paragraph.textContent = questions[questionArray[i]];
				matchingDiv.appendChild(paragraph);
			}
			
			for(let i = questionArray.length; i > 0; i--){
				const j = Math.floor(Math.random() * questionArray.length);
				[questionArray[i], questionArray[j]] = [questionArray[j], questionArray[i]];
			}
			
			for(let i = 0; i < questionArray.length; i++){
				const paragraph2 = document.createElement("p");
				paragraph2.textContent = answers[questionArray[i]];
				matchingDiv2.appendChild(paragraph2);
			}
			
			testDiv.appendChild(instructions);
			testDiv.appendChild(matchingDivDiv);
		}
		
	}
	const style = {
		jsPDF: {
			unit: "mm",
			format: [PDFWidth.value, PDFHeight.value],
			orientation: "portrait"
		},
		margin: [10, 10, 10, 10]
	};
	
	html2pdf().from(testDiv).set(style).save('lightwebTest.pdf');
	setTimeout( () => {
		testDiv.innerHTML = "";
	}, 400);
	setTimeout( () => {
		testDiv.innerHTML = "";
	}, 1000);
});