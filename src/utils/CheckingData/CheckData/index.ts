import { CheckPassword } from "../CheckOldPassword";
import { FlagLogin } from "../CheckLogin";
export default function CheckData(event: SubmitEvent) {
  event.preventDefault();
  if (FlagLogin && CheckPassword) {
    const form = document.getElementById("Form") as HTMLFormElement;
    event.preventDefault();
    const data: { [key: string]: string } = {}; // Создаем объект для хранения данных
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      data[input.name] = input.value;
      input.value = "";
    });
    console.log(data); // Выводим объект в консоль
  }
}
