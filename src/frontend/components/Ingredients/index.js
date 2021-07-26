import { useRef, useState } from "react"


const Ingredients = ({name, setFilterIngredients})=>{
  
const [isChecked, setIsChecked] = useState(true);
const checkBox = useRef(null)

const handleOnChange = ()=>{
     setIsChecked(!isChecked)
  
     
    if(isChecked){
      setFilterIngredients(oldArray=> [...oldArray, checkBox.current.value])
    }else{
      setFilterIngredients(oldArray => oldArray.filter(value => value !== checkBox.current.value))
    }
  

}
  
  
return (
  
  <div className="border-white border">
    <label className="p-2 | flex space-x-2 items-center | cursor-pointer">
      <span>
      {name}
      </span>
      <input type="checkbox" ref={checkBox} name="ingredients" value={name} onChange={handleOnChange} />    
    </label>
  </div>
)
}
export default Ingredients