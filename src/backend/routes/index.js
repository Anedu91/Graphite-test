import {Router} from'express';
import fs from 'fs';
const router = Router();

const json_recipes = fs.readFileSync('src/backend/data/recipes.json', 'utf-8');
const recipes = JSON.parse(json_recipes);


router.get('/getRecipes',(req,res) => {
  res.send(recipes)
})


router.post('/new-entry', (req,res)=>{
  //0. The actual data doesn't have an id, but is mandatory in real case escenarios.
  //1. In this route I'll add new recipes to our database.
  //2. To do that I need a form in our frontend, with the items required by mi recipes.
  //3. I'm using express.urlencode to send the frontend info to our backend as a object
  //4. I'll access to the data using req.body
  //5. After validations I'll send the new Recipe data to the Database

})
router.get('/delete/:id', (req,res)=>{
  //0. The actual data doesn't have an id, but is mandatory in real case escenarios.
  //1. With req.params I'll get the recipe id
  //2. After validations I'll delete the Recipe from the Database

})

module.exports = router