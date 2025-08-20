document.getElementById("inputValue1").addEventListener("input", convert); 
document.getElementById("fromUnit1").addEventListener("change", convert); 
document.getElementById("toUnit1").addEventListener("change", convert); 
document.getElementById("decimalAmount1").addEventListener("change", convert); 
document.getElementById("inputValue2").addEventListener("input", convert2); 
document.getElementById("fromUnit2").addEventListener("change", convert2); 
document.getElementById("toUnit2").addEventListener("change", convert2); 
document.getElementById("decimalAmount2").addEventListener("change", convert2);
document.getElementById("inputValue3").addEventListener("input", convert3); 
document.getElementById("fromUnit3").addEventListener("change", convert3); 
document.getElementById("toUnit3").addEventListener("change", convert3); 
document.getElementById("decimalAmount3").addEventListener("change", convert3);

document.getElementById("fromUnit1").value = "meter"
document.getElementById("toUnit1").value = "kilometer"
document.getElementById("inputValue1").value = 1000;

document.getElementById("fromUnit2").value = "celsius";
document.getElementById("toUnit2").value = "fahrenheit";
document.getElementById("inputValue2").value = 100;

document.getElementById("fromUnit3").value = "second";
document.getElementById("toUnit3").value = "hour";
document.getElementById("inputValue3").value = 3600;

document.getElementById("decimalAmount1").value = "2"
document.getElementById("decimalAmount2").value = "2"
document.getElementById("decimalAmount3").value = "2"
const conversionRates1 = {
    quectometer: 10**30,
    rontometer: 10**27,
    yoctometer: 10**24,
    zeptometer:10**21,
    attometer: 10**18,
    femtometer: 10**15,
    picometer: 10**12,
    angstrom: 10**10,
    nanometer: 10**9,
    beardSecond: 200000000,
    micrometer: 10**6,
    millimeter: 10**3,
    centimeter: 10**2,
    inch: 39.3700787,
    decimeter: 10**1,
    yard: 1.0936133,
    foot: 39.3700787 / 12,
    cubit: 2.1872266,
    meter: 10**-0,
    smoot: 0.587613116,
    fathom: 0.546806649,
    rod: 0.198838782,
    dekameter:10**-1,
    chain: 0.0497096954,
    hectometer:10**-2,
    furlong: 0.00497096954,
    li: 0.002,
    kilometer: 10**-3,
    mile: 0.000621371192,
    nauticalMile: 0.000539956803456,
    league: 0.000179985601,
    halfMarathon: 0.0000473989944,
    marathon: 0.0000236994972,
    picoparsec: 0.00003241,
    megameter: 10**-6,
    nanoparsec: 0.000000032408,
    megafurlong: 0.00000000497096954,
    gigameter: 10**-9,
    astronomicalUnit: 0.0000000000066846,
    terameter: 10**-12,
    milliparsec: 0.000000000000032408,
    petameter: 10**-15,
    lightYear: 0.00000000000000010570,
    parsec: 0.000000000000000032408,
    exameter: 10**-18,
    kiloparsec: 0.000000000000000000032408,
    zettameter: 10**-21,
    megaparsec: 0.000000000000000000000032408,
    yottameter: 10**-24,
    gigaparsec: 0.000000000000000000000000032408,
    ronnameter: 10**-27,
    teraparsec: 0.000000000000000000000000000032408,
    quettameter: 10**-30,
};

const conversionRates2 = {
second: 1,
minute: 0.016666666,
hour: 0.000277777777,
day: 0.0000115740741,
week: 0.00000165343915,
fortnight: 0.000000826719577,
month: 0.000000380517504,
year: 0.000000031709792,
siderealYear: 0.0000000316876862,
olympiad: 0.000000007927448,
decade: 0.0000000031709792,
century: 0.00000000031709792,
millennium: 0.000000000031709792,
aeon: 0.000000000000000031709792,

};

convert();
convert2();
convert3();
function getDecimalPlaces(num, decimalInputId) {
  const decimalAmo = parseInt(document.getElementById(decimalInputId).value);
  const numStr = String(num);
  const parts = numStr.split('.');
  const actualPlaces = parts[1] ? parts[1].length : 0;
  return Math.max(decimalAmo, actualPlaces);
}

function convert() {
  const input = document.getElementById("inputValue1").value;
  const value = parseFloat(input);
  const from = document.getElementById("fromUnit1").value;
  const to = document.getElementById("toUnit1").value;

  if (Number.isNaN(value)) {
    document.getElementById("result1").value = "";
    document.getElementById("resultSciNot1").value = "";
    return;
  }

  const decimalPlaces = getDecimalPlaces(input, "decimalAmount1");

  const valueInMeters = value / conversionRates1[from];
  const convertedValue = valueInMeters * conversionRates1[to];

  document.getElementById("result1").value = convertedValue.toFixed(decimalPlaces); 
  document.getElementById("resultSciNot1").value = convertedValue.toExponential(2);
}
function convert2(){
const input2 = document.getElementById("inputValue2").value;
  const value2 = parseFloat(input2);
  const from2 = document.getElementById("fromUnit2").value.toLowerCase();
  const to2 = document.getElementById("toUnit2").value.toLowerCase();

  if (Number.isNaN(value2)) {
    document.getElementById("result2").value = "";
    document.getElementById("resultSciNot2").value = "";
    return;
  }

  const decimalPlaces2 = getDecimalPlaces(input2, "decimalAmount2");

  let celsius;

  switch (from2) {
    case "celsius": celsius = value2; break;
    case "delisle": celsius = 100 - value2 * 2/3; break;
    case "fahrenheit": celsius = (value2 - 32) * 5/9; break;
    case "kelvin": celsius = value2 - 273.15; break;
    case "leiden": celsius = value2 - 253; break;
    case "newton": celsius = value2 / 0.33; break;
    case "rankine": celsius = (value2 - 491.67) / 1.8; break;
    case "romer": celsius = (value2 - 7.5) * 40/21; break;
    case "réaumur": celsius = value2 * 1.25; break;
    default: celsius = NaN;
  }

  let convertedValue2;

  switch (to2) {
    case "celsius": convertedValue2 = celsius; break;
    case "delisle": convertedValue2 = (100 - celsius) * 3/2; break;
    case "fahrenheit": convertedValue2 = (celsius * 9/5) + 32; break;
    case "kelvin": convertedValue2 = celsius + 273.15; break;
    case "leiden": convertedValue2 = celsius + 253; break;
    case "newton": convertedValue2 = celsius * 0.33; break;
    case "rankine": convertedValue2 = (celsius + 273.15) * 9/5; break;
    case "romer": convertedValue2 = (celsius * 21/40) + 7.5; break;
    case "réaumur": convertedValue2 = celsius * 0.8; break;
    default: convertedValue2 = NaN;
  }

  document.getElementById("result2").value = convertedValue2.toFixed(decimalPlaces2);
  document.getElementById("resultSciNot2").value = convertedValue2.toExponential(2);
}

function convert3() {
  const input = document.getElementById("inputValue3").value;
  const value = parseFloat(input);
  const from = document.getElementById("fromUnit3").value;
  const to = document.getElementById("toUnit3").value;

  if (Number.isNaN(value)) {
    document.getElementById("result3").value = "";
    document.getElementById("resultSciNot3").value = "";
    return;
  }

  const decimalPlaces = getDecimalPlaces(input, "decimalAmount3");

  const valueInSeconds = value / conversionRates2[from];
  const convertedValue = valueInSeconds * conversionRates2[to];

  document.getElementById("result3").value = convertedValue.toFixed(decimalPlaces); 
  document.getElementById("resultSciNot3").value = convertedValue.toExponential(2);
}




