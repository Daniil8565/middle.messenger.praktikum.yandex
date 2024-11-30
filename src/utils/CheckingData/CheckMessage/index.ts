let flag: boolean;
// import UserLoginController from "../../API/UserLoginController";

export default function CheckMessage(e: FocusEvent) {
  const messageInput = e.target as HTMLInputElement;
  const messageError = document.getElementById(
    "messageError"
  ) as HTMLSpanElement;
  console.log(messageInput.value);
  if (messageInput.value === "") {
    messageError.textContent = "Сообщение не должно быть пустым";
    flag = false;
  } else {
    messageError.textContent = "";
    flag = true;
  }
}

export { flag };
