import CheckEmail from "../CheckEmail";
import CheckLogin from "../CheckLogin";
import CheckName from "../CheckName";
import CheckSurname from "../CheckSurname";
import CheckPhone from "../CheckPhone";
import { CheckPassword } from "../CheckOldPassword";
import { FlagRepeatPasswordRegistration } from "../CheckRegistrationPassword";
import UserLoginController from "../../API/UserLoginController";

export default function CheckDataRegistration(event: SubmitEvent) {
  event.preventDefault();
  let FlagEmail = CheckEmail();
  let FlagLogin = CheckLogin();
  let FlagName = CheckName();
  let Flagphone = CheckPhone();
  let FlagSurname = CheckSurname();
  console.log(
    FlagSurname,
    Flagphone,
    FlagName,
    FlagLogin,
    FlagEmail,
    CheckPassword,
    FlagRepeatPasswordRegistration
  );
  if (
    FlagEmail &&
    FlagLogin &&
    FlagName &&
    FlagSurname &&
    Flagphone &&
    CheckPassword &&
    FlagRepeatPasswordRegistration
  ) {
    const registrationController = new UserLoginController();
    const form = document.getElementById("Form") as HTMLFormElement;
    const data: { [key: string]: string } = {}; // Создаем объект для хранения данных
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      data[input.name] = input.value;
      input.value = "";
    });
    console.log(data); // Выводим объект в консоль
    registrationController.registration(data);
  } else {
    console.log("Ошибка с флагами");
  }
}
