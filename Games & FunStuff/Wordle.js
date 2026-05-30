const wordleBoard = document.getElementById("wordleBoard");
const words = [
	"array",
	"apple",
	"allow",
	"alley",
	"angry",
	"awoke",
	"atone",
	"adult",
	"adapt",
	"aisle",
	"above",
	"adept",
	"agile",
	"adore",
	"ahead",
	"angle",
	"angel",
	"about",
	"adieu",
	"acted",
	"azure",
	"audio",
	"arrow",
	"again",
	"alarm",
	"after",
	"alien",
	"among",
	"award",
	"abide",
	"apply",
	"alone",
	"album",
	"atoll",
	"aloof",
	"ankle",
	"actor",
	"build",
	"bacon",
	"badge",
	"baked",
	"baker",
	"blend",
	"burnt",
	"batch",
	"blunt",
	"bulky",
	"blaze",
	"broil",
	"basil",
	"briar",
	"brunt",
	"banjo",
	"basic",
	"brave",
	"blush",
	"bread",
	"bunny",
	"barge",
	"bossy",
	"bluff",
	"built",
	"bunch",
	"beach",
	"brief",
	"bring",
	"comes",
	"class",
	"clear",
	"crypt",
	"cried",
	"crust",
	"could",
	"crash",
	"child",
	"chord",
	"click",
	"drive",
	"drove",
	"dutch",
	"dream",
	"drink",
	"drank",
	"demon",
	"dance",
	"death",
	"depth",
	"dowdy",
	"eager",
	"eagle",
	"early",
	"eater",
	"epoch",
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
	"faith",
	"first",
	"froze",
	"frost",
	"funny",
	"frame",
	"flown",
	"fella",
	"grief",
	"guess",
	"group",
	"grape",
	"gamer",
	"games",
	"genre",
	"ghost",
	"grave",
	"geese",
	"goose",
	"guage",
	"genie",
	"glass",
	"globe",
	"girth",
	"godly",
	"grace",
	"grill",
	"grind",
	"gravy",
	"guard",
	"green",
	"gaunt",
	"gripe",
	"grown",
	"going",
	"guild",
	"glaze",
	"goner",
	"graph",
	"happy",
	"hello",
	"hairy",
	"heart",
	"hobby",
	"heath",
	"hitch",
	"house",
	"hippo",
	"image",
	"issue",
	"irony",
	"idiom",
	"irish",
	"itchy",
	"intro",
	"joint",
	"japan",
	"jetty",
	"joust",
	"karma",
	"knife",
	"knock",
	"learn",
	"label",
	"light",
	"laser",
	"labor",
	"lemon",
	"lousy",
	"lucky",
	"lanes",
	"loser",
	"might",
	"match",
	"music",
	"monad",
	"mouth",
	"magma",
	"magic",
	"movie",
	"mourn",
	"money",
	"melon",
	"month",
	"moose",
	"metal",
	"medal",
	"motel",
	"mummy",
	"moldy",
	"moved",
	"mason",
	"noisy",
	"noise",
	"naive",
	"niche",
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
	"parse",
	"phone",
	"prime",
	"place",
	"prase",
	"pause",
	"pizza",
	"paint",
	"polar",
	"party",
	"pitch",
	"paper",
	"point",
	"pines",
	"paths",
	"pumps",
	"power",
	"parch",
	"paste",
	"peach",
	"query",
	"quest",
	"quilt",
	"queen",
	"quote",
	"queer",
	"right",
	"reach",
	"rhyme",
	"react",
	"radio",
	"ranch",
	"rabid",
	"roses",
	"regeal",
	"roads",
	"rough",
	"runes",
	"rebel",
	"ruler",
	"rusty",
	"ratio",
	"reefs",
	"sight",
	"state",
	"seize",
	"stash",
	"solid",
	"scare",
	"sleep",
	"slept",
	"spine",
	"stare",
	"solar",
	"sunny",
	"satyr",
	"stale",
	"sniff",
	"story",
	"slope",
	"snare",
	"spade",
	"spare",
	"space",
	"snort",
	"since",
	"speed",
	"shout",
	"share",
	"swiss",
	"swift",
	"slurp",
	"sweep",
	"shall",
	"slime",
	"slice",
	"sooth",
	"shake",
	"spoon",
	"sever",
	"smell",
	"stick",
	"stuck",
	"storm",
	"there",
	"taunt",
	"tulpa",
	"taste",
	"teach",
	"thank",
	"think",
	"three",
	"terse",
	"trace",
	"touch",
	"tawny",
	"these",
	"thigh",
	"titan",
	"twist",
	"tubal",
	"tract",
	"trust",
	"tumor",
	"tacit",
	"their",
	"trick",
	"thing",
	"trees",
	"track",
	"trash",
	"truck",
	"urban",
	"usurp",
	"ultra",
	"usual",
	"under",
	"utter",
	"vowel",
	"voice",
	"visit",
	"vault",
	"vapor",
	"valve",
	"vodka",
	"vegan",
	"venom",
	"video",
	"value",
	"volia",
	"while",
	"wrong",
	"world",
	"would",
	"which",
	"worst",
	"write",
	"whole",
	"white",
	"weary",
	"water",
	"women",
	"wrote",
	"widen",
	"whale",
	"wheat",
	"worry",
	"waste",
	"young",
	"yacht",
	"zebra",
	"zones",
	"zoned",
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
			if(oldColor === 'green'){
				return;
			}
			
			if(oldColor === 'yellow' && color !== 'green'){
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




