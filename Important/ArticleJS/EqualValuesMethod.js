const EqualValuesMethodExample1Text1 = document.getElementById("EqualValuesMethodExample1Text1");
const EqualValuesMethodExample1Text2 = document.getElementById("EqualValuesMethodExample1Text2");

const EqualValuesMethodExample1Btn1 = document.getElementById("EqualValuesMethodExample1Btn1");
const EqualValuesMethodExample1Btn2 = document.getElementById("EqualValuesMethodExample1Btn2");

const EqualValuesMethodExample2Text1 = document.getElementById("EqualValuesMethodExample2Text1");
const EqualValuesMethodExample2Text2 = document.getElementById("EqualValuesMethodExample2Text2");

const EqualValuesMethodExample2Btn1 = document.getElementById("EqualValuesMethodExample2Btn1");
const EqualValuesMethodExample2Btn2 = document.getElementById("EqualValuesMethodExample2Btn2");

let example1DivState = 1;
let example2DivState = 1;


setInterval(update, 100);


function update(){

	
	
	if(example1DivState === 1){
		EqualValuesMethodExample1Text1.innerHTML = `System of Equations: Example #1`;
		EqualValuesMethodExample1Text2.innerHTML = `5x + 3<br>x - 5`;
	}
	
	if(example1DivState === 2){
		EqualValuesMethodExample1Text1.innerHTML = `Step 1: Make all expressions equal to each other.`;
		EqualValuesMethodExample1Text2.innerHTML = `5x + 3 = x - 5`;
	}
	
	if(example1DivState === 3){
		EqualValuesMethodExample1Text1.innerHTML = `Step 2: Subtract x on both sides.`;
		EqualValuesMethodExample1Text2.innerHTML = `4x + 3 = -5`;
	}
	
	if(example1DivState === 4){
		EqualValuesMethodExample1Text1.innerHTML = `Step 3: Subtract 5 on both sides.`;
		EqualValuesMethodExample1Text2.innerHTML = `4x = -8`;
	}
	
	if(example1DivState === 5){
		EqualValuesMethodExample1Text1.innerHTML = `Step 4: Divide 4 on both sides.`;
		EqualValuesMethodExample1Text2.innerHTML = `x = -2`;
	}
	
	if(example2DivState === 1){
		EqualValuesMethodExample2Text1.innerHTML = `System of Equations: Example #2`;
		EqualValuesMethodExample2Text2.innerHTML = `3x - 1<br>2x + 2`;
	}
	
	if(example2DivState === 2){
		EqualValuesMethodExample2Text1.innerHTML = `Step 1: Make all expressions equal to each other.`;
		EqualValuesMethodExample2Text2.innerHTML = `3x - 1 = 2x + 2`;
	}
	
	if(example2DivState === 3){
		EqualValuesMethodExample2Text1.innerHTML = `Step 2: Subtract 2x on both sides.`;
		EqualValuesMethodExample2Text2.innerHTML = `x - 1 = 2`;
	}
	
	if(example2DivState === 4){
		EqualValuesMethodExample2Text1.innerHTML = `Step 3: Add 1 on both sides.`;
		EqualValuesMethodExample2Text2.innerHTML = `x = 3`;
	}
	
}

EqualValuesMethodExample1Btn1.addEventListener("click", () => {
	if(example1DivState == 4) example1DivState = 5
	if(example1DivState == 3) example1DivState = 4
	if(example1DivState == 2) example1DivState = 3
	if(example1DivState == 1) example1DivState = 2
});

EqualValuesMethodExample1Btn2.addEventListener("click", () => {
	if(example1DivState == 2) example1DivState = 1
	if(example1DivState == 3) example1DivState = 2
	if(example1DivState == 4) example1DivState = 3
	if(example1DivState == 5) example1DivState = 4
});

EqualValuesMethodExample2Btn1.addEventListener("click", () => {
	if(example2DivState == 3) example2DivState = 4
	if(example2DivState == 2) example2DivState = 3
	if(example2DivState == 1) example2DivState = 2
	
});

EqualValuesMethodExample2Btn2.addEventListener("click", () => {
	if(example2DivState == 2) example2DivState = 1
	if(example2DivState == 3) example2DivState = 2
	if(example2DivState == 4) example2DivState = 3
});
