export default function CheckName() {
  const loginInput = document.querySelector(
    'input[name="first_name"]'
  ) as HTMLInputElement;
  const firstNameError = document.getElementById(
    "firstNameError"
  ) as HTMLSpanElement;
  const name = loginInput.value;
  const regex = /^[A-Za-zА-Яа-я]{1}[a-za-яA-Z\-]*$/;
  if (regex.test(name)) {
    firstNameError.textContent = "";
    return true;
  } else {
    firstNameError.textContent = "Некорректное имя.";
    return false;
  }
}
