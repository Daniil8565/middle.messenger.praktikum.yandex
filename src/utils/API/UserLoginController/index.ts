import LoginAPI from "../LoginAPI";
import router from "../../..";
import store from "../store";
import UserAPI from "../UserAPI";
import ChatAPI from "../ChatAPI";
// import socket from "../../socket";

const loginApi = new LoginAPI();
const UserApi = new UserAPI();
const ChatApi = new ChatAPI();
function errorMessage(error: Record<string, string>) {
  const responseText = error.reason;
  const responseObject = JSON.parse(responseText);
  const errorMessage = responseObject.reason;
  const ErrorElem = document.getElementById("ErrorRequest") as HTMLElement;
  ErrorElem.style.color = "red";
  ErrorElem.textContent = errorMessage;
  return ErrorElem;
}

// Функция для установки cookies
function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // Устанавливаем срок действия cookie (в днях)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

type UsersRequest = {
  users: number[] | number; // Массив чисел, представляющий ID пользователей
  chatId: number; // Число, представляющее ID чата
};

// Функция для удаления cookies
function deleteCookie(name: string) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

class UserLoginController {
  public async login(data: { [key: string]: string }) {
    if (!data) {
      throw new Error(data);
    }
    loginApi
      .request(data)
      .then(() => {
        // Сохраняем флаг авторизации в cookies
        setCookie("isAuthenticated", "true", 7); // Флаг сохраняем на 7 дней

        router.go("/message"); // Перенаправление на страницу после успешного входа
      })
      .then(() => {
        this.GetChat();
      })
      .catch((error) => {
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
        // Сохраняем флаг авторизации в cookies
        setCookie("isAuthenticated", "true", 7); // Флаг сохраняем на 7 дней
        router.go("/message"); // Перенаправление на страницу после регистрации
      })
      .then(() => {
        this.GetChat();
      })
      .catch((error) => {
        errorMessage(error); // Обработка ошибки
      });
  }

  public async getData() {
    loginApi.requestDataUser().then((data) => {
      const dataJSON = data.response;
      store.set("userName", JSON.parse(dataJSON)); // Сохранение данных пользователя в хранилище
    });
  }

  public async logout() {
    // Удаляем флаг авторизации из cookies
    deleteCookie("isAuthenticated"); // Удаление флага авторизации

    loginApi
      .logout()
      .then(() => {
        // Также очищаем другие cookies
        document.cookie =
          "authCookie=; Max-Age=0; path=/; domain=ya-praktikum.tech;";
        document.cookie = "uuid=; Max-Age=0; path=/; domain=ya-praktikum.tech;";

        // Перенаправляем на страницу входа
        router.go("/");
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
        store.set("user", JSON.parse(dataJSON)); // Сохранение данных пользователя в хранилище
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
    console.log(data);
    UserApi.avatar(data)
      .then((data) => {
        const dataJSON = data.response;
        store.set("user", JSON.parse(dataJSON)); // Сохранение данных пользователя в хранилище
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
