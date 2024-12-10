import CheckEmail from "../CheckEmail/index.ts";
import CheckLogin from "../CheckLogin/index.ts";
import CheckName from "../CheckName/index.ts";
import CheckSurname from "../CheckSurname/index.ts";
import CheckNameChat from "../CheckNameChat/index.ts";
import CheckPhone from "../CheckPhone/index.ts";
import UserLoginController from "../../API/UserLoginController/index.ts";
export default function CheckChangeData(event: SubmitEvent) {
  event.preventDefault();
  let FlagEmail = CheckEmail();
  let FlagLogin = CheckLogin();
  let FlagName = CheckName();
  let Flagphone = CheckPhone();
  let FlagSurname = CheckSurname();
  let flagNameChat = CheckNameChat();
  if (
    FlagEmail &&
    FlagLogin &&
    FlagName &&
    FlagSurname &&
    flagNameChat &&
    Flagphone
  ) {
    let DataUserController = new UserLoginController();
    const form = document.getElementById("Form") as HTMLFormElement;
    const data: { [key: string]: string } = {}; // Создаем объект для хранения данных
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      data[input.name] = input.value;
      input.value = "";
    });
    console.log(data); // Выводим объект в консоль
    DataUserController.userRequest(data);
  }
}
