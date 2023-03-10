import { createHourlyCards, createDailyCards } from "./weatherForecastCards.js";
import { currentWeatherData } from "./currentWeatherData.js";
import { weatherForecastData } from "./weatherForecastData.js";

const API_KEY = "";

const searchBoxInput = document.querySelector(".search-box-input");

createHourlyCards();
createDailyCards();

const startLoadingState = async () => {
  const dynamicData = document.querySelectorAll(".dynamic-data");

  for (let index = 0; index < dynamicData.length; index++) {
    dynamicData[index].classList.add("loading");
  }
};

const endLoadingState = async () => {
  const dynamicData = document.querySelectorAll(".dynamic-data");

  for (let index = 0; index < dynamicData.length; index++) {
    dynamicData[index].classList.remove("loading");
  }
};

const fetchWeatherData = async (data) => {
  await startLoadingState();
  await currentWeatherData(data, API_KEY);
  await weatherForecastData(data, API_KEY);
  await endLoadingState();
};

searchBoxInput.addEventListener("keyup", async (event) => {
  if (event.keyCode === 13) {
    await fetchWeatherData(searchBoxInput.value, API_KEY);
  }
});

fetchWeatherData("Istanbul");
