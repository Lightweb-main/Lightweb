const wordleBoard = document.getElementById("wordleBoard");
const words = [
	"array",
	"apple",
	"alley",
	"angry",
	"awoke",
	"atone",
	"adult",
	"adapt",
	"aisle",
	"adept",
	"agile",
	"adore",
	"ahead",
	"angle",
	"angel",
	"about",
	"audio",
	"arrow",
	"again",
	"atoll",
	"aloof",
	"actor",
	"build",
	"blush",
	"bunny",
	"barge",
	"built",
	"bunch",
	"beach",
	"brief",
	"bring",
	"clear",
	"crust",
	"could",
	"child",
	"drive",
	"drove",
	"dutch",
	"drink",
	"drank",
	"depth",
	"eager",
	"eagle",
	"early",
	"earth",
	"elect",
	"erase",
	"elope",
	"email",
	"empty",
	"enjoy",
	"enact",
	"flask",
	"funky",
	"first",
	"funny",
	"frame",
	"flown",
	"grief",
	"guess",
	"group",
	"grape",
	"gamer",
	"genre",
	"ghost",
	"geese",
	"goose",
	"guage",
	"genie",
	"glass",
	"globe",
	"godly",
	"grace",
	"grill",
	"grind",
	"guard",
	"gripe",
	"grown",
	"going",
	"goner",
	"graph",
	"happy",
	"hello",
	"heath",
	"image",
	"joint",
	"karma",
	"learn",
	"might",
	"monad",
	"mouth",
	"month",
	"moose",
	"moved",
	"night",
	"novel",
	"often",
	"offer",
	"oasis",
	"occur",
	"ocean",
	"onset",
	"other",
	"otter",
	"pride",
	"purse",
	"pause",
	"pitch",
	"point",
	"query",
	"quest",
	"quote",
	"right",
	"react",
	"roses",
	"rusty",
	"ratio",
	"sight",
	"state",
	"seize",
	"stash",
	"solid",
	"scare",
	"stare",
	"slope",
	"snare",
	"spade",
	"spare",
	"since",
	"share",
	"swiss",
	"swift",
	"slurp",
	"slime",
	"sooth",
	"shake",
	"spoon",
	"smell",
	"stuck",
	"there",
	"tulpa",
	"taste",
	"thank",
	"terse",
	"trace",
	"touch",
	"their",
	"trick",
	"trash",
	"truck",
	"urban",
	"usurp",
	"vowel",
	"visit",
	"vapor",
	"video",
	"while",
	"wrong",
	"world",
	"would",
	"which",
	"write",
	"whole",
	"white",
	"weary",
	"water"
]

const wordsUsed = [];

const numberOfGuesses = 6;
let guessesRemaining = 6;
let nextLetter = 0;
let currentGuess = [];
let rightGuessString = words[Math.floor(Math.random() * words.length)];

const grey = "#d5d5d5";
const yellow = "#f6f9b6";
const green = "#a3eda8";

function generate(){
	for(let i = 0; i < numberOfGuesses; i++){
		let row = document.createElement("div");
		row.className = "rows";
		
		for(let j = 0; j < 5; j++){
			let letterSquare = document.createElement("div");
			letterSquare.className = "letter";
			row.appendChild(letterSquare);
		}
		
		wordleBoard.appendChild(row);
	}
}

document.addEventListener("keyup", (e) => {
	if(guessesRemaining === 0){
		return;
	}
	let pressedKey = String(e.key);
	if(pressedKey === "Backspace" && nextLetter !== 0){
		deleteLetter();
		return;
	}
	
	if(pressedKey === "Enter"){
		checkGuess();
		return;
	}
	
	let found = pressedKey.match(/[a-z]/gi)
	if(!found || found.length > 1){
		return;
	} else {
		insertLetter(pressedKey);
	}
});

document.getElementById("keyboard").addEventListener("click", (e) => {
	const target = e.target;
	
	if(!target.classList.contains("keyboardButton")){
		return;
	}
	
	let key = target.textContent;
	
	if(key === "DEL"){
		key = "Backspace";
	}
	
	document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}));
});

function insertLetter(pressedKey){
	if(nextLetter === 5){
		return;
	}
	
	pressedKey = pressedKey.toLowerCase();
	
	let row = document.getElementsByClassName("rows")[6 - guessesRemaining];
	let box = row.children[nextLetter];
	box.textContent = pressedKey;
	box.classList.add("boxFilled");
	currentGuess.push(pressedKey);
	nextLetter += 1;
}

function deleteLetter(){
	let row = document.getElementsByClassName("rows")[6 - guessesRemaining];
	let box = row.children[nextLetter - 1];
	box.textContent = "";
	box.classList.remove("boxFilled");
	currentGuess.pop();
	nextLetter -= 1;
}

function checkGuess(){
	let row = document.getElementsByClassName("rows")[6 - guessesRemaining];
	let guessString = "";
	let validGuess = "";
	let rightGuess = Array.from(rightGuessString);
	
	for (const val of currentGuess){
		guessString += val;
	}
	
	for(let i = 0; i < words.length; i++){
		if(guessString === words[i]){
			validGuess = true;
		}
	}
	
	if(validGuess == false){
		alert("Word is not present in the list");
		return;
	}
	
	if(guessString.length !== 5){
		alert("Word is not 5 characters");
	}
	
	if(guessString.length != 5 && !words.includes(guessString)){
		return;
	}
	
	if(wordsUsed.includes(guessString)){
		alert("Word has already been used.");
		return;
	}
	
	for(let i = 0; i < 5; i++){
		let letterColor = "";
		let box = row.children[i];
		let letter = currentGuess[i];
		
		let letterPosition = rightGuess.indexOf(currentGuess[i]);
		
		if(letterPosition === -1){
			letterColor = grey;
		} else {
			if(currentGuess[i] === rightGuess[i]){
				letterColor = green;
			} else {
				letterColor = yellow;
			}
			
			rightGuess[letterPosition] = "#"
		}
		let delay = 250 * i;
		setTimeout(() => {
			box.style.backgroundColor = letterColor
			shadeKeyBoard(letter, letterColor)
		}, delay);
	}
	if(guessString === rightGuessString){
		alert("Amazing!");
		guessesRemaining = 0;
		return;
	} else {
		guessesRemaining -= 1;
		currentGuess = [];
		nextLetter = 0;
		
		if(guessesRemaining === 0){
			alert(`Bad Luck... The word was ${rightGuessString}`);
		}
	}
	
	wordsUsed.push(guessString);
}

function shadeKeyBoard(letter, color){
	for(const elem of document.getElementsByClassName("keyboardButton")){
		if(elem.textContent === letter){
			let oldColor = elem.style.backgroundColor;
			if(oldColor === green){
				return;
			}
			
			if(oldColor === yellow && color !== green){
				return;
			}
			
			elem.style.backgroundColor = color;
			break;
		}
	}
}

function reset(){
guessesRemaining = numberOfGuesses;
    nextLetter = 0;
    currentGuess = [];
    rightGuessString = words[Math.floor(Math.random() * words.length)];

    const rows = document.getElementsByClassName("rows");
    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < rows[i].children.length; j++){
            rows[i].children[j].textContent = "";
            rows[i].children[j].style.backgroundColor = "";
            rows[i].children[j].classList.remove("boxFilled");
        }
    }

    for(const elem of document.getElementsByClassName("keyboardButton")){
        elem.style.backgroundColor = "";
    }
	
	for(let element of wordsUsed){
		wordsUsed.pop();
	}
}

generate();


