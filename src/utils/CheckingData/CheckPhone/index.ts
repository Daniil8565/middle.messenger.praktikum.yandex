export default function CheckPhone() {
  const loginInput = document.querySelector(
    'input[name="phone"]'
  ) as HTMLInputElement;
  const phoneError = document.getElementById("phoneError") as HTMLSpanElement;
  const phone = loginInput.value;
  const regex = /^\+?\d{10,15}$/;
  if (regex.test(phone)) {
    phoneError.textContent = "";
    return true;
  } else {
    phoneError.textContent = "Некорректный номер телефона.";
    return false;
  }
}
