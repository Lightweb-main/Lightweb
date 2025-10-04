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
document.getElementById("inputValue4").addEventListener("input", convert4); 
document.getElementById("fromUnit4").addEventListener("change", convert4); 
document.getElementById("toUnit4").addEventListener("change", convert4); 
document.getElementById("decimalAmount4").addEventListener("change", convert4);
document.getElementById("inputValue5").addEventListener("input", convert5); 
document.getElementById("fromUnit5").addEventListener("change", convert5); 
document.getElementById("toUnit5").addEventListener("change", convert5); 
document.getElementById("decimalAmount5").addEventListener("change", convert5);
document.getElementById("inputValue6").addEventListener("input", convert6); 
document.getElementById("fromUnit6").addEventListener("change", convert6); 
document.getElementById("toUnit6").addEventListener("change", convert6); 
document.getElementById("decimalAmount6").addEventListener("change", convert6);
document.getElementById("inputValue7").addEventListener("input", convert7); 
document.getElementById("fromUnit7").addEventListener("change", convert7); 
document.getElementById("toUnit7").addEventListener("change", convert7); 
document.getElementById("decimalAmount7").addEventListener("change", convert7);
document.getElementById("inputValue8").addEventListener("input", convert8); 
document.getElementById("fromUnit8").addEventListener("change", convert8); 
document.getElementById("toUnit8").addEventListener("change", convert8); 
document.getElementById("decimalAmount8").addEventListener("change", convert8);

document.getElementById("fromUnit1").value = "meter"
document.getElementById("toUnit1").value = "kilometer"
document.getElementById("inputValue1").value = 1000;

document.getElementById("fromUnit2").value = "celsius";
document.getElementById("toUnit2").value = "fahrenheit";
document.getElementById("inputValue2").value = 100;

document.getElementById("fromUnit3").value = "second";
document.getElementById("toUnit3").value = "hour";
document.getElementById("inputValue3").value = 3600;

document.getElementById("fromUnit4").value = "gram";
document.getElementById("toUnit4").value = "kilogram";
document.getElementById("inputValue4").value = 1000;

document.getElementById("fromUnit5").value = "mph";
document.getElementById("toUnit5").value = "kph";
document.getElementById("inputValue5").value = 34;

document.getElementById("fromUnit6").value = "degree";
document.getElementById("toUnit6").value = "revolution";
document.getElementById("inputValue6").value = 360;

document.getElementById("fromUnit7").value = "newton";
document.getElementById("toUnit7").value = "kilonewton";
document.getElementById("inputValue7").value = 1000;

document.getElementById("fromUnit8").value = "bit";
document.getElementById("toUnit8").value = "Byte";
document.getElementById("inputValue8").value = 25;

document.getElementById("decimalAmount1").value = "2"
document.getElementById("decimalAmount2").value = "2"
document.getElementById("decimalAmount3").value = "2"
document.getElementById("decimalAmount4").value = "2"
document.getElementById("decimalAmount5").value = "2"
document.getElementById("decimalAmount6").value = "2"
document.getElementById("decimalAmount7").value = "2"
document.getElementById("decimalAmount8").value = "2"
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
	cableLength: 0.546806649 / 120,
    li: 0.002,
    kilometer: 10**-3,
    statueMile: 0.000621371192,
    nauticalMile: 0.000539956803456,
	geographicalMile: 39.3700787 / 12 / 6080.2,
    league: 0.000621371192 / 3,
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
businessDay: 0.000277777777 / 8,
day: 0.0000115740741,
week: 0.00000165343915,
fortnight: 0.000000826719577,
lunarMonth: 0.000000391935227,
month: 0.000000380517504,
year: 0.000000031709792,
siderealYear: 0.0000000316876862,
olympiad: 0.000000007927448,
decade: 0.0000000031709792,
century: 0.00000000031709792,
millennium: 0.000000000031709792,
aeon: 0.000000000000000031709792,
};

const conversionRates3 = {
quectogram: 10**30,
rontogram: 10**27,
yoctogram: 10**24,
atomicmu: 602210000000000000000000,
zeptogram: 10**21,
attogram: 10**18,
femtogram: 10**15,
picogram: 10**12,
nanogram: 10**9,
microgram: 10**6,
milligram: 1000,
centigram: 100,
grain: 15.4323584,
decigram: 10,
carat: 5,
gram: 1,
dram: 0.56438339,
dekagram: 10**-1,
tola: 0.0857353242,
ounce: 0.035273962,
troyOunce: 0.0321507466,
hectogram: 10**-2,
pound: 0.00220462262,
kilogram: 10**-3,
stone: 0.000157473045,
slug:  0.000068521766,
USQuintal: 0.0000220462262,
frenchQuintal: 0.0000067136623,
metricQuintal: 10**-5,
shortTon: 0.00000110231131,
megagram: 10**-6,
metricTon: 10**-6,
longTon: 0.00000098421,
imperialTon: 0.00000098421,
gigagram: 10**-9,
teragram: 10**-12,
petagram: 10**-15,
exagram: 10**-18,
zettagram: 10**-21,
yottagram: 10**-24,
ronnagram: 10**-27,
quettagram: 10**-30,

};

const conversionRates4 = {
kph: 1.609344,
fps: 1.46666666,
mph: 1,
mps: 0.44704,
knot: 0.86897624,
mach: 0.00130332,
};

const conversionRates5 = {
arcsecond: 1296000,
arcminute: 21600,
gradian: 400,
degree: 360,
radian: 6.28318531,
revolution: 1,
};

const conversionRates6 = {
dyne: 1000000,
gramforce: 101.971621,
ounceforce: 3.59694309,
newton: 1,
poundforce: 0.22480894,
kilogramforce: 0.10197162,
kilonewton: 0.001,
kipforce: 0.00022481,
metrictonforce: 0.00010197,
};

const conversionRates7 = {
bit: 1,
nibble: 1/4,
Byte: 1/8,
kilobit: 1/1000,
kibibit: 1/1024,
kilobyte: 1/1000/8,
kibibyte: 1/1024/8,
megabit: 1/1000000,
mebibit: 1/1048576,
megabyte: 1/1000000/8,
mebibyte: 1/1048576/8,
gigabit: 1/10**9,
gibibit: 1/1024**3,
gigabyte: 1/10**9/8,
gibibyte: 1/1024**3/8,
terabit: 1/10**12,
tebibit: 1/1024**4,
terabyte: 1/10**12/8,
tebibyte: 1/1024**4/8,
petabit: 1/10**15,
pebibit: 1/1024**5,
petabyte: 1/10**15/8,
pebibyte: 1/1024**5/8,
exabit: 1/10**18,
exbibit: 1/1024**6,
exabyte: 1/10**18/8,
exbibyte: 1/1024**6/8,
zettabit: 1/10**21,
zebibit: 1/1024**7,
zettabyte: 1/10**21/8,
zebibyte: 1/1024**7/8,
yottabit: 1/10**24,
yobibit: 1/1024**8,
yottabyte: 1/10**24, 
yobibyte: 1/1024**8/8,
ronnabit: 1/10**27,
ronbibit: 1/1024**9,
ronnabyte: 1/10**27/8, 
ronbibyte: 1/1024**9/8,
quettabit: 1/10**30,
quebibit: 1/1024**10,
quettabyte: 1/10**30/8,
quebibyte: 1/1024**10/8,
};

convert();
convert2();
convert3();
convert4();
convert5();
convert6();
convert7();
convert8();
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
    case "reaumur": celsius = value2 * 1.25; break;
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
    case "reaumur": convertedValue2 = celsius * 0.8; break;
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


function convert4() {
  const input = document.getElementById("inputValue4").value;
  const value = parseFloat(input);
  const from = document.getElementById("fromUnit4").value;
  const to = document.getElementById("toUnit4").value;

  if (Number.isNaN(value)) {
    document.getElementById("result4").value = "";
    document.getElementById("resultSciNot4").value = "";
    return;
  }

  const decimalPlaces = getDecimalPlaces(input, "decimalAmount4");

  const valueInGrams = value / conversionRates3[from];
  const convertedValue = valueInGrams * conversionRates3[to];

  document.getElementById("result4").value = convertedValue.toFixed(decimalPlaces); 
  document.getElementById("resultSciNot4").value = convertedValue.toExponential(2);
}

function convert5() {
  const input = document.getElementById("inputValue5").value;
  const value = parseFloat(input);
  const from = document.getElementById("fromUnit5").value;
  const to = document.getElementById("toUnit5").value;

  if (Number.isNaN(value)) {
    document.getElementById("result5").value = "";
    document.getElementById("resultSciNot5").value = "";
    return;
  }

  const decimalPlaces = getDecimalPlaces(input, "decimalAmount5");

  const valueInMPH = value / conversionRates4[from];
  const convertedValue = valueInMPH * conversionRates4[to];

  document.getElementById("result5").value = convertedValue.toFixed(decimalPlaces); 
  document.getElementById("resultSciNot5").value = convertedValue.toExponential(2);

}

function convert6() {
  const input = document.getElementById("inputValue6").value;
  const value = parseFloat(input);
  const from = document.getElementById("fromUnit6").value;
  const to = document.getElementById("toUnit6").value;

  if (Number.isNaN(value)) {
    document.getElementById("result6").value = "";
    document.getElementById("resultSciNot6").value = "";
    return;
  }

  const decimalPlaces = getDecimalPlaces(input, "decimalAmount6");

  const valueInRevolutions = value / conversionRates5[from];
  const convertedValue = valueInRevolutions * conversionRates5[to];

  document.getElementById("result6").value = convertedValue.toFixed(decimalPlaces); 
  document.getElementById("resultSciNot6").value = convertedValue.toExponential(2);

}

function convert7() {
  const input = document.getElementById("inputValue7").value;
  const value = parseFloat(input);
  const from = document.getElementById("fromUnit7").value;
  const to = document.getElementById("toUnit7").value;

  if (Number.isNaN(value)) {
    document.getElementById("result7").value = "";
    document.getElementById("resultSciNot7").value = "";
    return;
  }

  const decimalPlaces = getDecimalPlaces(input, "decimalAmount7");

  const valueInNewtons = value / conversionRates6[from];
  const convertedValue = valueInNewtons * conversionRates6[to];

  document.getElementById("result7").value = convertedValue.toFixed(decimalPlaces); 
  document.getElementById("resultSciNot7").value = convertedValue.toExponential(2);

}

function convert8() {
  const input = document.getElementById("inputValue8").value;
  const value = parseFloat(input);
  const from = document.getElementById("fromUnit8").value;
  const to = document.getElementById("toUnit8").value;

  if (Number.isNaN(value)) {
    document.getElementById("result8").value = "";
    document.getElementById("resultSciNot8").value = "";
    return;
  }

  const decimalPlaces = getDecimalPlaces(input, "decimalAmount8");

  const valueInNewtons = value / conversionRates7[from];
  const convertedValue = valueInNewtons * conversionRates7[to];

  document.getElementById("result8").value = convertedValue.toFixed(decimalPlaces); 
  document.getElementById("resultSciNot8").value = convertedValue.toExponential(2);

}







