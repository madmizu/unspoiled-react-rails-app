import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/Header.js';
import Body from './components/Body.js';
import HomeImage from './components/HomeImage.js';

function App() {
  const [inventory, setInventory] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [newPurchaseInstance,setNewPurchaseInstance] = useState();
  const [allRecipes, setAllRecipes] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const [recipeOTD, setRecipeOTD] = useState({})

  // READ: fetch request for data from local API
  useEffect(()=> {
    //get inventory items
    fetch('/inventory_items')
    .then(res => res.json())
    .then(setInventory)
    //get shopping list items
    fetch('/shopping_list_items')
    .then(res => res.json())
    .then(setShoppingList)
    //get recipes
    fetch('/recipes')
    .then(res => res.json())
    .then(setAllRecipes)
    //get ingredients
    fetch('/ingredients')
    .then(res => res.json())
    .then(setAllIngredients)
    //get recipe of the day
    fetch('/ROD')
    .then(res => res.json())
    .then(setRecipeOTD)
  }, [])


  // DELETE: Removes item from Inventory or Shopping List & resets state accordingly
  function handleItemDelete (section, id) {
    const url = `/${section}/${id}`
    fetch(url,{
        method:'DELETE',
        headers:{'Content-Type':'application/json'}
    })
    .then(res => res.json()
    .then( section === "inventory_items" ?
      setInventory(inventory.filter(item => item.id !== id)) :
      setShoppingList(shoppingList.filter(item => item.id !== id))
    ))
  }

  // Create new purchase instance
  function createNewPurchase (purchaseData) {
    fetch('/purchases',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(purchaseData)
      })
      .then(res => {
          res.json()
          .then(newPurchase => {
          setPurchases([newPurchase,...purchases])
          setNewPurchaseInstance(newPurchase)
        })
      })   
  }

  //Create new instances from form entry NEEDS UPDATE
  function createNewItem (formData) {
    console.log(formData)
    // Create new inventory item
    fetch('/inventory_items',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(newInventoryItem => {
        console.log(newInventoryItem)
        setInventory([newInventoryItem,...inventory])
    })
   
  }

    // Create new shopping list item 
    function addToShoppingList (data) {
      fetch('/shopping_list_items',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
        })
        .then(res => {
            res.json()
            .then(newItems => {
            setShoppingList([newItems,...shoppingList])
          })
        })   
    }

  return (
    <div className="container-fluid border">
      <Header />
      <Body
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
      <HomeImage />
    </div>
  );
}

export default App;
