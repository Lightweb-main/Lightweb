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









const dominantHabitat = [
	"land",
	"semi-aquatic",
	"aquatic"
]

const dominantHabitatLatin = [
	"Terra",
	"Semi-aquaticus",
	"Aquaticus"
]

const genusArray = [
	"Ursus",
	"Equus",
	"Lupus",
	"Pecus",
	"Capra",
	"Felis"
]

const phenotypeArray = [
	"fulvus",
	"ater",
	"ruber",
	"fusca obscura"
]
const _landMovement = [
	"land",
	"air"
]

const discoveredLocation = [
	"the United States",
	"Columbia",
	"China",
	"Japan",
	"Russia",
	"Mexico",
	"Austrailia",
	"Morocco",
	"Canada",
	"New Zealand",
	"New Guinea"
]

const section1Sentence = [
	"In a study about how plants grow different under a change in sunlight, a new animal was unintentionally discovered.",
	`During a study in ${discoverLocation}, a new animal has been discovered.`,
	"A new animal has been discovered.",
	"During a study of symbiosis, a new animal happened to appear unexpectingly.",
	"During a study on how heredity can damage nature, a new animal was discovered."
]









function rag(){
	random = Math.floor(Math.random() * dominantHabitat.length);
	landaquatic = dominantHabitat[random];
	prefix1 = dominantHabitatLatin[random];
	
	random = Math.floor(Math.random() * genusArray.length);
	genus = genusArray[random];
	
	random = Math.floor(Math.random() * phenotypeArray.length);
	phenotype = phenotypeArray[random];
	
	random = Math.floor(Math.random() * discoveredLocation.length);
	discoverLocation = discoveredLocation[random];

	
	name = `${prefix1} ${phenotype} ${genus}`
	random = Math.floor(Math.random() * 5) + 1;

	random = Math.floor(Math.random() * section1Sentence.length);
	output1.textContent = section1Sentence[random];
	random = Math.floor(Math.random() * 2) + 1;
	
	if(random == 1){
		intrusiveSpecies = false;
	} else {
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

function exit(){
	document.location = "../MainPages/Other.html"
}
