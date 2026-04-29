const KeplerPlanetLawGif = document.getElementById("KeplerPlanetLawGif");

setInterval(update, 70);

let interval = 0;
function update(){
	interval++;
	KeplerPlanetLawGif.src = `../Images/KeplerPlanetLaws.gif1.img${interval}.png`;
	if(interval == 20){
		interval = 0;
	}
}