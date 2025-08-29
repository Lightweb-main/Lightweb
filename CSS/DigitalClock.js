let faviconNum = 0
setInterval(update, 100);

(function setInitialTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (theme === 'AnalogScreen') {
    document.documentElement.classList.add('AnalogScreen');
  }

  const timeType = localStorage.getItem('timeType');
  if (timeType === 'militaryTime') {
    document.documentElement.classList.add('militaryTime');
  }
})();

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

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    e.preventDefault();
	document.location.href = 'https://www.google.com/search?q=Stop+it%2C+get+some+help&sca_esv=7e05b07ddf466695&sxsrf=AE3TifNaVOMfyiOuT1Xp5JlRBPlHBMX-pw%3A1756438790739&source=hp&ei=BiGxaL3pKtzvkPIPoPq_2Qo&iflsig=AOw8s4IAAAAAaLEvFl2t1c7tmAq9Icvw_rsRF8jhJIMM&ved=0ahUKEwi9hMKxjK-PAxXcN0QIHSD9L6sQ4dUDCBo&uact=5&oq=Stop+it%2C+get+some+help&gs_lp=Egdnd3Mtd2l6IhZTdG9wIGl0LCBnZXQgc29tZSBoZWxwMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiWWFC2C1jmVnAVeACQAQCYAUOgAegOqgECMzm4AQPIAQD4AQGYAjygAvsPqAIKwgIHECMYJxjqAsICDRAjGPAFGCcYyQIY6gLCAgQQIxgnwgIIEAAYgAQYsQPCAhEQLhiABBixAxjRAxiDARjHAcICDhAAGIAEGLEDGIMBGIoFwgILEAAYgAQYsQMYgwHCAgoQIxiABBgnGIoFwgIOEC4YgAQYsQMY0QMYxwHCAg4QLhiABBixAxiDARiKBcICChAAGIAEGLEDGArCAg4QLhiABBjHARiOBRivAcICERAuGIAEGMcBGJgFGI4FGK8BwgITEC4YgAQYsQMY0QMYgwEYxwEYCsICDRAAGIAEGLEDGIMBGArCAg0QLhiABBixAxiDARgKwgIQEAAYgAQYsQMYgwEYigUYCsICBRAuGIAEwgIEEAAYA8ICCBAuGIAEGLEDwgIHECMY8AUYJ8ICFBAuGIAEGLEDGNEDGIMBGMcBGIoFwgILEC4YgAQY0QMYxwHCAgsQLhiABBixAxiDAcICCxAAGIAEGLEDGMkDwgILEAAYgAQYkgMYigXCAgsQLhiABBjHARivAZgDBvEFwj_kw1cV_wySBwI2MKAH_soCsgcCMzm4B8IPwgcGMC41OS4xyAd-&sclient=gws-wizgoogle.com'
  }
});



















