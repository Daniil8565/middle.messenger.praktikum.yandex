import { password } from "../CheckOldPassword/index.ts";

let FlagRepeatPasswordRegistration = false;

export default function CheckRegistrationPassword(e: FocusEvent) {
  const RepeatPassword = (e.target as HTMLInputElement).value;
  const passwordError3 = document.getElementById(
    "repeatPasswordError"
  ) as HTMLSpanElement;
  if (RepeatPassword == "") {
    passwordError3.textContent = "Введите пароль";
  } else if (password === RepeatPassword) {
    FlagRepeatPasswordRegistration = true;
    passwordError3.textContent = "";
  } else {
    passwordError3.textContent = "Пароли не совпадают";
    FlagRepeatPasswordRegistration = false;
  }
}

export { FlagRepeatPasswordRegistration };
