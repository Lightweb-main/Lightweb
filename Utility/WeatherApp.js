const temperatureDisplay = document.getElementById("temperatureDisplay");

const url = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = '6724f2d5e07375722cfcb71ecd81db7e'
let location = "Los%20Angeles"
const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;


async function getData(){
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
   temperatureDisplay.textContent = `Temperature: ${data.min.temp}`;

    
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });

}
