document.getElementById("resultButton").addEventListener("click", function () {
  const city = document.getElementById("inputCity").value;
  const apiKey = '6724f2d5e07375722cfcb71ecd81db7e'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
/* https://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles&appid=6724f2d5e07375722cfcb71ecd81db7e&units=metric */
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const fahrenheit = ((data.main.temp * 1.8) + 32).toFixed(1);
	  const fahrenheit2 = ((data.main.feels_like * 1.8) + 32).toFixed(1);
      document.querySelector("#result h2").textContent = `${data.name}, ${data.sys.country}`;
      document.querySelectorAll("#result p")[0].textContent = `Temperature: ${data.main.temp} °C OR ${fahrenheit}°F`;
	  document.querySelectorAll("#result p")[1].textContent = `Feels Like: ${data.main.feels_like}°C OR ${fahrenheit2}°F`;
      document.querySelectorAll("#result p")[2].textContent = `Wind Speed: ${data.wind.speed} m/s`;
      document.querySelectorAll("#result p")[3].textContent = `Wind Direction: ${data.wind.deg}°`;
      document.querySelectorAll("#result p")[4].textContent = `Humidity: ${data.main.humidity}%`;
	  document.querySelectorAll("#result p")[5].textContent = `Weather Type: ${data.weather.main}%`;
	  document.querySelectorAll("#result p")[6].textContent = `Description: ${data.weather.description}%`;
      const umbrellaNeeded = data.weather[0].main === "Rain" ? "Yes" : "No";
      document.querySelectorAll("#safetyGuidelines p")[0].textContent = `Umbrella Needed?: ${umbrellaNeeded}`;
    if(fahrenheit <= 90 && fahrenheit >= 70 && umbrellaNeeded == "No"){
	  document.querySelectorAll("#safetyGuidelines p")[1].textContent = "Physical Activity Conditions: Optimal"
	  } else { 
	  document.querySelectorAll("#safetyGuidelines p")[1].textContent = "Physical Activity Conditions: Not Recommended"
	  } 
	if(fahrenheit >= 91 && umbrellaNeeded == "No"){
	document.querySelectorAll("#safetyGuidelines p")[2].textContent = "Recommended Clothing: Lightweight, Breathable Clothing"
	} else if(fahrenheit <= 90 && fahrenheit >= 76 && umbrellaNeeded == "No"){
	document.querySelectorAll("#safetyGuidelines p")[2].textContent = "Recommended Clothing: Loose Clothing"
	} else if(fahrenheit <= 75 && fahrenheit >= 65 && umbrellaNeeded == "No"){
	document.querySelectorAll("#safetyGuidelines p")[2].textContent = "Recommended Clothing: T-shirt / Formal"
	} else if(fahrenheit <= 64 && fahrenheit >= 55 && umbrellaNeeded == "No"){
	document.querySelectorAll("#safetyGuidelines p")[2].textContent = "Recommended Clothing: Light Jacket"
	} else if(fahrenheit <= 54 && fahrenheit >= 32 && umbrellaNeeded == "No"){
	document.querySelectorAll("#safetyGuidelines p")[2].textContent = "Recommended Clothing: Thick Clothing"
	}
	})
	  
    .catch(error => {
      document.querySelector("#result h2").textContent = "Error";
      document.querySelectorAll("#result p")[0].textContent = error.message;
      document.querySelectorAll("#result p")[1].textContent = "";
      document.querySelectorAll("#result p")[2].textContent = "";
      document.querySelectorAll("#result p")[3].textContent = "";
	  document.querySelectorAll("#result p")[4].textContent = "";
      document.querySelectorAll("#result p")[5].textContent = "";
      document.querySelectorAll("#result p")[6].textContent = "";
    });
});



