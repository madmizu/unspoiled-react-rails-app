import SectionCard from "./SectionCard.js";
import { useState } from "react";
import Purchases from "./Purchases.js";
import Inventory from "./Inventory.js";
import Recipes from "./Recipes.js";
import RecipeOfTheDay from "./RecipeOfTheDay.js";

function Body({
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
  const [body, setBody] = useState("home");

  return (
    <>
      <div className="container-fluid">
        <br />
        <br />
        {body === "home" ? (
          <>
            <div className="row justify-content-center">
              <div className="col-sm-3 border">
                <SectionCard
                  title="Bought It"
                  changeSection={() => setBody("purchases")}
                />
              </div>
              <div className="col-sm-3 border">
                <SectionCard
                  title="Have It"
                  changeSection={() => setBody("inventory")}
                />
              </div>
              <div className="col-sm-3 border">
                <SectionCard
                  title="Need It"
                  changeSection={() => setBody("shoppingList")}
                />
              </div>
              <div className="col-sm-3 border">
                <SectionCard
                  title="Cook It"
                  changeSection={() => setBody("recipes")}
                />
              </div>
              <div className="col-12">
                <RecipeOfTheDay
                  inventory={inventory}
                  allIngredients={allIngredients}
                  recipeOTD={recipeOTD}
                  setBody={setBody}
                  addToShoppingList={addToShoppingList}
                  setAllIngredients={setAllIngredients}
                />
              </div>
              <br />
              <div className="foodLoop">
                <br />
                <br />
                {/* <img className = "homeImage" src = "https://i.ibb.co/gdFP2jy/foodloop.gif" alt = {"foodLoop"} /> */}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="row justify-content-center">
          {body === "purchases" ? (
            <Purchases
              returnHome={() => setBody("home")}
              body={body}
              setBody={setBody}
              createNewPurchase={createNewPurchase}
              createNewItem={createNewItem}
              newPurchaseInstance={newPurchaseInstance}
              allIngredients={allIngredients}
            />
          ) : null}
          {body === "inventory" ? (
            <Inventory
              returnHome={() => setBody("home")}
              itemsToRender={inventory}
              handleItemDelete={handleItemDelete}
              body={body}
              allIngredients={allIngredients}
            />
          ) : null}
          {body === "shoppingList" ? (
            <Inventory
              returnHome={() => setBody("home")}
              itemsToRender={shoppingList}
              handleItemDelete={handleItemDelete}
              body={body}
              allIngredients={allIngredients}
            />
          ) : null}
          {body === "recipes" ? (
            <Recipes
              returnHome={() => setBody("home")}
              itemsToRender={allRecipes}
              handleItemDelete={handleItemDelete}
              body={body}
              allIngredients={allIngredients}
              setBody={setBody}
              addToShoppingList={addToShoppingList}
              setAllIngredients={setAllIngredients}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Body;
