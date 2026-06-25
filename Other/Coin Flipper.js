const flipBtn = document.getElementById("flipBtn");
const headDisplay = document.getElementById("headDisplay");
const tailsDisplay = document.getElementById("tailsDisplay");
const headDistributionDisplay = document.getElementById("headDistributionDisplay");
const tailsDistributionDisplay = document.getElementById("tailsDistributionDisplay");
const flipQuantityInput = document.getElementById("flipQuantityInput");

flipBtn.addEventListener('click', function(){
	let flipQuantity = flipQuantityInput.value;
	
	if(isNaN(flipQuantity)) {
		alert("Amount of flips can only be a number.");
		return;
	}
	if(flipQuantity < 1 || flipQuantity > 1000000){
		alert("Amount of flips has to be in between 1 and 1,000,000.");
		return;
	}
	
	let heads = 0, tails = 0;
	
	for(let i = 0; i < flipQuantity; i++){
		if(Math.random() * 2 > 1){
			heads++;
		} else {
			tails++;
		}
	}
	
	headDisplay.textContent = `Heads: ${heads}`;
	tailsDisplay.textContent = `Tails: ${tails}`;
	headDistributionDisplay.textContent = `Heads: ${((heads / flipQuantity) * 100).toFixed(2)}%`;
	tailsDistributionDisplay.textContent = `Tails: ${((tails / flipQuantity) * 100).toFixed(2)}%`;
});

function exit(){
	window.location = "../MainPages/Other.html";
}