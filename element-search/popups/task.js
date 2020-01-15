openMain();

function openMain() {
  var element = document.getElementById("modal_main");
  setTimeout(() => {
    element.classList.add("modal_active");
  }, 500);
}

function closeModal() {
  var elements = document.getElementsByClassName("modal_active");
  Array.from(elements).forEach((element) => {
    element.classList.remove("modal_active");
  });
}

function satisfy() {
  var element = document.getElementById("modal_success");
  setTimeout(() => {
    element.classList.add("modal_active");
  }, 300);
  closeModal();
}

const setOnClickEventForClass = (elementClassName, func) => {
  Array.from(document.getElementsByClassName(elementClassName)).forEach(element => {
    element.onclick = func;
  })
}

setOnClickEventForClass("modal__close_times", closeModal);
setOnClickEventForClass("btn_success", closeModal);
setOnClickEventForClass("show-success", satisfy);
