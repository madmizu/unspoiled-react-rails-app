class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :link, :image
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients
end
