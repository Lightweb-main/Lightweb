const container = document.getElementById("container");
const diceAmount = document.getElementById("diceAmount");
const rollBtn = document.getElementById("rollBtn");


rollBtn.addEventListener("click", function(){
	if(isNaN(diceAmount.value)){
		alert("Amount of dice has to be a number.");
		return;
	}
	
	if(diceAmount.value < 1 && diceAmount.value > 15000){
		alert("Amount of dice has to be in between 1 and 15,000.");
		return;
	}
	
	container.innerHTML = "";
	
	for(let i = 0; i < diceAmount.value; i++){
		const diceImg = document.createElement('img');
		diceImg.classList.add("dice");
		diceImg.src = `../Images/DiceRoller.img1.png`;
		container.appendChild(diceImg);
		
		for(let i = 0; i < Math.floor(Math.random() * 60) + 1; i++){
			setTimeout(() => {
			const diceRoll = Math.floor(Math.random() * 6) + 1;
			diceImg.src = `../Images/DiceRoller.img${diceRoll}.png`;
			}, 150 * i);
		}
	}
	
});

function exit(){
	window.location = `../MainPages/Other.html`;
}