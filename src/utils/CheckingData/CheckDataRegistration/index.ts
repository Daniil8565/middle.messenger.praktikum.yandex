import CheckEmail from "../CheckEmail/index.ts";
import CheckLogin from "../CheckLogin/index.ts";
import CheckName from "../CheckName/index.ts";
import CheckSurname from "../CheckSurname/index.ts";
import CheckPhone from "../CheckPhone/index.ts";
import { CheckPassword } from "../CheckOldPassword/index.ts";
import { FlagRepeatPasswordRegistration } from "../CheckRegistrationPassword/index.ts";
import UserLoginController from "../../API/UserLoginController/index.ts";

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
