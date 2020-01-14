var counter = document.getElementById("clicker__counter");

const image = document.getElementById("cookie");

image.onclick = image_OnClick;

var click = 1;

var initialWidth = image.width;

function image_OnClick() {
  counter.textContent++;
  image.width = initialWidth * (1 + 0.1 * click);
  click = !click;
}
