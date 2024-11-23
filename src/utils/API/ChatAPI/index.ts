import Request from "../Request";
// import { BaseAPI } from "../BaseAPI";

const entranceAPI = new Request("");
const URL = "https://ya-praktikum.tech/api/v2";

class ChatAPI {
  createChatRequest(data: { [key: string]: string }) {
    return entranceAPI.post(`${URL}/chats`, data).send();
  }

  deleteChatRequest(data: { [key: string]: number }) {
    return entranceAPI.delete(`${URL}/chats`, data).send();
  }
}

export default ChatAPI;
