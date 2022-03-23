class Ingredient < ApplicationRecord
    has_one :shopping_list_item


    has_many :recipe_ingredients
    has_many :recipes, through: :recipe_ingredients
end
