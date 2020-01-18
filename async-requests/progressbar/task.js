let progressBar = document.getElementById("progress");
let inputElement = document.getElementsByTagName("input")[0];

function onProgress(e) {
  progressBar.value = e.loaded / e.total;
}
function onLoadEnd() {
  progressBar.value = 0;
  alert("Загружено!");
}

let sendButton = document.getElementById("send");

sendButton.addEventListener("click", function(e) {
  //let file = input.files[0];
  e.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.upload.addEventListener("progress", onProgress);
  xhr.addEventListener("loadend", onLoadEnd);
  //xhr.responseType = "json"
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  //xhr.send(JSON.stringify(document.getElementById("form")));
  xhr.send(inputElement.files[0]);
});
