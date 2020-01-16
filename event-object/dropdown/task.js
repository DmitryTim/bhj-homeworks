function clickOnDropdownValue(e) {
  e.target.nextElementSibling.classList.toggle("dropdown__list_active");
}

function clickOnDropdownLink(e) {
  e.target.closest(".dropdown").getElementsByClassName(
    "dropdown__value"
  )[0].textContent = e.target.textContent;
  e.target.closest(".dropdown__list").classList.remove("dropdown__list_active");
}

const setOnClickEventForClass = (elementClassName, func) => {
  Array.from(document.getElementsByClassName(elementClassName)).forEach(
    element => {
      element.addEventListener("click", e => {e.preventDefault(); func(e)});
    }
  );
};

setOnClickEventForClass("dropdown__value", clickOnDropdownValue);
setOnClickEventForClass("dropdown__link", clickOnDropdownLink);
