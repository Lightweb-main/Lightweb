const arrayInput = document.getElementById("arrayInput");
const PopulationSelect = document.getElementById("PopulationSelect");
const SampleSelect = document.getElementById("SampleSelect");
const arrayContents = document.getElementById("arrayContents");
const arrayMean = document.getElementById("arrayMean");
const arrayMedian = document.getElementById("arrayMedian");
const arrayMode = document.getElementById("arrayMode");
const arrayMAD = document.getElementById("arrayMAD");
const arrayVariance = document.getElementById("arrayVariance");
const arrayStandardDeviation = document.getElementById("arrayStandardDeviation");
const arrayCoefficentOfVariation = document.getElementById("arrayCoefficentOfVariation");
const arrayGeometricMean = document.getElementById("arrayGeometricMean");
const arrayHarmonicMean = document.getElementById("arrayHarmonicMean");

let data = [];
let dataMean = 0;
let dataMedian = 0;
let dataMode = 0;
let dataType = '';
let dataMeanAbsoluteDeviation = 0;
let dataStandardDeviation = 0;
let dataVariance = 0;
let dataCoefficentOfVariation = 0;
let dataGeometricMean = 1;
let dataHarmonicMean = 0;
setInterval(update, 10);


function dataTypeSwitch(input){
	if(dataType == input){
		dataType = "";
	} else if(dataType != input){
		dataType = input;
	} else {
		dataType = input;
	}
}


function addArrayInput(){
	data = [];
	if(!isNaN(arrayInput.value) && arrayInput.value != ""){
		data.push(arrayInput.value);
	}
	
	if(arrayInput.value.startsWith("[") && arrayInput.value.endsWith("]")){
		const arrayValue = arrayInput.value;
		const arrayTrim = arrayValue.trim();
		try {
			JSONarray = JSON.parse(arrayTrim);
			
			if(Array.isArray(JSONarray)){
				data = data.concat(JSONarray);
			} else {
				alert("Input needs to be an array");
			}
		} catch (err) {
			alert("Invalid Format");	
		}
	}
}


function sortDataNumericalOrder(){
	data.sort((a, b) => a - b);
}

function calculate(){
if(data.length > 0 && dataType != ""){
	
	
	const modeMap = new Map();
	let maxFrequency = 0;
	let dataModes = [];
	
	for(let i = 0; i < data.length; i++){
		dataMean += parseInt(data[i]);
	}
	dataMean = dataMean / data.length;
	
	for(let i = 0; i < data.length; i++){
		dataMeanAbsoluteDeviation += Math.abs(Number(data[i] - dataMean));
	}
	
	dataMeanAbsoluteDeviation = dataMeanAbsoluteDeviation / data.length;
	
	let sortedData = data.sort((a, b) => a - b);
	let middleIndex = Math.floor(sortedData.length / 2);
	
	if (sortedData.length % 2 !== 0) {
		dataMedian = sortedData[middleIndex];
	} else {
		dataMedian = (Number(sortedData[middleIndex - 1]) + Number(sortedData[middleIndex])) / 2;
	}
	
	for(let i = 0; i < data.length; i++){
		let standardDeviationHalf = Number(data[i]) - dataMean;
		dataStandardDeviation += standardDeviationHalf * standardDeviationHalf;
		dataVariance += standardDeviationHalf * standardDeviationHalf;
	}
	
	if(dataType == "population"){
		dataStandardDeviation /= data.length;
		dataVariance /= data.length;
	} else if(dataType == "sample"){
		dataStandardDeviation /= data.length - 1;
		dataVariance /= data.length - 1;
	}
	
	dataStandardDeviation = Math.sqrt(dataStandardDeviation);
	dataCoefficentOfVariation = dataStandardDeviation / dataMean;
	
	
	for(const number of data){
		const count = (modeMap.get(number) || 0) + 1;
		modeMap.set(number, count);
		if(count > maxFrequency){
			maxFrequency = count;
		}
	}
	
	for (const [number, count] of modeMap.entries()) {
        if (count === maxFrequency) {
            dataModes.push(number);
        }
    }	
	
	for(let i = 0; i < data.length; i++){
		dataGeometricMean *= Number(data[i]);
		console.log(dataGeometricMean);
	}
	
	dataHarmonicMean = data.length;
	let dataHarmonicMeanDenominator = 0;
	for(let i = 0; i < data.length; i++){
		dataHarmonicMeanDenominator += 1 / Number(data[i]);
	}
	
	dataHarmonicMean /= dataHarmonicMeanDenominator;
	
	dataGeometricMean = Math.pow(dataGeometricMean, 1 / data.length);
	

	arrayMean.textContent = `Data Mean: ${dataMean}`;
	arrayMedian.textContent = `Data Median: ${dataMedian}`;
	arrayMode.textContent = `Data Mode: ${dataModes}`;
	arrayMAD.textContent = `Data Mean Absolute Deviation (MAD): ${dataMeanAbsoluteDeviation}`;
	arrayCoefficentOfVariation.textContent = `Data Coefficent of Variation: ${dataCoefficentOfVariation}`;
	arrayGeometricMean.textContent = `Data Geometric Mean: ${dataGeometricMean}`;
	arrayHarmonicMean.textContent = `Data Harmonic Mean: ${dataHarmonicMean}`;
	
	if(dataType == "population"){
	arrayStandardDeviation.innerHTML = `Data &sigma;<sub>x</sub>: ${dataStandardDeviation}`;
	arrayVariance.innerHTML = `Data Variance (&sigma;<sup>2</sup>): ${dataVariance}`;
	} else if(dataType == "sample"){
	arrayStandardDeviation.innerHTML = `Data S<sub>x</sub>: ${dataStandardDeviation}`;
	arrayVariance.innerHTML = `Data Variance (S<sup>2</sup>): ${dataVariance}`;	
	}
	if(isNaN(dataMean)){
		arrayMean.style.display = "none";
	} else {
		arrayMean.style.display = "block";
	}
	
	if(isNaN(dataMedian)){
		arrayMedian.style.display = "none";
	} else {
		arrayMedian.style.display = "block";
	}
	
	if(isNaN(dataMode)){
		arrayMode.style.display = "none";
	} else {
		arrayMode.style.display = "block";
	}
	
	if(isNaN(dataMeanAbsoluteDeviation)){
		arrayMAD.style.display = "none";
	} else {
		arrayMAD.style.display = "block";
	}
	
	if(isNaN(dataStandardDeviation)){
		arrayStandardDeviation.style.display = "none";
	} else {
		arrayStandardDeviation.style.display = "block";
	}
	
	
	if(isNaN(dataVariance)){
		arrayVariance.style.display = "none";
	} else {
		arrayVariance.style.display = "block";
	}
	
	if(isNaN(dataCoefficentOfVariation)){
		arrayCoefficentOfVariation.style.display = "none";
	} else {
		arrayCoefficentOfVariation.style.display = "block";
	}
	
} else {
	if(data.length <= 0){
		alert("Data set is empty...")
	} 
	if(dataType == ""){
		alert("Data type isn't set. (Population / Sample)");
	}
}
}






























const oneVarCalc = document.getElementById("oneVarCalc");
const twoVarCalc = document.getElementById("twoVarCalc");
const arrayInput2Var = document.getElementById("arrayInput2Var");
const twoVarDataset1Contents = document.getElementById("twoVarDataset1Contents");
const twoVarDataset2Contents = document.getElementById("twoVarDataset2Contents");
const twoVarCorrelationCoefficentDisplay = document.getElementById("twoVarCorrelationCoefficentDisplay");
let twoVarDataset1 = [];
let twoVarDataset2 = [];

function addArrayInput2Var(){
	twoVarDataset1 = [];
	if(!isNaN(arrayInput2Var.value) && arrayInput2Var.value != ""){
		twoVarDataset1.push(arrayInput2Var.value);
	}
	
	if(arrayInput2Var.value.startsWith("[") && arrayInput2Var.value.endsWith("]")){
		const arrayValue = arrayInput2Var.value;
		const arrayTrim = arrayValue.trim();
		try {
			JSONarray = JSON.parse(arrayTrim);
			
			if(Array.isArray(JSONarray)){
				twoVarDataset1 = twoVarDataset1.concat(JSONarray);
			} else {
				alert("Input needs to be an array");
			}
		} catch (err) {
			alert("Invalid Format");	
		}
	}
}

function addArrayInput2VarSet2(){
	twoVarDataset2 = [];
	if(!isNaN(arrayInput2Var.value) && arrayInput2Var.value != ""){
		twoVarDataset2.push(arrayInput2Var.value);
	}
	
	if(arrayInput2Var.value.startsWith("[") && arrayInput2Var.value.endsWith("]")){
		const arrayValue = arrayInput2Var.value;
		const arrayTrim = arrayValue.trim();
		try {
			JSONarray = JSON.parse(arrayTrim);
			
			if(Array.isArray(JSONarray)){
				twoVarDataset2 = twoVarDataset2.concat(JSONarray);
			} else {
				alert("Input needs to be an array");
			}
		} catch (err) {
			alert("Invalid Format");	
		}
	}
}



function calculateTwoVar(){
if(twoVarDataset1.length == twoVarDataset2.length){
	let twoVarDataset1Mean = 0;
	let twoVarDataset2Mean = 0;
	let twoVarSumOfDataset1 = 0;
	let twoVarSumOfDataset2 = 0;
	let twoVarCorrelationCoefficentNumerator = 0;
	let twoVarCorrelationCoefficentDenominator = 0;
	let twoVarDataset1SummationMeanDifference = 0;
	let twoVarDataset2SummationMeanDifference = 0;
	let twoVarDataset1SummationMeanDifferenceSqaured = 0;
	let twoVarDataset2SummationMeanDifferenceSqaured = 0;
	
	
	
	for(let i = 0; i < twoVarDataset1.length; i++){
		twoVarSumOfDataset1 += Number(twoVarDataset1[i]);
	}
	
	for(let i = 0; i < twoVarDataset2.length; i++){
		twoVarSumOfDataset2 += Number(twoVarDataset2[i]);
	}
	
	twoVarDataset1Mean = twoVarSumOfDataset1 / twoVarDataset1.length;
	
	twoVarDataset2Mean = twoVarSumOfDataset2 / twoVarDataset2.length;
	
	
	for(let i = 0; i < twoVarDataset1.length; i++){
		twoVarDataset1SummationMeanDifference = Number(twoVarDataset1[i]) - twoVarDataset1Mean;
		twoVarDataset2SummationMeanDifference = Number(twoVarDataset2[i]) - twoVarDataset2Mean;
		twoVarCorrelationCoefficentNumerator += twoVarDataset1SummationMeanDifference * twoVarDataset2SummationMeanDifference;
	}
	
	for(let i = 0; i < twoVarDataset1.length; i++){
		twoVarDataset1SummationMeanDifferenceSqaured = twoVarDataset1SummationMeanDifference * twoVarDataset1SummationMeanDifference;
		twoVarDataset2SummationMeanDifferenceSqaured = twoVarDataset2SummationMeanDifference * twoVarDataset2SummationMeanDifference;
		twoVarCorrelationCoefficentDenominator += twoVarDataset1SummationMeanDifferenceSqaured * twoVarDataset2SummationMeanDifferenceSqaured;
	}
	
	twoVarCorrelationCoefficentDenominator = Math.sqrt(twoVarCorrelationCoefficentDenominator);
	twoVarCorrelationCoefficent = twoVarCorrelationCoefficentNumerator / twoVarCorrelationCoefficentDenominator;
	
	
	twoVarCorrelationCoefficentDisplay.textContent = `Pearson Correlation Coefficent: ${twoVarCorrelationCoefficent}`;
} else {
	alert("The datasets need to be equal in size");
}
}

let varType = 0;



function switchVarType(input){
	varType = input;
}

function update(){
	oneVarCalc.style.display = "none";
	twoVarCalc.style.display = "none";
	if(varType == 1){
		oneVarCalc.style.display = "flex";
	} else if(varType == 2){
		twoVarCalc.style.display = "flex";
	}
	arrayContents.textContent = `Data: [${data}]`;
	twoVarDataset1Contents.textContent = `Dataset 1: [${twoVarDataset1}]`;
	twoVarDataset2Contents.textContent = `Dataset 2: [${twoVarDataset2}]`;
	
	if(dataType == "population"){
		PopulationSelect.style.backgroundColor = "#ddaaaa";
	} else {
		PopulationSelect.style.backgroundColor = "#ffffff";
	}
	
	if(dataType == "sample"){
		SampleSelect.style.backgroundColor = "#ddaaaa";
	} else {
		SampleSelect.style.backgroundColor = "#ffffff";
	}
}
