const translateBtn = document.getElementById("translateBtn");
const downloadTxt = document.getElementById("downloadTxt");

const morseMap = {
	"A" : ".-", "B" : "-...", "C" : "-.-.",
	"D" : "-..", "E" : ".", "F" : "..-.",
	"G" : "--.", "H" : "....", "I" : "..",
	"J" : ".---", "K" : "-.-", "L" : ".-..",
	"M" : "--", "N" : "-.", "O" : "---",
	"P" : ".--.", "Q" : "--.-", "R" : ".-.",
	"S" : "...", "T" : "-",
	"U" : "..-", "V" : "...-", "W" : ".--",
	"X" : "-..-", "Y" : "-.--", "Z" : "--..",
	" " : "/", "." : ".-.-.-", "," : "--..--", "-" : "-....-", "?" : "..--..", "!" : "-.-.--", "&" : ".-...", "(" : "-.--.", ")" : "-.--.-", "@" : ".--.-.",
	"1" : ".----", "2" : "..---", "3" : "...--", "4" : "....-", "5" : ".....", "6" : "-....", "7" : "--...", "8" : "---..", "9" : "----.", "0" : "-----", 
}

const brailleMap = {
	"A" : String.fromCharCode(10241), "B" : String.fromCharCode(10243), "C" : String.fromCharCode(10249),
	"D" : String.fromCharCode(10265), "E" : String.fromCharCode(10257), "F" : String.fromCharCode(10251),
	"G" : String.fromCharCode(10267), "H" : String.fromCharCode(10259), "I" : String.fromCharCode(10250),
	"J" : String.fromCharCode(10266), "K" : String.fromCharCode(10245), "L" : String.fromCharCode(10247),
	"M" : String.fromCharCode(10253), "N" : String.fromCharCode(10269), "O" : String.fromCharCode(10261),
	"P" : String.fromCharCode(10255), "Q" : String.fromCharCode(10271), "R" : String.fromCharCode(10263),
	"S" : String.fromCharCode(10254), "T" : String.fromCharCode(10270), "U" : String.fromCharCode(10277),
	"V" : String.fromCharCode(10279), "W" : String.fromCharCode(10298), "X" : String.fromCharCode(10285),
	"Y" : String.fromCharCode(10301), "Z" : String.fromCharCode(10293)
}

const A1Z26Map = {
	"A" : "1", "B" : "2", "C" : "3", "D" : "4", "E" : "5", "F" : "6",
	"G" : "7", "H" : "8", "I" : "9", "J" : "10", "K" : "11", "L" : "12",
	"M" : "13", "N" : "14", "O" : "15", "P" : "16", "Q" : "17", "R" : "18",
	"S" : "19", "T" : "20", "U" : "21", "V" : "22", "W" : "23", "X" : "24",
	"Y" : "25", "Z" : "26"
}

const reverseMorseMap = Object.fromEntries(Object.entries(morseMap).map(([i, j]) => [j, i]));
const reverseA1Z26Map = Object.fromEntries(Object.entries(A1Z26Map).map(([i, j]) => [j, i]));
const reverseBrailleMap = Object.fromEntries(Object.entries(brailleMap).map(([i, j]) => [j, i]));


translateBtn.addEventListener('click', function() {
	translate();
});

downloadTxt.addEventListener('click', function() {
	const link = document.createElement('a');
	link.href = URL.createObjectURL(new Blob([output.value], {type: "text/plain"}));
	link.download = "lightwebNumberTranslate.txt";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(link.href);
});

function translate(){
	const input = document.getElementById("input");
	const output = document.getElementById("output");
	const inputNum = document.getElementById("inputNum");
	const outputNum = document.getElementById("outputNum");
	
	
	let inputValue = input.value.trim();
	
	if(splittingAmount.value != 0){
		inputValue = inputValue.match(new RegExp(`.{1,${parseInt(splittingAmount.value, 10)}}`, "g")).join(" ");
	}
	
	let inputArray = inputValue.split(/\s+/);
	
	let outputValue = "";
	
	
	if(inputValue.length > 0){
		if(inputNum.value === "text" ||
		   inputNum.value === "morseCode" ||
		   inputNum.value === "base64" ||
		   inputNum.value === "UTF-8" ||
		   inputNum.value === "reverseBinary" ||
		   inputNum.value === "A1Z26" ||
		   inputNum.value === "braille" 
		  ){
			  
			let decimals;
			if(inputNum.value === "text"){
			} else if(inputNum.value === "morseCode"){
				inputValue = inputValue.split(" ").map(letter => reverseMorseMap[letter] || "").join("");
			} else if(inputNum.value === "base64"){
				try {
					inputValue = atob(inputValue);
				} catch {
					outputValue = "Sorry an error occured during translation. Try typing in a different input or try translating at a different time.";
				}
			} else if(inputNum.value === "UTF-8"){
				const UTF8Decoder = new TextDecoder("utf-8");
				inputValue = UTF8Decoder.decode(new Uint8Array(inputValue.split(/\s+/).map(b => parseInt(b, 10))));
			} else if(inputNum.value === "reverseBinary"){
				inputValue = inputArray
				.map(bits => {
					const reversed = bits.split("").reverse().join("");
					return String.fromCharCode(parseInt(reversed, 2));
				})
				.join("");

			} else if(inputNum.value === "A1Z26"){
				inputValue = inputValue.split(" ").map(letter => reverseA1Z26Map[letter] || "").join("");
			} else if(inputNum.value === "braille"){
				inputValue = inputValue.split(" ").map(letter => reverseBrailleMap[letter] || "").join("");
			}
			decimals = inputValue.split("").map(c => c.charCodeAt(0));
			if(outputNum.value === "text"){
				outputValue = inputValue;
			} else if(outputNum.value === "morseCode"){
				outputValue = inputValue.split("").map(letter => morseMap[letter.toUpperCase()] || "").join(" ");
			} else if(outputNum.value === "base64"){
				outputValue = btoa(inputValue);
			} else if(outputNum.value === "UTF-8"){
				const UTF8Encoder = new TextEncoder();
				outputValue = Array.from(UTF8Encoder.encode(inputValue)).join(" ");
			} else if(outputNum.value === "reverseBinary"){
				outputValue = decimals.map(n => n.toString(2).padStart(8, "0").split("").reverse().join("")).join(" ");
			} else if(outputNum.value === "A1Z26"){
				outputValue = inputValue.split("").map(letter => A1Z26Map[letter.toUpperCase()] || "").join(" ");
			} else if(outputNum.value === "braille"){
				outputValue = inputValue.split("").map(letter => brailleMap[letter.toUpperCase()] || "").join(" ");
			} else {
				let base;
				switch(outputNum.value){
					case "binary" : base = 2; break;
					case "octal" : base = 8; break;
					case "decimal" : base = 10; break;
					case "hexadecimal" : base = 16; break;
					case "base30" : base = 30; break;
					case "base36" : base = 36; break;
				}
				outputValue = decimals.map(n => n.toString(base)).join(" ");
			}
		} else {
			let base;
			let base2;
			switch(inputNum.value){
				case "binary" : base = 2; break;
				case "octal" : base = 8; break;
				case "decimal" : base = 10; break;
				case "hexadecimal" : base = 16; break;
				case "base30" : base = 30; break;
				case "base36" : base = 36; break;
			}
			switch(outputNum.value){
				case "binary" : base2 = 2; break;
				case "octal" : base2 = 8; break;
				case "decimal" : base2 = 10; break;
				case "hexadecimal" : base2 = 16; break;
				case "base30" : base2 = 30; break;
				case "base36" : base2 = 36; break;
			}
			
			let decimals = inputArray.map(letter => parseInt(letter, base));
			
			
			
			if(outputNum.value === "text"){
				outputValue = decimals.map(n => String.fromCharCode(n)).join("");
			} else if(outputNum.value === "morseCode"){
				outputValue = decimals.map(n => String.fromCharCode(n)).join("");
				outputValue = outputValue.split("").map(letter => morseMap[letter.toUpperCase()] || "").join(" ");
			} else {
				outputValue = decimals.map(n => n.toString(base2)).join(" ");
			}
		}
	}
	
	output.value = outputValue;
}

switchBtn.addEventListener("click", () => {
	let value = inputNum.value;
	let value2 = outputNum.value;
	
	inputNum.value = value2;
	outputNum.value = value;

});