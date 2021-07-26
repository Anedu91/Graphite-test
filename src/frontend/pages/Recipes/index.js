import Sidebar from "../../components/Sidebar";
import { useState, useEffect } from "react";
import Recipe from "../../components/Recipe";

const Recipes = () => {
  //State for render recipes
  const [data, setData] = useState([]);
  const [renderRecipes, setRenderRecipes] = useState([]);
  

  useEffect( async() =>{
    
      await fetch('http://localhost:3000/getRecipes')
      .then(res => res.json())
      .then(recipes => setData(recipes))
      .catch(err => console.log(err));

  },[])
  
  return (
    <div className="grid grid-cols-11 h-screen">
      <div className="p-5 col-span-2">

      <Sidebar recipes={data} setRenderRecipes={setRenderRecipes}/>
      </div>
      <div className="col-start-3 col-end-12 | p-10 | grid grid-cols-3 gap-5 ">
          {
            renderRecipes.map((recipe,index) => {
              return(
                <Recipe recipe={recipe} key={index}/>
              )
            })
          }
      </div>
    </div>
  )
}

export default Recipes