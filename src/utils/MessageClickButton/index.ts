export default function ClickButtonHeader(event: MouseEvent) {
  event.preventDefault();

  // Получение всех элементов
  const menuIcon = document.getElementById(
    "menu-icon"
  ) as HTMLButtonElement | null;
  const dropdownMenu = document.getElementById(
    "dropdown-menu"
  ) as HTMLDivElement | null;
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
}
