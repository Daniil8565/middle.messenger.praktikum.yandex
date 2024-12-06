export default function ClickButtonHeader(event: MouseEvent) {
  event.preventDefault();
  // Получение всех элементов
  const menuIcon = document.getElementById(
    "menu-icon"
  ) as HTMLButtonElement | null;
  const dropdownMenu = document.getElementById(
    "dropdown-menu"
  ) as HTMLDivElement | null;
  const closeModalButtons = document.querySelectorAll(".close-modal");
  const addUserModal = document.getElementById(
    "add-user-modal"
  ) as HTMLDivElement;
  const removeUserModal = document.getElementById(
    "remove-user-modal"
  ) as HTMLDivElement;
  // Проверка на существование основных элементов
  if (!menuIcon || !dropdownMenu) {
    console.error("menuIcon или dropdownMenu не найдены.");
    return;
  }

  // Переключение меню
  dropdownMenu.classList.toggle("hidden");

  // Закрыть меню при клике вне его
  const closeDropdown = (event: MouseEvent) => {
    if (
      !menuIcon.contains(event.target as Node) &&
      !dropdownMenu.contains(event.target as Node)
    ) {
      dropdownMenu.classList.add("hidden");
      document.removeEventListener("click", closeDropdown); // Удаляем обработчик
    }
  };
  document.addEventListener("click", closeDropdown);

  // Закрытие модальных окон
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (addUserModal) addUserModal.classList.add("hidden");
      if (removeUserModal) removeUserModal.classList.add("hidden");
    });
  });
}
