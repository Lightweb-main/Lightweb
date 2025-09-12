const temperatureDisplay = document.getElementById("temperatureDisplay");

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '6724f2d5e07375722cfcb71ecd81db7e';
let location = "Los Angeles"; // No need to encode manually

const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

async function getData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    temperatureDisplay.textContent = `Temperature: ${data.main.temp}°C`;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
