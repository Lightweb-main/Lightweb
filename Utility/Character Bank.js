setInterval(update, 10);

const romanAlphabetSet = document.getElementById("romanAlphabetSet");
const romanNumeralsSet = document.getElementById("romanNumeralsSet");
const greekAlphabetSet = document.getElementById("greekAlphabetSet");

let set = 0;
function update(){
	romanAlphabetSet.style.display = "none";
	romanNumeralsSet.style.display = "none";
	greekAlphabetSet.style.display = "none";
	switch(set){
		case 1:
			romanAlphabetSet.style.display = "block";
		break;
		
		case 2:
			romanNumeralsSet.style.display = "block";
		break;
		case 3:
			greekAlphabetSet.style.display = "block";
		break;
	}
}

function switchSet(setNum){
	set = setNum;
}

function copy(character){
	console.log(character);
	navigator.clipboard.writeText(character);
	alert(`${character} has been successfully copied to the clipboard`);
}