class ShoppingListItemSerializer < ActiveModel::Serializer
  attributes :id, :qty, :measure
  belongs_to :ingredient
end
