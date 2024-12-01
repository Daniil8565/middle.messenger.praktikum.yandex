let FlagSurname = false;

export default function CheckSurname(e: FocusEvent) {
  const secondNameError = document.getElementById(
    "secondNameError"
  ) as HTMLSpanElement;
  const secondName = (e.target as HTMLInputElement).value;
  // Валидация фамилии
  const regex = /^[A-Za-zА-Яа-я]{1}[a-za-яA-Z\-]*$/;
  if (regex.test(secondName)) {
    secondNameError.textContent = "";
    FlagSurname = true;
  } else {
    secondNameError.textContent = "Некорректная фамилия.";
    FlagSurname = false;
  }
}
export { FlagSurname };
