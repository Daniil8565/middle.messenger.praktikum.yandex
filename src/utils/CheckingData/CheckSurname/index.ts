export default function CheckSurname() {
  const form = document.getElementById('Form') as HTMLFormElement;
  const secondNameInput = document.getElementById(
    'second_name'
  ) as HTMLInputElement;
  const secondNameError = document.getElementById(
    'secondNameError'
  ) as HTMLSpanElement;

  // Валидация фамилии
  const validateSecondName = (secondName: string) => {
    const regex = /^[A-Za-zА-Яа-я]{1}[a-za-яA-Z\-]*$/;
    if (regex.test(secondName)) {
      secondNameError.textContent = '';
      return true;
    } else {
      secondNameError.textContent = 'Некорректная фамилия.';
      return false;
    }
  };

  secondNameInput.addEventListener('blur', () => {
    validateSecondName(secondNameInput.value);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateSecondName(secondNameInput.value);
  });
}
