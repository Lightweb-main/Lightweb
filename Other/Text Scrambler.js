const originalText = document.getElementById("originalText");
const scrambledText = document.getElementById("scrambledText");



originalText.value = localStorage.getItem('textScramblerOriginalText') || "";
scrambledText.value = localStorage.getItem('textScramblerScrambledText') || "";

setInterval(update, 10);
function update(){
	originalText.value = localStorage.getItem("textScramblerOriginalText");
	scrambledText.value = localStorage.getItem("textScramblerScrambledText");
}
document.addEventListener("DOMContentLoaded", () => {
	originalText.value = localStorage.getItem("textScramblerOriginalText");
	scrambledText.value = localStorage.getItem("textScramblerScrambledText");
	

originalText.addEventListener("input", () => {
    localStorage.setItem("textScramblerOriginalText", originalText.value);
});

scrambledText.addEventListener("input", () => {
    localStorage.setItem("textScramblerScrambledText", scrambledText.value);
});

});

const pronoun = [
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
	let originalTextContents = originalText.value
	randomInt = Math.floor(Math.random() * pronoun.length);
	randomInt2 = Math.floor(Math.random() * pronoun.length);
	
	let scrambledText1 = originalTextContents.replace(pronoun[randomInt], pronoun[randomInt2]); 
	for(let i = 0; i < 7000; i++){
	originalTextContents = localStorage.setItem("textScramblerOriginalText", originalText.value);
	
	randomInt = Math.floor(Math.random() * pronoun.length);
	randomInt2 = Math.floor(Math.random() * pronoun.length);
	
	scrambledText1 = scrambledText1.replace(pronoun[randomInt], pronoun[randomInt2]); 
	textScramblerScrambledText = localStorage.setItem("textScramblerScrambledText", scrambledText1);
	}
	
	
}


function exit(){
	window.location = "../MainPages/Other.html";
}