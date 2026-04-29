
let caseIndex = 0;
let displayToggle = 0;
let displayToggleA = 0;
let caseDisease;
let patientIndex = 1;
let patientTemperature;
let medianPatientTemperature;
let selectedDisease = null;
let toolToggle = true;
let selectedSymptoms = [];

let caseNum;




commonColdSelectBtn.style.backgroundColor = "var(--border)";
commonColdSelectBtn.style.borderColor = "var(--border)";



const infoDivA = document.getElementById("infoDivA");

const cases = [
	{
		disease: "Common Cold",
		symptoms: [
			"soreThroat", "runnyNose", "sneezing", "coughing"
		],
		notes: [
			(age, gender) => [
				`Patient Number: ${patientIndex}`,
				`Age: ${age}`,
				`Gender: ${gender}`,
				"ESI Level: 5"
			]
		]
	},
	{
		disease: "Allergies",
		symptoms: [
			"soreThroat", "runnyNose", "sneezing", "wheezing"
		],
		notes: [
			(age, gender) => [
				`Patient Number: ${patientIndex}`,
				`Age: ${age}`,
				`Gender: ${gender}`,
				"ESI Level: 5"
			]
		]
	},
	{
		disease: "Influenza",
		symptoms: [
			"runnyNose", "wheezing", "fever", "coughing"
		],
		notes: [
			(age, gender) => [
				`Patient Number: ${patientIndex}`,
				`Age: ${age}`,
				`Gender: ${gender}`,
				"ESI Level: 4"
			]
		]
	},
	{
		disease: "Covid-19",
		symptoms: [
			"headache", "lossOfSense", "fever", "coughing"
		],
		notes: [
			(age, gender) => [
				`Patient Number: ${patientIndex}`,
				`Age: ${age}`,
				`Gender: ${gender}`,
				"ESI Level: 3"
			]
		]
	}
]


generateNewCase();
update(false);

function generateNewPatient(){
	let age = Math.floor(Math.random() * 16) + 2;
	let gender;
	switch(Math.floor(Math.random() * 2)){
			case 0:
				gender = "Male";
			break;	
			
			case 1:
				gender = "Female";
			break;
	}
	
	return [age, gender];
}

function generateNewCase(){
	caseIndex++;
	
	
	diseaseIndex = Math.floor(Math.random() * cases.length);
	const [age, gender] = generateNewPatient();
	caseDisease = cases[diseaseIndex].disease;
	switch(Math.floor(Math.random() * 2)){
		case 0:
			medianPatientTemperature = 97 - (Math.round(Math.random() * 20) / 10);
		break;
		case 1:
			medianPatientTemperature = 97 + (Math.round(Math.random() * 20) / 10);
		break;
	}
	
	if(cases[diseaseIndex].symptoms.includes("fever")){
		medianPatientTemperature = 99 + (Math.round(Math.random() * 30) / 10);
	}
	
		
	
	
	const noteIndex = Math.floor(Math.random() * cases[diseaseIndex].notes.length);
	const noteLines = cases[diseaseIndex].notes[noteIndex](age, gender, patientIndex);
	
	noteLines.forEach((note) => {
		const display = document.createElement("p");
		display.textContent = note;
		messagesDiv.appendChild(display);
	});
	patientIndex++;
}

commonColdInfoBtn.addEventListener("click", function(){
	infoDivA.innerHTML = 
	`
		<h2>Common Cold</h2>
		<p>The Common Cold is a mild pathogen, one of the most infectious in the world. When a human catches the Common Cold, they experience the following symptoms:</p>
		<ul>
			<li>Coughing</li>
			<li>Irritating Nose</li>
			<li>Sneezing</li>
			<li>Sore Throat</li>
		</ul>
		<p>Symptoms usually fade away 7 to 11 days after the host has catched the Common Cold without any lasting symptoms. However elderly, weakened and newborn should take medicine and perform house remedies to prevent any permanent damage the Common Cold could inflict.</p>
		<p>The Common Cold primarily spreads through infected respiratory droplets that travel from a host into another persons lungs.</p>
	`	
});

allergiesInfoBtn.addEventListener("click", function(){
	infoDivA.innerHTML = 
	`
		<h2>Allergies</h2>
		<p>An allergy is a mild to severe immune system response to certain substances called an allergen. Mild symptoms of allergies include: </p>
		<ul>
			<li>Runny Nose</li>
			<li>Sneezing</li>
			<li>Sore Throat</li>
			<li>Wheezing</li>
		</ul>
		<p>Symptoms vary depending on the amount of allergen exposed and what substance it is. Common allergens include pollen, peanuts, milk, and fish.</p>
	`	
});

influenzaInfoBtn.addEventListener("click", function(){
	infoDivA.innerHTML = 
	`
		<h2>Influenza</h2>
		<p>Influenza, or commonly called the flu, is a mild to severe virus that primarily attacks the respiratory system and in severe cases, cause death within the patient. Commnon symptoms of Influenza are: </p>
		<ul>
			<li>Coughing</li>
			<li>Fever</li>
			<li>Runny Nose</li>
			<li>Wheezing</li>
		</ul>
		<p>Similarily to the common cold, Influenza is especially dangerous to newborn, elderly, and weakened patients, so those that fall under those categories should take extra action combating the disease.</p>
	`	
});

covidInfoBtn.addEventListener("click", function(){
	infoDivA.innerHTML = 
	`
		<h2>Covid-19</h2>
		<p>Covid-19, or alternatively called Coronavirus, is a: </p>
		<ul>
			<li>Coughing</li>
			<li>Fever</li>
			<li>Runny Nose</li>
			<li>Wheezing</li>
		</ul>
		<p>Similarily to the common cold, Influenza is especially dangerous to newborn, elderly, and weakened patients, so those that fall under those categories should take extra action combating the disease.</p>
	`	
});

physicalCheckupInfoBtn.addEventListener("click", function(){
	infoDivA.innerHTML = 
	`
		<h2>Physical Checkup</h2>
		<p>Physical Checkups typically are annual visits from patients to meet with their doctors to ensure good physical and mental health. Physical Checkups check and mark the following: </p>
		<ul>
			<li>Coughing</li>
			<li>Sneezing</li>
			<li>Wheezing</li>
		</ul>
		<p>The duration of physical checkups can vary depending on the amount of underlying symptoms the patient may have.</p>
	`	
});

thermometerInfoBtn.addEventListener("click", function(){
	infoDivA.innerHTML = 
	`
		<h2>Thermometer</h2>
		<p>A thermometer is a device used to measure temperature. In this medical field, a temperature around 97&deg;F (36&deg;C) is considered normal. Anything below 90&deg;F or above 99&deg;F is considered abnormal and may need further examination: </p>
		<ul>
			<li style="color: lightgreen;">Normal: &asymp; 97</li>
			<li style="color: lightblue;">Cold: Body temp. < 90</li>
			<li style="color: tomato;">Hot: Body temp. > 99</li>
		</ul>
		<p>The thermometer can also product incorrect or varied results, so it's recommended to scan twice to avoid misdiagnosing a possible symptom.</p>
	`	
});

thermometerBtn.addEventListener("click", function(){
	if(toolToggle){
		thermometerBtn.textContent = "Scanning...";
		toolToggle = false;
		
		setTimeout(function() {
			switch(Math.floor(Math.random() * 2)){
				case 0:
					examinationDiv.innerHTML += `Patient Temperature: ${(medianPatientTemperature + (Math.floor(Math.random() * 5) / 10)).toFixed(1)}<sup>o</sup>F<br>`;
				break;
				
				case 1:
					examinationDiv.innerHTML += `Patient Temperature: ${(medianPatientTemperature - (Math.floor(Math.random() * 5) / 10)).toFixed(1)}<sup>o</sup>F<br>`;
				break;
			}
			thermometerBtn.textContent = "Thermometer";
			toolToggle = true;
		}, 1000);
	}
});

physicalCheckupBtn.addEventListener("click", function(){
	if(toolToggle){
		physicalCheckupBtn.textContent = "Arranging a Physical Checkup...";
		toolToggle = false;
		
		setTimeout(function() {
			if(cases[diseaseIndex].symptoms.includes("coughing")){
				examinationDiv.innerHTML += `Patient has been observed to cough periodically during the physical checkup.<br>`;
			} else {
				examinationDiv.innerHTML += `Patient has not been observed to cough anywhere in the duration of the physical checkup.<br>`;
			}
		}, 1300);
		
		setTimeout(function() {
			if(cases[diseaseIndex].symptoms.includes("sneezing")){
				examinationDiv.innerHTML += `Patient has been observed to sneeze irregularly often during the physical checkup.<br>`;
			} else {
				examinationDiv.innerHTML += `Patient has not been observed to sneeze often in the physical checkup.<br>`;
			}
		}, 2600);
		
		setTimeout(function() {
			if(cases[diseaseIndex].symptoms.includes("wheezing")){
				examinationDiv.innerHTML += `Patient has been observed to wheeze after a forcefull exhale.<br>`;
			} else {
				examinationDiv.innerHTML += `Patient has been observed to not produce a wheezing sound when forcefully exhaling in the physical checkup.<br>`;
			}
			
			physicalCheckupBtn.textContent = "Physical Checkup";
			toolToggle = true;
		}, 3900);
		
		
	}
});

throatSwabTestBtn.addEventListener("click", function(){
	if(toolToggle){
		throatSwabTestBtn.textContent = "Performing...";
		toolToggle = false;
		
		setTimeout(function() {
			if(cases[diseaseIndex].symptoms.includes("soreThroat")){		
				examinationDiv.innerHTML += `Patient has been observed to have a swollen throat.<br>`;
			} else {
				examinationDiv.innerHTML += `The patient's throat isn't swollen.<br>`;
			}
			throatSwabTestBtn.textContent = "Throat Swab Test";
			toolToggle = true;
		}, 1000);
	}
});

noseSwabTestBtn.addEventListener("click", function(){
	if(toolToggle){
		noseSwabTestBtn.textContent = "Performing...";
		toolToggle = false;
		
		setTimeout(function() {
			if(cases[diseaseIndex].symptoms.includes("runnyNose")){		
				switch(Math.floor(Math.random() * 3) + 1){
					case 1:
						examinationDiv.innerHTML += `Samples of the patient's mucus from their nose is abundant.<br>`;
					break;
					
					case 2:
						examinationDiv.innerHTML += `It has been observed that the patient's nose produces an abnormal amount of mucus.<br>`;
					break;
					
					case 3:
						examinationDiv.innerHTML += `The patient's nose has been irritated by the disease.<br>`;
					break;
				}
			} else {
				examinationDiv.innerHTML += `The patient's throat isn't swollen nor is producing abnormal amounts of mucus.<br>`;
			}
			noseSwabTestBtn.textContent = "Nose Swab Test";
			toolToggle = true;
		}, 1000);
	}
});

toolsSelectBtn.addEventListener("click", function(){
	if(displayToggle != 1){
		displayToggle = 1;
	} else {
		displayToggle = 0;
	}
	
	update();
});

diseaseInfoBtn.addEventListener("click", function(){
	if(displayToggle != 2){
		displayToggle = 2;
	} else {
		displayToggle = 0;
	}
	
	update();
});

diseaseSelectBtn.addEventListener("click", function(){
	if(displayToggle != 3){
		displayToggle = 3;
	} else {
		displayToggle = 0;
	}
	
	update();
});

diseaseInfoDivBtn.addEventListener("click", function(){
	if(displayToggleA != 1){
		displayToggleA = 1;
	} else {
		displayToggleA = 0;
	}
	
	update();
});

toolsProceduresInfoBtn.addEventListener("click", function(){
	if(displayToggleA != 2){
		displayToggleA = 2;
	} else {
		displayToggleA = 0;
	}
	
	update();
});



document.addEventListener("DOMContentLoaded", function(){
	document.querySelectorAll(".symptomSelectBtns").forEach(button => {
		button.addEventListener("click", function(){
			const index = selectedSymptoms.indexOf(button.dataset.symptomSelect);
			if(index < 0){
				selectedSymptoms.push(button.dataset.symptomSelect);
			} else {
				selectedSymptoms.splice(index, 1);
			}
			
			update();
		});
	});
	
	document.querySelectorAll(".diseaseSelectBtns").forEach(button => {
		button.addEventListener("click", function(){
			if(selectedDisease !== button.dataset.diseaseSelect){
				selectedDisease = button.dataset.diseaseSelect;
			} else {
				selectedDisease = null;
			}
			
			update();
		});
	});
});






function update(){
	toolsDiv.style.display = "none";
	infoDiv.style.display = "none";
	diseasesSelectDiv.style.display = "none";
	diseaseInfoDiv.style.display = "none";
	toolsProceduresInfoDiv.style.display = "none";
	
	if(selectedDisease == null) selectedDisease = "No Disease Selected";
	
	selectedDiseaseDisplay.textContent = "Selected Disease: " + selectedDisease;
	
	document.querySelectorAll(".diseaseSelectBtns").forEach(button => {
		button.style.backgroundColor = "color-mix(var(--border) 75%, #000000 25%)";
		button.style.borderColor = "color-mix(var(--border) 75%, #000000 25%)";
		button.style.textDecoration = "line-through";
	});
	
	

	
	
	
	if(displayToggle == 1){
		toolsDiv.style.display = "block";
	} else if(displayToggle == 2){
		infoDiv.style.display = "block";
	} else if(displayToggle == 3){
		diseasesSelectDiv.style.display = "block";
	}
	
	if(displayToggleA == 1){
		diseaseInfoDiv.style.display = "block";
	} else if(displayToggleA == 2){
		toolsProceduresInfoDiv.style.display = "block";
	} 
	
	
	console.log(selectedSymptoms);
	
	document.querySelectorAll(".symptomSelectBtns").forEach(button => {
		button.style.textDecoration = "none";
		button.style.backgroundColor = "var(--border)";
		button.style.borderColor = "var(--border)";

		if(!selectedSymptoms.includes(button.dataset.symptomSelect)){
			button.style.backgroundColor = "color-mix(var(--border) 75%, #000000 25%)";
			button.style.borderColor = "color-mix(var(--border) 75%, #000000 25%)";
			button.style.textDecoration = "line-through";
		} else {
			button.style.textDecoration = "none";
			button.style.backgroundColor = "var(--border)";
			button.style.borderColor = "var(--border)";
		}
	});
	
	
	for(const symptom of selectedSymptoms){
		if(symptom != "sneezing" &&
		   symptom != "coughing" &&
		   symptom != "runnyNose" &&
		   symptom != "soreThroat"
		   ){
			commonColdSelectBtn.style.backgroundColor = "color-mix(var(--border) 75%, #000000 25%)";
			commonColdSelectBtn.style.borderColor = "color-mix(var(--border) 75%, #000000 25%)";
			commonColdSelectBtn.style.textDecoration = "line-through";
			break;
		}
		
		commonColdSelectBtn.style.textDecoration = "none";
		commonColdSelectBtn.style.backgroundColor = "var(--border)";
		commonColdSelectBtn.style.borderColor = "var(--border)";
	}
	
	for(const symptom of selectedSymptoms){
		if(symptom != "sneezing" &&
		   symptom != "coughing" &&
		   symptom != "runnyNose" &&
		   symptom != "wheezing"
		   ){
			allergiesSelectBtn.style.backgroundColor = "color-mix(var(--border) 75%, #000000 25%)";
			allergiesSelectBtn.style.borderColor = "color-mix(var(--border) 75%, #000000 25%)";
			allergiesSelectBtn.style.textDecoration = "line-through";
			break;
		}
		
		allergiesSelectBtn.style.textDecoration = "none";
		allergiesSelectBtn.style.backgroundColor = "var(--border)";
		allergiesSelectBtn.style.borderColor = "var(--border)";
	}
	
	for(const symptom of selectedSymptoms){
		if(symptom != "fever" &&
		   symptom != "coughing" &&
		   symptom != "runnyNose" &&
		   symptom != "wheezing"
		   ){
			influenzaSelectBtn.style.backgroundColor = "color-mix(var(--border) 75%, #000000 25%)";
			influenzaSelectBtn.style.borderColor = "color-mix(var(--border) 75%, #000000 25%)";
			influenzaSelectBtn.style.textDecoration = "line-through";
			break;
		}
		
		influenzaSelectBtn.style.textDecoration = "none";
		influenzaSelectBtn.style.backgroundColor = "var(--border)";
		influenzaSelectBtn.style.borderColor = "var(--border)";
	}
	
	document.querySelectorAll(".diseaseSelectBtns").forEach(button => {
		if(selectedDisease == button.dataset.diseaseSelect){
			button.style.backgroundColor = "yellow";
		} else {
			return;
		}
	});
}

confirmBtn.addEventListener("click", function(){
	if(selectedDisease == caseDisease){
		console.log("Correct!!! :O");
	} else {
		console.log("Incorrect...");
	}
	
	messagesDiv.innerHTML = "";
	examinationDiv.innerHTML = "";
	selectedDisease = null;
	selectedSymptoms.length = 0;
	
	
	update();
	
	setTimeout(generateNewCase, 1000);
	
	
});
