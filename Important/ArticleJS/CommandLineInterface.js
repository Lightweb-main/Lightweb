
let curLang = "";

changingDivLang.addEventListener("change", update);

function update(){
	curLang = changingDivLang.value;
	batchDiv.style.display = "none";
	bashDiv.style.display = "none";
	switch(curLang){
		case "Batch":
			batchDiv.style.display = "block";
		break;
		
		case "Bash":
			bashDiv.style.display = "block";
		break;
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const allP = document.querySelectorAll("p");
	allP.forEach( (e) => {
		const txt = e.textContent;
		
		const allCommands = [
			"DIR",
			"ECHO",
			"PAUSE",
			"SET",
			"START",
		]
		
		const commandRegex = new RegExp(`(?:${allCommands.join("|")})`, "g");
		
		let newTxt = txt.replaceAll(/@ECHO/g, match => {
			return `<span class="at">@</span><span class="command">${match.substring(1, match.length)}</span>`;
		});
		
		newTxt = newTxt.replaceAll(/(?<!%)\bCD\b(?!%)/g, match => {
			return `<span class="command">CD</span>`;
		});
		
		
		newTxt = newTxt.replaceAll(commandRegex, match => {
			return `<span class="command">${match}</span>`;
		});
		
		newTxt = newTxt.replaceAll(/%([a-zA-Z0-9_]+)%/g, (match, word) => {
			return `<span class="variable">%${word}%</span>`;
		});
		
		e.innerHTML = newTxt;
	});
});


update();