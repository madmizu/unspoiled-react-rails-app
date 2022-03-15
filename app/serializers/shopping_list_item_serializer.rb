class ShoppingListItemSerializer < ActiveModel::Serializer
  attributes :id, :qty, :measure
  has_one :ingredient
end
