import LoginAPI from "../LoginAPI";
import router from "../../..";
const loginApi = new LoginAPI();
import store from "../store";

function errorMessage(error: Record<string, string>) {
  const responseText = error.reason;
  const responseObject = JSON.parse(responseText);
  const errorMessage = responseObject.reason;
  const ErrorElem = document.getElementById("ErrorRequest") as HTMLElement;
  ErrorElem.textContent = errorMessage;
}

class UserLoginController {
  public async login(data: { [key: string]: string }) {
    if (!data) {
      throw new Error(data);
    }
    console.log(data);
    loginApi
      .request(data)
      .then(() => {
        router.go("/message");
      })
      .then(() => {
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
    console.log(data);
    loginApi
      .create(data)
      .then(() => {
        router.go("/message");
      })
      .then(() => {
        this.getData();
      })
      .catch((error) => {
        errorMessage(error);
      });
  }

  public async getData() {
    loginApi.requestDataUser().then((data) => {
      const dataJSON = data.response;
      console.log(dataJSON);
      store.set("user", dataJSON);
    });
  }

  public async logout() {
    loginApi
      .logout()
      .then(() => {
        document.cookie =
          "authCookie=; Max-Age=0; path=/; domain=ya-praktikum.tech;";
        document.cookie = "uuid=; Max-Age=0; path=/; domain=ya-praktikum.tech;";

        // Перенаправление на страницу входа или другую
        // router.go("/");
        window.location.reload();
        const elemError = document.getElementById(
          "ErrorRequest"
        ) as HTMLSpanElement;
        elemError.textContent = "";
      })
      .catch((error) => {
        console.error("Ошибка при выходе: ", error);
      });
  }
}

export default UserLoginController;
