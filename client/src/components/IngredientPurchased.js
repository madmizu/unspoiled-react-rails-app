

function IngredientPurchased({
  newPurchaseInstance,
  createNewItem,
  itemsPurchased,
  setItemsPurchased,
  setRendering,
  ingredient,
  formData, 
  setFormData,
  setPrompt,
  setAddFromIngredients,
}) {

  function handleAddItem() {

    setFormData({ ...formData, name: ingredient.name });
    setAddFromIngredients(ingredient)
    setPrompt("edit")
  }

//   async function handleAddItem(e) {
//     e.preventDefault();
//     setRendering("purchases");
//     const addedItem = { ...formData, purchase_id: newPurchaseInstance.id };
//     itemsPurchased.push(addedItem);
//     setItemsPurchased(itemsPurchased);
//     await displayNewItems();
//   }

  function displayNewItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(setRendering("newItems"));
      }, 1);
    });
  }

  // function handleSubmitPurchase (e) {
  //     console.log("clicked")
  //     for (let i=0; i<itemsPurchased.length; i++) {
  //     createNewItem(itemsPurchased[i])
  //     }
  //     setItemsPurchased([])
  //     setRendering("purchased")

  // }

  return (
    <tr>
      <td> {ingredient.name}</td>
      <td>
        {ingredient.recipes.map((each) => (
            <li key={each.id}>{each.title}</li>
        ))}
      </td>
      <th scope="row" onClick={handleAddItem}>
        Add Ingredient
      </th>
    </tr>

    //     <div>

    //     <form onSubmit={handleAddItem}>
    //         <div className="newItems">

    //             <div className="form-group col-xs-3">
    //                 <label>Item Name</label>
    //                 <input
    //                     name="name"
    //                     value={formData.name}
    //                     placeholder="Enter Item here..."
    //                     onChange={handleChange}
    //                 />
    //             </div>
    //             <div className="form-group col-xs-3">
    //                 <label>Quantity</label>
    //                 <input type="number" name="qty" defaultValue={formData.qty} onChange={handleChange}/>
    //             </div>
    //             <div className="form-group col-xs-3">
    //                 <label>Unit of Measure</label>
    //                 <select type="string" name="measure" value={formData.measure} onChange={handleChange}>
    //                     <option>Select a Unit</option>
    //                     <option>Whole Item</option>
    //                     <option>Box</option>
    //                     <option>Bag</option>
    //                     <option>Jar</option>
    //                     <option>Can</option>
    //                     <option>Bottle</option>
    //                     <option>Package</option>
    //                     <option>Other</option>
    //                 </select>
    //             </div>
    //             <div className="form-group col-xs-3">
    //                 <label>Spoil Date </label>
    //                 <input type="date" name="spoil_date" value={formData.spoil_date} onChange={handleChange}/>
    //             </div>
    //         </div>
    //         <div className="form-group col-sm-4">
    //             <button type="submit" className="btn btn-secondary">Add Item to Purchase</button>
    //         </div>
    //     </form>
    //     <div className="form-group col-sm-4">
    //         <button type="click" className="btn btn-dark"  onClick={(e)=>handleSubmitPurchase(e)}>Submit Purchase</button>
    //     </div>
    // </div>
  );
}

export default IngredientPurchased;
