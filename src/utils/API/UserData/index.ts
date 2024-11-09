import Request from "../../Request";
import { BaseAPI } from "../BaseAPI";

const chatAPIInstance = new Request("/auth/signup");

class ChatAPI extends BaseAPI {
  create() {
    // Здесь уже не нужно писать полный путь /api/v1/chats/
    return chatAPIInstance.post("/", { title: "string" });
  }

  request() {
    return chatAPIInstance.get("/full");
  }
}

export default ChatAPI;
