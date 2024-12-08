export default function CreateChatLook() {
  const ModalCreate = document.querySelector(
    "#create-user-modal"
  ) as HTMLDivElement;
  const closeModalButtons = document.querySelectorAll(".close-modal");
  ModalCreate.classList.remove("hidden");
  ModalCreate.classList.add("visible");
  // Закрытие модальных окон
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (ModalCreate) ModalCreate.classList.add("hidden");
    });
  });
}
