[![header][header-url]][header-link]

# Marvelous Project

![React][React-image]
![TypeScript][TypeScript-image]

> A small project made with React & Marvel API

## Live at

https://patricia-mps.github.io/marvelous-project/

## Built with

- React (Typescript)
- CSS Modules
- Sass
- Marvel API
- Jest + React Testing Library
- Redux Toolkit + Axios

## Features

- Display a list of Marvel Characters
- Add, edit or remove any of the existings characters using only the current state
- Displays a toast for every relevant user action
- Use of Skeleton
- Mobile first approach
- Unit and integration tests
- Eslint and Prettier

## Usage

Create .env file in root directory and add the following:

```
REACT_APP_API_TS={marvel-api-time-stamp}
REACT_APP_API_HASH={marvel-api-hash}
REACT_APP_API_KEY={marvel-api-key}
REACT_APP_API_URL={marvel-api-url}
REACT_APP_NO_IMAGE={no-image-link-default}
```

Install dependencies:

```
npm install
```

Start dev server:

```
npm run start
```

<!-- Markdown link & img dfn's -->

[header-url]: marvelous.png
[header-link]: https://patricia-mps.github.io/marvelous-project/
[Frontend-image]: https://img.shields.io/badge/Frontend-Ionic-blue?style=for-the-badge
[React-image]: https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge
[TypeScript-image]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square
