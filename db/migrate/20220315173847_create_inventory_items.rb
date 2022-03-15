class CreateInventoryItems < ActiveRecord::Migration[6.1]
  def change
    create_table :inventory_items do |t|
      t.string :name
      t.integer :qty
      t.string :measure
      t.date :spoil_date
      t.references :purchase, null: false, foreign_key: true

      t.timestamps
    end
  end
end
