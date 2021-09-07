[![Sanity Check](https://github.com/PaulMartynov/Weather-Forecast/actions/workflows/sanity-check.yml/badge.svg)](https://github.com/PaulMartynov/Weather-Forecast/actions/workflows/sanity-check.yml)
[![Build and Deploy](https://github.com/PaulMartynov/Weather-Forecast/actions/workflows/deploy.yml/badge.svg)](https://github.com/PaulMartynov/Weather-Forecast/actions/workflows/deploy.yml)


| Statements                                                                | Branches                                                                   | Functions                                                             | Lines                                                           |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/statements-89.8%25-yellow.svg) | ![Branches](https://img.shields.io/badge/branches-91.8%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/functions-79.17%25-red.svg) | ![Lines](https://img.shields.io/badge/lines-89.8%25-yellow.svg) |

# Weather app

Домашняя работа по курсу Otus Js-basic course

## Описание проекта:

Приложение представляет собой страницу с полем ввода и кнопкой.

## Принцип работы:

- При открытии страницы у пользователя запрашивается разрешение на получение его местоположения.
- Если разрешение получено, то отображается погода в месте его расположения и карта этого места.
- Если разрешение не было получено, отображается только поля ввода и кнопка.
- В поле можно ввести название города, нажать ввод или на кнопку и посмотреть погоду и карту в выбранном городе.
- В списке выпадающего меню поля ввода хранятся 10 последних городов.

#### Для отображения погоды использовался сервис [Openweathermap](https://openweathermap.org/current)

#### Для отображения карты использовался сервис [Яндекс.Карты](https://yandex.ru/dev/maps/)
