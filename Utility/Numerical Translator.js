const translateBtn = document.getElementById("translateBtn");
const downloadTxt = document.getElementById("downloadTxt");


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
	
	
	let inputValue = input.value;
	
	
	if(inputValue.length > 0){
		if(inputNum.value === "text"){
			if(outputNum.value === "decimal"){
				let ascii = inputValue.split("").map(char => char.charCodeAt(0));
				ascii = ascii.join(" ");
				output.innerHTML = ascii;
			}
		
			if(outputNum.value === "hexadecimal"){
				let ascii = inputValue.split("").map(char => char.charCodeAt(0).toString(16));
				ascii = ascii.join(" ");
				output.innerHTML = ascii;
			}
		
			if(outputNum.value === "binary"){
				let ascii = inputValue.split("").map(char => char.charCodeAt(0).toString(2));
				ascii = ascii.join(" ");
				output.innerHTML = ascii;
			}
		
			if(outputNum.value === "octal"){
				let ascii = inputValue.split("").map(char => char.charCodeAt(0).toString(8));
				ascii = ascii.join(" ");
				output.innerHTML = ascii;
			}
		}
	}
}