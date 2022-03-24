import SectionCard from "./SectionCard";
import EachRecipe from "./EachRecipe";

function Recipes({ returnHome, itemsToRender, handleItemDelete, body, setBody, allIngredients, addToShoppingList, setAllIngredients}) {
  return (
    <div className="recipes">
      <div className="col-sm-12">
        <SectionCard title="Cook It - Recipes" />
      </div>
      <div className="col-sm-12">
        <SectionCard title="Return Home" changeSection={returnHome} />
      </div>
      <br />
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
