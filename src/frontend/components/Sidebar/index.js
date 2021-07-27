import { useState } from "react"
import Ingredients from "../Ingredients"
import SearchBar from "../SearchBar";

const Sidebar = ({recipes, setRenderRecipes}) =>{
 
 //Filter checkbox states
 const [filterIngredients, setFilterIngredients] = useState([]);
 const [input, setInput] = useState([])
 //Filter checkbox logic
 const handleInputChange = (e) => {
  // Add checkbox value to the state
  if(e.currentTarget.checked){
    setFilterIngredients([...filterIngredients, e.currentTarget.value])
    setInput([...input, e.currentTarget])
    
    
  }else{
    //removing checkbox value to the state
    setFilterIngredients(filterIngredients.filter(value => value !== e.currentTarget.value))
    setInput(input.filter(item => item.value !== e.currentTarget.value))
  }
} 
const clearCheckboxes = () => {
  //cleaning the checkboxes
  input.forEach(item => item.checked = false)
  setInput([])
  setFilterIngredients([])
} 
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
    
  clearCheckboxes()
} 
 const showAll = (e) => {
   e.preventDefault()
   setRenderRecipes(recipes)
   clearCheckboxes()
 }

 
  return (
    <div className="space-y-5">
      <div className="py-4 border-b-2 ">
        <h2 className="mb-5 text-xl font-semibold">Search by title</h2>
        <SearchBar placeholder="Introduce a title" recipes={recipes} setRenderRecipes={setRenderRecipes} clearCheckboxes={clearCheckboxes}/>
      </div>
      <div className="py-4 border-b-2">
        <h2 className="mb-3 text-xl font-semibold">Search by ingredients</h2>
        <div className="">   
        <form action="">
          <ul className="flex space-x-1.5 flex-wrap justify-center" >
            {
              //Selecting no repeated ingredients
              [... new Set(recipes.map(recipe => recipe.ingredients)
              //Creating an array with all the ingredients
              .reduce((acc,current) => acc.concat(current),[]))]
              //Rendering ingredients
              .map((ingredient,index) => {
                return(
                  <li key={index} className="mb-2">
                    <Ingredients index={index} name={ingredient} setFilterIngredients={setFilterIngredients} handleInputChange={handleInputChange}/>
                  </li>
                )
              })
            }
            </ul>
            <button className="bg-purple-700 hover:bg-purple-600 w-full text-white p-2 disabled:opacity-50" disabled={filterIngredients.length === 0 ? true : false} onClick={filterByIngredients} type="reset">Search</button>   
        </form>                
        </div>
      </div>
      <div className="pt-4">
        <button className="w-full bg-pink-600 text-white p-2 uppercase text-xl hover:bg-pink-500 transition" onClick={(e) => showAll(e)}>Show All</button>
      </div>
    </div>
  )


}
export default Sidebar