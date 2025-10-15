const formatIndicator = document.getElementById("formatIndicator");
const Title = document.getElementById("Title");
const NameInput = document.getElementById("NameInput");
const InstructorNameInput = document.getElementById("InstructorNameInput");
const CourseNameInput = document.getElementById("CourseNameInput");
const ContentInput = document.getElementById("ContentInput");
const output = document.getElementById("output");
const Name2 = document.getElementById("Name2");
const InstructorName2 = document.getElementById("InstructorName2");
const CourseName2 = document.getElementById("CourseName2");
const Time2 = document.getElementById("Time2");
const title2 = document.getElementById("title2");
const Content = document.getElementById("Content");
const AuthorNameInput = document.getElementById("AuthorNameInput");
const container = document.getElementById("container");
const Name3 = document.getElementById("Name3");

let format = "";

function update(){
	formatIndicator.textContent = "Format: "+format;
	container.style.display = "none";
	Title.style.display = "none";
	Title2.style.display = "none";
	NameInput.style.display = "none";
	NameInput2.style.display = "none";
	InstructorNameInput.style.display = "none";
	CourseNameInput.style.display = "none";
	ContentInput.style.display = "none";
	ContentInput2.style.display = "none";
	output.style.display = "none";
	Name2.style.display = "none";
	InstructorName2.style.display = "none";
	CourseName2.style.display = "none";
	Time2.style.display = "none";
	title2.style.display = "none";
	Content.style.display = "none";
	DepartmentNameInput.style.display = "none";
	CourseName2Input.style.display = "none";
	UniversityNameInput.style.display = "none";
	CourseNumberInput.style.display = "none";
	Name3.style.display = "none";
	title3.style.display = "none";
	InstructorName2Input.style.display = "none";
	APAOutput.style.display = "none";
	if(format === "MLA"){
	Title.style.display = "inline";
	NameInput.style.display = "inline";
	InstructorNameInput.style.display = "inline";
	CourseNameInput.style.display = "inline";
	ContentInput.style.display = "inline";
	output.style.display = "block";
	Name2.style.display = "block";
	InstructorName2.style.display = "block";
	CourseName2.style.display = "block";
	Time2.style.display = "block";
	title2.style.display = "block";
	Content.style.display = "none";
	container.style.display = "block";
	}
	if(format === "APA"){
	Title2.style.display = "inline";
	NameInput2.style.display = "inline";
	DepartmentNameInput.style.display = "inline";
	UniversityNameInput.style.display = "inline";
	CourseNumberInput.style.display = "inline";
	CourseName2Input.style.display = "inline";
	InstructorName2Input.style.display = "inline";
	ContentInput2.style.display = "inline";
	
	output.style.display = "block";
	title3.style.display = "block";
	Name3.style.display = "block";
	DepartmentUniversityName.style.display = "block";
	CourseNumberName.style.display = "block";
	InstructorNameInput2.style.display = "block";
	Date2.style.display = "block";
	Content.style.display = "none";
	container.style.display = "block";
	APAOutput.style.display = "block";
	}
}
Title.value = "Title of Your Report";
NameInput.value = "Your Name";
InstructorNameInput.value = "Professor Name";
CourseNameInput.value = "Subject Name";
Title2.value = "Title about Report";
NameInput2.value = "Your Name";
UniversityNameInput.value = "University Name";
DepartmentNameInput.value = "Department Name";
CourseNumberInput.value = "Course Number";
CourseName2Input.value = "Course Name";
InstructorName2Input.value = "Instructor Name";
ContentInput2.textContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan."
function MLASelect(){
format = "MLA";
update();
}
function APASelect(){
format = "APA";
update();
}

function generate(){
	
	if(format === "MLA"){
		const time2 = new Date();
		let month = time2.getMonth() + 1;
		let day = String(time2.getDate()).padStart(2, '0');
		let year = time2.getFullYear();
		switch (month) {
		case 1:
			month = "Janurary";
			break;
		case 2:
			month = "Feburary";
			break;
		case 3:
			month = "March";
			break;
		case 4:
			month = "April";
			break;
		case 5:
			month = "May";
			break;
		case 6:
			month = "June";
			break;
		case 7:
			month = "July";
			break;
		case 8:
			month = "August";
			break;
		case 9:
			month = "September";
			break;
		case 10:
			month = "October";
			break;
		case 11:
			month = "November";
			break;
		case 12:
			month = "December";
			break;
		}
		InstructorName2.style.margin = "0 0 16px 0";
		Time2.style.margin = "0 0 16px 0";
		Name2.style.margin = "0 0 16px 0";
		CourseName2.style.margin = "0 0 16px 0";
		title2.style.margin = "16px 0"; 
		Content.style.margin = "0 0 16px 0";
		InstructorName2.style.textIndent = "2em";
		Time2.style.textIndent = "2em";
		InstructorName2.style.lineHeight = "2";
		Time2.style.lineHeight = "2";
		Name2.style.textIndent = "2em";
		Name2.style.lineHeight = "2";
		Content.style.textIndent = "2em";
		CourseName2.style.textIndent = "2em";
		Content.style.lineHeight = "2";
		CourseName2.style.lineHeight = "2";
		title2.style.lineHeight = "2";
		title2.style.fontFamily = "Times New Roman";
		title2.style.fontSize = "12pt";
		Time2.style.fontSize = "12pt";
		Name2.style.fontSize = "12pt";
		Content.style.fontSize = "12pt";
		CourseName2.style.fontSize = "12pt";
		title2.style.textAlign = "center";
		const titleText = Title.value;
		const contentText = ContentInput.value;
		const NameText = NameInput.value;
		const InstructorNameText = InstructorNameInput.value;
		const CourseNameText = CourseNameInput.value;
		const TimeText = `${day} ${month} ${year}`;
		title2.textContent = titleText;
		Name2.textContent = NameText;
		InstructorName2.textContent = InstructorNameText;
		CourseName2.textContent = CourseNameText;
		Time2.textContent = TimeText;
		if(title2.value == ""){
		title2.value = "Title of your Report";	
		}
		if(Name2.value == ""){
		Name2.value = "Sample Name";	
		}
		if(InstructorName2.value == ""){
		InstructorName2.value = "Professor Name";	
		}
		if(CourseName2.value == ""){
		CourseName2.value = "Subject Name";	
		}
		if(Content.textContent == ""){
		Content.textContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.";	
		}
		
		const rawText = document.getElementById("ContentInput").value;

		const paragraphs = rawText.split(/\n\s*\n/);

		const formatted = paragraphs.map(p => `&emsp;&emsp;${p.trim()}<br>`).join("");

		document.getElementById("Content").innerHTML = formatted;

	} 
	if(format === "APA"){
		const time2 = new Date();
		let month = time2.getMonth() + 1;
		let day = String(time2.getDate()).padStart(2, '0');
		let year = time2.getFullYear();
		switch (month) {
		case 1:
			month = "Janurary";
			break;
		case 2:
			month = "Feburary";
			break;
		case 3:
			month = "March";
			break;
		case 4:
			month = "April";
			break;
		case 5:
			month = "May";
			break;
		case 6:
			month = "June";
			break;
		case 7:
			month = "July";
			break;
		case 8:
			month = "August";
			break;
		case 9:
			month = "September";
			break;
		case 10:
			month = "October";
			break;
		case 11:
			month = "November";
			break;
		case 12:
			month = "December";
			break;
		}
		const titleText = Title2.value;
		const NameText = NameInput2.value;
		const DepartmentNameText = DepartmentNameInput.value;
		const UniversityNameText = UniversityNameInput.value;
		const CourseNumberText = CourseNumberInput.value;
		const CourseNameText = CourseName2Input.value;
		const InstructorName2A = InstructorName2Input.value;
		const Date2Text = `${day} ${month} ${year}`;
		title3.textContent = titleText;
		Name3.textContent = NameText;
		DepartmentUniversityName.textContent = `${DepartmentNameText}, ${UniversityNameText}`
		CourseNumberName.textContent = `${CourseNumberText}, ${CourseNameText}`
		InstructorNameInput2.textContent = InstructorName2A;
		Date2.textContent = Date2Text;
		if(UniversityNameText == "" && DepartmentNameText == "" ){
		DepartmentUniversityName.textContent = "";	
		} else if(UniversityNameText == "" && DepartmentNameText !== "" ){
		DepartmentUniversityName.textContent = DepartmentNameText;
		} else if(UniversityNameText !== "" && DepartmentNameText == "" ){
		DepartmentUniversityName.textContent = UniversityNameText;
		}
		if(CourseNumberText == "" && CourseNameText == "" ){
		CourseNumberName.textContent = "";	
		} else if(CourseNumberText == "" && CourseNameText !== "" ){
		CourseNumberName.textContent = CourseNameText;
		} else if(CourseNumberText !== "" && CourseNameText == "" ){
		CourseNumberName.textContent = CourseNumberText;
		}
		if(Name2.value == ""){
		Name2.value = "Sample Name";	
		}
		const rawText = document.getElementById("ContentInput2").value;

		const paragraphs = rawText.split(/\n\s*\n/);

		const formatted = paragraphs.map(p => `&emsp;&emsp;${p.trim()}<br>`).join("");

		document.getElementById("Content2").innerHTML = formatted;

	}
}

update();