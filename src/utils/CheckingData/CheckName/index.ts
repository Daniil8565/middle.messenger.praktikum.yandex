export default function CheckName() {
  const form = document.getElementById('Form') as HTMLFormElement;
  const firstNameInput = document.getElementById(
    'first_name'
  ) as HTMLInputElement;
  const firstNameError = document.getElementById(
    'firstNameError'
  ) as HTMLSpanElement;
  console.log(firstNameError);
  // Валидация имени
  const validateName = (name: string) => {
    const regex = /^[A-Za-zА-Яа-я]{1}[a-za-яA-Z\-]*$/;
    if (regex.test(name)) {
      firstNameError.textContent = '';
      return true;
    } else {
      firstNameError.textContent = 'Некорректное имя.';
      return false;
    }
  };

  // Обработчики событий blur для всех полей
  firstNameInput.addEventListener('blur', () => {
    validateName(firstNameInput.value);
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateName(firstNameInput.value);
  });
}
