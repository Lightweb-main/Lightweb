document.getElementById("inputValue").addEventListener("input", convert);
document.getElementById("fromUnit").addEventListener("change", convert);
document.getElementById("toUnit").addEventListener("change", convert);
document.getElementById("decimalAmount").addEventListener("change", convert);


const conversionRates = {
    quectometer: Math.pow(10, 30)
    rontometer: Math.pow(10, 27)
    yoctometer: Math.pow(10, 24)
    zeptometer: Math.pow(10, 21)
    attometer: Math.pow(10, 18)
    femtometer: Math.pow(10, 15)
    picometer: Math.pow(10, 12)
    nanometer: Math.pow(10, 9)
    micrometer: Math.pow(10, 6)
    millimeter: Math.pow(10, 3)
    centimeter: Math.pow(10, 2)
    decimeter: Math.pow(10, 1)
    meter: Math.pow(10, 0)
    dekameter: Math.pow(10, -1)
    hectometer: Math.pow(10, -2)
    kilometer: Math.pow(10, -3)
  };

function getDecimalPlaces(num) {
  const decimalAmo = parseInt(document.getElementById("decimalAmount").value);
  const numStr = String(num);
  const parts = numStr.split('.');
  const actualPlaces = parts[1] ? parts[1].length : 0;
  return Math.max(decimalAmo, actualPlaces);
}

function convert() {
  const input = document.getElementById("inputValue").value;
  const value = parseFloat(input);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;


  if (Number.isNaN(value)) {
    document.getElementById("result").value = "";
    return;
  }

  const decimalPlaces = getDecimalPlaces(input); 

  const valueInMeters = value / conversionRates[from];
  const convertedValue = valueInMeters * conversionRates[to];


  document.getElementById("result").value = convertedValue.toFixed(decimalPlaces); 
}


















