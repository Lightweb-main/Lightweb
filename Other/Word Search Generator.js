const container = document.getElementById("container");



let words = [
	["w", "o", "r", "d", "s"],
	["g", "u", "e", "s", "t"],
	["e", "a", "r", "t", "h"],
	["p", "l", "u", "t", "o"],
	["g", "l", "i", "d", "e"],
]

let wordArraySize = 15;
let wordSearchArray = new Array(wordArraySize * wordArraySize).fill(null);
let filterLetters = [];


let i = 0;
let wordPos = [];
for(let word of words){
	
	word = word.join("").toUpperCase();
	const wordLength = word.length;
	let fixed = false;
	let row;
	let col;
	while(!fixed){
		row = Math.floor(Math.random() * wordArraySize);
		col = Math.floor(Math.random() * (wordArraySize - wordLength));
		
		fixed = true;
		for(let i = 0; i < wordLength; i++){
			let index = row * wordArraySize + (col + i);
			if(wordSearchArray[index] !== null && wordSearchArray[index] !== word[i]){
				fixed = false;
				break;
			}
		}
	}
	
	for (let i = 0; i < wordLength; i++) {
		
		const index = (row + i) * wordArraySize + (col + i);
		wordSearchArray[index] = word[i];
		wordPos.push(index);
    }
	
}
		
const scrabble = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");

i = 0;
while (i < wordArraySize * wordArraySize) {
	if(wordSearchArray[i] === null){
		wordSearchArray[i] = scrabble[Math.floor(Math.random() * scrabble.length)];
    }
	i++;
}


for(let i = 0; i < filterLetters.length; i++){
	let j = Math.floor(Math.random() * (i + 1));
	[filterLetters[i], filterLetters[j]] = [filterLetters[j], filterLetters[i]];
	
}




container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${15}, ${65}px)`;
container.style.gridTemplateRows = `repeat(${15}, ${65}px)`;

let letterElements = [];
for (let i = 0; i < wordSearchArray.length; i++) {
    const letterContainer = document.createElement("p");
    letterContainer.textContent = wordSearchArray[i];
    letterContainer.style.textAlign = "center";
    letterContainer.style.fontSize = "25px";
    container.appendChild(letterContainer);
	letterElements.push(letterContainer);
}

for(const index of wordPos){
	letterElements[index].classList.add("wordFound");
}