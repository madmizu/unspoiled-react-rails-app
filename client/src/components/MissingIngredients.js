function MissingIngredients({ each, ingredient,addToShoppingList, setBody, setAllIngredients}) {
console.log(each)
console.log(ingredient)

async function addToWishlist () {
  const itemInfo = {
    qty: each.qty,
    measure: each.measure,
    ingredient_id: ingredient.id
  }
  addToShoppingList(itemInfo)
  console.log("added to wishlist")
  setBody("home")
  fetch('/ingredients')
  .then(res => res.json())
  .then(setAllIngredients)
  .then (displayNewItems())
}

function displayNewItems () {
  return new Promise(resolve => {
      setTimeout(()=> {
          resolve(setBody("recipes"));
      }, 1);
  })
}

  return (
    <>
  {ingredient.shopping_list_item ? 
      <li className="wishlistIngredients">
      {each.qty} {each.measure} {each.ingredient.name}
      {/* <emsp> </emsp> */}
      {/* <button className="wishlist" onclick={removeFromWishlist}>Remove From Shopping List</button> */}
    </li> :
    <li className="missingIngredients">
      {each.qty} {each.measure} {each.ingredient.name}
      <emsp> </emsp>
      <button className="wishlist" onClick={addToWishlist}>Add to Shopping List</button>
    </li>
    }
    </>
  );
}

export default MissingIngredients;
