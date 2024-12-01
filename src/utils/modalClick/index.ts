export default function ModalClick() {
  const dropdownMenu = document.getElementById(
    "dropdown-menu"
  ) as HTMLDivElement;
  const addUserModal = document.getElementById(
    "add-user-modal"
  ) as HTMLDivElement | null;
  const removeUserModal = document.getElementById(
    "remove-user-modal"
  ) as HTMLDivElement | null;
  const addUserLink = document.getElementById(
    "add-user"
  ) as HTMLAnchorElement | null;
  const removeUserLink = document.getElementById(
    "remove-user"
  ) as HTMLAnchorElement | null;
  const closeModalButtons = document.querySelectorAll(".close-modal");

  // Открытие модальных окон
  if (addUserLink && addUserModal) {
    addUserLink.addEventListener("click", (event) => {
      event.preventDefault();
      addUserModal.classList.remove("hidden");
      dropdownMenu.classList.add("hidden");
    });
  }

  if (removeUserLink && removeUserModal) {
    removeUserLink.addEventListener("click", (event) => {
      event.preventDefault();
      removeUserModal.classList.remove("hidden");
      dropdownMenu.classList.add("hidden");
    });
  }

  // Закрытие модальных окон
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (addUserModal) addUserModal.classList.add("hidden");
      if (removeUserModal) removeUserModal.classList.add("hidden");
    });
  });

  // Закрыть модальное окно при клике вне его
  const closeModal = (event: MouseEvent) => {
    if (
      addUserModal &&
      removeUserModal &&
      !addUserModal.contains(event.target as Node) &&
      !removeUserModal.contains(event.target as Node) &&
      !dropdownMenu.contains(event.target as Node)
    ) {
      addUserModal.classList.add("hidden");
      removeUserModal.classList.add("hidden");
    }
  };
  document.addEventListener("click", closeModal);
}
