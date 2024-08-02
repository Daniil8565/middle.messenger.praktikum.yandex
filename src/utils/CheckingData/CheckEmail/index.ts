export default function CheckEmail() {
  const form = document.getElementById('Form') as HTMLFormElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const emailError = document.getElementById('emailError') as HTMLSpanElement;

  // Валидация email
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
      emailError.textContent = '';
      return true;
    } else {
      emailError.textContent = 'Некорректный email.';
      return false;
    }
  };

  emailInput.addEventListener('blur', () => {
    validateEmail(emailInput.value);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateEmail(emailInput.value);
  });
}
