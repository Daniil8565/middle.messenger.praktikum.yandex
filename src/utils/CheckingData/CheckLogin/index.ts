export default function CheckLogin() {
  const loginInput = document.querySelector(
    'input[name="login"]'
  ) as HTMLInputElement;
  const login = loginInput.value;
  const loginError = document.getElementById("loginError") as HTMLSpanElement;
  const regex = /^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/;
  if (regex.test(login) && !login.match(/^\d+$/)) {
    loginError.textContent = "";
    return true;
  } else {
    loginError.textContent = "Неверный логин";
    return false;
  }
}
