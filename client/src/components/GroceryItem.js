


function GroceryItem ({item, handleDelete, body}) {

    const section = body === "inventory" ? "inventory" : "shopping-list"
    let i = 0
    function renderRecipes (name) {
        i++
        return <li key={name+i}>{name}</li>
    }

    return (
        <tr>
            <th scope="row" onClick={()=>handleDelete(section, item.id)}>X</th>
            {body === "inventory" ? <td>{item.spoil_date}</td> : null}
            <td>{item.name}</td>
            <td>{item.qty} x {item.measure}</td>
            {/* <td>{item.grocery_item.recipe_ingredients.map(item=>item.recipe.recipe_name).map(name=>renderRecipes(name))}
            </td> */}
        </tr>
    )
}
export default GroceryItem;

// (e)=>handleDelete(id)