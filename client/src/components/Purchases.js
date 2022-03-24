import SectionCard from "./SectionCard";
import NewFoodItem from "./NewFoodItem";
import IngredientPurchased from "./IngredientPurchased";
import { useState } from "react";

function Purchases({
  returnHome,
  createNewPurchase,
  createNewItem,
  newPurchaseInstance,
  allIngredients,
}) {
  const [itemsPurchased, setItemsPurchased] = useState([]);
  const [ingredientsPurchased, setIngredientsPurchased] = useState([]);
  const [rendering, setRendering] = useState("purchases");
  const [prompt, setPrompt] = useState("new");
  const [addedFromIngredients, setAddedFromIngredients] = useState({});
  const [purchaseData, setPurchaseData] = useState({
    date: "",
  });
  const [formData, setFormData] = useState({
    qty: "",
    measure: "",
    spoil_date: "",
    purchase_id: "",
    ingredient_id: "",
  });
  const [ingredientData, setIngredientData] = useState({
    name: "",
    in_stock: "true",
  });

  // upon submitting form, sends data to POST request to create new Purchase instance
  function handlePurchaseDateSubmit(e) {
    e.preventDefault();
    if(purchaseData.date) {
          setRendering("newItems");
    createNewPurchase(purchaseData);
    } else {
      alert("Please enter a valid date.")
    }
  }

  // handles change of date on form and sets state for purchase date which is passed into POST request for new Purchase instance
  function handlePurchaseDateChange(e) {
    setPurchaseData({ ...purchaseData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="col-sm-12">
        <SectionCard title="Bought It - Add New Purchases" />
      </div>
      <div className="col-sm-12">
        <SectionCard title="Return Home" changeSection={returnHome} />
      </div>
      <br />
      {rendering === "purchased" ? (
        <p>New items have been added to your inventory!</p>
      ) : null}
      {rendering === "newItems" ? (
        <div className="purchases">
          {/* Once date of new purchase is submitted, this will render on the page to allow user to submit items on the transaction */}
          <h4>Date of Purchase {purchaseData.date} </h4>
          <br/>
          {itemsPurchased[0] ? (
            <>
            <h5>Items in this Purchase:</h5>
            
            <table className="table" id="inventoryTable">

              <thead className="table-warning">
                <tr>
                  <th scope="col">Item Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Spoil Date</th>
                </tr>
              </thead>
              <tbody>
                {/* {ingredientsPurchased.map((each) => (
                      <td key={ingredientsPurchased.indexOf(each)}>
                        {each.name}
                      </td>
                    ))} */}
                {itemsPurchased.map((item) => (
                  <tr key={itemsPurchased.indexOf(item)}>
                      <td>
                        {ingredientsPurchased[itemsPurchased.indexOf(item)].name}
                      </td>
                    <td >
                      {item.qty} x {item.measure}
                    </td>
                    <td>{item.spoil_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </>
          ) : null}
          {/* This component renders a form line for each ingredient in database. */}
          <div className="ingredientScroll" style={{ height: "18%" }}>
            <table className="table">
              <thead className="table-warning">
                <tr>
                  <th className="tableHead" scope="col">
                    Ingredient Name
                  </th>
                  <th className="tableHead" scope="col">
                    Recipes
                  </th>
                  <th className="tableHead" scope="col">
                    Click to Add to This Purchase
                  </th>
                </tr>
              </thead>
              <tbody id="ingredientTable">
                {allIngredients.map((each) => (
                  <IngredientPurchased
                    key={each.id}
                    ingredient={each}
                    formData={formData}
                    setFormData={setFormData}
                    setPrompt={setPrompt}
                    setAddedFromIngredients={setAddedFromIngredients}
                    setIngredientData={setIngredientData}
                    ingredientData={ingredientData}
                  />
                ))}
              </tbody>
            </table>
          </div>
          {prompt === "edit" ? (
            <>
              <br />
              <h4>
                {" "}
                Fill out additional details below then click 'Add Item to
                Purchase'{" "}
              </h4>
            </>
          ) : (
            <>
              <br />
              <h4> Use the form below if the item is not listed above </h4>
            </>
          )}

          {/* This component renders a form for each line of 'new items' user fills out. */}
          <NewFoodItem
            createNewItem={createNewItem}
            itemsPurchased={itemsPurchased}
            setItemsPurchased={setItemsPurchased}
            setRendering={setRendering}
            newPurchaseInstance={newPurchaseInstance}
            formData={formData}
            setFormData={setFormData}
            prompt={prompt}
            setPrompt={setPrompt}
            setAddedFromIngredients={setAddedFromIngredients}
            addedFromIngredients={addedFromIngredients}
            setIngredientData={setIngredientData}
            ingredientData={ingredientData}
            ingredientsPurchased={ingredientsPurchased}
            setIngredientsPurchased={setIngredientsPurchased}
          />
        </div>
      ) : (
        <div className="purchases">
          {/* form to enter in date of new purchase */}
          <form id="newPurchase" onSubmit={handlePurchaseDateSubmit}>
            <h3>Enter Date of Purchase: </h3>
            <div className="form-group col-xs-6">
              <label>Date of Purchase &nbsp;</label>
              <input
                type="date"
                name="date"
                value={purchaseData.date}
                onChange={handlePurchaseDateChange}
              />
            </div>
            <div className="form-group col-sm-2">
              <button type="submit" className="btn btn-dark">
                Submit Transaction
              </button>
            </div>
          </form>
        </div>
      )}
      <br />
    </>
  );
}

export default Purchases;
