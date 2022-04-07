import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import HomeImage from "./components/HomeImage.js";
import Purchases from "./components/Purchases.js";
import Inventory from "./components/Inventory.js";
import Recipes from "./components/Recipes.js";

function App() {
  const [inventory, setInventory] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [newPurchaseInstance, setNewPurchaseInstance] = useState();
  const [allRecipes, setAllRecipes] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const [recipeOTD, setRecipeOTD] = useState({});
  const [inStockRecipes, setInStockRecipes] = useState([]);
  const [body, setBody] = useState("home");

  // READ: fetch request for data from local API
  useEffect(() => {
    //get inventory items
    fetch("/inventory_items")
      .then((res) => res.json())
      .then(setInventory);
    //get shopping list items
    fetch("/shopping_list_items")
      .then((res) => res.json())
      .then(setShoppingList);
    //get recipes
    fetch("/recipes")
      .then((res) => res.json())
      .then(setAllRecipes);
    //get ingredients
    fetch("/ingredients")
      .then((res) => res.json())
      .then(setAllIngredients);
    //get recipe of the day
    fetch("/ROD")
      .then((res) => res.json())
      .then(setRecipeOTD);
  }, []);

  // DELETE: Removes item from Inventory or Shopping List & resets state accordingly
  function handleItemDelete(section, id) {
    const url = `/${section}/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      res
        .json()
        .then(
          section === "inventory_items"
            ? setInventory(inventory.filter((item) => item.id !== id))
            : setShoppingList(shoppingList.filter((item) => item.id !== id))
        )
    );
  }

  // Create new purchase instance
  function createNewPurchase(purchaseData) {
    fetch("/purchases", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(purchaseData),
    }).then((res) => {
      res.json().then((newPurchase) => {
        setPurchases([newPurchase, ...purchases]);
        setNewPurchaseInstance(newPurchase);
      });
    });
  }

  //Create new instances from form entry NEEDS UPDATE
  function createNewItem(formData) {
    // Create new inventory item
    fetch("/inventory_items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newInventoryItem) => {
        console.log(newInventoryItem);
        setInventory([newInventoryItem, ...inventory]);
      });
  }

  // Create new shopping list item
  function addToShoppingList(data) {
    fetch("/shopping_list_items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      res.json().then((newItems) => {
        setShoppingList([newItems, ...shoppingList]);
      });
    });
  }



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

  return (
    <Router>
      <div className="container-fluid border">
        <Header />
        <Navbar setCookableRecipes={setCookableRecipes} setBody={setBody}/>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                inventory={inventory}
                shoppingList={shoppingList}
                handleItemDelete={handleItemDelete}
                postGroceryItem={createNewItem}
                createNewPurchase={createNewPurchase}
                createNewItem={createNewItem}
                newPurchaseInstance={newPurchaseInstance}
                allRecipes={allRecipes}
                allIngredients={allIngredients}
                addToShoppingList={addToShoppingList}
                setAllIngredients={setAllIngredients}
                recipeOTD={recipeOTD}
              />
            }
          ></Route>
          <Route
            path="/purchases"
            element={
              <Purchases
                createNewPurchase={createNewPurchase}
                createNewItem={createNewItem}
                newPurchaseInstance={newPurchaseInstance}
                allIngredients={allIngredients}
              />
            }
          ></Route>
          <Route
            path="/inventory"
            element={
              <Inventory
                returnHome={console.log("home")}
                itemsToRender={inventory}
                handleItemDelete={handleItemDelete}
                allIngredients={allIngredients}
                body={body}
              />
            }
          ></Route>
          <Route
            path="/shopping-list"
            element={
              <Inventory
                itemsToRender={shoppingList}
                handleItemDelete={handleItemDelete}
                allIngredients={allIngredients}
                body={body}
              />
            }
          ></Route>
          <Route
            path="/recipes"
            element={
              <Recipes
                itemsToRender={allRecipes}
                handleItemDelete={handleItemDelete}
                allIngredients={allIngredients}
                addToShoppingList={addToShoppingList}
                setAllIngredients={setAllIngredients}
                inStockRecipes={inStockRecipes}
              />
            }
          ></Route>
        </Routes>
        {/* <Body
        inventory={inventory}
        shoppingList={shoppingList}
        handleItemDelete={handleItemDelete}
        postGroceryItem={createNewItem}
        createNewPurchase={createNewPurchase}
        createNewItem={createNewItem}
        newPurchaseInstance={newPurchaseInstance}
        allRecipes={allRecipes}
        allIngredients={allIngredients}
        addToShoppingList={addToShoppingList}
        setAllIngredients={setAllIngredients}
        recipeOTD={recipeOTD}
      />       */}
        <HomeImage />
      </div>
    </Router>
  );
}

export default App;
