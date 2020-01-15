var slide = 0;
var sliderItems = document.getElementsByClassName("slider__item");
var sliderDots = document.getElementsByClassName("slider__dot");

function prevSlide (){
	slide = (slide == 0) ? sliderItems.length - 1 : slide - 1;
}

function nextSlide (){
	slide = (slide == sliderItems.length - 1) ? 0 : slide + 1;
}

function customSlide(targetDot) {
	slide = 0;
	var dotSlide = targetDot.previousElementSibling;
	while (dotSlide) {
		slide++;
		dotSlide = dotSlide.previousElementSibling;
 }
}

function changeSlide(func, targetDot) {
  sliderItems[slide].classList.remove("slider__item_active");
  sliderDots[slide].classList.remove("slider__dot_active");
  func(targetDot);
  sliderItems[slide].classList.add("slider__item_active");
  sliderDots[slide].classList.add("slider__dot_active");
}

const setOnClickEventForClass = (elementClassName, func) => {
  Array.from(document.getElementsByClassName(elementClassName)).forEach(element => {
    element.onclick = func;
  })
}

setOnClickEventForClass("slider__arrow_next", () => {
  changeSlide(nextSlide)
});
setOnClickEventForClass("slider__arrow_prev", () => {
  changeSlide(prevSlide)
});
setOnClickEventForClass("slider__dot", (e) => {
  changeSlide(customSlide, e.target);
});

changeSlide(customSlide, sliderDots[slide]);
