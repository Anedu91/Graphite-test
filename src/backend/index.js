import express from 'express';
import cors from 'cors';
import fs from 'fs';

const json_recipes = fs.readFileSync('src/backend/data/recipes.json', 'utf-8');
const recipes = JSON.parse(json_recipes);

//Starting the instance
const app = express();


//Cors for cross origin allowance
app.use(cors())

const getRecipes = async (req,res) => {
  res.send(recipes)
}
app.get("/getRecipes", getRecipes)

const port = 3000;

const server = app.listen(port, listening)

function listening(){
  console.log('Server running')
  console.log(`Running on localhost ${port}`)
}