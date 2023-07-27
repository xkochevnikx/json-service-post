### Тестовое задание от компании "Сектор Бизнеса"

# Список постов

Сервис предсталяет собой страницу предоставляющую общий доступ к просмотру, поиску и сортировке списка постов полученных от сервиса [jsonplaceholder](https://jsonplaceholder.typicode.com/posts)

-   В коде есть комментарии касательно логики происходящего

### Технологии

-   React
-   React Router DOM
-   Redux toolkit
-   Axios

### Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design </br>
[Ссылка на документацию](https://feature-sliced.design/ru/)

### Интерфейс

Веб-приложение, c оптимизацией для мобильных устройств

### Реализованный функционал

-   При входе на страницу отображается таблица с данными.
-   На одной странице таблицы показывается только 10 записей.
-   Под таблицей располагаются элементы, показывающие количество страниц таблицы.
-   Кнопки “Назад” и “Далее” переключают страницы таблицы.
-   Переключение между страницами происходит без перезагрузки.
-   При нажатии на заголовки столбцов происходит сортировка записей от большего к меньшему, сортировка в алфавитном порядке и сортировка по длинне тела поста. 
-   В строке поиска можно ввести любое значение, и в таблице отобразится запись, в которой данное значение присутствует. Поиск по всем столбцам с задержкой 0.5мс для более плавного отображения результатов поиска.
-   Страница таблицы отображаеться в URL браузера.


### Демонстрация интерфейса

<a href="https://ibb.co/KbDh1qT"><img src="https://i.ibb.co/6r8wdPj/2023-07-26-16-39-13.png" alt="интерфейс" border="0"></a>

<a href="https://ibb.co/Sf8CPzF"><img src="https://i.ibb.co/rdSrmVD/2023-07-26-16-09-20.png" alt="фичи кода" border="0"></a>

### Установка

Для установки и запуска проекта, необходим [NodeJS](https://nodejs.org) v8+.

### Установка зависимостей

Для установки зависимостей, выполните команду:

```sh
npm i
```

### Запуск Development сервера

Чтобы запустить сервер для разработки, выполните команду:

```sh
npm start
```

## Команда проекта

-   [Святослав Деев](https://github.com/xkochevnikx) — Front-End Engineer
