const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");


const redIndicator = document.getElementById("redIndicator");
const greenIndicator = document.getElementById("greenIndicator");
const blueIndicator = document.getElementById("blueIndicator");
const colorRGBIndicator = document.getElementById("colorRGBIndicator");
const colorHexIndicator = document.getElementById("colorHexIndicatorB");


const colorView = document.getElementById("colorView");
redSlider.value = parseInt(localStorage.getItem("CCGred")) || 255;
greenSlider.value = parseInt(localStorage.getItem("CCGgreen")) || 255;
blueSlider.value = parseInt(localStorage.getItem("CCGblue")) || 255;
function update(){
	let r = parseInt(redSlider.value) || 0;
	let g = parseInt(greenSlider.value) || 0;
	let b = parseInt(blueSlider.value) || 0;
	
	localStorage.setItem("CCGred", r);
    localStorage.setItem("CCGgreen", g);
    localStorage.setItem("CCGblue", b);
	
	const rHex = r.toString(16);
	const gHex = g.toString(16);
	const bHex = b.toString(16);
	
	colorView.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
	
	redSlider.title = r;
	greenSlider.title = g;
	blueSlider.title = b;
	redIndicator.textContent = `Red: ${r}`;
	greenIndicator.textContent = `Green: ${g}`;
	blueIndicator.textContent = `Blue: ${b}`;
	colorRGBIndicator.textContent = `RGB: rgb(${r}, ${g}, ${b})`;
	colorHexIndicator.textContent = `#${rHex}${gHex}${bHex}`;
}


setInterval(update, 1);

colorHexIndicator.addEventListener("click", function(){
	navigator.clipboard.writeText(colorHexIndicator.textContent);
});