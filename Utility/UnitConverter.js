setInterval(convert, 100);
setInterval(convert2, 100);

document.getElementById("fromUnit1").value = "meter"
document.getElementById("toUnit1").value = "kilometer"
document.getElementById("inputValue1").value = 1000;

document.getElementById("fromUnit2").value = "celsius";
document.getElementById("toUnit2").value = "fahrenheit";
document.getElementById("inputValue2").value = 100;

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

function convert2() {
  const input = document.getElementById("inputValue2").value;
  const value = parseFloat(input);
  const from = document.getElementById("fromUnit2").value.toLowerCase();
  const to = document.getElementById("toUnit2").value.toLowerCase();

  if (Number.isNaN(value)) {
    document.getElementById("result2").value = "";
    document.getElementById("resultSciNot2").value = "";
    return;
  }

  const decimalPlaces2 = getDecimalPlaces(input, "decimalAmount2");

  let celsius;

  switch (from) {
    case "celsius": celsius = value; break;
    case "delisle": celsius = 100 - value * 2/3; break;
    case "fahrenheit": celsius = (value - 32) * 5/9; break;
    case "kelvin": celsius = value - 273.15; break;
    case "leiden": celsius = value - 253; break;
    case "newton": celsius = value / 0.33; break;
    case "rankine": celsius = (value - 491.67) / 1.8; break;
    case "romer": celsius = (value - 7.5) * 40/21; break;
    case "réaumur": celsius = value * 1.25; break;
    default: celsius = NaN;
  }

  let convertedValue2;

  switch (to) {
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
























