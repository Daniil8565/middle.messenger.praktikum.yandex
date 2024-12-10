import UserLoginController from "../API/UserLoginController/index.ts";

export default function CreateChatRequest(event: Event) {
  event.preventDefault(); // Предотвращаем стандартное поведение формы
  const input = document.querySelector("#title") as HTMLInputElement;
  if (input.value) {
    const inputValue = input.value;
    const TitleChat = { title: inputValue };
    const DataController = new UserLoginController();
    console.log("TitleChat", TitleChat);
    DataController.createChatRequest(TitleChat);
  }
}
