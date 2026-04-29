const matricesBtn1 = document.getElementById("matricesBtn1");
const matricesBtn2 = document.getElementById("matricesBtn2");






let matrixExample1State = 0;


matricesBtn1.addEventListener("click", function() {
	if(matrixExample1State != 1){
		matrixExample1State -= 1;
	}
	update();
});
matricesBtn2.addEventListener("click", function() {
	if(matrixExample1State != 4){
		matrixExample1State += 1;
	}
	update();
});


function update(){
	document.querySelectorAll(".matrixHighlight1").forEach(element => {
		element.style.backgroundColor = "transparent";
	});
	
	document.querySelectorAll(".matrixHighlight2").forEach(element => {
		element.style.backgroundColor = "transparent";
	});
	
	document.querySelectorAll(".matrixHighlight3").forEach(element => {
		element.style.backgroundColor = "transparent";
	});
	
	document.querySelectorAll(".matrixHighlight4").forEach(element => {
		element.style.backgroundColor = "transparent";
	});
	
	if(matrixExample1State === 1){
		document.querySelectorAll(".matrixHighlight1").forEach(element => {
			element.style.backgroundColor = "yellow";
		});
	} else if(matrixExample1State === 2){
		document.querySelectorAll(".matrixHighlight2").forEach(element => {
			element.style.backgroundColor = "yellow";
		});
	} else if(matrixExample1State === 3){
		document.querySelectorAll(".matrixHighlight3").forEach(element => {
			element.style.backgroundColor = "yellow";
		});
	} else if(matrixExample1State === 4){
		document.querySelectorAll(".matrixHighlight4").forEach(element => {
			element.style.backgroundColor = "yellow";
		});
	}
}