import MissingIngredients from "./MissingIngredients.js";

function EachRecipe({
  recipe,
  body,
  setBody,
  handleDelete,
  allIngredients,
  addToShoppingList,
  setAllIngredients,
}) {
  const recipeIngredients = recipe.recipe_ingredients;

  return (
    <tr>
      <th scope="row" onClick={() => handleDelete("recipes", recipe.id)}>
        X
      </th>
      <td>{recipe.title}</td>
      <td className="availableIngredients">
        <div className="ingredientScroll">
          {recipeIngredients.map((each) =>
            allIngredients.find((i) => i.id === each.ingredient.id)
              .inventory_item ? (
              <li key={each.id}>
                {each.qty} {each.measure} {each.ingredient.name}
              </li>
            ) : null
          )}
        </div>
      </td>
      <td>
        <div className="ingredientScroll">
          {recipeIngredients.map((each) => {
            const instance = allIngredients.find(
              (i) => i.id === each.ingredient.id
            );
            return instance.inventory_item ? null : (
              <MissingIngredients
                key={(each.id)}
                each={each}
                ingredient={instance}
                addToShoppingList={addToShoppingList}
                setBody={setBody}
                setAllIngredients={setAllIngredients}
              />
            );
          })}
        </div>
      </td>
      <td>
        <button>View Recipe</button>
      </td>
    </tr>
  );
}

export default EachRecipe;
