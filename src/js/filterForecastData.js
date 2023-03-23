import { formatDate } from "./convertUnits";

export const filterForecastData = async (weatherForecastData) => {
  const previousFilterContainer = document.querySelector(".filter-container");
  const uniqueDates = new Set(["All Days"]);
  const body = document.querySelector("body");

  if (previousFilterContainer) {
    previousFilterContainer.remove();
  }

  for (let i = 0; i < weatherForecastData.list.length; i++) {
    uniqueDates.add(await formatDate(weatherForecastData.list[i].dt, "short"));
  }

  const filterContainer = document.createElement("div");
  filterContainer.classList.add("filter-container");

  body.insertBefore(filterContainer, body.children[4]);

  filterContainer.addEventListener("wheel", (event) => {
    event.preventDefault();

    filterContainer.scrollLeft += event.deltaY * 2;
  });

  uniqueDates.forEach(async (uniqueDate) => {
    const filterItem = document.createElement("div");
    filterItem.classList.add("filter-item");

    if (uniqueDate === "All Days") {
      filterItem.classList.add("active");
    }

    filterItem.innerHTML = uniqueDate;

    filterContainer.appendChild(filterItem);
  });

  const filterItems = document.querySelectorAll(".filter-item");
  const dailyWeatherForecastDates = document.querySelectorAll(".daily-weather-forecast-date");

  dailyWeatherForecastDates.forEach(async (dailyWeatherForecastDate) => {
    dailyWeatherForecastDate.parentElement.parentElement.style.display = "flex";
  });

  filterItems.forEach(async (filterItem) => {
    filterItem.addEventListener("click", async () => {
      const dailyWeatherForecastDates = document.querySelectorAll(".daily-weather-forecast-date");
      const filterItems = document.querySelectorAll(".filter-item");

      filterItems.forEach(async (filterItem) => {
        filterItem.classList.remove("active");
      });

      dailyWeatherForecastDates.forEach(async (dailyWeatherForecastDate) => {
        dailyWeatherForecastDate.parentElement.parentElement.style.display = "flex";

        if (filterItem.innerHTML === "All Days") {
          dailyWeatherForecastDate.parentElement.parentElement.style.display = "flex";

          filterItem.classList.add("active");
        } else if (dailyWeatherForecastDate.innerHTML !== filterItem.innerHTML) {
          dailyWeatherForecastDate.parentElement.parentElement.style.display = "none";

          filterItem.classList.add("active");
        }
      });
    });
  });
};
