const courseSettingsBtn = document.getElementById("courseSettingsBtn");
const courseSettings = document.getElementById("courseSettings");
const amountOfCoursesInput = document.getElementById("amountOfCoursesInput");
const courseDisplay = document.getElementById("courseDisplay");
const gradingSystem = document.getElementById("gradingSystem");
const gpaDisplay = document.getElementById("gpaDisplay");
const results = document.getElementById("results");


let gradingSystemA = 0;








courseSettingsBtn.addEventListener("click", function(){
	if(isNaN(amountOfCoursesInput.value) || amountOfCoursesInput <= 0){
		alert("Amount of courses has to be a number and be greater than zero (positive).");
		return;
	}
	if(isNaN(gradingSystemA) || gradingSystemA == 0) {
		alert("A grading system has to be selected in order to compute GPA.");
		return;
	}
	courseDisplay.innerHTML = "";
	const sampleCourseNames = ["Science", "English", "Algebra 1", "Algebra 2", "Integrated Math 1",	"Geometry", "Choir", "Web Design", "3D Game Design", "Band", "Integrated Math 2", "Integrated Math 2e", "Integrated Math 3", "Pre-Calculus", "Calculus", "PE", "History", "Economics", "Psychology", "Civics", "World History", "Computer Science", "Biology", "Marching Band", "Art"];
	const courseGrades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];
	for(let i = 0; i < amountOfCoursesInput.value; i++){
		const courseElement = document.createElement("div");
		courseElement.style.border = "2px solid var(--border)";
		courseElement.style.padding = "15px";
		courseElement.style.marginBottom = "15px";
		courseElement.id = `Course #${i + 1}`;
		courseElement.classList.add("courseElement");
		
		const courseName = document.createElement("p");
		courseName.style.fontSize = "17px";
		courseName.id = `Course #${i + 1}: CourseName`;
		let a = Math.floor(Math.random() * sampleCourseNames.length);
		courseName.textContent = `Course #${i + 1}: ${sampleCourseNames[a]}`;
		sampleCourseNames.splice(a, 1);
		
		const courseNameChange = document.createElement("button");
		courseNameChange.textContent = "Change Name";
		courseNameChange.addEventListener("click", function(){
			let targetCourseName = document.getElementById(`Course #${i + 1}: CourseName`);
			let newCourseName = prompt("Enter the new name for this course.");
			if(newCourseName == "" || newCourseName == null){
				return;
			} else {
				courseName.textContent = `Course #${i + 1}: ${newCourseName}`;
			}
		});
		
		const courseGrade = document.createElement("select");
		courseGrade.classList.add("courseGrade");
		courseGrade.style.padding = "7px";
		for(let i = 0; i < courseGrades.length; i++){
			let gradeIndex = i;
			let courseGradeChild = document.createElement("option");
			courseGradeChild.value = courseGrades[gradeIndex];
			courseGradeChild.textContent = courseGrades[gradeIndex];
			
			courseGrade.appendChild(courseGradeChild);
		}
		
		
		
		
		courseElement.appendChild(courseName);
		courseElement.appendChild(courseGrade);
		courseElement.appendChild(courseNameChange);
		
		courseDisplay.appendChild(courseElement);
		
	}
});

calculateBtn.addEventListener("click", function(){
	const courseElements = courseDisplay.querySelectorAll(".courseElement");
	
	let GPA = 0;
	
	courseElements.forEach(el => {
		let courseGrade = el.querySelector(".courseGrade");
		switch(courseGrade.value){
			case "A+":
				GPA += aPlusPoints;
				break;
			case "A":
				GPA += aPoints;
				break;
			case "A-":
				GPA += aMinusPoints;
				break;
			case "B+":
				GPA += bPlusPoints;
				break;
			case "B":
				GPA += bPoints;
				break;
			case "B-":
				GPA += bMinusPoints;
				break;
			case "C+":
				GPA += cPlusPoints;
				break;
			case "C":
				GPA += cPoints;
				break;
			case "C-":
				GPA += cMinusPoints;
				break;
			case "D+":
				GPA += dPlusPoints;
				break;
			case "D":
				GPA += dPoints;
				break;
			case "D-":
				GPA += dMinusPoints;
				break;
			case "F":
				break;
		}
	});
	results.style.display = "block";
	GPA /= document.getElementsByClassName("courseElement").length;
	gpaDisplay.textContent = "GPA (Grade Point Average): " + GPA;
});

gradingSystemSet1Btn.addEventListener("click", function(){
	gradingSystemA = 1;
});

gradingSystemSet2Btn.addEventListener("click", function(){
	gradingSystemA = 2;
});

let aPlusPoints = 0;
let aPoints = 0;
let aMinusPoints = 0;
let bPlusPoints = 0;
let bPoints = 0;
let bMinusPoints = 0;
let cPlusPoints = 0;
let cPoints = 0;
let cMinusPoints = 0;
let dPlusPoints = 0;
let dPoints = 0;
let dMinusPoints = 0;
let fPoints = 0;


setInterval(update, 25);

function update(){
	const gradingSystem1Table = document.getElementById("gradingSystem1Table");
	const gradingSystemSelectedDisplay = document.getElementById("gradingSystemSelectedDisplay");
	
	
	gradingSystem1Table.style.display = "none";
	gradingSystem2Table.style.display = "none";
	gradingSystemSelectedDisplay.textContent = "";
	if(gradingSystemA === 1){
		aPlusPoints = 4.3;
		aPoints = 4;
		aMinusPoints = 3.7;
		bPlusPoints = 3.3;
		bPoints = 3;
		bMinusPoints = 2.7;
		cPlusPoints = 2.3;
		cPoints = 2;
		cMinusPoints = 1.7;
		dPlusPoints = 1.3;
		dPoints = 1;
		dMinusPoints = 0.7;
		fPoints = 0;
		gradingSystem1Table.style.display = "block";
		gradingSystemSelectedDisplay.textContent = "System Selected: System 1";
	} else if(gradingSystemA === 2){
		aPlusPoints = 4;
		aPoints = 4;
		aMinusPoints = 4;
		bPlusPoints = 3;
		bPoints = 3;
		bMinusPoints = 3;
		cPlusPoints = 2;
		cPoints = 2;
		cMinusPoints = 2;
		dPlusPoints = 1;
		dPoints = 1;
		dMinusPoints = 1;
		fPoints = 0;
		gradingSystem2Table.style.display = "block";
		gradingSystemSelectedDisplay.textContent = "System Selected: System 2";
	}
}