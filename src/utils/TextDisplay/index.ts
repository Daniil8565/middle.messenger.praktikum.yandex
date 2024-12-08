export default function TextDisplay() {
  // Найти элемент с классом avatar
  const avatar = document.querySelector(".avatarChangeData") as HTMLElement;
  const avatarText = document.querySelector(".avatar__text") as HTMLElement;
  const avataImage = document.querySelector(
    ".avatarChangeDataImage"
  ) as HTMLElement;
  // Добавить событие при наведении

  avataImage.style.opacity = "0";
  avatarText.style.opacity = "1";

  // Добавить событие при уходе мыши
  avatar.addEventListener("mouseout", () => {
    avataImage.style.opacity = "1";
    avatarText.style.opacity = "0"; // Скрываем текст
  });
}
