export default function set(
  obj: Record<string, any>,
  path: string,
  value: any
): void {
  const keys = path.split("."); // Разбиваем строку пути на массив ключей

  let current = obj; // Начинаем с исходного объекта

  // Проходим по ключам и создаем вложенные объекты, если их нет
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {}; // Если объекта нет, создаем его
    }
    current = current[keys[i]]; // Переходим на следующий уровень
  }

  // Устанавливаем значение в последний ключ
  current[keys[keys.length - 1]] = value;
}
