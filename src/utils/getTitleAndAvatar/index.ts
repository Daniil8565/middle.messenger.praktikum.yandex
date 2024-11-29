import store from "../API/store";
import UserLoginController from "../API/UserLoginController";

export default function getTitleAndAvatar(e: MouseEvent) {
  const target = e.target as HTMLElement;
  const li = target.closest("li");
  const username = document.querySelector(".Header__username") as HTMLElement;
  if (li) {
    const controller = new UserLoginController();
    // controller.
    // Приводим li к HTMLElement и ищем заголовок
    const state = store.getState();
    const objUserData = state.user[0] as Record<string, string>;
    const ChatID = objUserData["id"];
    const NumberChatId = Number(ChatID);
    const massivState = state.AnotherUser;
    const objData = massivState[0] as Record<string, string>;
    const UserID = objData["id"];
    const NumberUserID = Number(UserID);
    const data = {
      chatId: NumberChatId,
      users: NumberUserID,
    };
    controller.usersRequest(data);
    const titleElement = li.querySelector(".message__name");

    if (titleElement) {
      username.textContent = titleElement.textContent; // Выводим текст заголовка
    } else {
      console.log("Заголовок не найден");
    }
  } else {
    console.log("Элемент <li> не найден");
  }
}
