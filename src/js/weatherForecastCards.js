export const createHourlyCards = () => {
  const hourlyWeatherForecastSection = document.querySelector(".hourly-weather-forecast-section");

  for (let i = 0; i < 5; i++) {
    const hourlyWeatherForecastCard = document.createElement("div");
    hourlyWeatherForecastCard.classList.add("hourly-weather-forecast-card");

    const hourlyWeatherForecastDateTime = document.createElement("div");
    hourlyWeatherForecastDateTime.classList.add("hourly-weather-forecast-date-time");

    const hourlyWeatherForecastDate = document.createElement("div");
    hourlyWeatherForecastDate.classList.add("hourly-weather-forecast-date", "loading", "dynamic-data");
    hourlyWeatherForecastDate.innerHTML = "&nbsp;";

    const hourlyWeatherForecastTime = document.createElement("div");
    hourlyWeatherForecastTime.classList.add("hourly-weather-forecast-time", "loading", "dynamic-data");
    hourlyWeatherForecastTime.innerHTML = "&nbsp;";

    const hourlyWeatherForecastTemperature = document.createElement("div");
    hourlyWeatherForecastTemperature.classList.add("hourly-weather-forecast-temperature", "loading", "dynamic-data");
    hourlyWeatherForecastTemperature.innerHTML = "&emsp;&emsp;";

    hourlyWeatherForecastDateTime.appendChild(hourlyWeatherForecastDate);
    hourlyWeatherForecastDateTime.appendChild(hourlyWeatherForecastTime);

    hourlyWeatherForecastCard.appendChild(hourlyWeatherForecastDateTime);
    hourlyWeatherForecastCard.appendChild(hourlyWeatherForecastTemperature);

    hourlyWeatherForecastSection.appendChild(hourlyWeatherForecastCard);
  }
};

export const createDailyCards = () => {
  const dailyForecastSection = document.querySelector(".daily-forecast-section");

  for (let i = 0; i < 40; i++) {
    const dailyWeatherForecastCard = document.createElement("div");
    dailyWeatherForecastCard.classList.add("daily-weather-forecast-card");

    const dailyWeatherForecastDateTime = document.createElement("div");
    dailyWeatherForecastDateTime.classList.add("daily-weather-forecast-date-time");

    const dailyWeatherForecastDate = document.createElement("div");
    dailyWeatherForecastDate.classList.add("daily-weather-forecast-date", "loading", "dynamic-data");
    dailyWeatherForecastDate.innerHTML = "&nbsp;";

    const dailyWeatherForecastTime = document.createElement("div");
    dailyWeatherForecastTime.classList.add("daily-weather-forecast-time", "loading", "dynamic-data");
    dailyWeatherForecastTime.innerHTML = "&nbsp;";

    const dailyWeatherForecastIcon = document.createElement("img");
    dailyWeatherForecastIcon.classList.add("daily-weather-forecast-icon", "loading", "dynamic-data");

    const dailyForecastWeatherDetails = document.createElement("div");
    dailyForecastWeatherDetails.classList.add("daily-forecast-weather-details");

    const dailyWeatherForecastTemperature = document.createElement("div");
    dailyWeatherForecastTemperature.classList.add("daily-weather-forecast-temperature", "loading", "dynamic-data");
    dailyWeatherForecastTemperature.innerHTML = "&emsp;&emsp;";

    const dailyWeatherForecastDescription = document.createElement("div");
    dailyWeatherForecastDescription.classList.add("daily-weather-forecast-description", "loading", "dynamic-data");
    dailyWeatherForecastDescription.innerHTML = "&emsp;&emsp;";

    dailyWeatherForecastDateTime.appendChild(dailyWeatherForecastDate);
    dailyWeatherForecastDateTime.appendChild(dailyWeatherForecastTime);

    dailyWeatherForecastCard.appendChild(dailyWeatherForecastDateTime);
    dailyWeatherForecastCard.appendChild(dailyWeatherForecastIcon);

    dailyForecastWeatherDetails.appendChild(dailyWeatherForecastTemperature);
    dailyForecastWeatherDetails.appendChild(dailyWeatherForecastDescription);

    dailyWeatherForecastCard.appendChild(dailyForecastWeatherDetails);

    dailyForecastSection.appendChild(dailyWeatherForecastCard);
  }
};
