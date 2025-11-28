const arrayInput = document.getElementById("arrayInput");
const PopulationSelect = document.getElementById("PopulationSelect");
const SampleSelect = document.getElementById("SampleSelect");
const arrayContents = document.getElementById("arrayContents");
const arraySize = document.getElementById("arraySize");
const arrayMean = document.getElementById("arrayMean");
const arrayMedian = document.getElementById("arrayMedian");
const arrayMode = document.getElementById("arrayMode");
const arrayMAD = document.getElementById("arrayMAD");
const arrayVariance = document.getElementById("arrayVariance");
const arrayStandardDeviation = document.getElementById("arrayStandardDeviation");
const arrayCoefficentOfVariation = document.getElementById("arrayCoefficentOfVariation");
const arrayGeometricMean = document.getElementById("arrayGeometricMean");
const arrayHarmonicMean = document.getElementById("arrayHarmonicMean");
const arrayQuartile1 = document.getElementById("arrayQuartile1");
const arrayQuartile3 = document.getElementById("arrayQuartile3");
const arrayMinimum = document.getElementById("arrayMinimum");
const arrayMaximum = document.getElementById("arrayMaximum");
const arrayRange = document.getElementById("arrayRange");
const arrayInterquartileRange = document.getElementById("arrayInterquartileRange");
const arrayQuartileDeviation = document.getElementById("arrayQuartileDeviation");


let data = [];
let dataSize = 0;
let dataMinimum = 0;
let dataMaximum = 0;
let dataQuartile1 = 0;
let dataQuartile3 = 0;
let dataInterquartileRange = 0;
let dataQuartileDeviation = 0;
let dataRange = 0;
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
	dataMean = 0;
	dataSize = data.length;
	dataMedian = 0;
	dataMode = 0;
	dataMeanAbsoluteDeviation = 0;
	dataStandardDeviation = 0;
	dataVariance = 0;
	dataCoefficentOfVariation = 0;
	dataGeometricMean = 1;
	dataHarmonicMean = 0;
	dataMinimum = 0;
	dataMaximum = 0;
	dataQuartile1 = 0;
	dataQuartile3 = 0;
	dataInterquartileRange = 0;
	dataRange = 0;
	dataQuartileDeviation = 0;
	
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
	
	let dataData = data.sort((a, b) => a - b);
	let middleIndex = Math.floor(dataData.length / 2);
	
	if (dataData.length % 2 !== 0) {
		dataMedian = dataData[middleIndex];
	} else {
		dataMedian = (Number(dataData[middleIndex - 1]) + Number(dataData[middleIndex])) / 2;
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
	}
	
	dataHarmonicMean = data.length;
	let dataHarmonicMeanDenominator = 0;
	for(let i = 0; i < data.length; i++){
		dataHarmonicMeanDenominator += 1 / Number(data[i]);
	}
	
	dataHarmonicMean /= dataHarmonicMeanDenominator;
	
	dataGeometricMean = Math.pow(dataGeometricMean, 1 / data.length);
	
	dataMinimum = data[0];
	dataMaximum = data[data.length - 1];
	if(data.length % 2 === 0){
		dataQuartile1 = (data[Math.floor(data.length / 4)] + data[Math.floor(data.length / 4) - 1]) / 2;
		dataQuartile3 = (data[Math.floor(data.length * 3 / 4)] + data[Math.floor(data.length * 3 / 4) - 1]) / 2;
	} else {
		dataQuartile1 = data[Math.floor(data.length / 4)];
		dataQuartile3 = data[Math.floor(data.length * 3 / 4)];
	}
	
	dataRange = dataMaximum - dataMinimum;
	dataInterquartileRange = dataQuartile3 - dataQuartile1;
	dataQuartileDeviation =  (dataQuartile3 - dataQuartile1) / 2;

	
	

	if(isNaN(dataMean)){
		dataMean = "undefined";
	}
	if(isNaN(dataMedian)){
		dataMedian = "undefined";
	}
	if(isNaN(dataMeanAbsoluteDeviation)){
		dataMeanAbsoluteDeviation = "undefined";
	}
	if(isNaN(dataCoefficentOfVariation)){
		dataCoefficentOfVariation = "undefined";
	}
	if(isNaN(dataGeometricMean)){
		dataGeometricMean = "undefined";
	}
	if(isNaN(dataHarmonicMean)){
		dataHarmonicMean = "undefined";
	}
	if(isNaN(dataStandardDeviation)){
		dataStandardDeviation = "undefined";
	}
	if(isNaN(dataVariance)){
		dataVariance = "undefined";
	}
	
	arraySize.textContent = `Data Size: ${dataSize}`;
	arrayMean.textContent = `Data Mean: ${dataMean}`;
	arrayMedian.textContent = `Data Median: ${dataMedian}`;
	arrayMode.textContent = `Data Mode: ${dataModes}`;
	arrayMAD.textContent = `Data Mean Absolute Deviation (MAD): ${dataMeanAbsoluteDeviation}`;
	arrayCoefficentOfVariation.textContent = `Data Coefficent of Variation: ${dataCoefficentOfVariation}`;
	arrayGeometricMean.textContent = `Data Geometric Mean: ${dataGeometricMean}`;
	arrayHarmonicMean.textContent = `Data Harmonic Mean: ${dataHarmonicMean}`;
	arrayHarmonicMean.textContent = `Data Harmonic Mean: ${dataHarmonicMean}`;
	arrayHarmonicMean.textContent = `Data Harmonic Mean: ${dataHarmonicMean}`;
	arrayMinimum.textContent = `Data Minimum: ${dataMinimum}`;
	arrayMaximum.textContent = `Data Maximum: ${dataMaximum}`;
	arrayQuartile1.innerHTML = `Data Q<sub>1</sub> (Lower Quartile): ${dataQuartile1}`;
	arrayQuartile3.innerHTML = `Data Q<sub>3</sub> (Higher/Upper Quartile): ${dataQuartile3}`;
	arrayRange.textContent = `Data Range: ${dataRange}`;
	arrayInterquartileRange.textContent = `Data Interquartile Range: ${dataInterquartileRange}`;
	arrayQuartileDeviation.textContent = `Data Quartile Deviation: ${dataQuartileDeviation}`;
	
	if(dataType == "population"){
	arrayStandardDeviation.innerHTML = `Data Standard Devitation (&sigma;<sub>x</sub>): ${dataStandardDeviation}`;
	arrayVariance.innerHTML = `Data Variance (&sigma;<sup>2</sup>): ${dataVariance}`;
	} else if(dataType == "sample"){
	arrayStandardDeviation.innerHTML = `Data Standard Devitation (S<sub>x</sub>): ${dataStandardDeviation}`;
	arrayVariance.innerHTML = `Data Variance (S<sup>2</sup>): ${dataVariance}`;	
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
const twoVarCorrelationCoefficientDisplay = document.getElementById("twoVarCorrelationCoefficientDisplay");
const twoVarCovarianceDisplay = document.getElementById("twoVarCovarianceDisplay");
const twoVarPopulationSelect = document.getElementById("twoVarPopulationSelect");
const twoVarSampleSelect = document.getElementById("twoVarSampleSelect");


let twoVarDataset1 = [];
let twoVarDataset2 = [];
let twoVarDataType = '';

function twoVarDataTypeSwitch(input){
	if(twoVarDataType == input){
		twoVarDataType = "";
	} else if(twoVarDataType != input){
		twoVarDataType = input;
	} else {
		twoVarDataType = input;
	}
}

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
if(twoVarDataset1.length == twoVarDataset2.length && twoVarDataType != ''){
	let twoVarDataset1Mean = 0;
	let twoVarDataset2Mean = 0;
	let twoVarDataset1Summation = 0;
	let twoVarDataset2Summation = 0;
	let twoVarDataset1SummationSqauredValues = 0;
	let twoVarDataset2SummationSqauredValues = 0;
	let twoVarDatasetSummationOfMultiplicationPairs = 0;
	let twoVarCorrelationCoefficient = 0;
	let twoVarCorrelationCoefficientNumerator = 0;
	let twoVarCorrelationCoefficientDenominator = 0;
	let twoVarCorrelationCoefficentSumofSqauredMeanDifferenceDataset1 = 0;
	let twoVarCorrelationCoefficentSumofSqauredMeanDifferenceDataset2 = 0;
	let twoVarCovariance = 0;
	let twoVarLinearRegressionInterceptNumerator = 0;
	let twoVarLinearRegressionInterceptDenominator = 0;
	let twoVarLinearRegressionSlopeNumerator = 0;
	let twoVarLinearRegressionSlopeDenominator = 0;
	let twoVarLinearRegressionIntercept = 0;
	let twoVarLinearRegressionSlope = 0;
	
	for(let i = 0; i < twoVarDataset1.length; i++){
		twoVarDataset1Mean += twoVarDataset1[i];
		twoVarDataset1Summation += twoVarDataset1[i];
		twoVarDataset1SummationSqauredValues += twoVarDataset1[i] * twoVarDataset1[i];

	}
	for(let i = 0; i < twoVarDataset2.length; i++){
		twoVarDataset2Mean += twoVarDataset2[i];
		twoVarDataset2Summation += twoVarDataset2[i];
		twoVarDataset2SummationSqauredValues += twoVarDataset2[i] * twoVarDataset2[i];
	}
	
	for(let i = 0; i < twoVarDataset2.length; i++){
		twoVarDatasetSummationOfMultiplicationPairs += twoVarDataset1[i] * twoVarDataset2[i];
	}
	
	
	
	twoVarDataset1Mean /= twoVarDataset1.length;
	twoVarDataset2Mean /= twoVarDataset2.length;
	
	
	for(let i = 0; i < twoVarDataset2.length; i++){
		twoVarCorrelationCoefficientNumerator += (Number(twoVarDataset1[i]) - twoVarDataset1Mean) * (Number(twoVarDataset2[i]) - twoVarDataset2Mean);
		twoVarCovariance += (Number(twoVarDataset1[i]) - twoVarDataset1Mean) * (Number(twoVarDataset2[i]) - twoVarDataset2Mean);
		
	}
	
	if(twoVarDataType == "population"){
		twoVarCovariance /= twoVarDataset1.length;
	} else if(twoVarDataType == "sample"){
		twoVarCovariance /= twoVarDataset1.length - 1;
	}
	
	for(let i = 0; i < twoVarDataset2.length; i++){
		twoVarCorrelationCoefficentSumofSqauredMeanDifferenceDataset1 += (Number(twoVarDataset1[i]) - twoVarDataset1Mean) * (Number(twoVarDataset1[i]) - twoVarDataset1Mean);
		twoVarCorrelationCoefficentSumofSqauredMeanDifferenceDataset2 += (Number(twoVarDataset2[i]) - twoVarDataset2Mean) * (Number(twoVarDataset2[i]) - twoVarDataset2Mean);
		
	}
	
	twoVarCorrelationCoefficientDenominator = twoVarCorrelationCoefficentSumofSqauredMeanDifferenceDataset1 * twoVarCorrelationCoefficentSumofSqauredMeanDifferenceDataset2;
	twoVarCorrelationCoefficientDenominator = Math.sqrt(twoVarCorrelationCoefficientDenominator);
	
	twoVarCorrelationCoefficient = twoVarCorrelationCoefficientNumerator / twoVarCorrelationCoefficientDenominator;
	
	
	
	
	twoVarLinearRegressionInterceptNumerator = 
	(twoVarDataset2Summation * twoVarDataset1SummationSqauredValues) 
	- (twoVarDataset1Summation * twoVarDatasetSummationOfMultiplicationPairs);
	
	twoVarLinearRegressionInterceptDenominator =
	(twoVarDataset1.length * twoVarDataset1SummationSqauredValues) 
	- (twoVarDataset1Summation * twoVarDataset1Summation);
	
	twoVarLinearRegressionIntercept =
	twoVarLinearRegressionInterceptNumerator /
	twoVarLinearRegressionInterceptDenominator;
	
	console.log("Dataset 1 Summation", twoVarDataset1Summation);
	console.log("Dataset 2 Summation", twoVarDataset2Summation);
	console.log("Dataset 1 Summation Sqaured Values", twoVarDataset1SummationSqauredValues);
	console.log("Dataset Multiple Set", twoVarDatasetSummationOfMultiplicationPairs);
	
	twoVarLinearRegressionSlopeNumerator =
	(twoVarDataset1.length * twoVarDatasetSummationOfMultiplicationPairs) 
	- (twoVarDataset1Summation * twoVarDataset2Summation)
	
	twoVarLinearRegressionSlopeDenominator =
	(twoVarDataset1.length * twoVarDataset1SummationSqauredValues) -
	(twoVarDataset1Summation * twoVarDataset1Summation);
	
	
	twoVarLinearRegressionSlope = 
	twoVarLinearRegressionSlopeNumerator / twoVarLinearRegressionSlopeDenominator;
	
	
	
	if(isNaN(twoVarLinearRegressionSlope)){
		twoVarLinearRegressionSlope = "undefined";
	}
	if(isNaN(twoVarLinearRegressionIntercept)){
		twoVarLinearRegressionIntercept = "undefined";
	}
	if(isNaN(twoVarCorrelationCoefficient)){
		twoVarCorrelationCoefficient = "undefined";
	}
	if(isNaN(twoVarCovariance)){
		twoVarCovariance = "undefined";
	}
	
	twoVarCorrelationCoefficientDisplay.textContent = `Data Correlation Coefficient: ${twoVarCorrelationCoefficient}`;
	twoVarCovarianceDisplay.textContent = `Data Covariance: ${twoVarCovariance}`;
	
	if(twoVarLinearRegressionSlope < 0){
	twoVarCorrelationLinearRegressionDisplay.textContent = 
	`Data Linear Regression: ${twoVarLinearRegressionIntercept} - ${Math.abs(twoVarLinearRegressionSlope)}x`;
	} else {
	twoVarCorrelationLinearRegressionDisplay.textContent = 
	`Data Linear Regression: ${twoVarLinearRegressionIntercept} + ${twoVarLinearRegressionSlope}x`;
	}
	
} else {
	
	if(twoVarDataset1.length != twoVarDataset2.length){
		alert("Both datasets need to be equal in size");
	} 
	
	if(twoVarDataType == ''){
		alert("Data Type needs to be initialized. (Population / Sample)");
	}
	
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
	
	PopulationSelect.style.color = "#000000";
	SampleSelect.style.color = "#000000";
	twoVarPopulationSelect.style.color = "#000000";
	twoVarSampleSelect.style.color = "#000000";
	
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
	
	if(twoVarDataType == "population"){
		twoVarPopulationSelect.style.backgroundColor = "#ddaaaa";
	} else {
		twoVarPopulationSelect.style.backgroundColor = "#ffffff";
	}
	
	if(twoVarDataType == "sample"){
		twoVarSampleSelect.style.backgroundColor = "#ddaaaa";
	} else {
		twoVarSampleSelect.style.backgroundColor = "#ffffff";
	}
}
