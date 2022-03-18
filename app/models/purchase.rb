class Purchase < ApplicationRecord
    has_many :inventory_items
end
