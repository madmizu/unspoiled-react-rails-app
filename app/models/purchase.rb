class Purchase < ApplicationRecord
    validates :date, presence: true

    has_many :inventory_items
end
