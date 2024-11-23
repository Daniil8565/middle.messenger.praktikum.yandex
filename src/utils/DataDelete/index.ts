import UserLoginController from "../API/UserLoginController";

export default function DataDelete(event: Event) {
  event.preventDefault(); // Предотвращаем стандартное поведение формы
  const usernameInput = document.getElementById(
    "username-remove"
  ) as HTMLInputElement;
  const username = usernameInput.value;
  const num = Number(username);
  console.log("Имя пользователя:", num);
  const ChatData = {
    chatId: num,
  };
  const DataController = new UserLoginController();
  DataController.deleteChatRequest(ChatData);
  console.log("Имя пользователя:", ChatData);
  usernameInput.value = "";
}
