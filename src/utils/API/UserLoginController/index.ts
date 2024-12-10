import LoginAPI from "../LoginAPI/index.ts";
import router from "../../../index.ts";
import store from "../store.ts";
import UserAPI from "../UserAPI/index.ts";
import ChatAPI from "../ChatAPI/index.ts";
import FlagAuthorization from "../../FlagAuthorization/index.ts";

const loginApi = new LoginAPI();
const UserApi = new UserAPI();
const ChatApi = new ChatAPI();

function errorMessage(error: Record<string, string>) {
  const ErrorElem = document.getElementById("ErrorRequest") as HTMLElement;
  const responseText = error.reason;
  const responseObject = JSON.parse(responseText);
  const errorMessage = responseObject.reason;
  if (errorMessage == "User already in system") {
    FlagAuthorization.flag = true;
    const controller = new UserLoginController();
    controller.GetChat();
    controller.getData();
    router.go("/messenger");
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
        FlagAuthorization.flag = true;
        router.go("/messenger");
      })
      .then(() => {
        this.GetChat();
        this.getData();
      })
      .catch((error) => {
        errorMessage(error);
      });
  }

  public async registration(data: { [key: string]: string }) {
    if (!data) {
      throw new Error(data);
    }
    loginApi
      .create(data)
      .then(() => {
        FlagAuthorization.flag = true;
        router.go("/messenger");
      })
      .then(() => {
        this.GetChat();
        this.getData();
      })
      .catch((error) => {
        errorMessage(error);
      });
  }

  public async getData() {
    if (FlagAuthorization.flag) {
      loginApi.requestDataUser().then((data) => {
        const dataJSON = data.response;
        store.set("userName", JSON.parse(dataJSON)); // Сохранение данных пользователя в хранилище
      });
    }
  }

  public async logout() {
    loginApi
      .logout()
      .then(() => {
        // Удаление cookies
        document.cookie =
          "authCookie=; Max-Age=0; path=/; domain=ya-praktikum.tech;";
        document.cookie = "uuid=; Max-Age=0; path=/; domain=ya-praktikum.tech;";

        // Убираем авторизационный флаг
        FlagAuthorization.flag = false;

        router.go("/");
        // Заменяем текущую запись в истории
        // window.history.replaceState({}, "", "/");
        // console.log(window.history);
        // window.location.reload();
        // window.location.replace("/");
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
    if (FlagAuthorization.flag) {
      ChatApi.GetChat().then((data) => {
        const dataJSON = data.response;
        store.set("user", JSON.parse(dataJSON)); // Сохранение данных пользователя в хранилище
      });
    }
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

  public async deleteUserChat(data: UsersRequest) {
    ChatApi.deleteUsersChat(data).then(() => {});
  }
}

export default UserLoginController;
