import { password } from "../CheckOldPassword/index.ts";

let FlagRepeatPassword: boolean;
export default function CheckRepeatPassword(e: FocusEvent) {
  const passwordError3 = document.getElementById(
    "repeatPasswordError"
  ) as HTMLSpanElement;
  FlagRepeatPassword = false;
  const newPassword = (e.target as HTMLInputElement).value;
  if (newPassword == "") {
    passwordError3.textContent = "Введите пароль";
  } else if (password === newPassword) {
    FlagRepeatPassword = true;
    passwordError3.textContent = "";
  } else {
    passwordError3.textContent = "Пароли не совпадают";
    FlagRepeatPassword = false;
  }
}

export { FlagRepeatPassword };
