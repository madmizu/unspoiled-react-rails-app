class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :in_stock
  has_one :shopping_list_item
  has_one :inventory_item
  has_many :recipe_ingredients
  has_many :recipes
end
