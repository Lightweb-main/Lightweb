let population = 0;
let wealth = "N/A";
let corruption = 0;
let stability = 100;
let unrest = 0;


setInterval(update, 100);

function update(){
populationVisual = document.getElementById("Population") 	
wealthVisual = document.getElementById("Wealth") 	
stabilityVisual = document.getElementById("Stability") 	
corruptionVisual = document.getElementById("Corruption") 	
unrestVisual = document.getElementById("Unrest") 	
startVisual = document.getElementById("Start") 		

populationVisual.textContent = "Population: " + population;
wealthVisual.textContent = "Wealth: " + wealth;
stabilityVisual.textContent = "Stability:  " + stability+"%";
corruptionVisual.textContent = "Corruption: " + corruption;
unrestVisual.textContent = "Unrest: " + unrest;

}
