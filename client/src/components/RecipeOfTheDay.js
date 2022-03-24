import MissingIngredients from "./MissingIngredients.js";

function RecipeOfTheDay({
  inventory,
  allIngredients,
  recipeOTD,
  setBody,
  addToShoppingList,
  setAllIngredients,
}) {

  console.log(recipeOTD.recipe_ingredients)
  console.log(allIngredients)

  return (
    <div>
      <br />
      <br />
      <h3 className="recipeOTD">Recipe Of The Day</h3>
      <div className="recipeOfTheDay">
        <br />
        <table className="table text-center border">
          {/* <thead>
          <tr>
            <th scope="col">Recipe Of The Day</th>
          </tr>
        </thead> */}
          <tbody>
            <tr>
            <img className="recipeImage" src={recipeOTD.image} alt={recipeOTD.title}/>

              <th id="recipeOTD" className="align-middle">{recipeOTD.title}</th>
              <td className="align-middle">
                <div className="ingredientScroll">
                  {recipeOTD && recipeOTD.recipe_ingredients
                    ? 
                    recipeOTD.recipe_ingredients.map((each) => {
                      const index = recipeOTD.recipe_ingredients.indexOf(each)
                      return ( 
                        <li className="availableIngredients">
                        {each.qty} {each.measure} {recipeOTD.ingredients[index].name}
                    </li>   
                        )}) : <li>DOENST WORK</li>

                    }
                </div>
              </td>
                <button >View Recipe</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecipeOfTheDay;
