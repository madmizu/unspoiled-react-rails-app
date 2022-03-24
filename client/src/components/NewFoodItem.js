

function NewFoodItem ({
    newPurchaseInstance,
    createNewItem,
    itemsPurchased,
    setItemsPurchased,
    setRendering,
    formData,
    setFormData,
    setPrompt,
    prompt,
    addedFromIngredients,
    setAddedFromIngredients,
    setIngredientData,
    ingredientData,
    ingredientsPurchased,
    setIngredientsPurchased
} ) {

    function handleChange (e) {
        if (e.target.name === "name") {
            setIngredientData({...ingredientData, name: e.target.value})
        } else {
            setFormData({...formData, [e.target.name]:e.target.value})
        }

    }
console.log(itemsPurchased)
    async function handleAddItem (e) {
        e.preventDefault()
        setRendering("purchases")
            const addedItem = ({...formData, purchase_id:newPurchaseInstance.id})
            itemsPurchased.push(addedItem)
            setItemsPurchased(itemsPurchased)
            ingredientsPurchased.push(ingredientData)
            setIngredientsPurchased(ingredientsPurchased)
        await displayNewItems()
        setFormData({
            qty:'',
            measure:'',
            spoil_date:'',
            purchase_id: '',
            ingredient_id: '',
        })
        setPrompt("new")
        setIngredientData({
            name: "",
            in_stock: "true",
          })
        setAddedFromIngredients({})
    }

    function displayNewItems () {
        return new Promise(resolve => {
            setTimeout(()=> {
                resolve(setRendering("newItems"));
            }, 1);
        })
    }

    async function handleSubmitPurchase (e) {
        for (let i=0; i<itemsPurchased.length; i++) {
            if(itemsPurchased[i].ingredient_id) {
                createNewItem(itemsPurchased[i]) 
            } else {
                const newIngredient = await createNewItem(ingredientsPurchased[i])
                console.log(newIngredient)

                const newInfo = ({...itemsPurchased[i], ingredient_id: "NEW NUM"})
            }
        createNewItem(itemsPurchased[i])  
        }
        setItemsPurchased([])
        setRendering("purchased")

    }

    return (
        <div>

        <form onSubmit={handleAddItem}>
            <div className="newItems">

                <div className="form-group col-xs-3">   
                    <label>Item Name</label>
                    {addedFromIngredients.name ? <p>{addedFromIngredients.name}</p>
                    : <input 
                        name="name"
                        value={ingredientData.name}
                        placeholder="Enter Item here..."
                        onChange={handleChange}
                    />
                    }
                    
                </div>
                <div className="form-group col-xs-3">
                    <label>Quantity</label>
                    <input type="number" name="qty" value={formData.qty} onChange={handleChange}/>
                </div>
                <div className="form-group col-xs-3">
                    <label>Unit of Measure</label>
                    <select type="string" name="measure" value={formData.measure} onChange={handleChange}>
                        <option>Select a Unit</option>
                        <option>Whole Item</option>
                        <option>Box</option>
                        <option>Bag</option>
                        <option>Jar</option>
                        <option>Can</option>
                        <option>Bottle</option>
                        <option>Package</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group col-xs-3">
                    <label>Spoil Date </label>
                    <input type="date" name="spoil_date" value={formData.spoil_date} onChange={handleChange}/>
                </div>
            </div>
            <div className="form-group col-sm-4">
                <button type="submit" className="btn btn-secondary">Add Item to Purchase</button>
            </div>
        </form>
        <div className="form-group col-sm-4">
            <button type="click" className="btn btn-dark"  onClick={(e)=>handleSubmitPurchase(e)}>Submit Purchase</button>
        </div>
    </div>
    )
}

export default NewFoodItem;