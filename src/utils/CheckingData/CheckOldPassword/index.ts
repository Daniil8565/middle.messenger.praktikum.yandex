export default function CheckOldPassword() {
  const form = document.getElementById('Form') as HTMLFormElement;
  const passwordInput = document.getElementById(
    'oldPassword'
  ) as HTMLInputElement;
  const passwordError = document.getElementById(
    'oldPasswordError'
  ) as HTMLSpanElement;
  console.log(passwordError);
  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/;
    if (regex.test(password)) {
      passwordError.textContent = '';
      return true;
    } else {
      passwordError.textContent =
        'Пароль должен быть не менее 8 символов, содержать хотя бы одну заглавную букву и цифру.';
      return false;
    }
  };

  passwordInput.addEventListener('blur', () => {
    validatePassword(passwordInput.value);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validatePassword(passwordInput.value);
  });
}
