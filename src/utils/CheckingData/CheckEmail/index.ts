export default function CheckEmail() {
  const loginInput = document.querySelector(
    'input[name="email"]'
  ) as HTMLInputElement;
  const emailError = document.getElementById("emailError") as HTMLSpanElement;
  const email = loginInput.value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(email)) {
    emailError.textContent = "";
    return true;
  } else {
    emailError.textContent = "Некорректный email.";
    return false;
  }
}
