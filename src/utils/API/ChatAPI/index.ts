import Request from "../Request";
import { URL } from "../BaseAPI";
// import { BaseAPI } from "../BaseAPI";

const entranceAPI = new Request("");

type UsersRequest = {
  users: number[] | number; // Массив чисел, представляющий ID пользователей
  chatId: number; // Число, представляющее ID чата
};

class ChatAPI {
  createChatRequest(data: { [key: string]: string }) {
    return entranceAPI.post(`${URL}/chats`, data).send();
  }

  deleteChatRequest(data: { [key: string]: number }) {
    return entranceAPI.delete(`${URL}/chats`, data).send();
  }

  GetChat() {
    // const queryString = `l`;
    return entranceAPI.get(`${URL}/chats`, undefined).send();
  }

  token(id: string) {
    return entranceAPI.post(`${URL}/chats/token/${id}`).send();
  }

  usersRequest(data: UsersRequest) {
    return entranceAPI.put(`${URL}/chats/users`, data).send();
  }
}

export default ChatAPI;
