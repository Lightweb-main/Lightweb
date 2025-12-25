const canvas = document.getElementById("paintCanvas");
const paintWidthPreview = document.getElementById("paintWidthPreview");

const paintColorRedSlider = document.getElementById("paintColorRedSlider");
const paintColorGreenSlider = document.getElementById("paintColorGreenSlider");
const paintColorBlueSlider = document.getElementById("paintColorBlueSlider");

const paintColorRedDisplay = document.getElementById("paintColorRedDisplay");
const paintColorGreenDisplay = document.getElementById("paintColorGreenDisplay");
const paintColorBlueDisplay = document.getElementById("paintColorBlueDisplay");


const paintWidthDisplay = document.getElementById("paintWidthDisplay");
const paintScatterDisplay = document.getElementById("paintScatterDisplay");

const paintWidthSlider = document.getElementById("paintWidthSlider");
const paintScatterSlider = document.getElementById("paintScatterSlider");

const context = canvas.getContext("2d");

function generateCanvas(){
	canvas.width = window.innerWidth * 1;
	canvas.height = window.innerHeight * 1;
	context.fillStyle = "white";
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function generateEmptyCanvas(){
	canvas.width = window.innerWidth * 1;
	canvas.height = window.innerHeight * 1;
	context.fillStyle = "rgba(0,0,0,0)";
	canvas.style.border = "2px solid var(--border)";
	context.fillRect(0, 0, canvas.width, canvas.height);
}
let drawing = false;
let scatterX = 0;
let scatterY = 0;

let paintWidth = paintWidthSlider.value;
let paintScatter = paintScatterSlider.value;

let paintColorR = paintColorRedSlider.value;
let paintColorG = paintColorGreenSlider.value;
let paintColorB = paintColorBlueSlider.value;

let r  = parseInt(paintColorR, 10); 
let g  = parseInt(paintColorG, 10); 
let b  = parseInt(paintColorB, 10); 
	
setInterval(update, 10);

function update(){
	
	
	paintWidthDisplay.textContent = `Paint Width: ${paintWidth}`;
	paintScatterDisplay.textContent = `Scatter: ${paintScatter}`;
	
	paintColorRedDisplay.textContent = `Red: ${paintColorR}`;
	paintColorGreenDisplay.textContent = `Green: ${paintColorG}`;
	paintColorBlueDisplay.textContent = `Blue: ${paintColorB}`;
	paintColorRedDisplay.style.color = `rgb(${r}, 0, 0)`;
	paintColorGreenDisplay.style.color = `rgb(0, ${g}, 0)`;
	paintColorBlueDisplay.style.color = `rgb(0, 0, ${b})`;
	
	
	paintWidth = paintWidthSlider.value;
	paintScatter = paintScatterSlider.value;
	
	paintColorR = paintColorRedSlider.value;
	paintColorG = paintColorGreenSlider.value;
	paintColorB = paintColorBlueSlider.value;
	
	
	r = parseInt(paintColorR, 10); 
	g = parseInt(paintColorG, 10); 
	b = parseInt(paintColorB, 10); 
	
	paintWidthPreview.style.borderColor = `rgb(${r}, ${g}, ${b})`
	paintWidthPreview.style.borderWidth = paintWidth + "px";
	

	document.body.style.cursor = "cursor";
}
function startPainting(){
	drawing = true;
	draw(drawingCanvas);
}

function endPainting(){
	drawing = false;
	context.beginPath();
}

function draw(drawingCanvas) {
	if(drawing != true){
		return;
	}
	scatterX = Math.floor(Math.random() * paintScatter) - paintScatter / 2;
	scatterY = Math.floor(Math.random() * paintScatter) - paintScatter / 2;
	const boundaries = canvas.getBoundingClientRect();
	context.strokeStyle = `rgb(${r}, ${g}, ${b})`;
	context.fillStyle = `rgb(${r}, ${g}, ${b})`;
	context.lineWidth = paintWidth;
	
	if(paintScatter > 0){
		context.beginPath();
		context.arc(drawingCanvas.clientX - boundaries.left + scatterX, drawingCanvas.clientY - boundaries.top + scatterY, paintWidth, 0, 2 * Math.PI);
		context.fill();
	} else {
		context.lineJoin = "round";
		context.lineCap = "round";
		context.lineTo(drawingCanvas.clientX - boundaries.left, drawingCanvas.clientY - boundaries.top);
		context.stroke();
		context.beginPath();
		context.moveTo(drawingCanvas.clientX - boundaries.left, drawingCanvas.clientY - boundaries.top);
		context.fill();
	}
}

canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', endPainting);
canvas.addEventListener('mousemove', draw);

function exit(){
	window.location.href = "../MainPages/Other.html";
}


function downloadPNG(){
	let link = document.createElement('a');
	link.href = canvas.toDataURL('image/png');
	link.download = 'LightwebPaint.png';
	link.click();
}

function downloadPDF(){
	let link = document.createElement('a');
	link.href = canvas.toDataURL('image/pdf');
	link.download = 'LightwebPaint.pdf';
	link.click();
}

function downloadJPEG(){
	let link = document.createElement('a');
	link.href = canvas.toDataURL('image/jpeg');
	link.download = "LightwebPaint.jpeg";
	link.click();
}
function deleteCanvas(){
	context.strokeStyle = "white";
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.stroke();
	generateCanvas();
}

generateCanvas();