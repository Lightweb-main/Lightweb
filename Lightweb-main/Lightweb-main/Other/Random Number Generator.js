const output = document.getElementById("output");
const Min = document.getElementById("Min");
const Max = document.getElementById("Max");
const status1 = document.getElementById("status1");
let precisionToggle = false;
setInterval(update, 100);

function rng() {
  const min = parseInt(Min.value);
  const max = parseInt(Max.value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    output.value = "Invalid range";
    return;
  }

  let result;
  if (!precisionToggle) {
    result = Math.floor(Math.random() * (max - min + 1) + min);
  } else {
    result = Math.random() * (max - min) + min;
  }

  output.value = result;
}

function update(){
	if(precisionToggle == true){
		status1.textContent = "ON"
	} else {
		status1.textContent = "OFF"
	}
}

