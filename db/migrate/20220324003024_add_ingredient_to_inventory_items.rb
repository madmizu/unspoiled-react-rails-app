class AddIngredientToInventoryItems < ActiveRecord::Migration[6.1]
  def change
    add_reference :inventory_items, :ingredient, null: false, foreign_key: true
  end
end
