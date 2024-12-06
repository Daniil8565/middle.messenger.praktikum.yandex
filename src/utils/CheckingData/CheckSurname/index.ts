export default function CheckSurname() {
  const SecondNameInput = document.querySelector(
    'input[name="second_name"]'
  ) as HTMLInputElement;
  const secondNameError = document.getElementById(
    "secondNameError"
  ) as HTMLSpanElement;
  const secondName = SecondNameInput.value;
  // Валидация фамилии
  const regex = /^[A-Za-zА-Яа-я]{1}[a-za-яA-Z\-]*$/;
  if (regex.test(secondName)) {
    secondNameError.textContent = "";
    return true;
  } else {
    secondNameError.textContent = "Некорректная фамилия.";
    return false;
  }
}
