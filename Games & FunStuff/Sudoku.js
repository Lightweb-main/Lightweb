
let sudokuBoard;
let tries = 3;

setInterval(update, 10);
function update(){
	document.querySelectorAll("div")[0].querySelectorAll("div")[0].textContent = "";
	document.querySelectorAll("div")[0].querySelectorAll("div")[1].textContent = "";
	document.querySelectorAll("div")[0].querySelectorAll("div")[2].textContent = "";
	if(tries == 3){
		document.querySelectorAll("div")[0].querySelectorAll("div")[0].textContent = "X";
		document.querySelectorAll("div")[0].querySelectorAll("div")[1].textContent = "X";
		document.querySelectorAll("div")[0].querySelectorAll("div")[2].textContent = "X";
	} else if(tries == 2){
		document.querySelectorAll("div")[0].querySelectorAll("div")[0].textContent = "X";
		document.querySelectorAll("div")[0].querySelectorAll("div")[1].textContent = "X";
	} else if(tries == 1){
		document.querySelectorAll("div")[0].querySelectorAll("div")[0].textContent = "X";
	}
}
function generateA(){
	sudokuBoard = Array.from({length: 9}, () => Array(9).fill(0));
	container.innerHTML = "";
	tries = 3;
	
	function validation(i, j, num){
		for(let k = 0; k < 9; k++){
			if(sudokuBoard[i][k] === num){
				return false;
			}
		}
		for(let k = 0; k < 9; k++){
			if(sudokuBoard[k][j] === num){
				return false;
			}
		}
		let startRow = Math.floor(i / 3) * 3;
		let startCol = Math.floor(j / 3) * 3;
		for (let r = 0; r < 3; r++) {
			for (let c = 0; c < 3; c++) {
				if (sudokuBoard[startRow + r][startCol + c] === num){
				return false;
				}
			}
		}
		return true;
	}
	function generate(){
	for(let i = 0; i < 9; i++){
		for(let j = 0; j < 9; j++){
			if(sudokuBoard[i][j] == 0){
				let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
				for (let k = array.length - 1; k > 0; k--) {
					const m = Math.floor(Math.random() * (k + 1));
					[array[k], array[m]] = [array[m], array[k]];
				}


				for(let num of array){
					if(validation(i, j, num)){
						sudokuBoard[i][j] = num;
						if(generate()) return true;
						sudokuBoard[i][j] = 0;
					}
				}
				
				return false;
			}
		}
	}
	
	
	return true;
	}
	
	while (!generate()) {
		sudokuBoard = Array.from({ length: 9 }, () => Array(9).fill(0));
	}
	console.table(sudokuBoard);

	for(let i = 0; i < 9; i++){
		let containerChild = document.createElement("div");
		containerChild.classList.add("containerChild"); 
		containerChild.id = `containerChild_${i}`;
		for(let j = 0; j < 9; j++){
			let numberDiv = document.createElement("div");
			numberDiv.classList.add("numberDiv");
			numberDiv.id = `numberDiv_row${i}_column${j}`;
			numberDiv.dataset.number = sudokuBoard[i][j];
			if(Math.floor(Math.random() * 2) === 0){
				let numberDivInput = document.createElement("input");
				numberDivInput.addEventListener("keydown", (e) => {
					if(e.key === "Enter"){
						if(numberDivInput.value == numberDiv.dataset.number){
							numberDiv.style.setProperty("background-color", "#aaffaa", "important");
							setTimeout(() => {
								numberDiv.style.setProperty("background-color", "var(--bg)", "important");
							}, 500);
							numberDiv.innerHTML = "";
							numberDiv.textContent = sudokuBoard[i][j];
						} else {
							tries--;
							numberDivInput.value = "";
							numberDiv.style.setProperty("background-color", "#ffaaaa", "important");
							if(tries == 0){
								solve();
								for(let i = 0; i < 9; i++){
									for(let j = 0; j < 9; j++){
										document.getElementById(`numberDiv_row${i}_column${j}`).style.setProperty("background-color", "#ffaaaa", "important");
									}
								}
							}
						}
					}
					
				});
				numberDiv.appendChild(numberDivInput);
			} else {
				numberDiv.textContent = sudokuBoard[i][j];
			}
			containerChild.appendChild(numberDiv);
		}
		container.appendChild(containerChild);
	}
}
generateA();
restartButton.addEventListener("click", generateA);
	

solveButton.addEventListener("click", solve);

function solve(){
	for(let i = 0; i < 9; i++){
		for(let j = 0; j < 9; j++){
			document.getElementById(`numberDiv_row${i}_column${j}`).innerHTML = "";
			document.getElementById(`numberDiv_row${i}_column${j}`).textContent = sudokuBoard[i][j];
		}
	}
}