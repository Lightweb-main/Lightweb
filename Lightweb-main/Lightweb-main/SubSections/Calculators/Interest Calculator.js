const simpleInterestDiv = document.getElementById("simpleInterestDiv");
const simpleInterestPrincipalInput = document.getElementById("simpleInterestPrincipalInput");
const simpleInterestRateOfInterestInput = document.getElementById("simpleInterestRateOfInterestInput");
const simpleInterestTimeInput = document.getElementById("simpleInterestTimeInput");
const simpleInterestDisplay = document.getElementById("simpleInterestDisplay");
const simpleInterestBtn = document.getElementById("simpleInterestBtn");
const simpleInterestSelectBtn = document.getElementById("simpleInterestSelectBtn");
const simpleInterestTimeSpanInput = document.getElementById("simpleInterestTimeSpanInput");

const compoundInterestDiv = document.getElementById("compoundInterestDiv");
const compoundInterestPrincipalInput = document.getElementById("compoundInterestPrincipalInput");
const compoundInterestRateOfInterestInput = document.getElementById("compoundInterestRateOfInterestInput");
const compoundInterestTimeInput = document.getElementById("compoundInterestTimeInput");
const compoundInterestDisplay = document.getElementById("compoundInterestDisplay");
const compoundInterestBtn = document.getElementById("compoundInterestBtn");
const compoundInterestSelectBtn = document.getElementById("compoundInterestSelectBtn");
const compoundInterestTimeSpanInput = document.getElementById("compoundInterestTimeSpanInput");


let interestType = 1;
setInterval(update, 100);

simpleInterestSelectBtn.addEventListener("click", function(){
	interestType = 1;
});

compoundInterestSelectBtn.addEventListener("click", function(){
	interestType = 2;
});

function update(){
	simpleInterestDiv.style.display = "none";
	compoundInterestDiv.style.display = "none";
	
	if(interestType == 1){
		simpleInterestDiv.style.display = "block";
	} else if(interestType == 2) {
		compoundInterestDiv.style.display = "block";
	}
}

simpleInterestBtn.addEventListener("click", function(){
	if(!isNaN(simpleInterestPrincipalInput.value) && 
	   !isNaN(simpleInterestRateOfInterestInput.value) && 
	   !isNaN(simpleInterestTimeInput.value)){
		let timeSpan = 0;
		   switch(simpleInterestTimeSpanInput.value){
			   case "Year":
				timeSpan = 1;
				break;
			  case "HalfYear":
			    timeSpan = 2;
				break;
			  case "Quarter":
			    timeSpan = 4;
				break;
			  case "Monthly":
			    timeSpan = 12;
				break;
			  case "Week":
			    timeSpan = 52;
				break;
			  case "Day":
			    timeSpan = 365;
				break;
		   }
		let Money = simpleInterestPrincipalInput.value * (1 + (simpleInterestRateOfInterestInput.value / 100 / timeSpan * simpleInterestTimeInput.value));
		simpleInterestDisplay.textContent = `SI = ${Money.toFixed(3)}`;
	   }
});

compoundInterestBtn.addEventListener("click", function(){
	if(!isNaN(compoundInterestPrincipalInput.value) && 
	   !isNaN(compoundInterestRateOfInterestInput.value) && 
	   !isNaN(compoundInterestTimeInput.value)){
		   let timeSpan = 0;
		   switch(compoundInterestTimeSpanInput.value){
			   case "Annually":
				timeSpan = 1;
				break;
			  case "Semiannually":
			    timeSpan = 2;
				break;
			  case "Quarterly":
			    timeSpan = 4;
				break;
			  case "Bimonthly":
			    timeSpan = 6;
				break;
			  case "Monthly":
			    timeSpan = 12;
				break;
			  case "Semimonthly":
			    timeSpan = 24;
				break;
			  case "Biweekly":
			    timeSpan = 26;
				break;
			  case "Weekly":
			    timeSpan = 52;
				break;
			  case "Daily360":
			    timeSpan = 360;
				break;
			  case "Daily365":
			    timeSpan = 365;
				break;
		   }
		let A = compoundInterestPrincipalInput.value * Math.pow((1 + (compoundInterestRateOfInterestInput.value / 100) / timeSpan), timeSpan * compoundInterestTimeInput.value);
		compoundInterestDisplay.textContent = `A = ${A.toFixed(3)}`;
	}
});