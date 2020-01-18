function count() {
  if (Number(timer.textContent) > 0) {
    timer.textContent--;
    setTimeout(count, 1000);
  } else {
    alert("Вы победили в конкурсе");
  }
}

count();
