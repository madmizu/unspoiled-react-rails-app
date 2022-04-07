import EachRecipe from "./EachRecipe";
import { Link } from "react-router-dom";

function Recipes({
  itemsToRender,
  handleItemDelete,
  body,
  setBody,
  allIngredients,
  addToShoppingList,
  setAllIngredients,
  inStockRecipes,
}) {
  return (
    <div className="recipes">
      <div class="row justify-content-md-center">
        <div className="col-sm-3">
          <Link className="navbar-links" to="/">
            Return Home
          </Link>
        </div>
      </div>
      <div className="recipesAvailable">
        {inStockRecipes[0] ? (
          <>
            <h3>Recipes - All Ingredients In Stock</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col">Ingredients</th>
                </tr>
              </thead>

              <tbody>
                {inStockRecipes.map((recipe) => (
                  <EachRecipe
                    recipe={recipe}
                    key={recipe.id}
                    body={body}
                    handleDelete={handleItemDelete}
                    allIngredients={allIngredients}
                    addToShoppingList={addToShoppingList}
                    setBody={setBody}
                    setAllIngredients={setAllIngredients}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <h3>Additional Ingredients Required for All Recipes</h3>
        )}
      </div>

      <br />
      <h3>All Saved Recipes</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Ingredients In Stock</th>
            <th scope="col">Ingredients Missing</th>
          </tr>
        </thead>
        <tbody>
          {itemsToRender.map((recipe) => (
            <EachRecipe
              recipe={recipe}
              key={recipe.id}
              body={body}
              handleDelete={handleItemDelete}
              allIngredients={allIngredients}
              addToShoppingList={addToShoppingList}
              setBody={setBody}
              setAllIngredients={setAllIngredients}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Recipes;
