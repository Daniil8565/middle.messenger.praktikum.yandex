export default function getMessage() {
  const input = document.querySelector(".input__message") as HTMLInputElement;
  return input.value;
}
