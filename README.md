# Planescape

## MERN Stack Flight Reservation Website

### Tech Stack

React.js

Node.js

Express.js

MongoDB

Redux(toolkit)

Typescript

Axios

React Router Dom

TailwindCSS

React Hook Form

Zod

### Features

Authentication and Authorization with Json Web Tokens (login, register, logout)

Display Flights

Create Booking

Display Booking

## Images

### Login Page
![Login Page](frontend/public/login.png)

### Register Page
![Register Page](frontend/public/register.png)

### Dashboard Page
![Dashboard Page](frontend/public/dashboard.png)

### Flight List
![Flight List](frontend/public/flights.png)

### Flight Modal
![Flight Modal](frontend/public/flight-modal.png)

### My Bookings Page
![My Bookings Page](frontend/public/my-boards.png)

## Before İnstallation

Create .env file root directory

root directory must be like this

Planescape

  backend

  frontend

  .env



In the .env file you should provide some key-values


MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_JWT_SECRET

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
