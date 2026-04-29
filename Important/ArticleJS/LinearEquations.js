const LinearEquationsExample1Text1 = document.getElementById("LinearEquationsExample1Text1");
const LinearEquationsExample1Text2 = document.getElementById("LinearEquationsExample1Text2");


const LinearEquationsExample2Text1 = document.getElementById("LinearEquationsExample2Text1");
const LinearEquationsExample2Text2 = document.getElementById("LinearEquationsExample2Text2");

const LinearEquationsExample3Text1 = document.getElementById("LinearEquationsExample3Text1");
const LinearEquationsExample3Text2 = document.getElementById("LinearEquationsExample3Text2");

const LinearEquationsExample4Text1 = document.getElementById("LinearEquationsExample4Text1");
const LinearEquationsExample4Text2 = document.getElementById("LinearEquationsExample4Text2");


const LinearEquationsExample5Text1 = document.getElementById("LinearEquationsExample5Text1");
const LinearEquationsExample5Text2 = document.getElementById("LinearEquationsExample5Text2");


let example1DivState = 1;
let example2DivState = 1;
let example3DivState = 1;
let example4DivState = 1;
let example5DivState = 1;


setInterval(update, 100);


function update(){

	
	
	if(example1DivState === 1){
		LinearEquationsExample1Text1.innerHTML = `Linear Equations: Example #1`;
		LinearEquationsExample1Text2.innerHTML = `e + 3 = 8`;
	}
	
	if(example1DivState === 2){
		LinearEquationsExample1Text1.innerHTML = `Step 1: Subtract both sides by 3 to isolate x.`;
		LinearEquationsExample1Text2.innerHTML = `e + 3 - 3 = 8 - 3`;
	}
	
	if(example1DivState === 3){
		LinearEquationsExample1Text1.innerHTML = `Answer:`;
		LinearEquationsExample1Text2.innerHTML = `e = 5`;
	}
	
	if(example2DivState === 1){
		LinearEquationsExample2Text1.innerHTML = `Linear Equations: Example #2`;
		LinearEquationsExample2Text2.innerHTML = `e - 6 = 27`;
	}
	
	if(example2DivState === 2){
		LinearEquationsExample2Text1.innerHTML = `Step 1: Add 6 on both sides to isolate e.`;
		LinearEquationsExample2Text2.innerHTML = `e - 6 + 6 = 27 + 6`;
	}
	
	if(example2DivState === 3){
		LinearEquationsExample2Text1.innerHTML = `Answer:`;
		LinearEquationsExample2Text2.innerHTML = `e = 33`;
	}
	
	if(example3DivState === 1){
		LinearEquationsExample3Text1.innerHTML = `Linear Equations: Example #3`;
		LinearEquationsExample3Text2.innerHTML = `3e + 20 = 41`;
	}
	
	if(example3DivState === 2){
		LinearEquationsExample3Text1.innerHTML = `Step 1: Subtract 20 on both sides to isolate 3e.`;
		LinearEquationsExample3Text2.innerHTML = `3e + 20 - 20 = 41 - 20 <br><br> 3e = 21`;
	}
	
	if(example3DivState === 3){
		LinearEquationsExample3Text1.innerHTML = `Step 2: Divide both sides by 3.`;
		LinearEquationsExample3Text2.innerHTML = `3e / 3 = 21 / 3`;
	}
	
	if(example3DivState === 4){
		LinearEquationsExample3Text1.innerHTML = `Answer: `;
		LinearEquationsExample3Text2.innerHTML = `e = 7`;
	}
	
	if(example3DivState === 5){
		LinearEquationsExample3Text1.innerHTML = `Checking Answer: `;
		LinearEquationsExample3Text2.innerHTML = `let e = 7 <br><br> 3(7) + 20 = 41 <br><br> 21 + 20 = 41 <br><br> 41 = 41 &check;`;
	}
	
	if(example4DivState === 1){
		LinearEquationsExample4Text1.innerHTML = `Linear Equations: Example #4`;
		LinearEquationsExample4Text2.innerHTML = `z + 14 = 2z + 4`;
	}
	
	if(example4DivState === 2){
		LinearEquationsExample4Text1.innerHTML = `Step 1: Subtract 2z on both sides.`;
		LinearEquationsExample4Text2.innerHTML = `z + 14 - 2z = 2z - 2z + 4 <br><br> -z + 14 = 4`;
	}
	
	if(example4DivState === 3){
		LinearEquationsExample4Text1.innerHTML = `Step 2: Subtract 14 on both sides.`;
		LinearEquationsExample4Text2.innerHTML = `-z + 14 - 14  = 4 - 14 <br><br> -z = -10`;
	}
	
	if(example4DivState === 4){
		LinearEquationsExample4Text1.innerHTML = `Step 3: Multiply both sides by -1 to flip the sign of -z.`;
		LinearEquationsExample4Text2.innerHTML = `-z * -1 = -10 * -1`;
	}
	
	if(example4DivState === 5){
		LinearEquationsExample4Text1.innerHTML = `Answer: `;
		LinearEquationsExample4Text2.innerHTML = `z = 10`;
	}
	
	if(example5DivState === 1){
		LinearEquationsExample5Text1.innerHTML = `Linear Equations: Example #5`;
		LinearEquationsExample5Text2.innerHTML = `5 - (4x + 7) = 28 + 6x`;
	}
	
	if(example5DivState === 2){
		LinearEquationsExample5Text1.innerHTML = `Step 1: Subtract 5 on both sides.`;
		LinearEquationsExample5Text2.innerHTML = `5 - (4x + 7) - 5 = 28 - 5 + 6x <br><br> -(4x + 7) = 23 + 6x`;
	}
	
	if(example5DivState === 3){
		LinearEquationsExample5Text1.innerHTML = `Step 2: Distribute the negative sign and "(9x + 7)"`;
		LinearEquationsExample5Text2.innerHTML = `-4x - 7 = 23 + 6x`;
	}
	
	if(example5DivState === 4){
		LinearEquationsExample5Text1.innerHTML = `Step 3: Add 7 on both sides`;
		LinearEquationsExample5Text2.innerHTML = `-4x - 7 + 7 = 23 + 7 + 6x <br><br> -4x = 30 + 6x`;
	}
	
	if(example5DivState === 5){
		LinearEquationsExample5Text1.innerHTML = `Step 4: Subtract 6x on both sides.`;
		LinearEquationsExample5Text2.innerHTML = `-4x - 6x = 30 + 6x - 6x <br><br> -10x = 30`;
	}
	
	if(example5DivState === 6){
		LinearEquationsExample5Text1.innerHTML = `Step 5: Divide both sides by -10.`;
		LinearEquationsExample5Text2.innerHTML = `-10x / -10 = 30 / -10`;
	}
	
	if(example5DivState === 7){
		LinearEquationsExample5Text1.innerHTML = `Answer: `;
		LinearEquationsExample5Text2.innerHTML = `x = -3`;
	}
}

LinearEquationsExample1Btn1.addEventListener("click", () => {
	if(example1DivState == 2) example1DivState = 3
	if(example1DivState == 1) example1DivState = 2
});

LinearEquationsExample1Btn2.addEventListener("click", () => {
	if(example1DivState == 2) example1DivState = 1
	if(example1DivState == 3) example1DivState = 2
});

LinearEquationsExample2Btn1.addEventListener("click", () => {
	if(example2DivState == 2) example2DivState = 3
	if(example2DivState == 1) example2DivState = 2
});

LinearEquationsExample2Btn2.addEventListener("click", () => {
	if(example2DivState == 2) example2DivState = 1
	if(example2DivState == 3) example2DivState = 2
});

LinearEquationsExample3Btn1.addEventListener("click", () => {
	if(example4DivState == 4) example4DivState = 5
	if(example4DivState == 3) example4DivState = 4
	if(example4DivState == 2) example4DivState = 3
	if(example4DivState == 1) example4DivState = 2
});

LinearEquationsExample3Btn2.addEventListener("click", () => {
	if(example4DivState == 2) example4DivState = 1
	if(example4DivState == 3) example4DivState = 2
	if(example4DivState == 4) example4DivState = 3
	if(example4DivState == 5) example4DivState = 4
});


LinearEquationsExample4Btn1.addEventListener("click", () => {
	if(example4DivState == 4) example4DivState = 5
	if(example4DivState == 3) example4DivState = 4
	if(example4DivState == 2) example4DivState = 3
	if(example4DivState == 1) example4DivState = 2
});

LinearEquationsExample4Btn2.addEventListener("click", () => {
	if(example4DivState == 2) example4DivState = 1
	if(example4DivState == 3) example4DivState = 2
	if(example4DivState == 4) example4DivState = 3
	if(example4DivState == 5) example4DivState = 4
});

LinearEquationsExample5Btn1.addEventListener("click", () => {
	if(example5DivState == 6) example5DivState = 7
	if(example5DivState == 5) example5DivState = 6
	if(example5DivState == 4) example5DivState = 5
	if(example5DivState == 3) example5DivState = 4
	if(example5DivState == 2) example5DivState = 3
	if(example5DivState == 1) example5DivState = 2
});

LinearEquationsExample5Btn2.addEventListener("click", () => {
	if(example5DivState == 2) example5DivState = 1
	if(example5DivState == 3) example5DivState = 2
	if(example5DivState == 4) example5DivState = 3
	if(example5DivState == 5) example5DivState = 4
	if(example5DivState == 6) example5DivState = 5
	if(example5DivState == 7) example5DivState = 6
});

