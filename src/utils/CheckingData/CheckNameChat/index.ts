export default function CheckNameChat() {
  const loginInput = document.querySelector(
    'input[name="display_name"]'
  ) as HTMLInputElement;
  let NameChat = loginInput.value;
  const error = document.getElementById("Name__chat") as HTMLSpanElement;
  if (!NameChat) {
    error.textContent = "Введите имя";
  } else {
    error.textContent = "";
    return true;
  }
  return false;
}
