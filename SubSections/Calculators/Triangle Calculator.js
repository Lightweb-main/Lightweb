const triangleDisplaySSS = document.getElementById("triangleDisplaySSS");
const sideASizeInputSSS = document.getElementById("sideASizeInputSSS");
const sideBSizeInputSSS = document.getElementById("sideBSizeInputSSS");
const sideCSizeInputSSS = document.getElementById("sideCSizeInputSSS");
const generateTriangleBtnSSS = document.getElementById("generateTriangleBtnSSS");


const contextSSS = triangleDisplaySSS.getContext("2d");


generateTriangleBtnSSS.addEventListener("click", function(){
	
	
	let a = parseFloat(sideASizeInputSSS.value) || 1;
	let b = parseFloat(sideBSizeInputSSS.value) || 1;
	let c = parseFloat(sideCSizeInputSSS.value) || 1;
	

	const x = (Math.pow(a, 2) - Math.pow(b, 2) + Math.pow(c, 2)) / (2 * c);
	const y = Math.sqrt(Math.pow(a, 2) - Math.pow(x, 2));
	
	contextSSS.clearRect(0, 0, triangleDisplaySSS.width, triangleDisplaySSS.height);




	contextSSS.beginPath();
	contextSSS.moveTo(450 - c, 450);
	contextSSS.lineTo(450 + c, 450);
	contextSSS.lineTo(450 + x, 450 - y);
	contextSSS.closePath();
	contextSSS.stroke();
	
	contextSSS.font = "16px Arial";
	contextSSS.fillSize = "blue";
	
	
});