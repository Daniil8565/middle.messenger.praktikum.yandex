export default function CheckPhone() {
  const form = document.getElementById('Form') as HTMLFormElement;
  const phoneInput = document.getElementById('phone') as HTMLInputElement;
  const phoneError = document.getElementById('phoneError') as HTMLSpanElement;

  // Валидация телефона
  const validatePhone = (phone: string) => {
    const regex = /^\+?\d{10,15}$/;
    if (regex.test(phone)) {
      phoneError.textContent = '';
      return true;
    } else {
      phoneError.textContent = 'Некорректный номер телефона.';
      return false;
    }
  };

  phoneInput.addEventListener('blur', () => {
    validatePhone(phoneInput.value);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validatePhone(phoneInput.value);
  });
}
