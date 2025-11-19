setInterval(update, 10);

const latinAlphabetSet = document.getElementById("latinAlphabetSet");
const romanNumeralsSet = document.getElementById("romanNumeralsSet");
const greekAlphabetSet = document.getElementById("greekAlphabetSet");
const spanishTonedAlphabetSet = document.getElementById("spanishTonedAlphabetSet");
const mathSymbolsSet = document.getElementById("mathSymbolsSet");

let set = 0;
function update(){
	latinAlphabetSet.style.display = "none";
	HinduArabicNumberSet.style.display = "none";
	greekAlphabetSet.style.display = "none";
	spanishTonedAlphabetSet.style.display = "none";
	mathSymbolsSet.style.display = "none";
	
	switch(set){
		case 1:
			latinAlphabetSet.style.display = "block";
		break;
		
		case 2:
			HinduArabicNumberSet.style.display = "block";
		break;
		case 3:
			greekAlphabetSet.style.display = "block";
		break;
		case 4:
			spanishTonedAlphabetSet.style.display = "block";
		break;
		case 5:
			mathSymbolsSet.style.display = "block";
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