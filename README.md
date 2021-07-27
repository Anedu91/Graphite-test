
# Graphite Recipes Test

## Instalacion y running

`npm install`

The backend and the frontend will be running in different ports:

### Running backend server

1. `npm run server` (the backend will run in localhost port 3000)

### Running the frontend server

1. `npm run dev` (the frontend will run in localhost port 9000)

## Description

This is a fullstack webapp test, which consists in listing, filtering and searching a set of recipes.

## Approach

For this application I decided to use React as a frontend library and Express as a backend framework.

### Frontend

For styling the app I used *[Tailwindcss](https://tailwindcss.com/)*, wich a utility-first CSS framework that help us to create interfaces very quickly. It has a PostCSS config that help us to use the latest features of the languague.

To bundle the assests, styles and js files, I used *[Webpack](https://webpack.js.org/)*.

### Backend

For the backend, I used *[Express](https://expressjs.com/es/)* with a simple configuration adapted to the project's needs.