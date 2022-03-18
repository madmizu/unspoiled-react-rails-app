class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :date
  has_many :inventory_items
end
