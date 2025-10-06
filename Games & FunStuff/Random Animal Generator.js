const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");
let opening;
let random;
let discoverLocation;
let name;
let prefix1;
let genus;
let landaquatic; 
let phenotype;
let specialProperties1;
let intrusiveSpecies;
let discoveryAltitude;
let movementType;
let random2;
function rag(){
random = Math.floor(Math.random() * 3) + 1;
	if(random == 1){
	landaquatic = "land";
	prefix1 = "terra";
	random2 = Math.floor(Math.random() * 2) + 1;
	if(random2 == 1){
		movementType = "land"
	}
	if(random2 == 2){
		movementType = "air"
	}
	}
	if(random == 2){
	landaquatic = "aquatic";
	prefix1 = "aquaticus"
	movementType = "water"
	}
	if(random == 3){
	landaquatic = "semi-aquatic";
	prefix1 = "semi-aquaticus"
	random2 = Math.floor(Math.random() * 2) + 1;
	if(random2 == 1){
		movementType = "land"
	}
	if(random2 == 2){
		movementType = "air"
	}
	if(random2 == 3){
		movementType = "water"
	}
	}
random = Math.floor(Math.random() * 6) + 1;
	if(random == 1){
	genus = "Ursus";
	}
	if(random == 2){
	genus = "Equus";
	}
	if(random == 3){
	genus = "Lupus";
	}
	if(random == 4){
	genus = "Pecus";
	}
	if(random == 5){
	genus = "Capra";
	}
	if(random == 6){
	genus = "Felis";	
	}
random = Math.floor(Math.random() * 3) + 1;
	if(random == 1){
	phenotype = "fulvus";
	}
	if(random == 2){
	phenotype = "ater";
	}
	if(random == 3){
	phenotype = "fusca obscura";
	}
random = Math.floor(Math.random() * 12) + 1;

	if(random == 1){
	discoverLocation = "the United States";
	}
	if(random == 2){
	discoverLocation = "Colombia";
	}
	if(random == 3){
	discoverLocation = "China";
	}
	if(random == 4){
	discoverLocation = "Japan";
	}
	if(random == 5){
	discoverLocation = "Russia";
	}
	if(random == 6){
	discoverLocation = "Mexico";
	}
	if(random == 7){
	discoverLocation = "Austrailia";
	}
	if(random == 8){
	discoverLocation = "Morocco";
	}
	if(random == 9){
	discoverLocation = "Canada";
	}
	if(random == 10){
	discoverLocation = "New Zealand";
	}
	if(random == 11){
	discoverLocation = "New Guinea";
	}
	if(random == 12){
	discoverLocation = "REDACTED";
	}

	
name = `${prefix1} ${phenotype} ${genus}`
random = Math.floor(Math.random() * 5) + 1;

	if(random == 1){
	output1.textContent = "In a study about how plants grow different under a change in sunlight, a new animal was unintentionally discovered." ;
	}
	if(random == 2){
	output1.textContent = `During a study in ${discoverLocation}, a new animal has been discovered.`
	}
	if(random == 3){
	output1.textContent = "A new animal has been discovered.";
	}
	if(random == 4){
	output1.textContent = "During a study of symbiosis, a new animal happened to appear unexpectingly.";
	}
	if(random == 5){
	output1.textContent = "During a study on how heredity can damage nature, a new animal was discovered."
	}
random = Math.floor(Math.random() * 2) + 1;

	if(random == 1){
	intrusiveSpecies = false;
	}
	if(random == 2){
	intrusiveSpecies = true;
	}
	
random = Math.floor(Math.random() * 3) + 1;

	if(random == 1){
	output2.textContent = `${name} is a ${landaquatic} animal.`
	}
	
	if(random == 2){
	output2.textContent = `The newly known animal, known as ${name} is a ${landaquatic} animal.`
	}
	
	if(random == 3){
	output2.textContent = `The animal, ${name} is a ${landaquatic} animal.`
	}

	if(intrusiveSpecies == true){
		output3.textContent = `${name} has been known to disrupt other species.`
		random = Math.floor(Math.random() * 3) + 1;
		if(random == 1){
		output3.textContent = `${name} has been known to disrupt other species. So far, this hasn't caused any major disruptions within any food webs or food chains.`
		} else if(random == 2){
		output3.textContent = `${name} has been known to disrupt other species. Unfortunately, this has caused minor disruptions within food webs.`
		} else if(random == 3){
		output3.textContent = `${name} has been known to disrupt other species. Unfortunately, this has caused major disruptions within food webs. Immediate action is considered for the time being.` 
		}
	}
	
	if(intrusiveSpecies == false){
	output3.textContent = `${name} has not been known to disrupt other species.`
	}

random = Math.floor(Math.random() * 5) + 1;

if(random == 1){
discoveryAltitude = Math.floor(Math.random() * 50) - 25;
} else if(random == 2){
discoveryAltitude = Math.floor(Math.random() * 250) - 125;
} else if(random == 3){
discoveryAltitude = Math.floor(Math.random() * 500) - 250;
} else if(random == 4){
discoveryAltitude = Math.floor(Math.random() * 1400) - 700;
} else if(random == 5){
discoveryAltitude = Math.floor(Math.random() * 6000) - 3000;
}
	
	if(discoveryAltitude >= 0 && landaquatic === "aquaticus"){
	discoveryAltitude *= -1;	
	}
	if(discoveryAltitude >= 0){
	output4.textContent = `${name} was first discovered ${discoveryAltitude} meters above sea level.`
	} else {
	output4.textContent = `${name} was first discovered ${Math.abs(discoveryAltitude)} meters below sea level.`
	}
	
	if(movementType == "land"){
	output5.textContent = `${name} has been observed to move by ${movementType}.`
	} else if(movementType == "air"){
	output5.textContent = `${name} has been noted to travel by ${movementType}.`
	} else if(movementType == "water"){
	output5.textContent = `${name} has been seen by researchers to travel by ${movementType}.`
	}
title.textContent = `${name}`;
}


function remove(){
output1.textContent = "";	
output2.textContent = "";
output3.textContent = "";	
output4.textContent = "";	
output5.textContent = "";
title.textContent = "";	
}