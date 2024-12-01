let FlagEmail = false;

export default function CheckEmail(e: FocusEvent) {
  const emailError = document.getElementById("emailError") as HTMLSpanElement;
  const email = (e.target as HTMLInputElement).value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(email)) {
    emailError.textContent = "";
    FlagEmail = true;
  } else {
    emailError.textContent = "Некорректный email.";
    FlagEmail = false;
  }
}

export { FlagEmail };
