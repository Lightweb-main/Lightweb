const input = document.getElementById("input");


document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (input.innerText === "NaN" || input.innerText === "Error") {
      input.innerText = "";
    }

    if (input.innerText === "0") {
      input.innerText = "";
    }

    input.innerText += e.target.innerHTML.trim();
  });
});


document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const value = e.target.innerHTML.trim();
    const lastChar = input.innerText.slice(-1);
	const toRadians = angle => angle * (Math.PI / 180);


    if (value === "=") {
      try {
        let expression = input.innerText
          .replace(/\^/g, "**")
          .replace(/log\(/g, "Math.log10(")
		  .replace(/sin\(([^)]+)\)/g, "Math.sin($1 * Math.PI / 180)")
		  .replace(/cos\(([^)]+)\)/g, "Math.cos($1 * Math.PI / 180)")
		  .replace(/tan\(([^)]+)\)/g, "Math.tan($1 * Math.PI / 180)")
		  .replace(/√\(/g, "Math.sqrt(");

        let result = eval(expression);
		input.innerText = Math.round(result * 1000000000) / 1000000000;
      } catch {
        input.innerText = "NaN";
      }
    } else if (value === "AC") {
      input.innerText = "0";
    } else if (value === "DEL") {
      input.innerText = input.innerText.slice(0, -1);
      if (input.innerText.length === 0) {
        input.innerText = "0";
      }
    } else if (value === "log") {
	  if (input.innerText === "0" || input.innerText === "NaN" || input.innerText === "Error") {
			input.innerText = "";
		}
      input.innerText += "log(";
	} else if (value === "sin") {
		if (input.innerText === "0" || input.innerText === "NaN" || input.innerText === "Error") {
		input.innerText = "";
		}
	input.innerText += "sin(";
	} else if (value === "cos") {
		if (input.innerText === "0" || input.innerText === "NaN" || input.innerText === "Error") {
		input.innerText = "";
		}
	input.innerText += "cos(";
	} else if (value === "tan") {
		if (input.innerText === "0" || input.innerText === "NaN" || input.innerText === "Error") {
		input.innerText = "";
		}
	input.innerText += "tan(";
	} else if (value === "√") {
		if (input.innerText === "0" || input.innerText === "NaN" || input.innerText === "Error") {
			input.innerText = "";
		}
		input.innerText += "√(";
	} else {
      insertValue(value);
    }
  });
});

function insertValue(value) {
  const lastChar = input.innerText.slice(-1);

  if ((/\d|\)/.test(lastChar)) && value === "(") {
    input.innerText += "*";
  }

  if (lastChar === ")" && /\d/.test(value)) {
    input.innerText += "*";
  }

  if (lastChar === ")" && value === "(") {
    input.innerText += "*";
  }

  if (input.innerText === "0" || input.innerText === "NaN" || input.innerText === "Error") {
    input.innerText = "";
  }

  input.innerText += value;

}
