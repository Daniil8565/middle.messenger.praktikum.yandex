import { flagNewPassword } from "../CheckNewPassword";
import { FlagRepeatPassword } from "../CheckNewAndRepeatPasword";
import { CheckPassword } from "../CheckOldPassword";
import UserLoginController from "../../API/UserLoginController";

export default function CheckChangePassword(event: SubmitEvent) {
  event.preventDefault();
  if (flagNewPassword && FlagRepeatPassword && CheckPassword) {
    let passwordChangeController = new UserLoginController();
    const form = document.getElementById("Form") as HTMLFormElement;
    const data: { [key: string]: string } = {}; // Создаем объект для хранения данных
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      data[input.name] = input.value;
      input.value = "";
    });
    delete data["repeatPassword"];
    console.log(data); // Выводим объект в консоль
    passwordChangeController.changePasswordRequest(data);
  }
}
