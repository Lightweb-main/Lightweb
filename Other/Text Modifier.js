const originalText = document.getElementById("originalText");
const scrambledText = document.getElementById("scrambledText");


const originalText2 = document.getElementById("originalText2");
const degrammarifiedText = document.getElementById("degrammarifiedText");


const textScrambler = document.getElementById("textScrambler");
const textDegrammarify = document.getElementById("textDegrammarify");
const textCaseAlternator = document.getElementById("textCaseAlternator");

const textScramblerSelectBtn = document.getElementById("textScramblerSelectBtn");
const textDegrammarifierSelectBtn = document.getElementById("textDegrammarifierSelectBtn");
const textCaseAlternatorSelectBtn = document.getElementById("textCaseAlternatorSelectBtn");



originalText.value = localStorage.getItem('textModifierOriginalText') || "";
scrambledText.value = localStorage.getItem('textModifierScrambledText') || "";

originalText2.value = localStorage.getItem('textModifierOriginalText2') || "";
degrammarifiedText.value = localStorage.getItem('textModifierDegrammaredText') || "";


originalText3.value = localStorage.getItem('textModifierOriginalText3') || "";
alternateCasesText.value = localStorage.getItem('textModifierAlternateCasesText') || "";

let mode = 0;

setInterval(update, 10);
function update(){
	
	textScrambler.style.display = "none";
	textDegrammarify.style.display = "none";
	textCaseAlternator.style.display = "none";
	
	if(mode == 1){
		textScrambler.style.display = "block";
	} else if(mode == 2){
		textDegrammarify.style.display = "block";
	} else if(mode == 3){
		textCaseAlternator.style.display = "block";
	}
}
document.addEventListener("DOMContentLoaded", () => {
	originalText.value = localStorage.getItem("textModifierOriginalText");
	scrambledText.value = localStorage.getItem("textModifierScrambledText");
	

	originalText.addEventListener("input", () => {
		localStorage.setItem("textModifierOriginalText", originalText.value);
	});

	scrambledText.addEventListener("input", () => {
		localStorage.setItem("textModifierScrambledText", scrambledText.value);
	});
	
	originalText2.addEventListener("input", () => {
		localStorage.setItem("textModifierOriginalText2", originalText2.value);
	});

	degrammarifiedText.addEventListener("input", () => {
		localStorage.setItem("textModifierDegrammaredText", degrammarifiedText.value);
	});
	
	originalText3.addEventListener("input", () => {
		localStorage.setItem("textModifierOriginalText3", originalText3.value);
	});

	alternateCasesText.addEventListener("input", () => {
		localStorage.setItem("textModifierAlternateCasesText", alternateCasesText.value);
	});

	textScramblerSelectBtn.addEventListener("click", () => {
		if(mode == 1){
			mode = 0;
		} else {
			mode = 1;
		}
	});
	
	textDegrammarifierSelectBtn.addEventListener("click", () => {
		if(mode == 2){
			mode = 0;
		} else {
			mode = 2;
		}
	});
	
	textCaseAlternatorSelectBtn.addEventListener("click", () => {
		if(mode == 3){
			mode = 0;
		} else {
			mode = 3;
		}
	});

});

const scribbleScrabble = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	".",
	"*",
	"!",
	"@",
	"#",
	"(",
	")",
	"<",
	">",
	"α",
	"β",
	"-",
	"+",
	";",
	":",
	",",
	"/",
	"^",
	"%",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"0",
	"~",
	"`",
	"|",
	"\\",
	"'",
	"±",
	"=",
	"Δ",
	"Ω",
	"Œ",
	"$",
	"θ",
	"Θ",
	"∞",
	"_",
	"á",
	"é",
	"í",
	"ñ",
	"ó",
	"ú",
	"ü",
	"€",
	"←",
	"→",
	"↑",
	"↓",
	"⇄",
	"↻",
	"↗",
	"↖",
	"↘",
	"↙",
	"°",
	"℃",
	"℉",
]



let randomInt;
let randomInt2;


function scramble(){
	let originalTextContents = originalText.value;
	randomInt = Math.floor(Math.random() * scribbleScrabble.length);
	randomInt2 = Math.floor(Math.random() * scribbleScrabble.length);
	
	let scrambledText1 = originalTextContents.replace(scribbleScrabble[randomInt], scribbleScrabble[randomInt2]); 
	for(let i = 0; i < 7000; i++){
	originalTextContents = localStorage.setItem("textModifierOriginalText", originalText.value);
	
	randomInt = Math.floor(Math.random() * scribbleScrabble.length);
	randomInt2 = Math.floor(Math.random() * scribbleScrabble.length);
	
	scrambledText1 = scrambledText1.replace(scribbleScrabble[randomInt], scribbleScrabble[randomInt2]); 
	textScramblerScrambledText = localStorage.setItem("textModifierScrambledText", scrambledText1);
	}
	
	originalText.value = localStorage.getItem('textModifierOriginalText') || "";
	scrambledText.value = localStorage.getItem('textModifierScrambledText') || "";
}

function degrammarify(){
	let originalTextContents = originalText2.value;
	let degrammifiedTextB = originalTextContents.split(' ');
	
	degrammifiedTextB = degrammifiedTextB.map((word) =>  {
		if(word === "I"){
			return "i";
		} else if(word.toLowerCase() === "could've"){
			return "could of";
		} else if(word.toLowerCase() === "effect"){
			if(Math.floor(Math.random() * 2) == 1){
				return "affect";
			}
		} else if(word.toLowerCase() === "affect"){
			if(Math.floor(Math.random() * 2) == 1){
				return "effect";
			}
		} else if(word.toLowerCase() === "who" || 
		          word.toLowerCase() === "whom" || 
				  word.toLowerCase() === "who's" || 
				  word.toLowerCase() === "whose"){
			switch(Math.floor(Math.random() * 3) + 1){
				case 1:
					return "who";
				break;
				
				case 2:
					return "whom";
				break;
				
				case 3:
					return "who's";
				break;
				
				case 4:
					return "whose";
				break;
			}
		} else if(word.toLowerCase() === "you" || 
		          word.toLowerCase() === "you'll" || 
				  word.toLowerCase() === "your" || 
				  word.toLowerCase() === "you're"){
			switch(Math.floor(Math.random() * 4) + 1){
				case 1:
					return "you";
				break;
				
				case 2:
					return "you'll";
				break;
				
				case 3:
					return "your";
				break;
				
				case 4:
					return "you're";
				break;
			}
	    } else if(word.toLowerCase() === "who"){
			if(Math.floor(Math.random() * 2) == 1){
				return "whom";
			}
		} else if(word === ","){
			if(Math.floor(Math.random() * 2) == 1){
				return ".";
			}
		} else if(word === "the"){
			if(Math.floor(Math.random() * 10) == 1){
				return "teh";
			}
		}

		return word;
	})
	
	degrammifiedTextA = degrammifiedTextB.join(' ').split('');
	degrammifiedTextA = degrammifiedTextA.map((character) => {
		if(character.toLowerCase() === "." ||
		   character.toLowerCase() === "," ||
		   character.toLowerCase() === "?" ||
		   character.toLowerCase() === "!"){
			switch(Math.floor(Math.random() * 4) + 1){
				case 1:
					return "?";
				break;
				
				case 2:
					return ".";
				break;
				
				case 3:
					return ",";
				break;
				
				case 4:
					return "!";
				break;
			}
		} else if(character.toLowerCase() === `'` || 
		          character.toLowerCase() === `"`){
			switch(Math.floor(Math.random() * 2) + 1){
				case 1:
					return "'";
				break;
				
				case 2:
					return `"`;
				break;
			}
		}
		
		return character;
	});
	degrammarifiedText.value = degrammifiedTextA.join(''); 
}

function alternateCase(){
	let originalTextContents = originalText3.value;
	let textCaseAlternatorOppositeSwitchingCheckbox = document.getElementById("textCaseAlternatorOppositeSwitchingCheckbox");
	
	let altText = originalTextContents.split('');
	let index = 0;
	altText = altText.map(chr => {
		index++;
		if(textCaseAlternatorOppositeSwitchingCheckbox.checked){
			if(index % 2 === 0){
				return chr.toUpperCase();
			} else {
				return chr.toLowerCase();
			}
		} else {
			if(index % 2 !== 0){
				return chr.toUpperCase();
			} else {
				return chr.toLowerCase();
			}
		}
	}).join('');
	console.log(altText);
	localStorage.setItem('textModifierAlternateCasesText', altText);
	originalText3.value = localStorage.getItem('textModifierOriginalText3') || "";
	alternateCasesText.value = localStorage.getItem('textModifierAlternateCasesText') || "";
}

function exit(){
	window.location = "../MainPages/Other.html";
}