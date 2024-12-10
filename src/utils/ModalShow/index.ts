import UserLoginController from "../API/UserLoginController/index.ts";

export default function ModalShow() {
  const modal = document.getElementById("uploadModal") as HTMLElement; // Модальное окно
  const closeModalButton = document.querySelector(
    ".modal__close"
  ) as HTMLElement; // Кнопка закрытия
  const fileInput = document.getElementById("fileInput") as HTMLInputElement; // Поле для выбора файла
  const modalStatus = document.querySelector(".modal__status") as HTMLElement; // Заголовок в модальном окне
  const fileInfo = document.querySelector(".modal__file-info") as HTMLElement; // Блок с информацией о файле
  const uploadButton = document.getElementById("uploadButton") as HTMLElement; // Кнопка "Поменять"
  modal.style.display = "flex";
  // Добавляем обработчик клика на кнопку закрытия
  closeModalButton.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "none"; // Скрываем модальное окно
  });

  // Закрываем модальное окно, если пользователь кликает вне его
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"; // Скрываем модальное окно
    }
  });

  // Обработчик выбора файла
  fileInput.addEventListener("change", () => {
    // Проверяем, что files не равно null и есть хотя бы один файл
    if (fileInput.files && fileInput.files.length > 0) {
      const file: File = fileInput.files[0]; // Получаем выбранный файл
      if (modalStatus && fileInfo && uploadButton) {
        modalStatus.textContent = "Файл загружен"; // Изменяем заголовок
        fileInfo.style.display = "block"; // Показываем информацию о файле
        fileInfo.textContent = file.name; // Выводим имя файла
        uploadButton.style.display = "inline-block"; // Показываем кнопку "Поменять"
        uploadButton.style.marginRight = "10px";
      }
    } else {
      // Если файл не выбран
      if (modalStatus && fileInfo && uploadButton) {
        modalStatus.textContent = "Загрузите файл"; // Восстанавливаем текст
        fileInfo.style.display = "none"; // Скрываем информацию о файле
        uploadButton.style.display = "none"; // Скрываем кнопку "Поменять"
      }
    }
  });

  uploadButton.addEventListener("click", async (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение кнопки
    modal.style.display = "none";
    if (fileInput.files && fileInput.files.length > 0) {
      const file: File = fileInput.files[0]; // Получаем выбранный файл
      const formData = new FormData(); // Создаём объект FormData
      formData.append("avatar", file); // Добавляем файл с ключом 'avatar'
      const formController = new UserLoginController();
      formController.avatar(formData);
    } else {
      alert("Пожалуйста, выберите файл для загрузки.");
    }
  });
}
