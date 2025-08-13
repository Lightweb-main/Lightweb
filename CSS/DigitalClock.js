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

    document.getElementById('DigitalClock').innerHTML = currentTime;
    document.getElementById('DigitalCalendar').innerHTML = currentDay;
}
update();

document.addEventListener('DOMContentLoaded', () => {
      const theme = localStorage.getItem('theme');
      const timeType = localStorage.getItem('timeType');
	
      document.body.classList.remove('dark', 'AnalogScreen');
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
			remove();
          document.body.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
      });

      toggleAnalogBtn.addEventListener('click', () => {
        if (document.body.classList.contains('AnalogScreen')) {
          document.body.classList.remove('AnalogScreen');
          localStorage.setItem('theme', '');
        } else {
		  remove();
          document.body.classList.add('AnalogScreen');
          localStorage.setItem('theme', 'AnalogScreen');
        }
      });
	  
	  toggleCRTBlueScreen.addEventListener('click', () => {
        if (document.body.classList.contains('CRTBLUEScreen')) {
          document.body.classList.remove('CRTBLUEScreen');
          localStorage.setItem('theme', '');
        } else {
			remove();
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

function remove(){
	document.body.classList.remove('dark');
	document.body.classList.remove('CRTBLUEScreen');
	if (document.body.classList.contains('dark')) {
	
	} else{
		document.body.classList.remove('CRTBLUEScreen');
		document.body.classList.remove('CRTBLUEScreen');
	}
}

const iconthingy = document.createElement('link');
iconthingy.rel = 'icon'; 
iconthingy.type = 'image/png'; 
iconthingy.href = '../Images/Lightweb.icon.png';

document.head.appendChild(favicon);







