import store from "../API/store";
import UserLoginController from "../API/UserLoginController";
import SOCKET from "../socket";
import stTimeout from "../Timeout";

async function getTitleAndAvatar(e: MouseEvent) {
  const target = e.target as HTMLElement;
  const li = target.closest("li") as HTMLLIElement;
  const state = store.getState();
  const titleElement = li.querySelector(".message__name") as HTMLElement;
  const username = document.querySelector(".Header__username") as HTMLElement;
  username.textContent = titleElement.textContent;

  try {
    const controller = new UserLoginController();
    const objUserData = state.user[0] as Record<string, string> | undefined;
    if (!objUserData) {
      console.log("Пользователь не найден в состоянии");
      return;
    }
    const ChatID = objUserData["id"];
    await controller.token(ChatID);
    await stTimeout(1500);
  } catch (error) {
    console.error("Ошибка при выполнении запросов:", error);
  }
  SOCKET();
}

export default getTitleAndAvatar;
