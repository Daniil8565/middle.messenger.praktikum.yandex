import UserLoginController from "../API/UserLoginController/index.ts";
import store from "../API/store.ts";
import stTimeout from "../Timeout/index.ts";

export default async function DataDelete(event: Event) {
  event.preventDefault(); // Предотвращаем стандартное поведение формы
  const usernameInput = document.getElementById(
    "username-remove"
  ) as HTMLInputElement;
  const usernameLogin = usernameInput.value;
  const UserData = { login: usernameLogin };
  const DataController = new UserLoginController();

  await DataController.findUserRequest(UserData);
  // Ищем чат
  const state = store.getState();
  const ArrayChats = state.user;
  const OneObjectChat = ArrayChats[0] as Record<string, unknown>;
  const idChat = OneObjectChat["id"];
  console.log("idChat", idChat);

  await stTimeout(2000);

  const AnotherData = state.AnotherUser;
  const AnotherOne = AnotherData[0] as Record<string, unknown>;

  const NumberIdChat = Number(idChat);
  const UserID = Number(AnotherOne["id"]);

  console.log("ID Пользователя", UserID);
  const DeleteUsersData = {
    users: [UserID],
    chatId: NumberIdChat,
  };
  console.log("ChatID", NumberIdChat, "UserID", UserID);
  DataController.deleteUserChat(DeleteUsersData);
  usernameInput.value = "";
}
