class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :link, :image
  has_many :recipe_ingredients
end
