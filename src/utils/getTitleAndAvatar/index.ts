import store from "../API/store";
import UserLoginController from "../API/UserLoginController";

async function getTitleAndAvatar(e: MouseEvent) {
  const target = e.target as HTMLElement;
  const li = target.closest("li");
  if (!li) {
    console.log("Элемент <li> не найден");
    return;
  }

  try {
    // Инициализируем контроллер
    const controller = new UserLoginController();
    const titleElement = li.querySelector(".message__name") as HTMLElement;

    if (!titleElement) {
      console.log("Заголовок не найден");
      return;
    }

    const state = store.getState();
    const objUserData = state.user[0] as Record<string, string> | undefined;
    if (!objUserData) {
      console.log("Пользователь не найден в состоянии");
      return;
    }
    const ChatID = objUserData["id"];

    // Обновляем отображение имени пользователя
    const username = document.querySelector(".Header__username") as HTMLElement;
    username.textContent = titleElement.textContent;
    controller.token(ChatID);
  } catch (error) {
    console.error("Ошибка при выполнении запросов:", error);
  }
}

export default getTitleAndAvatar;
