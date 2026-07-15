let data = [[], []];
let csv;

button1.addEventListener("click", () => {
	document.getElementById("div1").style.display = "block";
	document.getElementById("div2").style.display = "none";
});

button2.addEventListener("click", () => {
	document.getElementById("div1").style.display = "none";
	document.getElementById("div2").style.display = "block";
});

function convert(type){
	data = [[], []];
	
	if(type == "text"){
		if(document.getElementById("textInput").value.trim().length <= 0){
			alert("Text cannot be empty");
			return;
		}
		csv = document.getElementById("textInput").value.trim().split(/r?\n/).map(line => line.split(","));
		data[0] = csv[0];
		for(let i = 1; i < csv.length; i++){
			data[1].push(csv[i]);
		}
		
		generate(data, "text");
	} else if(type == "file"){
		if(document.getElementById("fileInput").files[0].type != "text/csv"){
			alert("File can only be a .csv (comma-seperated values) file.");
			return;
		}
		
		csvFiles();
	}
}

async function csvFiles(){
	csv = await document.getElementById("fileInput").files[0].text();
	const csvA = csv.split("\n").map(text => text.split(","));
	
	data[0] = csvA[0];
	for(let i = 1; i < csvA.length; i++){
		data[1].push(csvA[i]);
	}
	console.log(data);
	generate(data, "file");
}

function generate(csv, type){
	document.getElementById("CSVTable").innerHTML = "";
	document.getElementById("CSVTable").appendChild(document.createElement("thead"));
	document.getElementById("CSVTable").querySelector("thead").appendChild(document.createElement("tr"));
	
	if(type == "text"){
		for(const value of csv[0]){
			const th = document.createElement("th");
			th.textContent = value;
			document.getElementById("CSVTable").querySelector("thead").querySelector("tr").appendChild(th);
		}
		for(const value1 of csv[1]){
			console.log(value1);
			const tr = document.createElement("tr");
			document.getElementById("CSVTable").appendChild(tr);
			for(const value2 of value1){
				const td = document.createElement("td");
				td.textContent = value2;
				tr.appendChild(td);
			}
		}
	} else if(type == "file"){
		for(const value of csv[0]){
			const th = document.createElement("th");
			th.textContent = value;
			document.getElementById("CSVTable").querySelector("thead").querySelector("tr").appendChild(th);
		}
		
		for(let i = 1; i < csv.length; i++){
			for(const value1 of csv[i]){
				const tr = document.createElement("tr");
				document.getElementById("CSVTable").appendChild(tr);
				for(const value2 of value1){
					const td = document.createElement("td");
					td.textContent = value2;
					tr.appendChild(td);
				}
			}
		}
	}
	
	
}

/*

const blob = new Blob([csv], {type: "text/csv"});
	
	const hypLink = document.createElement("a");
	const url = URL.createObjectURL(blob);
	hypLink.setAttribute("href", url);
	hypLink.setAttribute("download", "LW-CSVTable.csv");
	
	document.body.appendChild(hypLink);
	hypLink.click();
	document.body.removeChild(hypLink);
	
	URL.revokeObjectURL(url);
*/