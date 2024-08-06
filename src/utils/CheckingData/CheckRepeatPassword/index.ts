export default function CheckRepeatPassword() {
  const form = document.getElementById('Form') as HTMLFormElement;
  const passwordInput3 = document.getElementById(
    'repeatPassword'
  ) as HTMLInputElement;
  const passwordError3 = document.getElementById(
    'repeatPasswordError'
  ) as HTMLSpanElement;

  const validatePassword3 = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/;
    if (regex.test(password)) {
      passwordError3.textContent = '';
      return true;
    } else {
      passwordError3.textContent =
        'Пароль должен быть не менее 8 символов, содержать хотя бы одну заглавную букву и цифру.';
      return false;
    }
  };

  passwordInput3.addEventListener('blur', () => {
    validatePassword3(passwordInput3.value);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validatePassword3(passwordInput3.value);
  });
}
