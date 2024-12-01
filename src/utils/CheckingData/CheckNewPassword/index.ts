let flagNewPassword = false;
let NewPassword: string;

export default function CheckNewPassword(e: FocusEvent) {
  const passwordError = document.getElementById(
    'newPasswordError'
    ) as HTMLSpanElement;
    NewPassword = (e.target as HTMLInputElement).value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/;
    if (regex.test(NewPassword)) {
      passwordError.textContent = '';
      flagNewPassword = true;
    } else {
      passwordError.textContent =
        'Пароль должен быть не менее 8 символов, содержать хотя бы одну заглавную букву и цифру.';
        flagNewPassword = false
    }
}

export {NewPassword, flagNewPassword}
