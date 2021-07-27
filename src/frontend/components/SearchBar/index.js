import { useState, useRef } from "react";
import cx from "classnames";
import {BiSearchAlt} from "react-icons/bi";
import {AiFillCloseCircle} from "react-icons/ai"

const SearchBar = ({placeholder, recipes, setRenderRecipes, clearCheckboxes}) => {
  //State for input text
  const [filteredData, setFilteredData] = useState([]);
  const searchBar = useRef(null)
  
  const inputStyles = cx("p-3 border border-black focus:outline-none w-full");
  const iconStyles = cx("text-2xl text-gray-400  absolute top-1/2 right-1  transform -translate-y-1/2 cursor-pointer")

  
  
  const handleClick = (e, recipe) => {
    e.preventDefault()
    //Rendering the recipe
    setRenderRecipes([recipe])
    // Setting the bar to empty
    searchBar.current.value = ""
    //Cleaning the state
    setFilteredData([])
    //Cleaning checboxes if need it
    clearCheckboxes()
  }

  const handleChange = (event) => {
    
    const searchWord = event.target.value;
    const newFilter = recipes.filter(recipe => {
      return recipe.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if(searchWord === ""){
      //Cleaning the state
      setFilteredData([])
    }else{
      //saving the state
      setFilteredData(newFilter)
    }
  }

  const clearBar = () => {
    setFilteredData([])
    searchBar.current.value = ""
  }
  return(
    
    <div>
      <div className="relative flex">
        <input className={inputStyles} type="text" placeholder={placeholder} onChange={handleChange} ref={searchBar}/>
        {filteredData.length === 0 ? <BiSearchAlt className={iconStyles}/> : <AiFillCloseCircle className={iconStyles} onClick={clearBar}/>}
        
        
      </div>

     { filteredData.length != 0 && (
       <div className="mt-1 border bg-white">
       <ul>
         {filteredData.map((recipe,index) => {
           return(
             <li key={index}>
               <button className="p-1 text-sm hover:bg-gray-300 w-full text-left capitalize" onClick={(e) => handleClick(e,recipe)}>{recipe.title}</button>
             </li>
           )
         })}
       </ul>
     </div>
     )}

    </div>
  )
}

export default SearchBar