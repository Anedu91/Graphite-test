import Sidebar from "../../components/Sidebar";
import { useState, useEffect } from "react";
import Recipe from "../../components/Recipe";

const Recipes = () => {
  
  const [data, setData] = useState([]);
  //State for render recipes
  const [renderRecipes, setRenderRecipes] = useState([]);
  

  useEffect( async() =>{
      //Fetching the data from our express server
      await fetch('http://localhost:3000/getRecipes')
      .then(res => res.json())
      //saving the data in the state
      .then(recipes => setData(recipes))
      .catch(err => console.log(err));

  },[])
  
  return (
    <div className="lg:grid grid-cols-11 md:h-screen bg-primary">
      <div className="p-5 col-span-2 bg-green-300">
    
      <Sidebar recipes={data} setRenderRecipes={setRenderRecipes}/>
      </div>
      <div className="col-start-3 col-end-12 | p-10 | grid lg:grid-cols-3 gap-5 bg-primary">
        {/* conditional rendering for the recipes and instructions */}
          {renderRecipes.length === 0 ? 
            <div className="col-span-full flex flex-col justify-center items-center bg-white rouned shadow-sm">
              <h2 className="lg:text-8xl text-3xl  mb-5">Search for a recipe</h2>
              <img src="https://www.svgimages.com/svg-image/s5/chef-art.svg" alt="" className="md:max-w-xs" />
            </div> :
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