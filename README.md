
<h1>Многостраничное веб приложение "Messenger".</h1>

### Описание

Cамостоятельная практическая работа, выполняемая в рамках обучения на курсе [Мидл фронтенд-разработчик](https://praktikum.yandex.ru/middle-frontend/) от [Яндекс.Практикум](https://praktikum.yandex.ru) на спринтах №1-4.

### Спринт 1

[https://github.com/Daniil8565/middle.messenger.praktikum.yandex/tree/sprint_1](https://github.com/Daniil8565/middle.messenger.praktikum.yandex/tree/sprint_1)

* Свёрстан макет приложения чат в Figma с использованием шаблонизатора Handlebars. [Ссылка на макет](https://www.figma.com/file/tT9Qv8j6OeVC2AmgQzXEG3/Chat?node-id=0%3A1)
* Приложение автоматически деплоится на [Netlify](https://www.netlify.com/) из ветки `deploy`. [Ссылка на приложение](https://serene-salmiakki-eebcdb.netlify.app)

### Спринт 2

[https://github.com/Daniil8565/middle.messenger.praktikum.yandex/tree/sprint_2](https://github.com/Daniil8565/middle.messenger.praktikum.yandex/tree/sprint_2)

* Подключил TypeScript
* Реализация шины событий (`services/EventBus.ts`)
* Реализация компонента (`services/Block.ts`) с собственными пропсами, жизненным циклом и реактивным ререндером при изменении пропсов (использованы `Proxy`)
* Приложение переписано с учётом новых компонентов
* На формах реализована клиентская валидация
* Реализация аналога fetch для запросов к серверу (`utils/API/Request/index.ts`)

### Спринт 3

[https://github.com/Daniil8565/middle.messenger.praktikum.yandex/tree/sprint_3](https://github.com/Daniil8565/middle.messenger.praktikum.yandex/tree/sprint_3)

* Реализация клиентского роутера
* Добавлены `api` чатов, авторизации и смены данных пользователя
* Реализация центрального хранилища (`utils/API/store.ts`)
* Использован `WebSocket` для сообщений чата
* В приложении реализованы следующее возможности:
  * Регистрация
  * Логин
  * Выход
  * Обновление данных профиля
  * Изменение аватара
  * Создание и удаление чата
  * Добавление и удаление пользователей в чате
  * Отправка и получение текстовых сообщений

### Спринт 4

[https://github.com/Daniil8565/middle.messenger.praktikum.yandex/tree/sprint_4](https://github.com/Daniil8565/middle.messenger.praktikum.yandex/tree/sprint_4)

* Написаны unit тесты для основных модулей
* Настроен pre commit (Husky)

### Сборка и запуск

Сборка проекта в Vite

```bash
npm run build
```

Cборка и запуск приложения

```bash
npm run start
```

Запуск версии для разработчика

```bash
npm run dev
```

Запуск тестов

```bash
npm run test
```

### Технологии

- HTML
- CSS (PostCSS)
- TypeScript
- Vite
- Handlebars
- Mocha
- Figma
- Netlify
- eslint/stylelintrc
