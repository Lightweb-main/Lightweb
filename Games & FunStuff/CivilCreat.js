







let newcomersi = 0;
let population = parseInt(localStorage.getItem('population')) || 0;
let wealth = parseFloat(localStorage.getItem('wealth')) || 0;
let corruption = parseFloat(localStorage.getItem('corruption')) || 0;
let stability = parseFloat(localStorage.getItem('stability')) || 0;
let unrest = parseFloat(localStorage.getItem('unrest')) || 0;
let food = parseFloat(localStorage.getItem('food')) || 0;
let water = parseFloat(localStorage.getItem('water')) || 0;
let housed = parseInt(localStorage.getItem('housed')) || 0;
let homeless = parseInt(localStorage.getItem('homeless')) || 0;
let knowledge = parseInt(localStorage.getItem('knowledge')) || 0;
let screenSection = "Main";








let tech1 = localStorage.getItem('tech1');
let tech1Unlocked = localStorage.getItem('tech1') === "true";
let tech1A = localStorage.getItem('tech1A');
let tech1AUnlocked = localStorage.getItem('tech1A') === "true";



















setInterval(update, 10);
setInterval(tick, 1000);


function update(){
populationVisual = document.getElementById("Population");
wealthVisual = document.getElementById("Wealth");
stabilityVisual = document.getElementById("Stability");
corruptionVisual = document.getElementById("Corruption");
unrestVisual = document.getElementById("Unrest");
startVisual = document.getElementById("Start");	
foodVisual = document.getElementById("Food");
waterVisual = document.getElementById("Water");
housedVisual = document.getElementById("Housed");	
homelessVisual = document.getElementById("Homeless");
title1 = document.getElementById('Title1');
title2 = document.getElementById('Title2');
title3 = document.getElementById('Title3');
title4 = document.getElementById('Title4');
techButton = document.getElementById('Technology');
tech1Element = document.getElementById('Tech1');
tech1AElement = document.getElementById('Tech1A');
techExit = document.getElementById('TechExit');
knowledgeVisual = document.getElementById('Knowledge');








populationVisual.textContent = "Population: " + population;
wealthVisual.textContent = "Wealth: " + wealth;
stabilityVisual.textContent = "Stability:  " + stability+"%";
corruptionVisual.textContent = "Corruption: " + corruption;
unrestVisual.textContent = "Unrest: " + unrest +"%";
foodVisual.textContent = "Food (kg): " + food.toFixed(2);
waterVisual.textContent = "Water (L): " + water.toFixed(2);
housedVisual.textContent = "Housed: " + housed;
homelessVisual.textContent = "Homeless: " + homeless;
knowledgeVisual.textContent = "Knowledge: " + knowledge;

localStorage.setItem('population', population);
localStorage.setItem('wealth', wealth);
localStorage.setItem('corruption', corruption);
localStorage.setItem('stability', stability);
localStorage.setItem('unrest', unrest);
localStorage.setItem('food', food);
localStorage.setItem('water', water);
localStorage.setItem('housed', housed);
localStorage.setItem('homeless', homeless);
population = housed + homeless;

if(screenSection == "Main"){
populationVisual.style.display = "block";
wealthVisual.style.display = "block";
stabilityVisual.style.display = "block";
corruptionVisual.style.display = "block";
unrestVisual.style.display = "block";
foodVisual.style.display = "block";
waterVisual.style.display = "block";
housedVisual.style.display = "block";
homelessVisual.style.display = "block";
title1.style.display = "block";
title2.style.display = "block";
title3.style.display = "block";
title4.style.display = "block";
techButton.style.display = "block";
knowledgeVisual.style.display = "block"
} else {
populationVisual.style.display = "none";
wealthVisual.style.display = "none";
stabilityVisual.style.display = "none";
corruptionVisual.style.display = "none";
unrestVisual.style.display = "none";
foodVisual.style.display = "none";
waterVisual.style.display = "none";
housedVisual.style.display = "none";
homelessVisual.style.display = "none";	
title1.style.display = "none";
title2.style.display = "none";
title3.style.display = "none";
title4.style.display = "none";
techButton.style.display = "none";
knowledgeVisual.style.display = "none"

}
if(screenSection == "Tech"){
tech1Element.style.display = "block";
tech1AElement.style.display = "block";
techExit.style.display = "block";

if (tech1Unlocked == true) {
  tech1Element.style.backgroundColor = "#bee1a1";
} else{
  tech1Element.style.backgroundColor = "#ffffff";
}
if (tech1AUnlocked == true) {
  tech1AElement.style.backgroundColor = "#bee1a1";
} else{
  tech1AElement.style.backgroundColor = "#ffffff";
}
}else {
tech1Element.style.display = "none";	
tech1AElement.style.display = "none";
techExit.style.display = "none";
} 


}

function tick(){
knowledge += Math.ceil(Math.random() * 0.1 * population);
if(population > 0){
food -= 0.25 * population;
water -= 0.1 * population;
}
if(tech1Unlocked){
if(tech1AUnlocked){
newcomersi = Math.floor(Math.random() * 6);
} else {
newcomersi = Math.floor(Math.random() * 11);
}
if(newcomersi == 1){
homeless += Math.floor(Math.random() * 4);
}
}
if(food < 0){
food = 0;
homeless = Math.ceil(homeless / 1.01) - 1;
stability = Math.ceil(stability / 1.05) - 1;
}

if(water < 0){
water = 0;
homeless = Math.ceil(homeless / 1.02) - 1;
stability = Math.ceil(stability / 1.05) - 1;
}
if(population <= 0){
reset();
}
}

function exitCivilizationCreation(){
window.location.href = "../MainPages/Games%20&%20FunStuff.html"
}

function TechTransport(){
screenSection = "Tech"
}

function tech1Unlock() {
  tech1Unlocked = true;
  localStorage.setItem('tech1', "true");
}

function tech1AUnlock() {
  tech1AUnlocked = true;
  localStorage.setItem('tech1A', "true");
}