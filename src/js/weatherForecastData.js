export const weatherForecastData = async (data, key) => {
  const hourlyWeatherForecastDate = document.querySelectorAll(".hourly-weather-forecast-date");
  const hourlyWeatherForecastTime = document.querySelectorAll(".hourly-weather-forecast-time");
  const hourlyWeatherForecastTemperature = document.querySelectorAll(".hourly-weather-forecast-temperature");

  const dailyWeatherForecastDate = document.querySelectorAll(".daily-weather-forecast-date");
  const dailyWeatherForecastTime = document.querySelectorAll(".daily-weather-forecast-time");
  const dailyWeatherForecastIcon = document.querySelectorAll(".daily-weather-forecast-icon");
  const dailyWeatherForecastTemperature = document.querySelectorAll(".daily-weather-forecast-temperature");
  const dailyWeatherForecastDescription = document.querySelectorAll(".daily-weather-forecast-description");

  let API_URL;

  if (data.lat && data.lon) {
    API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&appid=${key}&units=metric`;
  } else {
    API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${key}&units=metric`;
  }

  const response = await fetch(API_URL);
  const weatherForecastData = await response.json();

  for (let index = 0; index < 5; index++) {
    hourlyWeatherForecastDate[index].innerHTML = weatherForecastData.list[index].dt_txt.slice(0, 10);
    hourlyWeatherForecastTime[index].innerHTML = weatherForecastData.list[index].dt_txt.slice(11, 16);
    hourlyWeatherForecastTemperature[index].innerHTML = weatherForecastData.list[index].main.temp + "°C";
  }

  for (let index = 0; index < 40; index++) {
    dailyWeatherForecastDate[index].innerHTML = weatherForecastData.list[index].dt_txt.slice(0, 10);
    dailyWeatherForecastTime[index].innerHTML = weatherForecastData.list[index].dt_txt.slice(11, 16);
    dailyWeatherForecastIcon[index].src = `img/static/${weatherForecastData.list[index].weather[0].icon}.svg`;
    dailyWeatherForecastTemperature[index].innerHTML = weatherForecastData.list[index].main.temp + "°C";
    dailyWeatherForecastDescription[index].innerHTML = weatherForecastData.list[index].weather[0].main;
  }
};
