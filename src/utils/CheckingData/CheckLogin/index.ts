let FlagLogin = false;

export function CheckLogin(e: FocusEvent) {
  const login = (e.target as HTMLInputElement).value;
  const loginError = document.getElementById("loginError") as HTMLSpanElement;
  const regex = /^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/;
  if (regex.test(login) && !login.match(/^\d+$/)) {
    loginError.textContent = "";
    FlagLogin = true;
  } else {
    loginError.textContent = "Неверный логин";
    FlagLogin = false;
  }
}

export { FlagLogin };
