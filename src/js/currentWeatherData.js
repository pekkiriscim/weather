import { roundDegree, formatDate, mpsToKmh, metersToKm, capitalize } from "./convertUnits.js";

export const currentWeatherData = async (data, key) => {
  const currentWeatherIcon = document.querySelector(".current-weather-icon");
  const currentWeatherTemperature = document.querySelector(".current-weather-temperature");
  const currentWeatherDescription = document.querySelector(".current-weather-description");
  const currentLocation = document.querySelector(".current-location");
  const currentDate = document.querySelector(".current-date");

  const windSpeedValue = document.querySelector(".wind-speed-value");
  const pressureValue = document.querySelector(".pressure-value");
  const sunriseValue = document.querySelector(".sunrise-value");
  const humidityValue = document.querySelector(".humidity-value");
  const visibilityValue = document.querySelector(".visibility-value");
  const sunsetValue = document.querySelector(".sunset-value");

  let API_URL;

  if (data.lat && data.lon) {
    API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${key}&units=metric`;
  } else {
    API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${key}&units=metric`;
  }

  const response = await fetch(API_URL);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Sorry, we couldn't find ${data}. Please double-check the spelling and try again.`);
    } else {
      throw new Error(
        "Oops! We're having trouble getting the latest weather information right now. Please try again later or contact support if the problem persists."
      );
    }
  }

  const currentWeatherData = await response.json();

  currentWeatherIcon.src = `src/img/animated/${currentWeatherData.weather[0].icon}.svg`;
  currentWeatherTemperature.innerHTML = await roundDegree(currentWeatherData.main.temp);
  currentWeatherDescription.innerHTML = await capitalize(currentWeatherData.weather[0].description);
  currentLocation.innerHTML = currentWeatherData.name;
  currentDate.innerHTML = await formatDate(currentWeatherData.dt);

  windSpeedValue.innerHTML = await mpsToKmh(currentWeatherData.wind.speed);
  pressureValue.innerHTML = `${currentWeatherData.main.pressure} hPa`;
  sunriseValue.innerHTML = await formatDate(currentWeatherData.sys.sunrise, "hour");
  humidityValue.innerHTML = `${currentWeatherData.main.humidity}%`;
  visibilityValue.innerHTML = await metersToKm(currentWeatherData.visibility);
  sunsetValue.innerHTML = await formatDate(currentWeatherData.sys.sunset, "hour");
};
