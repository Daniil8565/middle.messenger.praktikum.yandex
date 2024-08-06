export default function CheckMessage() {
  const form = document.getElementById('Form') as HTMLFormElement;
  const messageInput = document.getElementById('message') as HTMLInputElement;
  const messageError = document.getElementById(
    'messageError'
  ) as HTMLSpanElement;

  // Валидация сообщения
  const validateMessage = (message: string) => {
    if (message.length) {
      messageError.textContent = '';
      return true;
    } else {
      messageError.textContent = 'Сообщение не должно быть пустым.';
      return false;
    }
  };

  messageInput.addEventListener('blur', () => {
    validateMessage(messageInput.value);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateMessage(messageInput.value);
  });
}
