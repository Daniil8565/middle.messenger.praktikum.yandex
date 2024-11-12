import { FlagEmail } from "../CheckEmail";
import { FlagLogin } from "../CheckLogin";
import { FlagName } from "../CheckName";
import { FlagSurname } from "../CheckSurname";
import { flagNameChat } from "../CheckNameChat";
import { Flagphone } from "../CheckPhone";

export default function CheckChangeData(event: SubmitEvent) {
  event.preventDefault();
  if (
    FlagEmail &&
    FlagLogin &&
    FlagName &&
    FlagSurname &&
    flagNameChat &&
    Flagphone
  ) {
    const form = document.getElementById("Form") as HTMLFormElement;
    const data: { [key: string]: string } = {}; // Создаем объект для хранения данных
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      data[input.name] = input.value;
      input.value = "";
    });
    console.log(data); // Выводим объект в консоль
  }
}
