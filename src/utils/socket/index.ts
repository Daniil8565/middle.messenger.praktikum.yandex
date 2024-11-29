import store from "../API/store";

export default function socket(token: Record<string, string>, idChat: string) {
  const state = store.getState();
  const tokenObj = token;
  const Token = tokenObj.token;
  const IdUserName = state.userName.id;
  const socket = new WebSocket(
    `wss://ya-praktikum.tech/ws/chats/${IdUserName}/${idChat}/${Token}`
  );

  socket.addEventListener("open", () => {
    console.log("Соединение установлено");

    socket.send(
      JSON.stringify({
        content: "Моё первое сообщение миру!",
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
}
