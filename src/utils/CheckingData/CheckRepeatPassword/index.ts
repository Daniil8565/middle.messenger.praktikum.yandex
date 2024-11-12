import { password } from "../CheckOldPassword";

let FlagRepeatPassword = false;
export default function CheckRepeatPassword(e: FocusEvent) {
  const passwordError3 = document.getElementById(
    "repeatPasswordError"
  ) as HTMLSpanElement;
  const newPassword = (e.target as HTMLInputElement).value;
  if (password === newPassword) {
    FlagRepeatPassword = true;
    passwordError3.textContent = "";
  } else if (newPassword == "") {
    passwordError3.textContent = "Введите пароль";
  } else {
    passwordError3.textContent = "Пароли не совпадают";
    FlagRepeatPassword = false;
  }
}

export { FlagRepeatPassword };
