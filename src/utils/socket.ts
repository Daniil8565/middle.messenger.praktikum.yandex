import store from "./API/store";
import appendMessage from "./appendMessage";

let SOC: WebSocket;

export default function SOCKET() {
  const state = store.getState();
  const tokenObj = state.token;
  const contentMain = document.querySelector(".content__main") as HTMLElement;
  const Token = tokenObj.token;
  const ArrayUserName = state.userName as Record<string, unknown>;
  const IdUserName = ArrayUserName["id"];
  const objUserData = state.user[0] as Record<string, string>;
  const ChatID = objUserData["id"];

  const socket = new WebSocket(
    `wss://ya-praktikum.tech/ws/chats/${IdUserName}/${ChatID}/${Token}`
  );
  SOC = socket;
  socket.addEventListener("open", () => {
    console.log("Соединение установлено");
    // appendMessage(rightSection, message, true); // Отправленное сообщение
    socket.send(
      JSON.stringify({
        content: "0",
        type: "get old",
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
    let flag = false;
    if (!flag) {
      const arrayMessages = JSON.parse(event.data);
      flag = true;
      for (let i = 0; i < arrayMessages.length; i++) {
        const objMessage = arrayMessages[i];
        if (objMessage["user_id"] == IdUserName) {
          appendMessage(contentMain, objMessage["content"] as string, true);
        } else {
          appendMessage(contentMain, objMessage["content"] as string, false);
        }
      }
    }
    const objMessage = JSON.parse(event.data);
    console.log(objMessage);
    if (objMessage.user_id == IdUserName) {
      appendMessage(contentMain, objMessage.content as string, true);
    } else {
      appendMessage(contentMain, objMessage.content as string, false);
    }
  });
}

export { SOC };
