class InventoryItem < ApplicationRecord
  validates :qty, numericality: { greater_than_or_equal_to: 1 }
  validates :measure, presence: true
  validates :spoil_date, presence: true
  
  belongs_to :purchase
  belongs_to :ingredient
end
