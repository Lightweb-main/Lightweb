input.addEventListener("change", inputGiven);
convertButton.addEventListener("click", convert);

function inputGiven(){
	const file = input.files[0];
	let fileTxt = new FileReader();
	
	fileTxt.onload = function(e){
		fileContents.textContent = e.target.result.split(/\r?\n/).join("\n");
	}
	
	fileTxt.readAsText(file);
}

function convert(){
	const blob = new Blob([fileContents.textContent], {type: convertType.value});
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = document.getElementById("input").files[0].name.substring(0, document.getElementById("input").files[0].name.lastIndexOf("."));
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}