import { CheckPassword } from "../CheckOldPassword";
import { FlagLogin } from "../CheckLogin";
import UserLoginController from "../../API/UserLoginController";
export default function CheckData(event: SubmitEvent) {
  event.preventDefault();
  if (FlagLogin && CheckPassword) {
    let LoginController = new UserLoginController();
    const form = document.getElementById("Form") as HTMLFormElement;
    event.preventDefault();
    const data: { [key: string]: string } = {}; // Создаем объект для хранения данных
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      data[input.name] = input.value;
      input.value = "";
    });
    console.log(data); // Выводим объект в консоль
    LoginController.login(data);
  }
}
