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
    const IdUserName = state.userName.id;
    console.log(IdUserName, idChat, Token);
    const socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${IdUserName}/${idChat}/${Token}`
    );

    socket.addEventListener("open", () => {
      console.log("Соединение установлено");

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
      console.log("Получены данные", event.data);
    });
  } else {
    console.log("Введите данные");
  }
}
