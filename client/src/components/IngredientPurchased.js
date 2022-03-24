

function IngredientPurchased({
  ingredient,
  formData, 
  setFormData,
  setPrompt,
  setAddedFromIngredients,
  setIngredientData,
  ingredientData,
}) {

  function handleAddItem() {
    setIngredientData({...ingredientData, name: ingredient.name})
    setFormData({ ...formData, ingredient_id: ingredient.id });
    setAddedFromIngredients(ingredient)
    setPrompt("edit")
  }

  return (
    <tr>
      <td> {ingredient.name}</td>
      <td>
        {ingredient.recipes.map((each) => (
            <li key={each.id}>{each.title}</li>
        ))}
      </td>
      <th scope="row" onClick={handleAddItem}>
         + Add Ingredient to Purchase
      </th>
    </tr>
  );
}

export default IngredientPurchased;
