import { themeIcons } from "./themeIcons.js";

const html = document.querySelector("html");
const themeButton = document.querySelector(".theme-button");

let currentTheme = localStorage.getItem("theme");

function getPreferredTheme() {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

if (currentTheme === "light" || currentTheme === "dark") {
  html.classList.add(currentTheme);
  themeButton.innerHTML = themeIcons[currentTheme];
} else {
  currentTheme = "auto";
  localStorage.setItem("theme", currentTheme);
  themeButton.innerHTML = themeIcons[getPreferredTheme()];
}

const toggleTheme = () => {
  if (currentTheme === "light" || currentTheme === "dark") {
    html.classList.remove(currentTheme);
    currentTheme = "auto";
    localStorage.setItem("theme", currentTheme);
    themeButton.innerHTML = themeIcons[getPreferredTheme()];
  } else {
    if (getPreferredTheme() === "light") {
      currentTheme = "dark";
    } else {
      currentTheme = "light";
    }

    localStorage.setItem("theme", currentTheme);
    html.classList.add(currentTheme);
    themeButton.innerHTML = themeIcons[currentTheme];
  }
};

themeButton.addEventListener("click", toggleTheme);
