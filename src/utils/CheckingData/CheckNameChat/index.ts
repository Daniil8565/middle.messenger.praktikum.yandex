let flagNameChat = false;

export default function CheckNameChat(e: FocusEvent) {
  let NameChat = (e.target as HTMLInputElement).value;
  const error = document.getElementById("Name__chat") as HTMLSpanElement;
  if (!NameChat) {
    error.textContent = "Введите имя";
  } else {
    error.textContent = "";
    flagNameChat = true;
  }
}

export { flagNameChat };
