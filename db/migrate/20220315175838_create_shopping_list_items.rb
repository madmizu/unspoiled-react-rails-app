class CreateShoppingListItems < ActiveRecord::Migration[6.1]
  def change
    create_table :shopping_list_items do |t|
      t.integer :qty
      t.string :measure
      t.references :ingredient, null: false, foreign_key: true

      t.timestamps
    end
  end
end
