export const startLoadingState = async () => {
  const dynamicData = document.querySelectorAll(".dynamic-data");
  const searchBoxInput = document.querySelector(".search-box-input");

  searchBoxInput.blur();

  for (let index = 0; index < dynamicData.length; index++) {
    dynamicData[index].classList.add("loading");
  }
};

export const endLoadingState = async () => {
  const dynamicData = document.querySelectorAll(".dynamic-data");

  for (let index = 0; index < dynamicData.length; index++) {
    dynamicData[index].classList.remove("loading");
  }
};
