export default function CheckLogin() {
  const form = document.getElementById('Form') as HTMLFormElement;
  const loginInput = document.getElementById('login') as HTMLInputElement;
  const loginError = document.getElementById('loginError') as HTMLSpanElement;

  const validateLogin = (login: string) => {
    const regex = /^[a-zA-Z0-9_-]{3,20}$/;
    if (regex.test(login) && !login.match(/^\d+$/)) {
      loginError.textContent = '';
      return true;
    } else {
      loginError.textContent = 'Некорректный логин.';
      return false;
    }
  };

  loginInput.addEventListener('blur', () => {
    validateLogin(loginInput.value);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateLogin(loginInput.value);
  });
}
