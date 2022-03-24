class Ingredient < ApplicationRecord
    validates :name, presence: true

    has_one :shopping_list_item
    has_one :inventory_item

    has_many :recipe_ingredients
    has_many :recipes, through: :recipe_ingredients
end
