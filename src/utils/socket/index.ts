import store from "../API/store";
import { flag } from "../CheckingData/CheckMessage";
// import UserLoginController from "../API/UserLoginController";

function getMessage() {
  const input = document.querySelector(".input__message") as HTMLInputElement;
  return input.value;
}

function appendMessage(
  container: HTMLElement,
  message: string,
  isOutgoing: boolean
) {
  const messageElement = document.createElement("div");
  messageElement.className = isOutgoing
    ? "message message--outgoing"
    : "message message--incoming";
  messageElement.textContent = message;
  container.appendChild(messageElement);
}

export default function socket(e: SubmitEvent) {
  e.preventDefault();
  if (flag) {
    let message = getMessage();
    const state = store.getState();
    const tokenObj = state.token;
    const Token = tokenObj.token;
    const chats = state.user;
    const objCHat = chats[0] as Record<string, unknown>;
    const idChat = objCHat["id"];
    const ArrayUserName = state.userName as Record<string, unknown>;
    const IdUserName = ArrayUserName["id"];
    const leftSection = document.querySelector(".left-section") as HTMLElement;
    const rightSection = document.querySelector(
      ".right-section"
    ) as HTMLElement;
    const socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${IdUserName}/${idChat}/${Token}`
    );

    socket.addEventListener("open", () => {
      console.log("Соединение установлено");
      // appendMessage(rightSection, message, true); // Отправленное сообщение
      socket.send(
        JSON.stringify({
          content: message,
          type: "message",
        })
      );
    });

    socket.addEventListener("close", (event) => {
      if (event.wasClean) {
        console.log("Соединение закрыто чисто");
      } else {
        console.log("Обрыв соединения");
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    socket.addEventListener("message", (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "message") {
          // console.log(data, IdUserName);
          if (data.user_id == IdUserName) {
            appendMessage(rightSection, data.content, true);
          } else {
            appendMessage(leftSection, data.content, false); // Полученное сообщение
          }
        }
      } catch (err) {
        console.error("Ошибка при обработке сообщения", err);
      }
    });
  } else {
    console.log("Введите данные");
  }
}
