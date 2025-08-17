document.getElementById("inputValue").addEventListener("input", convert);
document.getElementById("fromUnit").addEventListener("change", convert);
document.getElementById("toUnit").addEventListener("change", convert);
document.getElementById("decimalAmount").addEventListener("change", convert);


const conversionRates = {
    quectometer: 10**30,
    rontometer: 10**27,
    yoctometer: 10**24,
    zeptometer: 10**21,
    attometer: 10**18,
    femtometer: 10**15,
    picometer: 10**12,
    nanometer: 10**9,
    micrometer: 10**6,
    millimeter: 10**3,
    centimeter: 10**2,
    decimeter: 10**1,
    meter: 10**0,
    dekameter: 10**-1,
    hectometer: 10**-2,
    kilometer: 10**-3
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

  const formattedValue =
    Math.abs(convertedValue) < 0.0001 || Math.abs(convertedValue) > 1e6
      ? convertedValue.toExponential(decimalPlaces)
      : convertedValue.toFixed(decimalPlaces);

  document.getElementById("result").value = formattedValue;
}














