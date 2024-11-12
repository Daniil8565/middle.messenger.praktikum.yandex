let Flagphone = false;

export default function CheckPhone(e: FocusEvent) {
  const phoneError = document.getElementById("phoneError") as HTMLSpanElement;
  const phone = (e.target as HTMLInputElement).value;
  const regex = /^\+?\d{10,15}$/;
  if (regex.test(phone)) {
    phoneError.textContent = "";
    Flagphone = true;
  } else {
    phoneError.textContent = "Некорректный номер телефона.";
    Flagphone = false;
  }
}

export { Flagphone };
