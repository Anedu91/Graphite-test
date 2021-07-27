
# Graphite Recipes Test

## Instalacion y running

`npm install`

The Server and the Frontend it will be running in different ports:

### Running server

1. `npm run server` (The server will run in localhost port 3000)

### Running the Frontend

1. `npm run dev` (It will run the frontend in localhost port 9000)

## Description

This is a fullstack webapp test. That consist in list, filter and search a group of recipes.

## Approach

For this application I decided to use React as a frontend Library and Express as a backend framework.

### Frontend

For styling the app I used *[Tailwindcss](https://tailwindcss.com/)*, is a utility-first CSS framework that help us to create interfaces very quickly. It has a PostCSS config that help us to use the latest features of the languague.

For bundle the assests, styles and js files I used *[Webpack](https://webpack.js.org/)*.

### Backend

For the backend I used *[express](https://expressjs.com/es/)*, with a simple configuration adapted to the project's needs.