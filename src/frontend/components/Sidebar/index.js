import { useState } from "react"
import Ingredients from "../Ingredients"
import SearchBar from "../SearchBar";

const Sidebar = ({recipes, setRenderRecipes}) =>{
 
 //State for ingredients
 const [filterIngredients, setFilterIngredients] = useState([]);
 
 
const filterByIngredients = (e) =>{
  e.preventDefault()
   const filteredRecipes =  recipes.filter(recipe => {
     //selecting array ingredients
    const recipeIngredients = recipe.ingredients;
    let isTrue = false
      //looping trought filter array
     for (let ingredient in filterIngredients){
       
      if(recipeIngredients.includes(filterIngredients[ingredient])){
       
        isTrue = true;
        break;
      }
    }
    return isTrue
  })

  setRenderRecipes(filteredRecipes)
  
}

 
 const showAll = (e) => {
   e.preventDefault()
   setRenderRecipes(recipes)
 }

 
  return (
    <>
      <div className="mb-10">
        <h2 className="mb-5">Search by title</h2>
        <SearchBar placeholder="Introduce a title" recipes={recipes} setRenderRecipes={setRenderRecipes}/>
      </div>
      <div className="">
        <h2 className="mb-5">Search by ingredients</h2>
        <div className="">
          <form action="">
          <ul className="flex space-x-1.5 flex-wrap justify-center">
           {
             //Selecting no repeated ingredients
             [... new Set(recipes.map(recipe => recipe.ingredients)
              //Creating an array with all the ingredients
              .reduce((acc,current) => acc.concat(current),[]))]
              //Rendering ingredients
              .map((ingredient,index) => {
                return(
                  <li key={index} className="mb-2">
                    <Ingredients index={index} name={ingredient} setFilterIngredients={setFilterIngredients} />
                  </li>
                )
              })
           }
          </ul>
           <button onClick={filterByIngredients}>Search</button>
          </form>
        </div>
      </div>
      <div className="">
        <button onClick={(e) => showAll(e)}>Show All</button>
      </div>
    </>
  )


}
export default Sidebar