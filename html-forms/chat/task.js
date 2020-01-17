const sideOnClick = e => {
  document
    .getElementsByClassName("chat-widget")[0]
    .classList.add("chat-widget_active");

  botMessages = [
    "Кто тут?",
    "Мы ничего не будем вам продавать",
    "Где ваша совесть?",
    "Вы не купили ни одного товара, чтобы так с нами разговаривать!",
    "К сожалению, все операторы сейчас заняты. Не пишите нам больше!"
  ];

  const messages = document.querySelector(".chat-widget__messages");
  const input = document.querySelector(".chat-widget__input");

  const pushMessage = (msg, client) => {
    let d = new Date();
    let localTime = d.toLocaleTimeString("ru-RU", { timeStyle: "short" });
    messages.innerHTML += `
            <div class="message ${client ? "message_client" : ""}">
              <div class="message__time">${localTime}</div>
              <div class="message__text">
                ${msg}
              </div>
            </div>
          `;
    if (client) input.value = "";

    messages.parentElement.scrollTo({top: 10000000, behavior: 'smooth'});
  };

  const pushRandomBotMessage = () => {
    setTimeout(() => {
      let randomIndex = Math.round(Math.random() * (botMessages.length - 1));
      pushMessage(botMessages[randomIndex]);
    }, 1000);
  }

  let timerID = 0;
  
  const inputOnKeyPressed = e => {
    if (timerID) clearTimeout(timerID);
    if (e.keyCode == 13) {
      if (!input.value == "") {
        pushMessage(input.value, true);
        pushRandomBotMessage();
      }
    }
    timerID = setTimeout(() => {pushMessage("Чего молчишь? Уснул?")} , 30000);
  };
  
  setTimeout(() => {pushMessage("Чё надо?")} , 1000);

  input.addEventListener("keydown", inputOnKeyPressed, false);
};

document
  .getElementsByClassName("chat-widget__side")[0]
  .addEventListener("click", sideOnClick, false);
