class RecipeIngredient < ApplicationRecord
  validates :qty, numericality: { greater_than_or_equal_to: 0 }
  validates :measure, presence: true

  belongs_to :recipe
  belongs_to :ingredient
end
