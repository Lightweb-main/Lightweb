setInterval(convert, 200);

function getDecimalPlaces(numStr) {
  const parts = numStr.split('.');
  return parts[1] ? parts[1].length : 0;
}

function convert() {
  const input = document.getElementById("inputValue").value;
  const value = parseFloat(input);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;

  const conversionRates = {
    centimeter: 100,
    decimeter: 10,
    meter: 1,
    dekameter: 0.1,
    hectometer: 0.01,
    kilometer: 0.001
  };

  if (Number.isNaN(value)) {
    document.getElementById("result").textContent = "";
    return;
  }

  const decimalPlaces = getDecimalPlaces(input);

  const valueInMeters = value / conversionRates[from];
  const convertedValue = valueInMeters * conversionRates[to];

  document.getElementById("result").textContent = `${convertedValue.toFixed(decimalPlaces)} `;
}
