setInterval(update, 10);

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

    let currentTime = `${hour}:${min}:${sec} ${am_pm}`;
    const currentDay = `${month}/${day}/${year}`;
   if(hasMilitaryTime){
    currentTime = `${hour}:${min} ${am_pm}`;
   }

    document.getElementById('DigitalClock').innerHTML = currentTime;
    document.getElementById('DigitalCalendar').innerHTML = currentDay;
}


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    if (localStorage.getItem('timeType') === 'militaryTime') {
        document.body.classList.add('militaryTime');
    } else {
        document.body.classList.remove('militaryTime');
    }

    const toggleBtn = document.getElementById('screen-toggle');
    const toggleBtn2 = document.getElementById('millitary-time-button');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        });
    }
    if (toggleBtn2) {
        toggleBtn2.addEventListener('click', () => {
            document.body.classList.toggle('militaryTime');
            localStorage.setItem('timeType', document.body.classList.contains('militaryTime') ? 'militaryTime' : '12-hour-clock');
        });
    }
});



const htmlContentHead = `
  <link rel="icon" type="image/png" href="../Images/Lightweb.icon.png">
 
`;

document.head.innerHTML += htmlContentHead; // Appends the HTML to the body
