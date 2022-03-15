class InventoryItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :qty, :measure, :spoil_date
  has_one :purchase
end
