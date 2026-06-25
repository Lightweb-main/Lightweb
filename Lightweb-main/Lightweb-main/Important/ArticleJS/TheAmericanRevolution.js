
const unorderedDiv = document.getElementById("unorderedDiv");
const orderedDiv = document.getElementById("orderedDiv");
const toggleChronologicalOrderCheckbox = document.getElementById("toggleChronologicalOrderCheckbox");
	
document.addEventListener("DOMContentLoaded", function (){
	setTimeout(function(){
		const orderedQuery = Array.from(document.getElementById("unorderedDiv").querySelectorAll(".ordered"));
		
		orderedQuery.forEach((element) => {
			orderedDiv.appendChild(element.cloneNode(true));
		});
	}, 250);

});

setInterval(update, 100);

function update(){
	unorderedDiv.style.display = "none";
	orderedDiv.style.display = "none";
	if(toggleChronologicalOrderCheckbox.checked === true){
		 orderedDiv.style.display = "block";
	} else if(toggleChronologicalOrderCheckbox.checked === false){
		 unorderedDiv.style.display = "block";
	}
};