import store from "../API/store";
import { flag } from "../CheckingData/CheckMessage";
// import UserLoginController from "../API/UserLoginController";

function getMessage() {
  const input = document.querySelector(".input__message") as HTMLInputElement;
  return input.value;
}

export default function socket(e: SubmitEvent) {
  // const controller = new UserLoginController();
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
    // const ArrayIdUserName = state.AnotherUser;
    // const one = ArrayIdUserName[0] as Record<string, unknown>;
    // const IdUserName = one["id"];
    console.log(IdUserName, idChat, Token);
    const socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${IdUserName}/${idChat}/${Token}`
    );

    socket.addEventListener("open", () => {
      console.log("Соединение установлено");
      rightSection.textContent = message;
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
      const objData = event.data;
      leftSection.textContent = objData["content"];
      console.log("Получены данные", event.data);
    });
  } else {
    console.log("Введите данные");
  }
}
