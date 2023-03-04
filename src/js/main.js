import { icons } from "./icons.js";

const html = document.querySelector("html");
const themeButton = document.querySelector(".theme-button");

let currentTheme = localStorage.getItem("theme");

function getPreferredTheme() {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

if (currentTheme === "light" || currentTheme === "dark") {
  html.classList.add(currentTheme);
  themeButton.innerHTML = icons[currentTheme];
} else {
  currentTheme = "auto";
  localStorage.setItem("theme", currentTheme);
  themeButton.innerHTML = icons[getPreferredTheme()];
}

const handleTheme = () => {
  if (currentTheme === "light" || currentTheme === "dark") {
    html.classList.remove(currentTheme);
    currentTheme = "auto";
    localStorage.setItem("theme", currentTheme);
    themeButton.innerHTML = icons[getPreferredTheme()];
  } else {
    if (getPreferredTheme() === "light") {
      currentTheme = "dark";
    } else {
      currentTheme = "light";
    }

    localStorage.setItem("theme", currentTheme);
    html.classList.add(currentTheme);
    themeButton.innerHTML = icons[currentTheme];
  }
};

themeButton.addEventListener("click", handleTheme);
