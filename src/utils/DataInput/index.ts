import UserLoginController from "../API/UserLoginController";
import putRequest from "../putRequest";

// Вспомогательная функция для добавления задержки
function stTimeout(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function DataInput(event: Event) {
  event.preventDefault(); // Предотвращаем стандартное поведение формы

  const usernameInput = document.getElementById("username") as HTMLInputElement;
  const username = usernameInput.value; // Получаем значение из поля ввода

  const ChatData = { title: username };
  const UserData = { login: username };

  const DataController = new UserLoginController();

  try {
    // Дожидаемся завершения первого запроса
    await DataController.createChatRequest(ChatData);

    // Дожидаемся завершения второго запроса
    await DataController.findUserRequest(UserData);

    // Добавляем задержку перед вызовом putRequest
    await stTimeout(2000);

    // Вызываем putRequest после выполнения всех предыдущих операций
    putRequest();

    // Очищаем поле ввода
    usernameInput.value = "";
  } catch (error) {
    console.error("Ошибка при обработке запросов:", error);
  }
}
