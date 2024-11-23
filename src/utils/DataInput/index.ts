import UserLoginController from "../API/UserLoginController";

export default function DataInput(event: Event) {
  event.preventDefault(); // Предотвращаем стандартное поведение формы
  const usernameInput = document.getElementById("username") as HTMLInputElement;
  // Получаем значение из поля ввода
  const username = usernameInput.value;

  console.log("Имя пользователя:", username);
  const ChatData = {
    title: username,
  };
  const DataController = new UserLoginController();
  DataController.createChatRequest(ChatData);
  console.log("Имя пользователя:", ChatData);
  usernameInput.value = "";
}
