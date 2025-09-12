

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';


async function getData() {
  const city = document.getElementById("inputCity").value;
  const apiKey = '6724f2d5e07375722cfcb71ecd81db7e';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();

    document.querySelector("#output h2").textContent = `Weather in ${data.name}`;
    document.getElementById("temperatureDisplay").textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById("windSpeedDisplay").textContent = `Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById("humidityDisplay").textContent = `Humidity: ${data.main.humidity}%`;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

