// import CheckingData from '../CheckingData';

export default function DataCollection(event: SubmitEvent) {
  const form = document.getElementById("Form") as HTMLFormElement;
  event.preventDefault();
  const data: { [key: string]: string } = {}; // Создаем объект для хранения данных
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    data[input.name] = input.value;
  });
  console.log(data); // Выводим объект в консоль
}
