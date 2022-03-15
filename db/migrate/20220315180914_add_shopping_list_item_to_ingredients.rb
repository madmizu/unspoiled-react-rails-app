class AddShoppingListItemToIngredients < ActiveRecord::Migration[6.1]
  def change
    add_reference :ingredients, :shopping_list_item, null: false, foreign_key: true
  end
end
