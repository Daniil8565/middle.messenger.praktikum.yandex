export default function ModalAdd(event: MouseEvent) {
  event.preventDefault();
  const addUserModal = document.getElementById(
    "add-user-modal"
  ) as HTMLDivElement;
  const dropdownMenu = document.getElementById(
    "dropdown-menu"
  ) as HTMLDivElement;
  addUserModal.classList.remove("hidden");
  addUserModal.classList.add("visible");
  dropdownMenu.classList.add("hidden");
}
