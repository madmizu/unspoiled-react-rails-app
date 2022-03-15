class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :id, :qty, :measure, :optional
  has_one :recipe
  has_one :ingredient
end
