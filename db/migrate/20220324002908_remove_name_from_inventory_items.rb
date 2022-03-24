class RemoveNameFromInventoryItems < ActiveRecord::Migration[6.1]
  def change
    remove_column :inventory_items, :name, :string
  end
end
