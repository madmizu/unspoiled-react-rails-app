import MissingIngredients from "./MissingIngredients.js";

function RecipeOfTheDay({ recipeOTD }) {
  return (
    <div>
      <br />
      <br />
      <h3 className="recipeOTD">Recipe Of The Day</h3>
      <div className="recipeOfTheDay">
        <br />
        <table className="table text-center border">
          <tbody>
            <tr>
              <th>
                <img
                  className="recipeImage"
                  src={recipeOTD.image}
                  alt={recipeOTD.title}
                />
              </th>
              <td id="recipeOTD" className="align-middle">
                {recipeOTD.title}
              </td>
              <td className="align-middle">
                <div className="ingredientScroll">
                  {recipeOTD && recipeOTD.recipe_ingredients ? (
                    recipeOTD.recipe_ingredients.map((each) => {
                      const index = recipeOTD.recipe_ingredients.indexOf(each);
                      return (
                        <li key={each.id} className="availableIngredients">
                          {each.qty} {each.measure}{" "}
                          {recipeOTD.ingredients[index].name}
                        </li>
                      );
                    })
                  ) : (
                    <li>Loading...</li>
                  )}
                </div>
              </td>
              <td className="align-middle">
                <button>View Recipe</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecipeOfTheDay;
