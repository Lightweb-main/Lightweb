

const currentPath = window.location.href.toLowerCase();
const loginPageName = 'index.html';

const isOnLightweb = currentPath.includes('lightweb-main.github.io');
const isNotLoginPage = !currentPath.endsWith(loginPageName);
const isSessionInvalid = localStorage.getItem('LoginVerification') !== 'true';

if (isOnLightweb && isNotLoginPage && isSessionInvalid) {
  alert("Session expired. Please log in again."); 
}

if (
  localStorage.getItem('LoginVerification') === null &&
  currentPath.includes('lightweb-main.github.io') &&
  !currentPath.endsWith(loginPageName)
) {
  localStorage.setItem('LoginVerification', 'false');
}

if ( 
  localStorage.getItem('LoginVerification') !== 'true' &&
  currentPath.includes('lightweb-main.github.io') &&
  !currentPath.endsWith(loginPageName)
) {
    if (currentPath.toLowerCase().includes('/lightweb/mainpages/') || 
		currentPath.toLowerCase().includes('/lightweb/articles/') || 
		currentPath.toLowerCase().includes('/lightweb/simulations/') || 
		currentPath.toLowerCase().includes('/lightweb/utility/') || 
		currentPath.toLowerCase().includes('/lightweb/noninformationalarticles/') || 
		currentPath.toLowerCase().includes('/lightweb/games%20funstuff/') || 
		currentPath.toLowerCase().includes('/lightweb/courses/')) {
    window.location.href = '../index.html';
  }	
    if(currentPath.toLowerCase().includes('/lightweb/quizzes/pretests/') || 
	currentPath.toLowerCase().includes('/lightweb/quizzes/tests/')){
	window.location.href = '../../index.html';
	
	}

  
  
  
}
let faviconNum = 0
setInterval(update, 100);

function update() {
	faviconNum += 1
    const time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = String(time.getDate()).padStart(2, '0');
    let month = String(time.getMonth() + 1).padStart(2, '0');
    let year = String(time.getFullYear()).slice(-2);
    let am_pm = "AM";


    const hasMilitaryTime = document.body.classList.contains('militaryTime')
	const hasDashedCalendar = document.body.classList.contains('dashedCalendar')
    if(!hasMilitaryTime){
    if (hour >= 12) {
        am_pm = "PM";
        if (hour > 12) hour -= 12;
    }
    if (hour === 0) {
        hour = 12;
    }
}
   if(hasMilitaryTime){
am_pm = ""
}
    hour = hour < 10 ? hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = `${hour}:${min}:${sec}`;
    let currentDay = `${month}/${day}/${year}`;
   if(hasMilitaryTime){
    currentTime = `${hour}:${min} ${am_pm}`;
   }else{
	 currentTime = `${hour}:${min}:${sec} ${am_pm}`;  
   }
	if(hasDashedCalendar){
	currentDay = `${month}-${day}-${year}`;
	} else {
	currentDay = `${month}/${day}/${year}`;
	}

    document.getElementById('DigitalClock').textContent = currentTime;
    document.getElementById('DigitalCalendar').textContent = currentDay;
}

document.addEventListener('DOMContentLoaded', () => {


  document.body.classList.remove('dark', 'AnalogScreen', 'CRTBLUEScreen', 'default', 'chaos');
  document.body.classList.remove('dashedCalendar');
  document.body.classList.remove('InverseInversionOn');
  document.body.classList.remove('PC', 'Phone', 'Laptop');
      const theme = localStorage.getItem('theme');
      const timeType = localStorage.getItem('timeType');
	  const DeviceType = localStorage.getItem('DeviceType');
	  const CalendarType = localStorage.getItem('calendarType');
	  const toggleImageInversion = localStorage.getItem('toggleImageInversion');

	  if(DeviceType == 'PC'){
	  document.body.classList.add('PC');
	  } else if (DeviceType == 'Phone'){
	  document.body.classList.add('Phone');
	  } else if(DeviceType == 'Laptop'){
	  document.body.classList.add('Laptop');	
	  }
      if (theme === 'dark') {
	    clearScreenType();
        document.body.classList.add('dark');
      } else if (theme === 'AnalogScreen') {
	    clearScreenType();
        document.body.classList.add('AnalogScreen');
      } else if (theme === 'CRTBLUEScreen') {
	    clearScreenType();
        document.body.classList.add('CRTBLUEScreen');
      } else if(theme === 'default'){
	    clearScreenType();
		document.body.classList.add('default');
	  } else if(theme == 'squidGameScreen'){
		document.body.classList.add('squidGameScreen');
	  } else if(theme == 'chaosScreen'){
		document.body.classList.add('chaosScreen');  
	  }

      if (timeType === 'militaryTime') {
        document.body.classList.add('militaryTime');
      } else {
        document.body.classList.remove('militaryTime');
      }
	  
	  if (CalendarType === 'dashedCalendar') {
        document.body.classList.add('dashedCalendar');
      } else {
        document.body.classList.remove('defaultCalendar');
      }
	  
	  if (toggleImageInversion == 'imageInversionOn') {
        document.body.classList.add('imageInversionOn');
      } else {
	    document.body.classList.remove('imageInversionOff');
	  }
	  
      const toggleDarkBtn = document.getElementById('screen-toggle');
      const toggleAnalogBtn = document.getElementById('analog-screen-button');
      const toggleMilitaryBtn = document.getElementById('millitary-time-button');
	  const toggleCRTBlueScreen = document.getElementById('CRTBLUE-screen-button');
	  const toggleDashedCalendarBtn = document.getElementById('dashed-calendar-button');
	  const toggleSquidGameBtn = document.getElementById('squidGame-screen-button');
	  const toggleChaosScreenBtn = document.getElementById('chaos-screen-button');
	  const ImageInversionBtn = document.getElementById('image-inversion-button');

if(toggleDarkBtn){
toggleDarkBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'default');
  } else {
	clearScreenType();
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});
}

if(toggleAnalogBtn){
toggleAnalogBtn.addEventListener('click', () => {
  if (document.body.classList.contains('AnalogScreen')) {
    document.body.classList.remove('AnalogScreen');
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
  localStorage.setItem(
    'timeType',
    document.body.classList.contains('militaryTime') ? 'militaryTime' : '12-hour-clock'
  );
});
}

if(toggleDashedCalendarBtn){
toggleDashedCalendarBtn.addEventListener('click', () => {
  document.body.classList.toggle('dashedCalendar');
  localStorage.setItem(
    'calendarType',
    document.body.classList.contains('dashedCalendar') ? 'dashedCalendar' : 'defaultCalendar'
  );
});
}

if(toggleSquidGameBtn){
toggleSquidGameBtn.addEventListener('click', () => {
  if (document.body.classList.contains('squidGameScreen')) {
    document.body.classList.remove('squidGameScreen');
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
    localStorage.setItem('theme', 'default');
  } else {
	clearScreenType();
    document.body.classList.add('chaosScreen');
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


function clearScreenType(){
document.body.classList.remove('dark', 'AnalogScreen', 'CRTBLUEScreen', 'default', 'squidGameScreen', 'chaosScreen');
}
const iconthingy = document.createElement('link');
iconthingy.rel = 'icon'; 
iconthingy.type = 'image/png'; 
iconthingy.href = '../Images/Lightweb.icon.png?v=' + faviconNum



const iconthingy2 = document.createElement('link');
iconthingy2.rel = 'icon'; 
iconthingy2.type = 'image/png'; 
iconthingy2.href = 'Images/Lightweb.icon.png?v=' + faviconNum

const html = `
  <div id="DigitalClock">If you are seeing this, your clock is missing a ding-dong</div>
  <div id="DigitalCalendar">If you are seeing this, your calendar needs a pin or two.</div>
`;

const DigitalClockCalendarContainer = document.createElement('div');
DigitalClockCalendarContainer.innerHTML = html;
document.body.appendChild(DigitalClockCalendarContainer);
document.head.appendChild(iconthingy);

window.addEventListener("DOMContentLoaded", () => {
		DigitalClock.style.position = "absolute";
		DigitalClock.style.left = "0px";
		DigitalClock.style.top = "0px";
		DigitalClock.style.border = "2px solid var(--DigitalClockBackground)";
		DigitalClock.style.width = "300px";
		DigitalClock.style.fontSize = "50px";
		DigitalClock.style.borderRadius = "15px";
		DigitalClock.style.textAlign = "center";
		
		DigitalCalendar.style.position = "absolute";
		DigitalCalendar.style.left = "0px";
		DigitalCalendar.style.top = "60px";
		DigitalCalendar.style.border = "2px solid var(--DigitalClockBackground)";
		DigitalCalendar.style.width = "300px";
		DigitalCalendar.style.fontSize = "25px";
		DigitalCalendar.style.borderRadius = "15px";
		DigitalCalendar.style.textAlign = "center";
	
	if(window.location.pathname.includes("/Articles/")){
		let linkText = document.createElement("h2");
		linkText.textContent = "Done? Here are other links.";
		document.body.appendChild(linkText);
		
		let mainPageLink = document.createElement("a");
		mainPageLink.href = "../MainPages/Lightweb%20MainPage.html";
		mainPageLink.textContent = "Back to Main Page";
		document.body.appendChild(mainPageLink);
		
		document.body.appendChild(document.createElement("br"));
		document.body.appendChild(document.createElement("br"));
		
		let informationalPageLink = document.createElement("a");
		informationalPageLink.href = "../MainPages/Informational.html";
		informationalPageLink.textContent = "Back to Informational";
		document.body.appendChild(informationalPageLink);
		
		let LightwebVerificationHeader = document.createElement("header");
		LightwebVerificationHeader.textContent = "Official Lightweb Site";
		document.body.appendChild(LightwebVerificationHeader);
	}
});

 document.addEventListener('contextmenu', event => event.preventDefault());
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







































