const Ingredients = ({name, handleInputChange})=>{
   
  
return (
  
  
    <label className="p-2 | flex space-x-2 items-center | cursor-pointer">
      <span className="capitalize font-normal">
      {name}
      </span>
      <input type="checkbox" className="form-checkbox text-indigo-600" name={name} value={name} onChange={handleInputChange} />    
    </label>
)
}
export default Ingredients