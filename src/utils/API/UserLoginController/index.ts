import LoginAPI from "../LoginAPI";
import router from "../../..";
const loginApi = new LoginAPI();
import store from "../store";

class UserLoginController {
  public async login(data: { [key: string]: string }) {
    // Запускаем крутилку
    if (!data) {
      throw new Error(data);
    }
    loginApi.request(data).then((data) => {
      if (data.status >= 200 && data.status < 300) {
        store.set("user", data);
        router.go("/message");
      } else {
        throw new Error("Ошибка авторизации");
      }
    });
  }
}

export default UserLoginController;
