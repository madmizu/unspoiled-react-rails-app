class InventoryItem < ApplicationRecord
  belongs_to :purchase
  belongs_to :ingredient
end
