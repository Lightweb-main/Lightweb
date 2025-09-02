const currentPath = window.location.href.toLowerCase();
const loginPageName = 'index.html';

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
    const currentDay = `${month}/${day}/${year}`;
   if(hasMilitaryTime){
    currentTime = `${hour}:${min} ${am_pm}`;
   }else{
	 currentTime = `${hour}:${min}:${sec} ${am_pm}`;  
   }

    document.getElementById('DigitalClock').textContent = currentTime;
    document.getElementById('DigitalCalendar').textContent = currentDay;
}
update();

document.addEventListener('DOMContentLoaded', () => {


  document.body.classList.remove('dark', 'AnalogScreen', 'CRTBLUEScreen');
  document.body.classList.remove('PC', 'Phone');
  document.body.classList.add('false');
      const theme = localStorage.getItem('theme');
      const timeType = localStorage.getItem('timeType');
	  const DeviceType = localStorage.getItem('DeviceType');
	  
      document.body.classList.remove('dark', 'AnalogScreen');
	  if(DeviceType == 'PC'){
	  document.body.classList.add('PC');
	  } else if (DeviceType == 'Phone'){
	  document.body.classList.add('Phone');
	  }
      if (theme === 'dark') {
        document.body.classList.add('dark');
      } else if (theme === 'AnalogScreen') {
        document.body.classList.add('AnalogScreen');
      } else if (theme === 'CRTBLUEScreen') {
        document.body.classList.add('CRTBLUEScreen');
      }

      if (timeType === 'militaryTime') {
        document.body.classList.add('militaryTime');
      } else {
        document.body.classList.remove('militaryTime');
      }
		
      const toggleDarkBtn = document.getElementById('screen-toggle');
      const toggleAnalogBtn = document.getElementById('analog-screen-button');
      const toggleMilitaryBtn = document.getElementById('millitary-time-button');
	  const toggleCRTBlueScreen = document.getElementById('CRTBLUE-screen-button');
	 
	

toggleDarkBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', '');
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

toggleAnalogBtn.addEventListener('click', () => {
  if (document.body.classList.contains('AnalogScreen')) {
    document.body.classList.remove('AnalogScreen');
    localStorage.setItem('theme', '');
  } else {
    document.body.classList.add('AnalogScreen');
    localStorage.setItem('theme', 'AnalogScreen');
  }
});


toggleCRTBlueScreen.addEventListener('click', () => {
  if (document.body.classList.contains('CRTBLUEScreen')) {
    document.body.classList.remove('CRTBLUEScreen');
    localStorage.setItem('theme', '');
  } else {
    document.body.classList.add('CRTBLUEScreen');
    localStorage.setItem('theme', 'CRTBLUEScreen');
  }
});

toggleMilitaryBtn.addEventListener('click', () => {
  document.body.classList.toggle('militaryTime');
  localStorage.setItem(
    'timeType',
    document.body.classList.contains('militaryTime') ? 'militaryTime' : '12-hour-clock'
  );
});
});

const iconthingy = document.createElement('link');
iconthingy.rel = 'icon'; 
iconthingy.type = 'image/png'; 
iconthingy.href = '../Images/Lightweb.icon.png?v=' + faviconNum


document.head.appendChild(iconthingy);


document.addEventListener("keydown", function (e) {
  if (e.key === "F12" || e.keyCode === 123 || 
      (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
      (e.ctrlKey && e.key === "U")) {
    e.preventDefault();
   
  }
});





















