setInterval(update, 1);
	
function update(){
	boxPlotType.style.display = "none";
	histogramGraphType.style.display = "none";
	scatterPlotType.style.display = "none";
	boxHistogramGraphType.style.display = "none";
	if(graphType == "box"){
		boxPlotType.style.display = "block";
	} else if(graphType == "histogram"){
		histogramGraphType.style.display = "block";
	} else if(graphType == "scatter"){
		scatterPlotType.style.display = "block";
	} else if(graphType == "boxHistogram"){
		boxHistogramGraphType.style.display = "block";
	}
	
	
	boxPlotDataDisplay.textContent = `Data: [${boxPlotData}]`;
	
	
	histogramGraphDataDisplay.textContent = `Data: [${histogramGraphData}]`;
	histogramGraphBarSizeDisplay.textContent = `Bar Size: ${histogramGraphBarSize}`;
	histogramGraphXMinDisplay.textContent = `X-min: ${histogramGraphXMin}`;
	histogramGraphXMaxDisplay.textContent = `X-max: ${histogramGraphXMax}`;
	
	scatterPlotDataXDisplay.textContent = `Data X: [${scatterPlotDataX}]`;
	scatterPlotDataYDisplay.textContent = `Data Y: [${scatterPlotDataY}]`;
	boxHistogramGraphDataDisplay.textContent = `Data: [${boxPlotHistogramData}]`;
	boxHistogramGraphDataDisplay.textContent = `Data: [${boxPlotHistogramData}]`;
	boxHistogramGraphDataBarSizeDisplay.textContent = `Bar Size: ${boxHistogramPlotBarSize}`;
	
	let boxPlotTrace = {
			x: boxPlotData.sort((a, b) => a - b),
            type: 'box',
			
    };
	histogramGraphLayout = {
		xaxis: {
			range: [histogramGraphXMin, histogramGraphXMax],
		}
	};
	let histogramGraphTrace = {
			x: histogramGraphData.sort((a, b) => a - b),
			type: 'histogram',
			xbins: {
				start: histogramGraphXMin,
				end: histogramGraphXMax,
				size: histogramGraphBarSize,
			}
    };
	
	let scatterPlotTrace = {
            x: scatterPlotDataX,
			y: scatterPlotDataY,
            type: 'scatter',
			mode: 'markers',
    };
	
	let boxHistogramTraceBox = {
			x: boxPlotHistogramData.sort((a, b) => a - b),
			type: 'box',
			name: 'Box Plot'
			
    };
	
	let boxHistogramTraceHistogram = {
			x: boxPlotHistogramData.sort((a, b) => a - b),
			type: 'histogram',
			name: 'histogram',
			xbins: {
				start: boxHistogramPlotXMin,
				end: boxHistogramPlotXMax,
				size: boxHistogramPlotBarSize,
			}
			
    };
	Plotly.newPlot('boxPlot', [boxPlotTrace], boxPlotLayout);
	Plotly.newPlot('histogramGraph', [histogramGraphTrace], histogramGraphLayout);
	Plotly.newPlot('scatterPlot', [scatterPlotTrace]);
	Plotly.newPlot('boxHistogramPlot', [boxHistogramTraceBox, boxHistogramTraceHistogram], boxHistogramPlotLayout);
}
	
function switchGraphType(input){
	if(graphType == input){
		graphType = "";
	} else {
		graphType = input;
	}

}
	
function exit(){
document.location = "../MainPages/Utility.html"
}



function boxPlotAddInput(){
	boxPlotData = [];
	if(!isNaN(boxPlotDataInput.value) && boxPlotDataInput.value != ""){
		boxPlotData.push(boxPlotDataInput.value);
	}
	
	if(boxPlotDataInput.value.startsWith("[") && boxPlotDataInput.value.endsWith("]")){
		const arrayValue = boxPlotDataInput.value;
		const arrayTrim = arrayValue.trim();
		try {
			JSONarray = JSON.parse(arrayTrim);
			
			if(Array.isArray(JSONarray)){
				boxPlotData = boxPlotData.concat(JSONarray);
			} else {
				alert("Input needs to be an array");
			}
		} catch (err) {
			alert("Invalid Format");	
		}
	}
}

function histogramGraphAddInput(){
	histogramGraphData = [];
	if(!isNaN(histogramGraphDataInput.value) && histogramGraphDataInput.value != ""){
		histogramGraphData.push(histogramGraphDataInput.value);
	}
	
	if(histogramGraphDataInput.value.startsWith("[") && histogramGraphDataInput.value.endsWith("]")){
		const arrayValue = histogramGraphDataInput.value;
		const arrayTrim = arrayValue.trim();
		try {
			JSONarray = JSON.parse(arrayTrim);
			
			if(Array.isArray(JSONarray)){
				histogramGraphData = histogramGraphData.concat(JSONarray);
			} else {
				alert("Input needs to be an array");
			}
		} catch (err) {
			alert("Invalid Format");	
		}
	}
}

function boxHistogramGraphTypeAddInput(){
	boxPlotHistogramData = [];
	if(!isNaN(boxHistogramGraphTypeInput.value) && boxHistogramGraphTypeInput.value != ""){
		boxPlotHistogramData.push(boxHistogramGraphTypeInput.value);
	}
	
	if(boxHistogramGraphTypeInput.value.startsWith("[") && boxHistogramGraphTypeInput.value.endsWith("]")){
		const arrayValue = boxHistogramGraphTypeInput.value;
		const arrayTrim = arrayValue.trim();
		try {
			JSONarray = JSON.parse(arrayTrim);
			
			if(Array.isArray(JSONarray)){
				boxPlotHistogramData = boxPlotHistogramData.concat(JSONarray);
			} else {
				alert("Input needs to be an array");
			}
		} catch (err) {
			alert("Invalid Format");	
		}
	}
}

function scatterPlotAddInputX(){
	scatterPlotDataX = [];
	if(!isNaN(scatterPlotDataInputX.value) && scatterPlotDataInputX.value != ""){
		scatterPlotDataX.push(scatterPlotDataInputX.value);
	}
	
	if(scatterPlotDataInputX.value.startsWith("[") && scatterPlotDataInputX.value.endsWith("]")){
		const arrayValue = scatterPlotDataInputX.value;
		const arrayTrim = arrayValue.trim();
		try {
			JSONarray = JSON.parse(arrayTrim);
			
			if(Array.isArray(JSONarray)){
				scatterPlotDataX = scatterPlotDataX.concat(JSONarray);
			} else {
				alert("Input needs to be an array");
			}
		} catch (err) {
			alert("Invalid Format");	
		}
	}
}

function scatterPlotAddInputY(){
	scatterPlotDataY = [];
	if(!isNaN(scatterPlotDataInputY.value) && scatterPlotDataInputY.value != ""){
		scatterPlotDataY.push(scatterPlotDataInputY.value);
	}
	
	if(scatterPlotDataInputY.value.startsWith("[") && scatterPlotDataInputY.value.endsWith("]")){
		const arrayValue = scatterPlotDataInputY.value;
		const arrayTrim = arrayValue.trim();
		try {
			JSONarray = JSON.parse(arrayTrim);
			
			if(Array.isArray(JSONarray)){
				scatterPlotDataY = scatterPlotDataY.concat(JSONarray);
			} else {
				alert("Input needs to be an array");
			}
		} catch (err) {
			alert("Invalid Format");	
		}
	}
}

function histogramGraphXMinAddInput(){
	if(!isNaN(histogramGraphXMinInput.value) && histogramGraphXMinInput != ""){
		histogramGraphXMin = histogramGraphXMinInput.value;
	}
}

function histogramGraphXMaxAddInput(){
	if(!isNaN(histogramGraphXMaxInput.value) && histogramGraphXMaxInput != ""){
		histogramGraphXMax = histogramGraphXMaxInput.value;
	}
}

function histogramGraphBarSizeAddInput(){
	if(!isNaN(histogramGraphBarSizeInput.value) && histogramGraphBarSizeInput != ""){
		histogramGraphBarSize = histogramGraphBarSizeInput.value;
	}
}


function boxHistogramGraphTypeBarSizeAddInput(){
	if(!isNaN(boxHistogramGraphTypeBarSizeInput.value) && boxHistogramGraphTypeBarSizeInput != ""){
		boxHistogramPlotBarSize = boxHistogramGraphTypeBarSizeInput.value;
	}
}