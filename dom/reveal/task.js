let listItems = document.querySelectorAll(".reveal"); 

const isInViewport = function(element) {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  const elementHeight = element.getBoundingClientRect().height;
  return elementTop < viewportHeight && elementTop > -elementHeight
  ? true
  : false;
};

function checkReveals() {
  [...listItems].forEach(element => {
    if (isInViewport(element)) {
      if (!element.classList.contains("reveal_active")) {
        element.classList.add("reveal_active");
        //console.log(`element ${element} activated`);
      }
    } else {
      if (element.classList.contains("reveal_active")) {
        element.classList.remove("reveal_active");
        //console.log("element ${element} disactivate");
      }
    }
  });
}

window.addEventListener("scroll", checkReveals, false); //

checkReveals();
