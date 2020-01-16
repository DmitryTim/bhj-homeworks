function clickOnTab(e) {
  if (!e.target.classList.contains("tab_active")) {
    const clear = (classToFind, classToDelete) => {
      Array.from(
        e.target.closest(".tabs").getElementsByClassName(classToFind)
      ).forEach(element => {
        element.classList.remove(classToDelete);
      });
    };
    clear("tab", "tab_active");
    clear("tab__content", "tab__content_active");

    e.target.classList.add("tab_active");
    var index = 0;
    var tempElement = e.target.previousElementSibling;
    while (tempElement) {
      index++;
      tempElement = tempElement.previousElementSibling;
    }
    e.target
      .closest(".tabs")
      .getElementsByClassName("tab__content")
      [index].classList.add("tab__content_active");
  }
}

const setOnClickEventForClass = (elementClassName, func) => {
  Array.from(document.getElementsByClassName(elementClassName)).forEach(
    element => {
      element.addEventListener("click", e => {
        e.preventDefault();
        func(e);
      });
    }
  );
};

setOnClickEventForClass("tab", clickOnTab);
