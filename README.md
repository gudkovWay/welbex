# WELBEX

## Tech Stack:
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## 🇷🇺 RU:

### Предпросмотр:
<img src="https://github.com/gudkovWay/welbex/assets/147748630/e7a41342-69ef-4607-a104-ab1a548aefa9" alt="preview image">
<img src="https://i.imgur.com/KXlgFGu.png" alt="preview mobile image"> 

### Развертывание:
<b> Можете проверить сайт по ссылке: https://welbex-eta.vercel.app</b>
<b> Или развернуть на своем компьютере с помощью следующих комманд:</b>
- **Склонируйте репозиторий через CLI (нужен git) или скачайте архив и распакуйте в удобное место**
```sh
cd Documents
mkdir Projects
cd Projects
git clone https://github.com/gudkovWay/welbex
```
- **Затем установите зависимости следующими командами:**
```sh
cd welbex
npm install
```
- **Наконец: запустите проект**
```sh
npm run
```
<b>URL в браузере: 127.0.0.1:3000/</b>
<b>По коммитам вы можете смотреть примерное время разработки того или иного шага этого проекта.</b>

### Структура проекта

```
└── src/                        # Иницализация приложения, корень.
    ├── app/                    # Бекграунд для всей страницы, тени и блюр         
    |                           #
    ├── entities/               # Слой: Бизнес-сущности, которыми оперирует предметная область
    |   ├── {some-entity}/      #     Слайс: (Consult)
    |   |   └── ui/             #         Сегмент: Логика UI
    |   ...                     #
    |                           #
    ├── widgets/                # Слой: Самостоятельные и полноценные блоки для страниц
    |   ├── {some-widget}/      #     Слайс: (пример: Header widget)
    |   |   └── ui/             #         Сегмент: Логика UI
    |                           #
    ├── styles/                 # Слой: С глобальными стилями, миксинами и переменными
    |   ...                     #
    |                           #
    └── index.tsx/ | App.tsx    # Главные файлы приложения, которые возвращают целевую страницу.
```


## 🇺🇸 EU:

### Preview:
<img src="https://github.com/gudkovWay/welbex/assets/147748630/e7a41342-69ef-4607-a104-ab1a548aefa9" alt="preview image">
<img src="https://i.imgur.com/KXlgFGu.png" alt="preview mobile image"> 

### Deploying: 

<b>Check it out for urself at the link: https://welbex-eta.vercel.app</b>
<b> OR deploy the project on ur PC with this steps:</b>
- **Clone this repo (u need git for work w. him in terminal) or just download archive**
```sh
cd Documents
mkdir Projects
cd Projects
git clone https://github.com/gudkovWay/welbex
```
- **Then install dependecies via this command:**
```sh
cd welbex
npm install
```
- **Finally: run the project**
```sh
npm run
```
<b>URL in browser: 127.0.0.1:3000/</b>
<b>By commits u can see the estimated time to complete one or another step in the development of this project.</b>


### Structure of Project

```
└── src/                        # init.
    ├── app/                    # background(blur, shadows)         
    |                           #
    ├── entities/               # Layer: Business-entities
    |   ├── {some-entity}/      #     Slice: (Consult)
    |   |   └── ui/             #         Segment:  UI Logic
    |   ...                     #
    |                           #
    ├── widgets/                # Layer: self blocks for pages
    |   ├── {some-widget}/      #     Slice: (e.g.: Header widget)
    |   |   └── ui/             #         Segment: UI logic
    |                           #
    ├── styles/                 # Layer: With global styles, base mixin|vars|colors
    |   ...                     #
    |                           #
    └── index.tsx/ | App.tsx    # Root files 
```


