import SectionCard from "./SectionCard.js";
import { useState, useEffect } from "react";
import Purchases from "./Purchases.js";
import Inventory from "./Inventory.js";
import Recipes from "./Recipes.js";
import RecipeOfTheDay from "./RecipeOfTheDay.js";

function Home({
  inventory,
  shoppingList,
  handleItemDelete,
  createNewPurchase,
  newPurchaseInstance,
  createNewItem,
  allRecipes,
  allIngredients,
  addToShoppingList,
  setAllIngredients,
  recipeOTD,
}) {
  const [inStockRecipes, setInStockRecipes] = useState([]);

  function setCookableRecipes() {
    ;

    for (const recipe of allRecipes) {
      const inStockIngredients = []
      const ingredientList = recipe.recipe_ingredients;


            for (const each of ingredientList) {
              if(each.ingredient.inventory_item) {

                inStockIngredients.push(1);
              }
              // when we reach the last ingredient in the array...
              if(ingredientList.indexOf(each) === ingredientList.length-1) {
                if(ingredientList.length === inStockIngredients.length) {
                        inStockRecipes.push(recipe);
                        setInStockRecipes(inStockRecipes);
                  }
              }
            }
    }
  }

  console.log("5 - inStockRecipes", inStockRecipes);

  return (
    <>
      <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <RecipeOfTheDay recipeOTD={recipeOTD} />
              </div>
              <br />
              <div className="foodLoop">
                <br />
                <br />
                {/* <img className = "homeImage" src = "https://i.ibb.co/gdFP2jy/foodloop.gif" alt = {"foodLoop"} /> */}
              </div>
            </div>
      </div>
    </>
  );
}

export default Home;
