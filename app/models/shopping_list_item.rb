class ShoppingListItem < ApplicationRecord
  validates :qty, numericality: { greater_than_or_equal_to: 1 }
  validates :measure, presence: true

  belongs_to :ingredient
end
