# RZA - Task 2; Development of a Web Appliction

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Description

Brief description of the project, including its purpose and key features.

## Table of Contents

- [Installation](#installation)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Technologies Used](#technologies-used)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

Provide step-by-step instructions on how to get the fullstack running locally.

```bash
git clone PROJ NAME/URL
cd PROJ PATH
```

### Frontend: React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### Backend

Provide step-by-step instructions on how to get the backend running locally. Include any dependencies that need to be installed and how to install them.

```bash
cd PROJ PATH/ BACKEND
pip install <dependecies>
python BACKEND.py
```

## Technologies Used

- [React](https://reactjs.org/)
- [Python]()
- [SQLite3]()
- [Flask/ Flask_CORS]()
- [BCrypt]()

List the main technologies/frameworks/libraries used in the project.

## Dependencies

- [React Bootstrap]()
- [Github Primer]()
- [MDBootstrap]()

List project dependencies for a User & Developer

## Contributers

### Charles J Presley

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cjpresley/)
[![Outlook](https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](charlespresley2006@outlook.com) [![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/3zTkHD6v)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
