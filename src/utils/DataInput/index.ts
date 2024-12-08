import UserLoginController from "../API/UserLoginController";
import putRequest from "../putRequest";
import stTimeout from "../Timeout";

export default async function DataInput(event: Event) {
  event.preventDefault(); // Предотвращаем стандартное поведение формы

  const usernameInput = document.getElementById("username") as HTMLInputElement;
  const usernameLogin = usernameInput.value; // Получаем значение из поля ввода

  const UserData = { login: usernameLogin };

  const DataController = new UserLoginController();

  try {
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
