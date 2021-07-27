const Recipe = ({recipe}) => {
  const {title, ingredients} = recipe
  return (
    <div className="bg-white p-3 shadow-sm rounded">
      <figure></figure>
      <article>
        <h2 className="text-xl font-semibold mb-4 capitalize text-blue-600">{title}</h2>
        <h4 className="text-md font-medium mb-2 border-b-2">Ingredients</h4>
        <ul className="grid grid-cols-3 gap-3">
          {
            ingredients.map((ingredient,index) => {
              return(
                <li className="text-sm font-bold capitalize" key={index}>{ingredient}</li>
              )
            })
          }
        </ul>
      </article>
    </div>
  )
}

export default Recipe 