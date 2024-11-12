import { NewPassword } from "../CheckNewPassword";

let FlagRepeatPassword = false;

export default function CheckNewAndRepeatPasword(e: FocusEvent){
    const RepeatPassword = (e.target as HTMLInputElement).value;
    const passwordError3 = document.getElementById(
        "repeatPasswordError"
      ) as HTMLSpanElement;
    if (RepeatPassword == "") {
        passwordError3.textContent = "Введите пароль";
      } else if (NewPassword === RepeatPassword ) {
        FlagRepeatPassword = true;
        passwordError3.textContent = "";
      } else {
        passwordError3.textContent = "Пароли не совпадают";
        FlagRepeatPassword = false;
    }
}

export {FlagRepeatPassword}