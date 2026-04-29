const canvas = document.getElementById("paintCanvas");
const paintWidthPreview = document.getElementById("paintWidthPreview");

const paintColorInput = document.getElementById("paintColorInput");
const canvasBackgroundColorInput = document.getElementById("canvasBackgroundColorInput");


const paintWidthDisplay = document.getElementById("paintWidthDisplay");
const paintScatterDisplay = document.getElementById("paintScatterDisplay");

const paintWidthSlider = document.getElementById("paintWidthSlider");
const paintScatterSlider = document.getElementById("paintScatterSlider");


const paintSettings = document.getElementById("paintSettings");
const canvasSettings = document.getElementById("canvasSettings");
const downloading = document.getElementById("downloading");


const nextPageBtn = document.getElementById("nextPageBtn");



const context = canvas.getContext("2d");


let canvasScreenshots = [];
let pageActive = 1;

nextPageBtn.addEventListener("click", function(){
	if(pageActive == 1){
		pageActive = 2;
	} else if(pageActive == 2){
		pageActive = 3;
	} else if(pageActive == 3){
		pageActive = 1;
	}
});


changeCanvasBackground.addEventListener("click", function(){
	context.fillStyle = canvasBackgroundColorInput.value;
	context.fillRect(0, 0, canvas.width, canvas.height);
});

function generateCanvas(){
	const rect = canvas.getBoundingClientRect(); 
	canvas.width = rect.width; 
	canvas.height = rect.height;
	context.fillStyle = "white";
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function generateEmptyCanvas(){
	const rect = canvas.getBoundingClientRect();
	canvas.width = rect.width; 
	canvas.height = rect.height;
	context.fillStyle = "rgba(0,0,0,0)";
	context.fillRect(0, 0, canvas.width, canvas.height);
}
let drawing = false;
let scatterX = 0;
let scatterY = 0;

let paintWidth = paintWidthSlider.value;
let paintScatter = paintScatterSlider.value;

let paintColor = paintColorInput.value;
	
setInterval(update, 10);

function update(){
	
	
	paintWidthDisplay.textContent = `Paint Width: ${paintWidth}`;
	paintScatterDisplay.textContent = `Scatter: ${paintScatter}`;

	paintWidth = paintWidthSlider.value;
	paintScatter = paintScatterSlider.value;
	paintColor = paintColorInput.value;
	
	paintSettings.style.display = "none";
	canvasSettings.style.display = "none";
	downloading.style.display = "none";
	
	if(pageActive == 1){
		paintSettings.style.display = "block";
	} else if(pageActive == 2){
		canvasSettings.style.display = "block";
	} else if(pageActive == 3){
		downloading.style.display = "block";
	}
	
	
	paintWidthPreview.style.borderWidth = paintWidth + "px";
	

	document.body.style.cursor = "cursor";
}

function getPos(e){
	const boundaries = canvas.getBoundingClientRect();
	if(e.touches){
		return {
			x: e.touches[0].clientX - boundaries.left,
			y: e.touches[0].clientY - boundaries.top
		};
	} else {
		return {
            x: e.clientX - boundaries.left,
            y: e.clientY - boundaries.top
        };
	}
}
function startPainting(e){
	drawing = true;
	canvasScreenshots.push(context.getImageData(0, 0, canvas.width, canvas.height));
	draw(e);
}

function endPainting(){
	drawing = false;
	context.beginPath();
}

function draw(e) {
	if(drawing != true) return;
	e.preventDefault();
	const pos = getPos(e);
	scatterX = Math.floor(Math.random() * paintScatter) - paintScatter / 2;
	scatterY = Math.floor(Math.random() * paintScatter) - paintScatter / 2;
	const boundaries = canvas.getBoundingClientRect();
	context.strokeStyle = paintColor;
	context.fillStyle = paintColor;
	context.lineWidth = paintWidth;
	
	if(paintScatter > 0){
		context.beginPath();
		context.arc(pos.x + scatterX, pos.y + scatterY, paintWidth, 0, 2 * Math.PI);
		context.fill();
	} else {
		context.lineJoin = "round";
		context.lineCap = "round";
		context.lineTo(pos.x, pos.y);
		context.stroke();
		context.beginPath();
		context.moveTo(pos.x, pos.y);
	}
	
}


canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('touchstart', startPainting);
canvas.addEventListener('mouseup', endPainting);
canvas.addEventListener('touchend', endPainting);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('touchmove', draw);

document.addEventListener("keydown", (e) => {
	if(e.ctrlKey && e.key.toLowerCase() === "z"){
		if(canvasScreenshots.length <= 0) return;
		context.putImageData(canvasScreenshots.pop(), 0, 0);
	}
});

function exit(){
	window.location.href = "../MainPages/Other.html";
}


function downloadPNG(){
	let link = document.createElement('a');
	link.href = canvas.toDataURL('image/png');
	link.download = 'LightwebPaint.png';
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