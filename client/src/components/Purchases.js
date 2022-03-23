import SectionCard from './SectionCard';
import NewFoodItem from './NewFoodItem';
import IngredientPurchased from './IngredientPurchased';
import { useState } from 'react';

function Purchases ({returnHome, createNewPurchase, createNewItem, newPurchaseInstance, allIngredients}) {
    const [itemsPurchased, setItemsPurchased] = useState([]);
    const [rendering, setRendering] = useState("purchases");
    const [purchaseData, setPurchaseData] = useState({
        date:''
    });

    // upon submitting form, sends data to POST request to create new Purchase instance
    function handlePurchaseDateSubmit (e) {
        e.preventDefault()
        setRendering("newItems")
        createNewPurchase (purchaseData)
    }

    // handles change of date on form and sets state for purchase date which is passed into POST request for new Purchase instance
    function handlePurchaseDateChange (e) {
        setPurchaseData({...purchaseData, [e.target.name]:e.target.value})
    }

    return (
        <>      
            <div className="col-sm-12">
                <SectionCard title = "Bought It - Add New Purchases"/>
            </div>
            <div className="col-sm-12">
                <SectionCard title = "Return Home" changeSection = {returnHome} />
            </div>
            <br />
            {rendering === "purchased" ? <p>New items have been added to your inventory!</p>: null}
            {rendering === "newItems" ? 
                <div className = "purchases">
                    


        {/* Once date of new purchase is submitted, this will render on the page to allow user to submit items on the transaction */}
                    <h4>Date of Purchase {purchaseData.date} </h4>
                    {itemsPurchased[0]? 
                        <table className="table" id="inventoryTable">
                            <h5>Items in this Purchase:</h5>
                            <thead>
                                <tr>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Quantity</th> 
                                    <th scope="col">Spoil Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {itemsPurchased.map(item => 
                                    <tr key={item.name + item.spoil_date}>
                                        <td>{item.name}</td>
                                        <td>{item.qty} x {item.measure}</td>
                                        <td>{item.spoil_date}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table> 
                    : null }
        {/* This component renders a form line for each ingredient in database. */}
        <div className = "ingredientScroll" style={{height: "18%"}}>
                 <table className="table" >

                <thead className="table-warning">
                    <tr>
                        <th className="tableHead" scope="col">Ingredient Name</th>
                        <th className="tableHead" scope="col">Recipes</th> 
                        <th className="tableHead" scope="col">Click to Add to This Purchase</th>
                    </tr>
                </thead>
                    <tbody id="ingredientTable">
                    {allIngredients.map((each) => (
                    <IngredientPurchased 
                            createNewItem={createNewItem}
                            itemsPurchased={itemsPurchased}
                            setItemsPurchased={setItemsPurchased}
                            setRendering={setRendering}
                            newPurchaseInstance={newPurchaseInstance}
                            ingredient={each}
                    /> 
            ))}
                 


                    {/* {itemsToRender.map(item => 
                        <GroceryItem
                            item={item}
                            key={item.id}
                            body={body}
                            handleDelete={handleItemDelete}
                        /> 
                    )} */}

                </tbody>
                   </table>
        
        </div>


        {/* This component renders a form for each line of 'new items' user fills out. */}
                    <NewFoodItem 
                        createNewItem={createNewItem}
                        itemsPurchased={itemsPurchased}
                        setItemsPurchased={setItemsPurchased}
                        setRendering={setRendering}
                        newPurchaseInstance={newPurchaseInstance}
                    /> 
                </div> 
                :
                <div className = "purchases">
        {/* form to enter in date of new purchase */}
                    <form id="newPurchase" onSubmit={handlePurchaseDateSubmit}>
                        <h3>Enter Date of Purchase: </h3>
                        <div className="form-group col-xs-6">
                            <label>Date of Purchase &nbsp;</label>
                            <input type="date" name="date" value={purchaseData.date} onChange={handlePurchaseDateChange}/>
                        </div>
                        <div className="form-group col-sm-2"> 
                            <button type="submit" className="btn btn-dark">Submit Transaction</button> 
                        </div>
                </form> 
                </div>
                }
            <br/>
        </>
    )
}

export default Purchases;