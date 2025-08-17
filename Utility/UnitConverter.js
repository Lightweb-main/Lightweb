setInterval(convert, 200);

const conversionRates = {
    centimeter: 100,
    decimeter: 10,
    meter: 1,
    dekameter: 0.1,
    hectometer: 0.01,
    kilometer: 0.001
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

  const decimalPlaces = getDecimalPlaces(value);

  const valueInMeters = value / conversionRates[from];
  const convertedValue = valueInMeters * conversionRates[to];

  document.getElementById("result").value = convertedValue.toFixed(decimalPlaces);
}







