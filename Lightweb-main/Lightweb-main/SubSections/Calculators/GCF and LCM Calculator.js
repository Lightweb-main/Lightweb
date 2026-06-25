const input = document.getElementById("input");
const GCFdisplay = document.getElementById("GCFdisplay");
const LCMdisplay = document.getElementById("LCMdisplay");
const calculateBtn = document.getElementById("calculateBtn");
const calculationDivA = document.getElementById("calculationDivA");
const calculationDivB = document.getElementById("calculationDivB");


let numbers = [];

document.addEventListener("DOMContentLoaded", function(){
	input.value = [3, 6, 10, 15];
	numbers = input.value
		.trim()
		.split(",")
		.map(num => parseInt(num.trim(), 10))
		.filter(num => !isNaN(num));
	calculate();
});


input.addEventListener("change", function(){
	numbers = input.value
		.trim()
		.split(",")
		.map(num => parseInt(num.trim(), 10))
		.filter(num => !isNaN(num));
});

calculateBtn.addEventListener("click", calculate);

function calculate(){
	
	let GCF = GCFArr(numbers);
	let LCM = LCMArr(numbers);
	
	calculationDivA.innerHTML = "";
	calculationDivB.innerHTML = "";
	
	const heading1 = document.createElement("h2");
	heading1.textContent = "Greatest Common Factor (GCF) Calculations";
	calculationDivA.appendChild(heading1);
		
	const heading2 = document.createElement("h2");
	heading2.textContent = "Least Common Factor (LCM) Calculations";
	calculationDivB.appendChild(heading2);
	
	for(const num of numbers){
		const p = document.createElement("p");
		p.textContent = `${GCF} * ${num / GCF} = ${num}`;
		calculationDivA.appendChild(p);
	}
	
	for(const num of numbers){
		const p = document.createElement("p");
		p.textContent = `${num} * ${LCM / num} = ${LCM}`;
		calculationDivB.appendChild(p);
	}
	
	
	GCFdisplay.textContent = `Greatest Common Factor (GCF): ${GCF}`;
	LCMdisplay.textContent = `Least Common Multiple (LCM): ${LCM}`;
	
}


function GCFArr(array) {
	if(array.length === 0) return;
	
	return array.reduce((num1, num2) => gcf(num1, num2));
}

function gcf(a, b){
	a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
		let temp = b;
		b = a % b;
		a = temp;
    }

    return a;
};

function lcm(a, b){
	if (a === 0 || b === 0) return 0;
	return Math.abs(a * b) / gcf(a, b);	
};

function LCMArr(array) {
	if(array.length === 0) return;
	
	return array.reduce((num1, num2) => lcm(num1, num2));
}