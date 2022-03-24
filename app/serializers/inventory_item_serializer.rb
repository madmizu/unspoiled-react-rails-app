class InventoryItemSerializer < ActiveModel::Serializer
  attributes :id, :qty, :measure, :spoil_date
  has_one :purchase
  belongs_to :ingredient
end
