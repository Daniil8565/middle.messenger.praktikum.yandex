export default function ModalDelete(event: MouseEvent) {
  event.preventDefault();
  const removeUserModal = document.getElementById(
    "remove-user-modal"
  ) as HTMLDivElement;
  const dropdownMenu = document.getElementById(
    "dropdown-menu"
  ) as HTMLDivElement;
  removeUserModal.classList.remove("hidden");
  removeUserModal.classList.add("visible");
  dropdownMenu.classList.add("hidden");
}
