class InventoryItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :qty, :measure, :spoil_date
  belongs_to :purchase
end
