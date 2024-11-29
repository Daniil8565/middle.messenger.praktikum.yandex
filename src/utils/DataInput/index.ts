import UserLoginController from "../API/UserLoginController";

export default function DataInput(event: Event) {
  event.preventDefault(); // Предотвращаем стандартное поведение формы
  const usernameInput = document.getElementById("username") as HTMLInputElement;
  // Получаем значение из поля ввода
  const username = usernameInput.value;

  const ChatData = {
    title: username,
  };
  const UserData = {
    login: username,
  };
  const DataController = new UserLoginController();
  DataController.createChatRequest(ChatData);
  DataController.findUserRequest(UserData);
  usernameInput.value = "";
}
