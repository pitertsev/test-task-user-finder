# ТЕСТОВОЕ ЗАДАНИЕ
Необходимо реализовать интерфейс поиска пользователей.
Данные по пользователям берем с https://api.github.com/search/users?q={имя пользователя} (документация https://developer.github.com/v3/search/#search-users)

## Требования:
* Поиск: по логину.
* Сортировка: по кол-ву репозиториев (возрастанию/убыванию)
* Использовать Vue.js без vue-cli.
* Подгрузка списка при скролле либо пагинация.
* При клике на элемент - открываются подробности (как и какие на усмотрение разработчика).
* Реализовать 3 юнит-теста на функционал.

## Дополнительно:
* Для работы с данными использовать Vuex
* Для роутинга - VueRouter

## Настройки выполненного задания
### Ссылка на GitHub Pages
[https://pitertsev.github.io/test-task-user-finder/](https://pitertsev.github.io/test-task-user-finder/)

### Клонировать репозиторий
```
git clone [url repo]
```

### Перейти в папку проекта
```
cd [project name]
```

### Установить все необходимые зависимости
```
npm i
```

### Запустить проект
```
npm run serve
```

### Запустить тесты
```
npm run test
```
