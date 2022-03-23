function EachRecipe({ recipe, body, handleDelete }) {
  const section = body === "recipes" ? "recipes" : "shopping-list";
    const ingredients = recipe.recipe_ingredients
  console.log(recipe)
  console.log(ingredients)
  return (
    <tr>
      <th scope="row" onClick={() => handleDelete(section, recipe.id)}>
        X
      </th>
      <td>{recipe.title}</td>
      <td className="availableIngredients">
        <div className="ingredientScroll">
            {ingredients.map((each => (
                each.ingredient.in_stock ? <li>{each.qty} {each.measure} {each.ingredient.name}</li> : null
            )))}
        </div>
      </td>
      <td className="missingIngredients">
        <div className="ingredientScroll">

        {ingredients.map((each => (
                each.ingredient.in_stock ? null : 
                <li>
                    {each.qty} {each.measure}: {each.ingredient.name}
                <emsp> </emsp>
                <button className="addToList">+</button>
                </li>
            )))}


          <li>
            2 TBSP: Salt
            <emsp> </emsp>
            <button className="addToList">+</button>
          </li>
        </div>
      </td>
      <td>
        <button>Edit/Update</button>
      </td>
    </tr>
  );
}

export default EachRecipe;
