let CheckPassword = false;
let password: string;

export function CheckOldPassword(e: FocusEvent) {
  const passwordError = document.getElementById(
    "oldPasswordError"
  ) as HTMLSpanElement;
  passwordError.style.fontSize = "8px";
  password = (e.target as HTMLInputElement).value;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/;

  if (regex.test(password)) {
    passwordError.textContent = "";
    CheckPassword = true;
  } else {
    passwordError.textContent = `Пароль должен быть не менее 8 символов, содержать хотя бы одну заглавную букву и цифру.`;
    CheckPassword = false;
  }
}

// Экспортируем переменную отдельно
export { CheckPassword, password };
