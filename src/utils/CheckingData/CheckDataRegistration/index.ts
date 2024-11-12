import { FlagEmail } from "../CheckEmail";
import { FlagLogin } from "../CheckLogin";
import { FlagName } from "../CheckName";
import { FlagSurname } from "../CheckSurname";
import { Flagphone } from "../CheckPhone";
import { password } from "../CheckOldPassword";
import { FlagRepeatPassword } from "../CheckRepeatPassword";

export default function CheckDataRegistration(event: SubmitEvent) {
  event.preventDefault();
  if (
    FlagEmail &&
    FlagLogin &&
    FlagName &&
    FlagSurname &&
    Flagphone &&
    password &&
    FlagRepeatPassword
  ) {
    const form = document.getElementById("Form") as HTMLFormElement;
    const data: { [key: string]: string } = {}; // Создаем объект для хранения данных
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      data[input.name] = input.value;
      input.value = "";
    });
    console.log(data); // Выводим объект в консоль
  } else {
  }
}