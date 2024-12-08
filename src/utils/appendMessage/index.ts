export default function appendMessage(
  container: HTMLElement,
  message: string,
  isOutgoing: boolean
) {
  const messageElement = document.createElement("div");
  messageElement.className = isOutgoing
    ? "message message--outgoing"
    : "message message--incoming";
  messageElement.textContent = message;
  container.appendChild(messageElement);
  container.scrollTop = container.scrollHeight;
}
