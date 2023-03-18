import { endLoadingState } from "./setLoadingState.js";
import { themeIcons } from "./themeIcons.js";

export const handleError = async (error, event) => {
  const body = document.querySelector("body");

  const alert = document.createElement("div");
  const alertIcon = document.createElement("div");
  const alertMessage = document.createElement("div");
  const alertButton = document.createElement("div");

  alert.classList.add("alert");

  alertIcon.classList.add("alert-icon");
  alertIcon.innerHTML = themeIcons.alert;

  alertMessage.classList.add("alert-message");
  alertMessage.innerHTML = error;

  alertButton.classList.add("alert-button");
  alertButton.innerHTML = event;

  alert.appendChild(alertIcon);
  alert.appendChild(alertMessage);
  alert.appendChild(alertButton);

  body.insertBefore(alert, body.children[1]);

  endLoadingState();

  if (event === "Refresh Page") {
    alertButton.addEventListener("click", () => {
      location.reload();
    });
  } else {
    alertButton.addEventListener("click", () => {
      const searchBoxInput = document.querySelector(".search-box-input");
      searchBoxInput.value = "";
      searchBoxInput.focus();

      alert.remove();
    });
  }
};
