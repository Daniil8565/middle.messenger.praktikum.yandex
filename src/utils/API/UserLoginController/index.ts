import LoginAPI from "../LoginAPI";
import router from "../../..";
import store from "../store";
import UserAPI from "../UserAPI";
import ChatAPI from "../ChatAPI";

const loginApi = new LoginAPI();
const UserApi = new UserAPI();
const ChatApi = new ChatAPI();

function errorMessage(error: Record<string, string>) {
  const ErrorElem = document.getElementById("ErrorRequest") as HTMLElement;
  const responseText = error.reason;
  const responseObject = JSON.parse(responseText);
  const errorMessage = responseObject.reason;
  if (errorMessage == "User already in system") {
    router.go("/message");
  } else {
    ErrorElem.style.color = "red";
    ErrorElem.textContent = errorMessage;
  }
  return ErrorElem;
}

type UsersRequest = {
  users: number[] | number;
  chatId: number;
};

class UserLoginController {
  public async login(data: { [key: string]: string }) {
    if (!data) {
      throw new Error(data);
    }
    loginApi
      .request(data)
      .then(() => {
        router.go("/message"); // Перенаправление на страницу после успешного входа
      })
      .then(() => {
        this.GetChat();
        this.getData();
      })
      .catch((error) => {
        this.GetChat();
        this.getData();
        errorMessage(error); // Обработка ошибки
      });
  }

  public async registration(data: { [key: string]: string }) {
    if (!data) {
      throw new Error(data);
    }
    loginApi
      .create(data)
      .then(() => {
        router.go("/message");
      })
      .then(() => {
        this.GetChat();
        this.getData();
      })
      .catch((error) => {
        this.GetChat();
        this.getData();
        errorMessage(error);
      });
  }

  public async getData() {
    loginApi.requestDataUser().then((data) => {
      const dataJSON = data.response;
      store.set("userName", JSON.parse(dataJSON)); // Сохранение данных пользователя в хранилище
    });
  }

  public async logout() {
    loginApi
      .logout()
      .then(() => {
        // Также очищаем другие cookies
        document.cookie =
          "authCookie=; Max-Age=0; path=/; domain=ya-praktikum.tech;";
        document.cookie = "uuid=; Max-Age=0; path=/; domain=ya-praktikum.tech;";

        // Перенаправляем на страницу входа
        // router.go("/");
        window.history.replaceState({}, "", "/");
        // console.log(window.history);
        window.location.replace("/");
        // window.location.reload();
        const elemError = document.getElementById(
          "ErrorRequest"
        ) as HTMLSpanElement;
        elemError.textContent = "";
      })
      .catch((error) => {
        console.error("Ошибка при выходе: ", error);
      });
  }
  public async userRequest(data: { [key: string]: string }) {
    if (!data) {
      throw new Error(data);
    }
    UserApi.userRequest(data)
      .then((data) => {
        const dataJSON = data.response;
        const ErrorElem = document.getElementById(
          "ErrorRequest"
        ) as HTMLElement;
        ErrorElem.textContent = "";
        store.set("userName", JSON.parse(dataJSON)); // Сохранение данных пользователя в хранилище
      })
      .catch((error) => {
        errorMessage(error);
      });
  }
  public async changePasswordRequest(data: { [key: string]: string }) {
    if (!data) {
      throw new Error(data);
    }
    UserApi.changePasswordRequest(data)
      .then(() => {})
      .catch((error) => {
        errorMessage(error);
      });
  }

  public async avatar(data: FormData) {
    UserApi.avatar(data)
      .then((data) => {
        const dataJSON = data.response;
        store.set("userName", JSON.parse(dataJSON)); // Сохранение данных пользователя в хранилище
      })
      .catch((error) => {
        errorMessage(error);
      });
  }

  public async createChatRequest(data: { [key: string]: string }) {
    ChatApi.createChatRequest(data).then(() => {
      this.GetChat();
    });
  }
  public async deleteChatRequest(data: { [key: string]: number }) {
    ChatApi.deleteChatRequest(data).then(() => {
      this.GetChat();
    });
  }
  public async GetChat() {
    ChatApi.GetChat().then((data) => {
      const dataJSON = data.response;
      store.set("user", JSON.parse(dataJSON)); // Сохранение данных пользователя в хранилище
    });
  }

  public async token(id: string) {
    ChatApi.token(id).then((data) => {
      const dataJSON = data.response;
      const token = JSON.parse(dataJSON);
      store.set("token", token);
    });
  }

  public async findUserRequest(login: Record<string, string>) {
    UserApi.findUserRequest(login).then((data) => {
      const dataJSON = data.response;
      store.set("AnotherUser", JSON.parse(dataJSON)); // Сохранение данных пользователя в хранилище
    });
  }

  public async usersRequest(data: UsersRequest) {
    ChatApi.usersRequest(data).then(() => {});
  }
}

export default UserLoginController;
