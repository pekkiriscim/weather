import { themeIcons } from "./themeIcons.js";

const favicon = document.querySelector('link[rel="shortcut icon"]');

const html = document.querySelector("html");
const themeButton = document.querySelector(".theme-button");

let currentTheme = localStorage.getItem("theme");

function getPreferredTheme() {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

favicon.href = themeIcons.favicon[getPreferredTheme()];

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
