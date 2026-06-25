let columns = 9;
let rows = 9;
let mines = 9;
let flags = 0;

let minesweeperBoard = Array.from({length: rows}, () => Array(columns).fill(""));

container.style.display = "grid";
container.style.margin = "auto";
container.style.width = "800px";
container.style.textAlign = "center";
container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;




function generateArray(){
	console.log(columns);
	console.log(rows);
	for(let i = 0; i < rows; i++){
		for(let j = 0; j < columns; j++){
			minesweeperBoard[i][j] = {
				type: "S",
				revealed: "false",
				flagged: "false",
				nearMines: 0
			}
		}
	}
	let placedMines = 0;
	while(placedMines < mines){
		const randomI = Math.floor(Math.random() * rows);
		const randomJ = Math.floor(Math.random() * columns);
		if(minesweeperBoard[randomI][randomJ].type !== "B"){
			minesweeperBoard[randomI][randomJ].type = "B";
			placedMines++;
		}
	}
	for(let i = 0; i < rows; i++){
		for(let j = 0; j < columns; j++){
			if(minesweeperBoard[i][j].type !== "B"){
				let nearMines = 0;
				for(let k = -1; k <= 1; k++){
					for(let l = -1; l <= 1; l++){
						if(i + k >= 0 && 
						   i + k < rows && 
						   j + l >= 0 && 
						   j + l < columns && 
						   minesweeperBoard[i + k][j + l].type === "B"
						   ){
							nearMines++;
						}
					}
				}
				minesweeperBoard[i][j].nearMines = nearMines;
			}
		}
	}
}

function revealAdjacent(row, column){
	if (
        row < 0 ||
        row >= rows ||
        column < 0 ||
        column >= columns ||
        minesweeperBoard[row][column].revealed === "true"
    ) {
        return;
    }
	
	minesweeperBoard[row][column].revealed = "true";
	if(minesweeperBoard[row][column].type === "B"){
		alert("Game Over...");
		revealAllMines();
		return;
	} else if(minesweeperBoard[row][column].nearMines === 0){
		for(let i = -1; i <= 1; i++){
			for(let j = -1; j <= 1; j++){
				revealAdjacent(row + i, column + j);
			}
		}
	}
	
	
	generateBoard();
};

function flag(row, column){
	if (
        row < 0 ||
        row >= rows ||
        column < 0 ||
        column >= columns ||
        minesweeperBoard[row][column].revealed === "true" ||
		flags >= mines
    ) {
        return;
    }
	stats.querySelectorAll("p")[0].textContent = `Flag: ${flags} / ${mines}`;
	if(minesweeperBoard[row][column].flagged === "true"){
		minesweeperBoard[row][column].flagged = "false";
		flags--;
	} else {
		minesweeperBoard[row][column].flagged = "true";
		flags++;
	}
	let flaggedMines = 0;
	for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (minesweeperBoard[i][j].type === "B" &&
                minesweeperBoard[i][j].flagged === "true") {
                flaggedMines++;
            }
        }
    }
	if(flaggedMines === mines){
		alert("Congrats! You have sweeped the minefield!");
		revealAllMines();
		return;
	}
	
	generateBoard();
}

function generateBoard(){
	container.innerHTML = "";
	stats.querySelectorAll("p")[0].textContent = `Flag: ${flags} / ${mines}`;
	for(let i = 0; i < rows; i++){
		for(let j = 0; j < columns; j++){
			
			let minesweeperDiv = document.createElement("div");
			minesweeperDiv.querySelectorAll("img").forEach(img => img.remove());
			minesweeperDiv.style.backgroundColor = `#cccccc`;
			if(minesweeperBoard[i][j].revealed === "true"){
				if(minesweeperBoard[i][j].type === "B"){
					minesweeperDiv.querySelectorAll("img").forEach(img => img.remove());
					let minesweeperBombImg = document.createElement("img");
					minesweeperBombImg.src = "../Images/Minesweeper.img1.png";
					minesweeperBombImg.style.width = "100%";
					minesweeperBombImg.style.height = "100%";
					minesweeperDiv.appendChild(minesweeperBombImg);
					
				}
				if(minesweeperBoard[i][j].nearMines > 0){
						minesweeperDiv.textContent = minesweeperBoard[i][j].nearMines;
				}
			}
			if(minesweeperBoard[i][j].flagged === "true"){
				minesweeperDiv.querySelectorAll("img").forEach(img => img.remove());
				if(minesweeperBoard[i][j].revealed === "false"){
					minesweeperDiv.style.backgroundColor = `#ff7777`;
					let minesweeperFlagImg = document.createElement("img");
					minesweeperFlagImg.src = "../Images/Minesweeper.img2.png";
					minesweeperFlagImg.style.width = "100%";
					minesweeperFlagImg.style.height = "100%";
					minesweeperDiv.appendChild(minesweeperFlagImg);
				}
				if(minesweeperBoard[i][j].revealed === "true"){
					minesweeperDiv.style.backgroundColor = `#aaaaaa`;
				}
			} else {
				if(minesweeperBoard[i][j].revealed === "true"){
					minesweeperDiv.style.backgroundColor = `#aaaaaa`;
				}
			}
			if(minesweeperBoard[i][j].type === "B"){
				if(minesweeperBoard[i][j].revealed === "true"){
					minesweeperDiv.style.backgroundColor = `#ff0000`;
				}
			};
			minesweeperDiv.style.display = "flex";
			minesweeperDiv.style.justifyContent = "center";
			minesweeperDiv.style.alignItems = "center";
			minesweeperDiv.style.border = "2px solid var(--border)";
			minesweeperDiv.style.width = `${800 / columns}px`;
			minesweeperDiv.style.height = `${800 / columns}px`;
			minesweeperDiv.style.fontSize = `${800 / columns}px`;
			minesweeperDiv.style.cursor = "pointer";
			if(minesweeperBoard[i][j].nearMines == 0){
				minesweeperDiv.style.color = "#000000";
			} else if(minesweeperBoard[i][j].nearMines == 1){
				minesweeperDiv.style.color = "#0000ff";
			} else if(minesweeperBoard[i][j].nearMines == 2){
				minesweeperDiv.style.color = "#00ff00";
			} else if(minesweeperBoard[i][j].nearMines == 3){
				minesweeperDiv.style.color = "#ff0000";
			} else if(minesweeperBoard[i][j].nearMines == 4){
				minesweeperDiv.style.color = "#0000aa";
			} else if(minesweeperBoard[i][j].nearMines == 5){
				minesweeperDiv.style.color = "#00aa00";
			} else if(minesweeperBoard[i][j].nearMines == 6){
				minesweeperDiv.style.color = "#aa0000";
			} else if(minesweeperBoard[i][j].nearMines == 7){
				minesweeperDiv.style.color = "#000066";
			} else if(minesweeperBoard[i][j].nearMines == 8){
				minesweeperDiv.style.color = "#006600";
			}
			minesweeperDiv.addEventListener("mousedown", (e) => {
				e.preventDefault();
				
				if(e.button === 0){
					revealAdjacent(i, j);
				} else if(e.button === 2){
					flag(i, j);
				}
			});
			minesweeperDiv.addEventListener("contextmenu", (e) => {
				e.preventDefault();
			});
			container.appendChild(minesweeperDiv);
		}
	}
}

function revealAllMines(){
	for(let i = 0; i < rows; i++){
		for(let j = 0; j < columns; j++){
			minesweeperBoard[i][j].revealed = "true";
			minesweeperBoard[i][j].flagged = "false";
		}
	}
	generateBoard();
}

generateArray();
generateBoard();

resetBtn.addEventListener("click", () => {
	if(isNaN(stats.querySelectorAll("input")[0].value) && stats.querySelectorAll("input")[0].value > 0){
		alert("The number of rows has to be a number and greater than 0.");
		return;
	}
	if(isNaN(stats.querySelectorAll("input")[1].value) && stats.querySelectorAll("input")[1].value > 0){
		alert("The number of columns has to be a number and greater than 0.");
		return;
	}
	if(isNaN(stats.querySelectorAll("input")[2].value) && stats.querySelectorAll("input")[2].value > 0){
		alert("The number of mines has to be a number and greater than 0.");
		return;
	}
	rows = Number(stats.querySelectorAll("input")[0].value);
	columns = Number(stats.querySelectorAll("input")[1].value);
	mines = Number(stats.querySelectorAll("input")[2].value);
	flags = 0;
	container.style.display = "grid";
	container.style.margin = "auto";
	container.style.width = "800px";
	container.style.textAlign = "center";
	container.style.gridTemplateColumns = `repeat(${columns}, ${800 / columns}px)`;
	minesweeperBoard = Array.from({length: rows}, () => Array(columns).fill(""));
	localStorage.setItem("lightwebMinesweeperRows", Number(stats.querySelectorAll("input")[0].value));
	localStorage.setItem("lightwebMinesweeperColumns", Number(stats.querySelectorAll("input")[1].value));
	localStorage.setItem("lightwebMinesweeperMines", Number(stats.querySelectorAll("input")[2].value));
	generateArray();
	generateBoard();
});