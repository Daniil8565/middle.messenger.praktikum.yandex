import store from "../API/store";
import UserLoginController from "../API/UserLoginController";

// Вспомогательная функция для добавления задержки
function stTimeout(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

    // Формируем данные для первого запроса
    const Anotherdata = { login: titleElement.textContent as string };

    // Отправляем первый запрос
    await controller.findUserRequest(Anotherdata);

    // Получаем данные из store
    const state = store.getState();
    const objUserData = state.user[0] as Record<string, string> | undefined;

    if (!objUserData) {
      console.log("Пользователь не найден в состоянии");
      return;
    }

    const ChatID = objUserData["id"];
    const NumberChatId = Number(ChatID);

    await stTimeout(500); // Задержка на 2 секунды
    const massivState = state.AnotherUser;
    const objData = massivState[0] as Record<string, string> | undefined;

    if (!objData) {
      console.log("Данные AnotherUser не найдены");
      return;
    }

    const UserID = objData["id"];
    const NumberUserID = Number(UserID);

    // Формируем данные для второго запроса
    const data = {
      chatId: NumberChatId,
      users: [NumberUserID],
    };

    // Отправляем второй запрос
    await controller.usersRequest(data);

    // Обновляем отображение имени пользователя
    const username = document.querySelector(".Header__username") as HTMLElement;
    username.textContent = titleElement.textContent;
    controller.token(ChatID);
  } catch (error) {
    console.error("Ошибка при выполнении запросов:", error);
  }
}

export default getTitleAndAvatar;
