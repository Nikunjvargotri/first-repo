 const apiKey = "a128d7c7749c44c84dad0942a4c681d4";

    const weatherDataElement = document.querySelector(".weather-data");
    const cityNameElement = document.querySelector("#city-name");
    const formElement = document.querySelector("#weather-form");
    const imageIcon = document.querySelector(".icon");

    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const cityValue = cityNameElement.value.trim();
      if (cityValue !== "") {
        getWeatherData(cityValue);
      }
    });

    async function getWeatherData(cityValue) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error("City not found");
        }

        const data = await response.json();

        const temperature = Math.floor(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        const details = [
          `Feels Like: ${Math.floor(data.main.feels_like)}°C`,
          `Humidity: ${data.main.humidity}%`,
          `Wind Speed: ${data.wind.speed} m/s`,
        ];

        weatherDataElement.querySelector(".temp").textContent = `${temperature}°C`;
        weatherDataElement.querySelector(".desc").textContent = description;
        imageIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon" />`;
        weatherDataElement.querySelector(".details").innerHTML = details
          .map((detail) => `<div>${detail}</div>`)
          .join("");
      } catch (err) {
        console.error("Error:", err.message);
        weatherDataElement.querySelector(".temp").textContent = "";
        weatherDataElement.querySelector(".desc").textContent = "City not found";
        imageIcon.innerHTML = "";
        weatherDataElement.querySelector(".details").innerHTML = "";
      }
    }