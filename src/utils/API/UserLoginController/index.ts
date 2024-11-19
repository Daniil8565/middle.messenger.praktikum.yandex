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
      .then((data) => {
        store.set("user", data);
        router.go("/message");
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
      .then((data) => {
        store.set("user", data);
        router.go("/message");
      })
      .catch((error) => {
        errorMessage(error);
      });
  }
}

export default UserLoginController;
