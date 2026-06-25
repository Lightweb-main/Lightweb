// This file is really really important. So don't delete it.



/* Constants: Oops...*/

	/* DOM Elements: TOMMY */
	
	const articleTitle = document.createElement("title");
	const bre = document.createElement("br");
	const christmasScreenSettings = document.getElementById("christmasScreenSettings");
	const customSpeakSettings = document.getElementById("customSpeakSettings");
	const CRTBlueScreenSettings = document.getElementById("CRTBlueScreenSettings");
	const darkScreenFlashbangColorBox = document.getElementById("darkScreenFlashbangColorSet");
	const darkScreenFlashingSettings = document.getElementById("darkScreenFlashingSettings");
	const darkScreenSettings = document.getElementById("darkScreenSettings");
	const digitalCalendar = document.createElement("div");
	const digitalClock = document.createElement("div");
	const digitalClockCalendarContainer = document.createElement('div');
	const iconthingy = document.createElement("link");
	const ImageInversionBtn = document.getElementById('image-inversion-button');
	const informationalPageLink = document.createElement("a");
	const flashbangColor = localStorage.getItem("darkScreenFlashbangColorBoxValue");
	const fullMilitaryTimeCheckbox = document.getElementById("full-military-time-button");
	const hyperlinkHoverColorSelection = document.getElementById("hyperlinkHoverColorSelection");
	const lightwebArticlesCSS = document.createElement("link");
	const loadCustomFontsToggle = document.getElementById("load-custom-fonts-toggle");
	const lightwebCSSLink = document.createElement("link");
	const lightwebDeviceOptimizationCSSLink = document.createElement("link");
	const lightwebHeader = document.querySelector("header");
	const lightwebSimulationsCSS = document.createElement("link");
	const lightwebSpecialThemesCSS = document.createElement("link");
	const lightwebThemesCSSLink = document.createElement("link");
	const lightwebWikiCSS = document.createElement("link");
	const linkText = document.createElement("h2");
	const mainPageLink = document.createElement("a");
	const militaryTimeSettings = document.getElementById("militaryTimeSettings");
	const snowflakeToggleCheckbox = document.getElementById('snowflake-toggle-checkbox');
	const textFontSelection = document.getElementById("textFontSelection");
	const textSizeSelection = document.getElementById("textSizeSelection");
	const textLineHeightSelection = document.getElementById("textLineHeightSelection");
	const toggleAnalogBtn = document.getElementById('analog-screen-button');
	const toggleChaosScreenBtn = document.getElementById('chaos-screen-button');
	const toggleChristmasBtn = document.getElementById('christmas-screen-button');
	const toggleChristmasScreen = document.getElementById("christmas-screen-button");
	const toggleColorVomitButton = document.getElementById("toggle-colorVomit-button");
	const toggleCRTBlueScreen = document.getElementById('CRTBLUE-screen-button');
	const toggleCRTBlueScreenFlickeringCheckbox = document.getElementById("CRTBlueScreen-flicker-effect-button");
	const toggleCustomSpeakBtn = document.getElementById('toggleCustomSpeak');
	const toggleDarkBtn = document.getElementById('dark-screen-toggle');
	const toggleDarkScreenFlashbangBtn = document.getElementById("dark-screen-flashbang-checkbox");
	const toggleDarkScreenFlashbangCheckbox = document.getElementById("dark-screen-flashbang-checkbox");
	const toggleDashedCalendarBtn = document.getElementById('dashed-calendar-button');
	const toggleGreekLetterSpeakCheckbox = document.getElementById("greek-letter-speak-checkbox");
	const toggleMilitaryBtn = document.getElementById('millitary-time-button');
	const toggleRelativePositionBtn = document.getElementById("toggle-relative-position-button");
	const toggleScramblerBtn = document.getElementById("toggle-scrambler-button");
	const toggleShakespeareanSpeakCheckbox = document.getElementById("shakespearean-speak-checkbox");
	const toggleSquidGameBtn = document.getElementById('squidGame-screen-button');

	
	/* Window Constants: fin: */
	const loginPageName = 'index.html';
	const path = window.location.pathname;
	const isNotLoginPage = !path.endsWith(loginPageName);
	const isOnLightweb = path.includes('lightweb-main.github.io');
	
	/* Conditioned Constants: Airgo: */
	
	
	/* Array Consants: ARGH!!! */
	const fontFamilies = ["Arial", "Georgia", "Open Sans", "Comic Sans", "Lucida Console", "Times New Roman", "Serif", "Calibri", "Courier New", "Helvetica Neue", "Oswald", "Impact"];
	const fontWeights = ["normal", "bold", "lighter", "bolder"];
	const textAligns = ["left", "middle", "right"];
	const textDecorations = ["overline", "underline", "line-through", "overline underline"];
	const allElementsWithinScene = document.querySelectorAll("*");
	
	

	
	/* Other: Ergo */

/* Let Statements: go */
let allNotes, am_pm;
let currentTime, currentDay, customFontHyperlink = document.createElement("link");
let day, directoryLevel, directoryLevelA;
let faviconNum, frameCount = 0, flashbangIntervalIndex, fullMilitaryTime, fullMilitaryTimeLS = localStorage.getItem('fMT');
let hour, hasDashedCalendar, hasMilitaryTime;
let meta, meta2, min, month;
let nodeScrambledText, noteIndex;
let scramblerBtnTextIndexA, scramblerBtnTextIndexB;
let time = new Date();

let toggleScramblerBtnText;
	let sec = time.getSeconds();
let year = String(time.getFullYear()).slice(-2);




/* Setting Directory Level: Letch */
if(path.includes("/index.html")){
	directoryLevel = 0;
} else if(path.includes("/Articles/") ||
          path.includes("/Games%20&%20FunStuff/") ||
          path.includes("/MainPages/") ||
          path.includes("/LightwebHistory/") ||
          path.includes("/Other/") ||
          path.includes("/Simulations/") ||
          path.includes("/SubMainPages/") ||
          path.includes("/Utility/")){
	directoryLevel = 1;
} else if(path.includes("/SubSections/")){
	directoryLevel = 2;
}

directoryLevelA = ("../").repeat(directoryLevel);



document.head.appendChild(iconthingy);

/* Intervals: Mathy */
setInterval(update, 1);



/* Login Check */

if (isOnLightweb && isNotLoginPage && isSessionInvalid) {
  alert("Session expired. Please log in again."); 
}

if (
  localStorage.getItem("loginVerification") === null &&
  path.includes('lightweb-main.github.io') &&
  !path.endsWith(loginPageName)
) {
  localStorage.getItem("loginVerification") = "false";
}

if ( 
  localStorage.getItem("loginVerification") !== "true" &&
  path.includes('lightweb-main.github.io') &&
  !path.includes('file/C:') &&
  !path.endsWith(loginPageName)
) {
    if (path.toLowerCase().includes('/lightweb/mainpages/') || 
		path.toLowerCase().includes('/lightweb/articles/') || 
		path.toLowerCase().includes('/lightweb/simulations/') || 
		path.toLowerCase().includes('/lightweb/utility/') || 
		path.toLowerCase().includes('/lightweb/noninformationalarticles/') || 
		path.toLowerCase().includes('/lightweb/games%20funstuff/') || 
		path.toLowerCase().includes('/lightweb/other/') || 
		path.toLowerCase().includes('/lightweb/subsections/') || 
		path.toLowerCase().includes('/lightweb/submainpages/')){
    window.location.href = '../index.html';
  }
}




/* Inserting DOM Elements, Flachet */

meta = document.createElement("meta");
meta.setAttribute("charset", "UTF-8");
document.head.appendChild(meta);
	  
meta2 = document.createElement("meta");
meta2.setAttribute("name", "viewport");
meta2.content = "width=device-width, initial-scale=1.0";
document.head.appendChild(meta2);

iconthingy.rel = "icon";
iconthingy.type = "image/png";
iconthingy.href = `${directoryLevelA}Important/Lightweb.icon.png`;
document.head.appendChild(iconthingy);

if(!path.includes("/LightwebHistory/")){
	digitalClock.id = "DigitalClock";
	digitalCalendar.id = "DigitalCalendar";
	document.body.appendChild(digitalClock);
	document.body.appendChild(digitalCalendar);
}

if(path.includes("/Articles/")){
	linkText.textContent = "Done? Here are other links.";
	document.body.appendChild(linkText);
		
	mainPageLink.href = "../MainPages/Lightweb%20MainPage.html";
	mainPageLink.textContent = "Back to Main Page";
	document.body.appendChild(mainPageLink);
		
	document.body.appendChild(document.createElement("br"));
	document.body.appendChild(document.createElement("br"));
		
	informationalPageLink.href = "../MainPages/Informational.html";
	informationalPageLink.textContent = "Back to Informational";
	document.body.appendChild(informationalPageLink);
	
	articleTitle.textContent = document.querySelector("h1").textContent;
	document.head.appendChild(articleTitle);
	
	for(let i = 0; i < 4; i++){
		document.querySelector("h1").insertAdjacentElement("afterBegin", bre);
	}
	
	allNotes = document.querySelectorAll(".note");
	noteIndex = 0;
	allNotes.forEach( (e) => {
		noteIndex++;
		let title = document.createElement("p");
		title.classList.add("noteTitle");
		title.textContent = "Note #" + noteIndex;
		e.prepend(title);
	});
}

/* Insert Styles: yarrH Styles*/

if(!path.includes("/LightwebHistory/")){
	digitalClock.style.left = "0px";
	digitalClock.style.top = "0px";
	digitalClock.style.border = "2px solid var(--DigitalClockBackground)";
	digitalClock.style.width = "300px";
	digitalClock.style.fontSize = "50px"
	digitalClock.style.borderRadius = "15px";
	digitalClock.style.textAlign = "center";
		
	digitalCalendar.style.left = "0px";
	digitalCalendar.style.top = "60px";
	digitalCalendar.style.border = "2px solid var(--DigitalClockBackground)";
	digitalCalendar.style.width = "300px";
	digitalCalendar.style.fontSize = "25px";
	digitalCalendar.style.borderRadius = "15px";
	digitalCalendar.style.textAlign = "center";
		
	if(path.includes("TicTacToe")){
		digitalClock.style.left = "0px";
		digitalClock.style.top = "1000px";
		digitalCalendar.style.left = "0px";
		digitalCalendar.style.top = "1060px";
	}
	
	if(localStorage.getItem("lightwebRelativePositioning") === 'true'){
		digitalClock.style.position = "fixed";
		digitalCalendar.style.position = "fixed";
	} else {
		digitalClock.style.position = "absolute";
		digitalCalendar.style.position = "absolute";
	}
} 

if(lightwebHeader){
	lightwebHeader.style.top = "14px";
	lightwebHeader.style.right = "14px";
	lightwebHeader.id = "LightwebHeader";
}

if(path.includes("/Articles/")){
	lightwebArticlesCSS.rel = "stylesheet";
	lightwebArticlesCSS.href = "../CSS/LightwebArticles.css";
	
	lightwebSpecialThemesCSS.rel = "stylesheet";
	lightwebSpecialThemesCSS.href = "../CSS/SpecialLightwebThemes.css";
	
	document.head.appendChild(lightwebArticlesCSS);
	document.head.appendChild(lightwebSpecialThemesCSS);
	
	
} else if(path.includes("/Simulations/")){
	lightwebSimulationsCSS.rel = "stylesheet";
	lightwebSimulationsCSS.href = "../CSS/LightwebSimulations.css";
	
	document.head.appendChild(lightwebSimulationsCSS);
} else if(path.includes("/Wikis/")){
	lightwebWikiCSS.rel = "stylesheet";
	lightwebWikiCSS.href = "../../CSS/LightwebWikis.css";
	
	document.head.appendChild(lightwebWikiCSS);
}

lightwebCSSLink.href = `${directoryLevelA}CSS/Lightweb.css`;
lightwebCSSLink.rel = "stylesheet";


lightwebThemesCSSLink.href = `${directoryLevelA}CSS/LightwebThemes.css`;
lightwebThemesCSSLink.rel = "stylesheet";

lightwebDeviceOptimizationCSSLink.href = `${directoryLevelA}CSS/LightwebDeviceOptimization.css`;
lightwebDeviceOptimizationCSSLink.rel = "stylesheet";





document.head.appendChild(lightwebCSSLink);
document.head.appendChild(lightwebDeviceOptimizationCSSLink);
document.head.appendChild(lightwebThemesCSSLink);




document.addEventListener("DOMContentLoaded", () => {
	
});
	
/* Local Storage Sstuff: */
function clearLocalStorage(){
	
	localStorage.clear();
	
	localStorage.setItem("snowflakeToggle", false);
	localStorage.setItem("toggleCustomSpeak", false);
	localStorage.setItem("customSpeakSetting", "modernEnglishSpeak");
	localStorage.setItem("lightwebTextSize", 1);
	localStorage.setItem("lightwebHyperlinkHoverColorSelection", "#ff0000");
	localStorage.setItem("lightwebTextFont", "Default");
	localStorage.setItem("lightwebLineHeight", "normal");
	localStorage.setItem("theme", "default");
	localStorage.setItem('timeType', '12-hour-clock');
	localStorage.setItem('calendarType', 'defaultCalendar');
	
	
	window.location.reload(true);
}



document.addEventListener("DOMContentLoaded", function(){
	if(localStorage.length === 0){
		clearLocalStorage();
	}
});

/* Document Class List Remove: REREORWOEPRJ */
document.body.classList.remove('default', 'dark', 'AnalogScreen', 'CRTBLUEScreen', 'default', 'chaos', 'christmasScreen');
document.body.classList.remove('fullMilitaryTime', 'snowflakeToggleOn');
document.body.classList.remove('dashedCalendar');
document.body.classList.remove('InverseInversionOn');
document.body.classList.remove('PC', 'Phone', 'Laptop');
document.body.classList.remove('modernEnglishSpeak', 'shakespeareanEnglishSpeak', "greekLetterSpeak"); 

if(textSizeSelection){
	textSizeSelection.value = localStorage.getItem("lightwebTextSize");
}
	  
	
if(textFontSelection){
	textFontSelection.value = localStorage.getItem("lightwebTextFont");
}
	  
	
if(textLineHeightSelection){
	textLineHeightSelection.value = localStorage.getItem("lightwebLineHeight");
}
	  
	
if(hyperlinkHoverColorSelection){
	hyperlinkHoverColorSelection.value = localStorage.getItem("lightwebHyperlinkHoverColorSelection");
}
	  
	
if(darkScreenFlashbangColorBox){
	darkScreenFlashbangColorBox.value = localStorage.getItem("darkScreenFlashbangColorBoxValue");
}

/* Update: Strikesd */


function update() {
	if(document.body.classList.contains("christmasScreen") && (frameCount % 15 === 0)){
		snowflakeChristmasScreen();
	}
	time = new Date();
	am_pm = "AM";
	day = String(time.getDate()).padStart(2, '0');
	hour = time.getHours();
	min = time.getMinutes();
	month = String(time.getMonth() + 1).padStart(2, '0');
	sec = time.getSeconds();
	year = String(time.getFullYear()).slice(-2);
	faviconNum += 1;
	frameCount++;
	
	hasMilitaryTime = document.body.classList.contains('militaryTime');
    hasDashedCalendar = document.body.classList.contains('dashedCalendar');

	fullMilitaryTimeLS = localStorage.getItem('fMT');
	
	/* Note For Future Me: PLZ DELETE THIS after version v9.2.2*/
	if(document.getElementById("message")){
		if(frameCount % 100 == 0){
			console.log(document.getElementById("message").style.color);
			if(document.getElementById("message").style.color !== "rgb(255, 0, 0)"){
				document.getElementById("message").style.color = "#ff0000";
			} else {
				document.getElementById("message").style.color = "#000000";
			}
		}
	}
	
	if(document.body.classList.contains('chaosScreen')){
		if(frameCount % 6 === 0){		
			allElementsWithinScene.forEach(el => {
				el.style.backgroundColor = `#${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}`
				el.style.color = `#${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}`
				el.style.borderColor = `#${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}`
				el.style.borderRadius = `${Math.floor(Math.random() * 100)}%`
				el.style.borderWidth = `${Math.floor(Math.random() * 45)}px`
				el.style.fontFamily = `${fontFamilies[Math.floor(Math.random() * fontFamilies.length)]}, san-serif`;
				el.style.fontWeight = `${fontWeights[Math.floor(Math.random() * fontWeights.length)]}`;
				el.style.textAlign = `${textAligns[Math.floor(Math.random() * textAligns.length)]}`;
				el.style.textDecoration = `${textDecorations[Math.floor(Math.random() * textDecorations.length)]}`;
			});
			
			document.documentElement.style.setProperty('--bg', `#${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}`);
			document.body.style.transitionDuration = '0s'
		}
	}
	
	if(document.body.classList.contains('CRTBLUEScreen') || document.body.classList.contains('chaosScreen')){
		if(localStorage.getItem('CRTBlueFlicker') === 'true'){
	
		allElementsWithinScene.forEach(el => {
			if(frameCount % (50 * (Math.floor(Math.random() * 25) + 30)) === 0){
			setTimeout( () => {
				el.style.visibility = "hidden";
			}, 100);
			setTimeout( () => {
				el.style.visibility = "visible";
			}, 125);
			
		  }
		});
		}
	}
	
	if(darkScreenFlashbangColorBox){
		darkScreenFlashbangColorBox.addEventListener("input", function(){
			localStorage.setItem("darkScreenFlashbangColorBoxValue", darkScreenFlashbangColorBox.value);
		});
	}
	
	if(localStorage.getItem("darkScreenFlashbangSetting") === 'true'){
		if(darkScreenFlashbangColorBox){
			darkScreenFlashbangColorBox.style.display = "inline";
		}
		
		if(darkScreenFlashingSettings){
			darkScreenFlashingSettings.style.display = "block";
		}
		
	} else {
		if(darkScreenFlashbangColorBox){
			darkScreenFlashbangColorBox.style.display = "none";
		}
		
		if(darkScreenFlashingSettings){
			darkScreenFlashingSettings.style.display = "none";
		}
	}
	
	
	if(localStorage.getItem("theme") === 'dark'){
		if(darkScreenSettings){
			darkScreenSettings.style.display = "block";
		}
	} else {
		if(darkScreenSettings){
			darkScreenSettings.style.display = "none";
		}
	}
	
	if(toggleRelativePositionBtn){
		if(localStorage.getItem("lightwebRelativePositioning") === 'true'){
			toggleRelativePositionBtn.style.backgroundColor = "#bbbbbb";
		} else {
			toggleRelativePositionBtn.style.backgroundColor = "#aaaaaa";
		}
	}

	
	
	
	
	if(localStorage.getItem("darkScreenFlashbangSetting") === 'true' && localStorage.getItem("theme") === "dark"){
		flashbangIntervalIndex = 500 + Math.floor(Math.random() * 500);
		if(frameCount % flashbangIntervalIndex === 0){
			flashbangIntervalIndex = 500 + Math.floor(Math.random() * 500);
			allElementsWithinScene.forEach(function(el){
				el.style.transitionDuration = "0.1s";
				if(el == document.body){
					el.style.color = flashbangColor;
					el.style.backgroundColor = flashbangColor;
				} else if(el.tagName === "A"){
					el.style.color = flashbangColor;
					el.style.backgroundColor = flashbangColor;
					el.style.borderColor = flashbangColor;
				} else {
					el.style.color = flashbangColor;
				}
				setTimeout(function(){
					el.style.transitionDuration = "3s";
					if(el == document.body){
						el.style.color = "var(--text)";
						el.style.backgroundColor = "var(--bg)";
					} else if(el.tagName === "A"){
						el.style.color = "var(--text)";
						el.style.borderColor = "var(--border)";
						el.style.backgroundColor = "var(--border)";
					} else {
						el.style.color = "var(--text)";
					}
					setTimeout(function(){
						el.style.transitionDuration = "0.3s";
					}, 3000);
				}, 800);
			});
			
		}
	}
	
	
    if(!hasMilitaryTime){
    if (hour >= 12) {
        am_pm = "PM"
        if (hour > 12) hour -= 12;
    }
    if (hour === 0) {
        hour = 12;
		
    }
}
   if(hasMilitaryTime){
		am_pm = ""
   }
   if(militaryTimeSettings){
		if(!hasMilitaryTime){
			militaryTimeSettings.style.display = "none";
		} else {
			militaryTimeSettings.style.display = "block";
		}
    }
	
	if(toggleColorVomitButton){
		if(frameCount % 60 === 0){
			toggleColorVomitButton.style.backgroundColor = `#${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}`;
			toggleColorVomitButton.style.color = `#${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}`;
		}
	}
	
	if(toggleScramblerBtn){
		if(frameCount % 350 === 0){
			toggleScramblerBtnText = toggleScramblerBtn.textContent.split('');
			for(let i = 0; i < 25; i++){
				let scramblerBtnTextIndexA = Math.floor(Math.random() * toggleScramblerBtnText.length);
				let scramblerBtnTextIndexB = Math.floor(Math.random() * toggleScramblerBtnText.length);
				[toggleScramblerBtnText[scramblerBtnTextIndexB], toggleScramblerBtnText[scramblerBtnTextIndexA]] = [toggleScramblerBtnText[scramblerBtnTextIndexA], toggleScramblerBtnText[scramblerBtnTextIndexB]]
			}
			toggleScramblerBtn.textContent = toggleScramblerBtnText.join('');
			setTimeout(function(){
				toggleScramblerBtn.textContent = "Scrambler";
			}, 100);
		}
	}
	
	if(localStorage.getItem("colorVomitActivated") === 'true'){
		
		allElementsWithinScene.forEach(el => {
			if(frameCount % 14 === 0){
				el.style.backgroundColor = `#${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}`;
				el.style.color = `#${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}`; 
				el.style.borderColor = `#${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}${(Math.floor(Math.random() * 256)).toString(16)}`; 
			}
		});
	}
	
	if(christmasScreenSettings){
		if(!document.body.classList.contains("christmasScreen")){
			christmasScreenSettings.style.display = "none";
		} else {
			christmasScreenSettings.style.display = "block";
		}
		
    }
	
	if(CRTBlueScreenSettings){
		if(document.body.classList.contains("CRTBLUEScreen")){
			CRTBlueScreenSettings.style.display = "block";
		} else {
			CRTBlueScreenSettings.style.display = "none";
		}
    }
	
	if(toggleCustomSpeakBtn){
		if(localStorage.getItem("toggleCustomSpeak") === 'true'){
			toggleCustomSpeakBtn.style.backgroundColor = "#191919";
			toggleCustomSpeakBtn.style.color = "#ffffff";
		} else {
			toggleCustomSpeakBtn.style.backgroundColor = "#dddddd";
			toggleCustomSpeakBtn.style.color = "#000000";
		}
		
		if(localStorage.getItem('toggleCustomSpeak') === 'true'){
			customSpeakSettings.style.display = "block";
		} else {
			customSpeakSettings.style.display = "none";
		}
	}
	
	if(toggleScramblerBtn){
		if(localStorage.getItem("toggleScrambler") === 'true'){
			toggleScramblerBtn.style.backgroundColor = "#235235";
			toggleScramblerBtn.style.color = "#ffffff";
		} else {
			toggleScramblerBtn.style.backgroundColor = "#ffffff";
			toggleScramblerBtn.style.color = "#000000";
		}
	}

	if(toggleGreekLetterSpeakCheckbox){
		toggleGreekLetterSpeakCheckbox.checked = false;
	}
	if(toggleShakespeareanSpeakCheckbox){
		toggleShakespeareanSpeakCheckbox.checked = false;
	}
	if(localStorage.getItem('customSpeakSetting') === 'greekLetterSpeak'){
		if(toggleGreekLetterSpeakCheckbox){
			toggleGreekLetterSpeakCheckbox.checked = true;
		}
	} else if(localStorage.getItem('customSpeakSetting') === 'shakespeareanEnglishSpeak'){
		if(toggleShakespeareanSpeakCheckbox){
			toggleShakespeareanSpeakCheckbox.checked = true;
		}
	}
	
	
	
    hour = hour < 10 ? hour : hour;
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec;

    currentTime = `${hour}:${min}:${sec}`;
    currentDay = `${month}/${day}/${year}`;
   if(hasMilitaryTime){
    currentTime = `${hour}:${min} ${am_pm}`;
	if(fullMilitaryTimeLS === 'true'){
	currentTime = `${hour}:${min}:${sec}`;	
	}
   } else{
	 currentTime = `${hour}:${min}:${sec} ${am_pm}`;  
   }
	if(hasDashedCalendar){
	currentDay = `${month}-${day}-${year}`;
	} else {
	currentDay = `${month}/${day}/${year}`;
	}
	
	digitalClock.textContent = currentTime;
	digitalCalendar.textContent = currentDay;
}

document.addEventListener("keydown", (e) => {
	if(localStorage.getItem('theme') === "chaosScreen"){
		if(e.key.toLowerCase() === 'e'){
			document.body.classList.remove('chaosScreen');
			document.body.classList.add('default');
			localStorage.setItem('theme', 'default');
		}
	}
});

document.addEventListener('DOMContentLoaded', () => {
	  
	  if(localStorage.getItem("toggleScrambler") === "true"){
			function scrambleText(node){
				node.childNodes.forEach(child => {
					if (child.nodeType === Node.TEXT_NODE) {
						nodeScrambledText = child.textContent.split('');
						for (let i = 0; i < 100; i++) {
							let j = Math.floor(Math.random() * nodeScrambledText.length);
							let k = Math.floor(Math.random() * nodeScrambledText.length);
							[nodeScrambledText[j], nodeScrambledText[k]] = [nodeScrambledText[k], nodeScrambledText[j]];
						}
						child.textContent = nodeScrambledText.join('');
					} else if (child.nodeType === Node.ELEMENT_NODE) {
						scrambleText(child);
					}
				})
			}
			
			
			scrambleText(document.body);
			let scrambledTitleText = document.querySelector("title").textContent.split('');
			for (let i = 0; i < 25; i++) {
				let j = Math.floor(Math.random() * scrambledTitleText.length);
				let k = Math.floor(Math.random() * scrambledTitleText.length);
				[scrambledTitleText[j], scrambledTitleText[k]] = [scrambledTitleText[k], scrambledTitleText[j]];
			}
			document.querySelector("title").textContent = scrambledTitleText.join('');
			
			
	  }
	  
	  
	  if(loadCustomFontsToggle){
		 if(localStorage.getItem('loadCustomFonts') === 'true'){
			loadCustomFontsToggle.checked = true;
		 } else {
			loadCustomFontsToggle.checked = false;
		 }
	  }
	  

	  
	  if(toggleDarkScreenFlashbangBtn){
		  if(localStorage.getItem('darkScreenFlashbangSetting') === 'true'){
			  toggleDarkScreenFlashbangBtn.checked = true;
		  } else {
			toggleDarkScreenFlashbangBtn.checked = false;
		  }
	  }

	  if(toggleShakespeareanSpeakCheckbox){
		  if(localStorage.getItem('customSpeakSetting') === 'shakespeareanEnglishSpeak'){
			  toggleShakespeareanSpeakCheckbox.checked = true;
		  } else {
			toggleShakespeareanSpeakCheckbox.checked = false;
		  }
	  }
	  
	  if(toggleGreekLetterSpeakCheckbox){
		  if(localStorage.getItem('customSpeakSetting') === 'greekLetterSpeak'){
			  toggleGreekLetterSpeakCheckbox.checked = true;
		  } else {
			toggleGreekLetterSpeakCheckbox.checked = false;
		  }
	  }
	  
	  
	  if(toggleCRTBlueScreenFlickeringCheckbox){
	      if(localStorage.getItem('CRTBlueFlicker') === 'true'){
			  toggleCRTBlueScreenFlickeringCheckbox.checked = true;
	      } else {
			  toggleCRTBlueScreenFlickeringCheckbox.checked = false;
		  }
	  }

	  if(document.body.classList.contains("fullMilitaryTime")){
	    document.body.classList.add("fullMilitaryTime");
	  }
	  if(localStorage.getItem("DeviceType") == 'PC'){
	  document.body.classList.add('PC');
	  } else if (localStorage.getItem("DeviceType") == 'Phone'){
	  document.body.classList.add('Phone');
	  } else if(localStorage.getItem("DeviceType") == 'Laptop'){
	  document.body.classList.add('Laptop');	
	  }
       if (localStorage.getItem("theme") === 'dark') {
	    clearScreenType();
        document.body.classList.add('dark');
      } else if (localStorage.getItem("theme") === 'AnalogScreen') {
	    clearScreenType();
        document.body.classList.add('AnalogScreen');
      } else if (localStorage.getItem("theme") === 'CRTBLUEScreen') {
	    clearScreenType();
        document.body.classList.add('CRTBLUEScreen');
      } else if(localStorage.getItem("theme") === 'default'){
	    clearScreenType();
		document.body.classList.add('default');
	  } else if(localStorage.getItem("theme") == 'squidGameScreen'){
		  clearScreenType();
		document.body.classList.add('squidGameScreen');
	  } else if(localStorage.getItem("theme") == 'chaosScreen'){
		clearScreenType();
		document.body.classList.add('chaosScreen');  
	  } else if(localStorage.getItem("theme") == 'christmasScreen'){
		clearScreenType();
		document.body.classList.add('christmasScreen');
	  } else {
  		clearScreenType();
  		document.body.classList.add('default');
  		themeLS = "default";
	 }

      if (localStorage.getItem("timeType") === 'militaryTime') {
        document.body.classList.add('militaryTime');
		if(fullMilitaryTimeLS === 'true'){
			if(fullMilitaryTimeCheckbox){
			fullMilitaryTimeCheckbox.checked = true;
			}
		}
      } else{
        document.body.classList.remove('militaryTime');
      } 
	  
	  if(localStorage.getItem('snowflakeToggle') === 'true'){
			document.body.classList.add('snowflakeToggleOn', true);
			if(snowflakeToggleCheckbox){
			snowflakeToggleCheckbox.checked = true;
			}
	  }

	  
	  if (localStorage.getItem("CalendarType") === 'dashedCalendar') {
        document.body.classList.add('dashedCalendar');
      } else {
        document.body.classList.remove('dashedCalendar');
      } 
	  
	  if (localStorage.getItem("toggleImageInversion") == 'imageInversionOn') {
        document.body.classList.add('imageInversionOn');
      } else {
	    document.body.classList.add('imageInversionOff');
	  }
	
	if(loadCustomFontsToggle){
		loadCustomFontsToggle.addEventListener('click', () => {
			if(localStorage.getItem("loadCustomFonts") === 'true'){
				localStorage.setItem("loadCustomFonts", false);
			} else {
				localStorage.setItem("loadCustomFonts", true);
			}
		})
	}
	
	if(toggleDarkScreenFlashbangCheckbox){
		toggleDarkScreenFlashbangCheckbox.addEventListener('click', () => {
			if(localStorage.getItem("darkScreenFlashbangSetting") === 'true'){
				localStorage.setItem("darkScreenFlashbangSetting", false);
			} else {
				localStorage.setItem("darkScreenFlashbangSetting", true);
			}
		})
	}
	
	if(toggleRelativePositionBtn){
		toggleRelativePositionBtn.addEventListener('click', () => {
			if(localStorage.getItem("lightwebRelativePositioning") === 'true'){
				localStorage.setItem("lightwebRelativePositioning", false);
			} else {
				localStorage.setItem("lightwebRelativePositioning", true);
			}
		})
	}
	
	if(toggleColorVomitButton){
		toggleColorVomitButton.addEventListener('click', () => {
			if(localStorage.getItem("colorVomitActivated") === 'true'){
				localStorage.setItem("colorVomitActivated", false);
			} else {
				localStorage.setItem("colorVomitActivated", true);
			}
		})
	}
	
	if(fullMilitaryTimeCheckbox){
		fullMilitaryTimeCheckbox.addEventListener('click', () => {
			if(localStorage.getItem("fMT") === 'true'){
				localStorage.setItem("fMT", false);
			} else {
				localStorage.setItem("fMT", true);
			}
		})
	}
	if(snowflakeToggleCheckbox){
		snowflakeToggleCheckbox.addEventListener('click', () => {
			if(localStorage.getItem("snowflakeToggle") === 'true'){
				localStorage.setItem("snowflakeToggle", false);
			} else {
				localStorage.setItem("snowflakeToggle", true);
			}
		})
	}
	if(toggleCustomSpeakBtn){
		toggleCustomSpeakBtn.addEventListener('click', () => {
			if(localStorage.getItem("toggleCustomSpeak") === 'true'){
				localStorage.setItem("toggleCustomSpeak", false);
			} else {
				localStorage.setItem("toggleCustomSpeak", true);
			}
		})
	}
	if(toggleScramblerBtn){
		toggleScramblerBtn.addEventListener('click', () => {
			if(localStorage.getItem("toggleScrambler") === 'true'){
				window.location.reload(true);
				localStorage.setItem("toggleScrambler", false);
			} else {
				window.location.reload(true);
				localStorage.setItem("toggleScrambler", true);
			}
		})
	}
	
	if(toggleShakespeareanSpeakCheckbox){
		toggleShakespeareanSpeakCheckbox.addEventListener('click', () => {
			if(localStorage.getItem('customSpeakSetting') === 'shakespeareanEnglishSpeak') {
				localStorage.setItem('customSpeakSetting', 'modernEnglishSpeak');
			} else {
				window.location.reload(true);
				localStorage.setItem('customSpeakSetting', 'shakespeareanEnglishSpeak');
			}
		}) 
	}
	
	if(toggleGreekLetterSpeakCheckbox){
		toggleGreekLetterSpeakCheckbox.addEventListener('click', () => {
			if(localStorage.getItem('customSpeakSetting') === 'greekLetterSpeak') {
				localStorage.setItem('customSpeakSetting', 'modernEnglishSpeak');
			} else {
				window.location.reload(true);
				localStorage.setItem('customSpeakSetting', 'greekLetterSpeak');
			}
		}) 
	}
	
	if(toggleCRTBlueScreenFlickeringCheckbox){
		toggleCRTBlueScreenFlickeringCheckbox.addEventListener('click', () => {
			if(localStorage.getItem('CRTBlueFlicker') === 'true') {
				localStorage.setItem('CRTBlueFlicker', 'false');
			} else {
				localStorage.setItem('CRTBlueFlicker', 'true');
			}
		}) 
	}
	
	
	if(toggleDarkBtn){
		toggleDarkBtn.addEventListener('click', () => {
			if(document.body.classList.contains('dark')) {
				document.body.classList.remove('dark');
				document.body.classList.add('default');
				localStorage.setItem('theme', 'default');
			} else {
				clearScreenType();
				document.body.classList.add('dark');
				localStorage.setItem('theme', 'dark');
			}
		});
	}

	if(toggleChristmasBtn){
		toggleChristmasBtn.addEventListener('click', () => {
			if (document.body.classList.contains('christmasScreen')) {
				document.body.classList.remove('christmasScreen');
				document.body.classList.add('default');
				localStorage.setItem('theme', 'default');
			} else {
				clearScreenType();
				document.body.classList.add('christmasScreen');
				localStorage.setItem('theme', 'christmasScreen');
			}
		});
	}

	if(toggleAnalogBtn){
		toggleAnalogBtn.addEventListener('click', () => {
			if (document.body.classList.contains('AnalogScreen')) {
				document.body.classList.remove('AnalogScreen');
				document.body.classList.add('default');
				localStorage.setItem('theme', 'default');
			} else {
				clearScreenType();
				document.body.classList.add('AnalogScreen');
				localStorage.setItem('theme', 'AnalogScreen');
			}
		});
	}
	
	if(toggleCRTBlueScreen){
		toggleCRTBlueScreen.addEventListener('click', () => {
			if (document.body.classList.contains('CRTBLUEScreen')) {
				document.body.classList.remove('CRTBLUEScreen');
				document.body.classList.add('default');
				localStorage.setItem('theme', 'default');
			} else {
				clearScreenType();
				document.body.classList.add('CRTBLUEScreen');
				localStorage.setItem('theme', 'CRTBLUEScreen');
			}
		});
	}

	if(toggleMilitaryBtn){
		toggleMilitaryBtn.addEventListener('click', () => {
			document.body.classList.toggle('militaryTime');
			localStorage.setItem('timeType', document.body.classList.contains('militaryTime') ? 'militaryTime' : '12-hour-clock');
		});
	}

	if(toggleDashedCalendarBtn){
		toggleDashedCalendarBtn.addEventListener('click', () => {
			document.body.classList.toggle('dashedCalendar');
			localStorage.setItem('calendarType',document.body.classList.contains('dashedCalendar') ? 'dashedCalendar' : 'defaultCalendar');
		});
	}

	if(toggleSquidGameBtn){
		toggleSquidGameBtn.addEventListener('click', () => {
			if (document.body.classList.contains('squidGameScreen')) {
				document.body.classList.remove('squidGameScreen');
				document.body.classList.add('default');
				localStorage.setItem('theme', 'default');
			} else {
				clearScreenType();
				document.body.classList.add('squidGameScreen');
				localStorage.setItem('theme', 'squidGameScreen');
			}
		});
	}

	if(toggleChaosScreenBtn){
		toggleChaosScreenBtn.addEventListener('click', () => {
			if (document.body.classList.contains('chaosScreen')) {
				document.body.classList.remove('chaosScreen');
				document.body.classList.add('default');
				localStorage.setItem('theme', 'default');
			} else {
				clearScreenType();
				document.body.classList.add('chaosScreen');
				alert("EPLIPSY WARNING. CLICK E TO PAUSE CHAOS");
				localStorage.setItem('theme', 'chaosScreen');	
			}
		});
	}

	if(ImageInversionBtn){
		ImageInversionBtn.addEventListener('click', () => {
			if (document.body.classList.contains('imageInversionOn')) {
				document.body.classList.remove('imageInversionOn');
				localStorage.setItem('toggleImageInversion', 'imageInversionOff');
			} else {
				document.body.classList.add('imageInversionOn');
				localStorage.setItem('toggleImageInversion', 'imageInversionOn');
			}
		});
	}
});
let snowflakeAmount = 0;

document.addEventListener("DOMContentLoaded", function(){
	let snowflakeContainer = document.createElement("div");
	snowflakeContainer.id = "snowflakeContainerChristmasScreen";
	document.body.appendChild(snowflakeContainer);
	const speakSetting = localStorage.getItem('customSpeakSetting');
	
	let dateRightNow = new Date();
	
	function replaceSigns(node, target, replacement){
		let regexp = target;
		if(speakSetting === 'greekLetterSpeak' || (dateRightNow.getMonth() === 2 && dateRightNow.getDate() == 14)){
			let regexp = target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		} else {
			
		}
		let regexp1 = new RegExp(regexp, 'g');
		
		if(node.nodeType === Node.TEXT_NODE){
			node.textContent = node.textContent.replaceAll(regexp1, replacement);
		} else {
			node.childNodes.forEach(child => replaceSigns(child, target, replacement));
		}
	}
	
	if(localStorage.getItem("toggleScrambler") === 'true'){
		const allLinks = document.querySelectorAll("a");
		let linkContents = [];
		allLinks.forEach(function(a){
			linkContents.push(a.textContent);
		});
		
		allLinks.forEach(function(a){
			let linkContentsIndex = Math.floor(Math.random() * linkContents.length);
			a.textContent = linkContents[linkContentsIndex];
			linkContents.splice(linkContentsIndex, 1);
			
		});

	}
	
	
	let month = dateRightNow.getMonth();
	let day = dateRightNow.getDate();
	
	if(month === 2 && day === 14){
		replaceSigns(document.body, 'p', '\u03C0');
		replaceSigns(document.body, 'P', '\u03A0');
	}
	
	if(localStorage.getItem("toggleCustomSpeak") === 'true'){
	if(speakSetting === 'shakespeareanEnglishSpeak'){
		replaceSigns(document.body, '\\byou\\b', 'thee');
		replaceSigns(document.body, '\\bYou\\b', 'Thee');
		replaceSigns(document.body, '\\byour\\b', 'thine');
		replaceSigns(document.body, '\\bYour\\b', 'Thine');
		replaceSigns(document.body, '\\bbefore\\b', 'ere');
		replaceSigns(document.body, '\\bBefore\\b', 'Ere');
		replaceSigns(document.body, '\\byes\\b', 'aye');
		replaceSigns(document.body, '\\bYes\\b', 'Aye');
		replaceSigns(document.body, '\\bno\\b', 'nay');
		replaceSigns(document.body, '\\bNo\\b', 'Nay');
		replaceSigns(document.body, '\\balways\\b', 'alway');
		replaceSigns(document.body, '\\bAlways\\b', 'Alway');
		replaceSigns(document.body, '\\bif\\b', 'an');
		replaceSigns(document.body, '\\bIf\\b', 'An');
		replaceSigns(document.body, '\\bthere\\b', 'thither');
		replaceSigns(document.body, '\\bThere\\b', 'Thither');
		replaceSigns(document.body, '\\bwhere\\b', 'whither');
		replaceSigns(document.body, '\\bWhere\\b', 'Whither');
		replaceSigns(document.body, '\\bare\\b', 'art');
		replaceSigns(document.body, '\\bAre\\b', 'Art');
		replaceSigns(document.body, '\\bover\\b', "ov'r");
		replaceSigns(document.body, '\\bOver\\b', "Ov'r");
		replaceSigns(document.body, '\\bthat\\b', 'yond');
		replaceSigns(document.body, '\\bThat\\b', 'Yond');
		replaceSigns(document.body, '\\bhave\\b', 'hast');
		replaceSigns(document.body, '\\bHave\\b', 'Hast');
		replaceSigns(document.body, '\\bhas\\b', 'hath');
		replaceSigns(document.body, '\\bHas\\b', 'Hath');
		replaceSigns(document.body, '\\bwas\\b', 'wast');
		replaceSigns(document.body, '\\bWas\\b', 'Wast');
		replaceSigns(document.body, '\\bit\\b', 't');
		replaceSigns(document.body, '\\bIt\\b', 'T');
		replaceSigns(document.body, '\\bBack\\b', 'T');
		replaceSigns(document.body, '\\bdid\\b', 'didst');
		replaceSigns(document.body, '\\bDid\\b', 'Didst');
		replaceSigns(document.body, '\\bdo\\b', 'dost');
		replaceSigns(document.body, '\\bDo\\b', 'Dost');
		replaceSigns(document.body, '\\bshall\\b', 'shalt');
		replaceSigns(document.body, '\\bShall\\b', 'Shalt');
		replaceSigns(document.body, '\\bdoes\\b', 'doth');
		replaceSigns(document.body, '\\bDoes\\b', 'Doth');
		replaceSigns(document.body, '\\bit\\s+is\\b', 'tis');
		replaceSigns(document.body, '\\bIt\\s+is\\b', 'Tis');
		replaceSigns(document.body, '\\byou\\s+all\\b', 'Ye');
		replaceSigns(document.body, '\\bYou\\s+all\\b', 'Ye');
		
	}
	
	if(speakSetting === 'greekLetterSpeak'){
		replaceSigns(document.body, 'th', '\u03B8');
		replaceSigns(document.body, 'Th', '\u0398');
		replaceSigns(document.body, 'ch', '\u03C7');
		replaceSigns(document.body, 'Ch', '\u03A7');
		replaceSigns(document.body, 'ps', '\u03C8');
		replaceSigns(document.body, 'Ps', '\u03A8');
		replaceSigns(document.body, 'a', '\u03B1');
		replaceSigns(document.body, 'a', '\u03B1');
		replaceSigns(document.body, 'b', '\u03B2');
		replaceSigns(document.body, 'd', '\u03B4');
		replaceSigns(document.body, 'D', '\u0394');
		replaceSigns(document.body, 'e', '\u03B5');
		replaceSigns(document.body, 'f', '\u03C6');
		replaceSigns(document.body, 'F', '\u03A6');
		replaceSigns(document.body, 'g', '\u03B3');
		replaceSigns(document.body, 'G', '\u0393');
		replaceSigns(document.body, 'h', '\u03B7');
		replaceSigns(document.body, 'i', '\u03B9');
		replaceSigns(document.body, 'k', '\u03BA');
		replaceSigns(document.body, 'l', '\u03BB');
		replaceSigns(document.body, 'L', '\u039B');
		replaceSigns(document.body, 'm', '\u03BC');
		replaceSigns(document.body, 'n', '\u03BD');
		replaceSigns(document.body, 'o', '\u03C9');
		replaceSigns(document.body, 'O', '\u03A9');
		replaceSigns(document.body, 'p', '\u03C0');
		replaceSigns(document.body, 'P', '\u03A0');
		replaceSigns(document.body, 'r', '\u03A1');
		replaceSigns(document.body, 'R', 'P');
		replaceSigns(document.body, 's\\b', '\u03C4');
		replaceSigns(document.body, 's', '\u03C3');
		replaceSigns(document.body, 'S', '\u03A3');
		replaceSigns(document.body, 't', '\u03C4');
		replaceSigns(document.body, 'T', '\u03A4');
		replaceSigns(document.body, 'u', '\u03C5');
		replaceSigns(document.body, 'U', '\u03A5');
		replaceSigns(document.body, 'x', '\u03BC');
		replaceSigns(document.body, 'X', '\u039C');
		replaceSigns(document.body, 'z', '\u03A6');
		replaceSigns(document.body, 'Z', '\u0396');
	}
	}
	if(!window.location.pathname.includes("LightwebHistory")){
		document.querySelectorAll("mo").forEach(op => {
			if(op.textContent == "*"){
				op.textContent = "\u00D7";
			}
		});
	}
	
	if(window.location.pathname.includes("/Articles/")){
		document.querySelectorAll("math").forEach(math => {
			math.setAttribute("display", "block");
		});
	}
	
	
	

});
function snowflakeChristmasScreen(){
		let snowflakeNum = 0;
		
		const snowflakeContainer = document.getElementById("snowflakeContainerChristmasScreen");
		function iterateSnowflake(){
			if(document.body.classList.contains("christmasScreen") && snowflakeAmount < 100){
			if(localStorage.getItem("snowflakeToggle") === 'true'){
			let snowflake = document.createElement("img");
			if(window.location.pathname.includes("index.html")){
				switch(Math.floor(Math.random() * 3) + 1){
					case 1:
						snowflake.src = "Images/snowflakeImg1.png";
					case 2:
						snowflake.src = "Images/snowflakeImg2.png";
					case 3:
						snowflake.src = "Images/snowflakeImg3.png";
				}
			} else if(window.location.pathname.includes("/Calculators/")){
				switch(Math.floor(Math.random() * 3) + 1){
					case 1:
						snowflake.src = "../../Images/snowflakeImg1.png";
					case 2:
						snowflake.src = "../../Images/snowflakeImg2.png";
					case 3:
						snowflake.src = "../../Images/snowflakeImg3.png";
				}
			} else {
				switch(Math.floor(Math.random() * 3) + 1){
					case 1:
						snowflake.src = "../Images/snowflake.img1.png";
					case 2:
						snowflake.src = "../Images/snowflake.img2.png";
					case 3:
						snowflake.src = "../Images/snowflake.img3.png";
				}
			}
			snowflake.id = `snowflake${snowflakeNum}`
			snowflake.className = "snowflakeChristmasScreen";
			snowflakeContainer.appendChild(snowflake);
			snowflakeNum++;
			snowflakeAmount++;
			
			
			
			let x = Math.floor(Math.random() * document.documentElement.scrollWidth);
			let diameter = Math.floor(Math.random() * 25) + 3;
			snowflake.style.width = `${diameter}px`;
			snowflake.style.height = `${diameter}px`;
			snowflake.style.position = "absolute";
			snowflake.style.top = "0vh";
			snowflake.style.left = `${x}px`;
			snowflake.style.filter = `none`;
			let y = 0;
			let currentHeight = document.documentElement.scrollHeight;
			let yChange = currentHeight / 500;
			let z = 0;
			const snowflakeMovementInterval = setInterval(snowflakeMovement, 25);
			if(x >= document.documentElement.scrollWidth - 40 || x <= 40){
					clearInterval(snowflakeMovementInterval);
					snowflake.remove();
					snowflakeAmount--;
					return;
			}
			function snowflakeMovement(){
				let currentHeight = document.documentElement.scrollHeight;
				yChange *= 1.02;
				if(yChange > 35){
					yChange = 35;
				}
				y += yChange;
				if(Math.floor(Math.random() * 100) <= 50){
					x += 0.15 * Math.random();
				} else {
					x -= 0.15 * Math.random();
				}
				snowflake.style.top = `${y}px`;
				snowflake.style.left = `${x}px`;
				if(document.body.classList.contains("christmasScreen")){
					snowflake.style.display = "block";
				} else {
					snowflake.style.display = "none";
				}
				if(x >= document.documentElement.scrollWidth - 40 || x <= 40){
					clearInterval(snowflakeMovementInterval);
					snowflake.remove();
					snowflakeAmount--;
					return;
				}
				if(y >= currentHeight / 1.01 - 25){
					clearInterval(snowflakeMovementInterval);
					snowflake.remove();
					snowflakeAmount--;
					return;
				}
			}
			}
			}
			
		}
		iterateSnowflake();
		snowflakeNum = 0;
}

function clearScreenType(){
	document.body.classList.remove('default', 'dark', 'AnalogScreen', 'CRTBLUEScreen', 'squidGameScreen', 'chaosScreen', 'christmasScreen');
}

window.addEventListener("DOMContentLoaded", () => {
		
		if(localStorage.getItem("lightwebRelativePositioning") === 'true'){
		if(document.getElementById("DigitalClock")){
			document.getElementById("DigitalClock").style.position = "fixed";
		}
		if(document.getElementById("DigitalCalendar")){
			document.getElementById("DigitalCalendar").style.position = "fixed";
		}
		if(document.getElementById("searchInput")){
			document.getElementById("searchInput").style.position = "fixed";
			let br = document.createElement("br");
			let br2 = document.createElement("br");
			let br3 = document.createElement("br");
			let br4 = document.createElement("br");
			if(document.getElementById("SearchInputVacuum")){
				document.getElementById("SearchInputVacuum").insertAdjacentElement("afterbegin", br);
				document.getElementById("SearchInputVacuum").insertAdjacentElement("afterbegin", br2);
				document.getElementById("SearchInputVacuum").insertAdjacentElement("afterbegin", br3);
				document.getElementById("SearchInputVacuum").insertAdjacentElement("afterbegin", br4);
			}
		}
		if(document.getElementById("LightwebHeader")){
			document.getElementById("LightwebHeader").style.position = "fixed";
		}
	} else {
		if(document.getElementById("DigitalClock")){
			document.getElementById("DigitalClock").style.position = "absolute";
		}
		if(document.getElementById("DigitalCalendar")){
			document.getElementById("DigitalCalendar").style.position = "absolute";
		}
		
		if(document.getElementById("LightwebHeader")){
			document.getElementById("LightwebHeader").style.position = "absolute";
		}
	}
	
		const hyperlinks = document.querySelectorAll('a');
		const title = document.querySelector('h1');
		const heading2s = document.querySelectorAll('h2');
		const tableOfContentsDiv = document.createElement("div");
		
		
		if(title){
		tableOfContentsDiv.innerHTML += `<h2 style="font-family: ${localStorage.getItem("lightwebTextFont")}">${title.textContent}: Table of Contents</h2>`
		}
		tableOfContentsDiv.id = "tableOfContentsDiv";
		if(title != null && window.location.pathname.includes("/Articles/")){
			title.insertAdjacentElement("afterend", tableOfContentsDiv);
			let heading2Index = 1;
			heading2s.forEach(heading => {
				let heading3Index = 1;
				let heading4Index = 1;
				let heading5Index = 1;
				let heading6Index = 1;
				
				heading.id = `H2.${heading2Index}`;
				
				let heading2BookMark = document.createElement("a");
				
				heading2BookMark.href = `#H2.${heading2Index}`;
				heading2BookMark.innerHTML = document.getElementById(`H2.${heading2Index}`).innerHTML;
				
				heading2BookMark.style.display = "block";
				heading2BookMark.style.backgroundColor = "transparent";
				heading2BookMark.style.border = "none";
				heading2BookMark.style.fontSize = "20px";
				heading2BookMark.style.marginBottom = "9px";
				heading2BookMark.style.fontFamily = localStorage.getItem("lightwebTextFont");
				heading2BookMark.style.textDecoration = "underline";

				
				heading2BookMark.classList.add("TableOfContentH2");
				tableOfContentsDiv.appendChild(heading2BookMark)
				
				let next = heading.nextElementSibling;
				
				
				while(next && next.tagName !== 'H2'){
					if(next.tagName === "H3") {
						next.id = `H2.${heading2Index}.H3.${heading3Index}`;
						let heading3BookMark = document.createElement("a");
				
						heading3BookMark.href = `#H2.${heading2Index}.H3.${heading3Index}`;
						heading3BookMark.innerHTML += "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
						heading3BookMark.innerHTML += document.getElementById(`H2.${heading2Index}.H3.${heading3Index}`).innerHTML;
				
						heading3BookMark.style.display = "block";
						heading3BookMark.style.backgroundColor = "transparent";
						heading3BookMark.style.border = "none";
						heading3BookMark.style.fontSize = "17px";
						heading3BookMark.style.fontFamily = localStorage.getItem("lightwebTextFont");
						heading3BookMark.style.marginBottom = "9px";
						
						tableOfContentsDiv.appendChild(heading3BookMark);
						
						let next2 = next.nextElementSibling;
						
						while(next2 && next2.tagName !== 'H3'){
							if(next2.tagName === "H4") {
								next2.id = `H2.${heading2Index}.H3.${heading3Index}.H4${heading4Index}`;
								let heading4BookMark = document.createElement("a");
								heading4BookMark.href = `#H2.${heading2Index}.H3.${heading3Index}`;
								heading4BookMark.innerHTML += "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
								heading4BookMark.innerHTML += "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
								heading4BookMark.innerHTML += document.getElementById(next2.id).innerHTML;
				
								heading4BookMark.style.display = "block";
								heading4BookMark.style.backgroundColor = "transparent";
								heading4BookMark.style.border = "none";
								heading4BookMark.style.fontSize = "15px";
								heading4BookMark.style.fontFamily = localStorage.getItem("lightwebTextFont");
								heading4BookMark.style.marginBottom = "9px";
								
								tableOfContentsDiv.appendChild(heading4BookMark);
								
								let next3 = next2.nextElementSibling;
								while(next3 && next3.tagName !== 'H4'){
									if(next3.tagName === "H5") {
										next3.id = `H2.${heading2Index}.H3.${heading3Index}.H4${heading4Index}.H5${heading5Index}`;
										let heading5BookMark = document.createElement("a");
										heading5BookMark.href = `#H2.${heading2Index}.H3.${heading3Index}.H4${heading4Index}.H5${heading5Index}`;
										heading5BookMark.innerHTML += "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
										heading5BookMark.innerHTML += "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
										heading5BookMark.innerHTML += "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
										heading5BookMark.innerHTML += document.getElementById(next3.id).innerHTML;
										
										heading5BookMark.style.display = "block";
										heading5BookMark.style.backgroundColor = "transparent";
										heading5BookMark.style.border = "none";
										heading5BookMark.style.fontSize = "13px";
										heading5BookMark.style.fontFamily = localStorage.getItem("lightwebTextFont");
										heading5BookMark.style.marginBottom = "9px";
								
								
										tableOfContentsDiv.appendChild(heading5BookMark);
										
										let next4 = next3.nextElementSibling;
										while(next4 && next4.tagName !== 'H5'){
											if(next4.tagName === "H6") {
												next4.id = `H2.${heading2Index}.H3.${heading3Index}.H4${heading4Index}.H5${heading5Index}.H6${heading6Index}`;
												let heading6BookMark = document.createElement("a");
												heading6BookMark.href = `#H2.${heading2Index}.H3.${heading3Index}.H4${heading4Index}.H5${heading5Index}.H6${heading6Index}`;
												heading6BookMark.innerHTML += "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
												heading6BookMark.innerHTML += "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
												heading6BookMark.innerHTML += "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
												heading6BookMark.innerHTML += "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
												heading6BookMark.innerHTML += document.getElementById(next4.id).innerHTML;
												
												heading6BookMark.style.display = "block";
												heading6BookMark.style.backgroundColor = "transparent";
												heading6BookMark.style.border = "none";
												heading6BookMark.style.fontSize = "11px";
												heading6BookMark.style.fontFamily = localStorage.getItem("lightwebTextFont");
												heading6BookMark.style.marginBottom = "7px";
										
										
												tableOfContentsDiv.appendChild(heading6BookMark);
										
											}
										next4 = next4.nextElementSibling;
										heading6Index++;
										}
										
									}
									next3 = next3.nextElementSibling;
									heading5Index++;
								}
							}
							next2 = next2.nextElementSibling;
							heading4Index++;
						}
						
						heading3Index++;
					}
					
					next = next.nextElementSibling;
				}
				heading2Index++;
			});
			
		}
	
});

	
	
document.addEventListener("DOMContentLoaded", () => setSize(0));
if(textSizeSelection){
	textSizeSelection.addEventListener("change", () => setSize(1));
}
if(textFontSelection){
	textFontSelection.addEventListener("change", () => setSize(1));
}

if(textLineHeightSelection){
	textLineHeightSelection.addEventListener("change", () => setSize(1));
}

if(hyperlinkHoverColorSelection){
	hyperlinkHoverColorSelection.addEventListener("change", () => setSize(1));
}


setInterval(setSize(1), 3000);
function setSize(toggle){
	
	let deviceType = localStorage.getItem("DeviceType");

	if(textSizeSelection && toggle === 1){
		localStorage.setItem("lightwebTextSize", Number(textSizeSelection.value));
	}
	
	if(textLineHeightSelection && toggle === 1){
		localStorage.setItem("lightwebLineHeight", textLineHeightSelection.value);
	}
	
	const val = localStorage.getItem("lightwebTextSize").trim();
	if(isNaN(val)){
		localStorage.setItem("lightwebTextSize", 1);
	}
	
	if(textFontSelection && toggle === 1){
		localStorage.setItem("lightwebTextFont", textFontSelection.value);
		textFontSelection.value = localStorage.getItem("lightwebTextFont");
	}
	
	if(hyperlinkHoverColorSelection && toggle === 1){
		localStorage.setItem("lightwebHyperlinkHoverColorSelection", hyperlinkHoverColorSelection.value);
	}
	
	const scales = [
		{ elements: "p, a.textLink ,span, input, select, option, optgroup, textarea, h5, label", size: 15 },
		{ elements: "h6", size: 14 },
		{ elements: "h4", size: 17 },
		{ elements: ".note .noteTitle", size: 18 },
		{ elements: "h3", size: 20 },
		{ elements: "h2, example", size: 25 },
		{ elements: "math", size: 35 },
		{ elements: "h1", size: 60 },
		
	]
	
	const allElementsAffected = [
		{font: "p, a, div:not(#DigitalClock):not(#DigitalCalendar), span, input, select, option, optgroup, textarea, table, h1, h2, h3, h4, h5, h6, label, example, math"},
		{lineHeight: "p, div:not(#DigitalClock):not(#DigitalCalendar), span, input, select, option, optgroup, textarea, h1, h2, h3, h4, h5, h6, label, example, math"}
	]

	const textSizeMultiplier = localStorage.getItem("lightwebTextSize");

	scales.forEach(group => {
		document.querySelectorAll(group.elements).forEach(element => {
			element.style.fontSize = `${group.size * textSizeMultiplier}px`;
		});
		
		document.querySelectorAll("a").forEach(hypli => {
			if(hypli.classList.contains("articles")){
				hypli.style.fontSize = `${25 * textSizeMultiplier}px`;
			} else {
				hypli.style.fontSize = `${30 * textSizeMultiplier}px`;
			}
			
			if(hypli.id === "exitSettingsBtn"){
				hypli.style.fontSize = `${50 * textSizeMultiplier}px`;
			}
		});
	});
	
	allElementsAffected.forEach(group => {
		document.querySelectorAll(group.lineHeight).forEach(element => {
			element.style.lineHeight = `${localStorage.getItem("lightwebLineHeight")}em`;
		});
	});
	
	allElementsAffected.forEach(group => {
		document.querySelectorAll(group.font).forEach(element => {
			element.style.fontFamily = localStorage.getItem("lightwebTextFont");
		});
		
		document.querySelectorAll("button").forEach(button => {
			if(!button.classList.contains("settingButton")){
				button.style.fontFamily = localStorage.getItem("lightwebTextFont");
			}
		});
	});
	
	
	document.documentElement.style.setProperty("--hyperlinkHoverColor", localStorage.getItem("lightwebHyperlinkHoverColorSelection"));
	setTimeout( () => {
		document.documentElement.style.setProperty("--hyperlinkHoverColor", localStorage.getItem("lightwebHyperlinkHoverColorSelection"));
	}, 200);
	
}

/* Importing Google API Fonts */

const customFontLinks = [
	"https://fonts.googleapis.com/css2?family=Oswald",
	"https://fonts.googleapis.com/css2?family=Noto+Sans",
	"https://fonts.googleapis.com/css2?family=Quicksand",
	"https://fonts.googleapis.com/css2?family=Pacifico",
	"https://fonts.googleapis.com/css2?family=Lobster+Two",
	"https://fonts.googleapis.com/css2?family=Roboto",
]

customFontLinks.forEach(customFontLink => {
	if(localStorage.getItem("loadCustomFonts") === 'true'){
		customFontHyperlink = document.createElement("link");
		customFontHyperlink.rel = "stylesheet";
		customFontHyperlink.href = customFontLink;
		document.head.appendChild(customFontHyperlink);
	}
});




/* document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
  if (event.key === "F12" || event.keyCode === 123) {
    event.preventDefault();
  }
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'i') {
    event.preventDefault();
  }
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'j') {
    event.preventDefault();
  }
  if (event.ctrlKey && event.key.toLowerCase() === 'u') {
    event.preventDefault();
  }
});

*/



