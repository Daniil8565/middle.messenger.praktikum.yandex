let FlagName = false;

export default function CheckName(e: FocusEvent) {
  const firstNameError = document.getElementById(
    "firstNameError"
  ) as HTMLSpanElement;
  const name = (e.target as HTMLInputElement).value;
  const regex = /^[A-Za-zА-Яа-я]{1}[a-za-яA-Z\-]*$/;
  if (regex.test(name)) {
    firstNameError.textContent = "";
    FlagName = true;
  } else {
    firstNameError.textContent = "Некорректное имя.";
    FlagName = false;
  }
}

export { FlagName };
