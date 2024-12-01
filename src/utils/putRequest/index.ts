import store from "../API/store";
import UserLoginController from "../API/UserLoginController";

export default function putRequest() {
  const controller = new UserLoginController();

  const state = store.getState();
  const AnotherData = state.AnotherUser;
  const AnotherOne = AnotherData[0] as Record<string, unknown>;

  const arrayChats = state.user;
  const OneArray = arrayChats[0] as Record<string, unknown>;

  const NumberIdUser = Number(AnotherOne["id"]);
  const NumberIdChats = Number(OneArray["id"]);

  const ArrayNumberIdUser = [];
  ArrayNumberIdUser.push(NumberIdUser);

  const data = {
    users: ArrayNumberIdUser,
    chatId: NumberIdChats,
  };

  controller.usersRequest(data);
}