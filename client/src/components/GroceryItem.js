function GroceryItem({ item, handleDelete, body, allIngredients}) {
  const section = body === "inventory" ? "inventory_items" : "shopping_list_items";
  let i = 0;
  function renderRecipes(name) {
    i++;
    return <li key={name + i}>{name}</li>;
  }

  return (
    <tr>
      <th scope="row" onClick={() => handleDelete(section, item.id)}>
        X
      </th>
      {body === "inventory" ? <td>{item.spoil_date}</td> : null}
      <td> {item.ingredient.name} </td>
      <td> {item.qty} x {item.measure} </td>
      <td> {allIngredients.find ((i) => i.id === item.ingredient.id).recipes.map ((each) => (
             <li key={each.id}> {each.title} </li>
      ))}  </td>
    </tr>
  );
}
export default GroceryItem;

// (e)=>handleDelete(id)
