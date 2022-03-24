class InventoryItemsController < ApplicationController

    def index
        render json: InventoryItem.all.order(:spoil_date)
    end

    def show
        item = find_inventory_item
        render json: item, status: :ok
    end

    def create
        item = InventoryItem.create! (inventory_item_params)
        render json: item, status: :created
    end

    def update
        item = find_inventory_item
        item.update!(inventory_item_params)
        render json: item
    end
    
    def destroy
        item = find_inventory_item
        item.destroy!
        head :no_content
    end


    private

        def inventory_item_params
            params.permit(:qty, :measure, :spoil_date, :purchase_id, :ingredient_id)
        end

        def find_inventory_item
            InventoryItem.find(params[:id])
        end

end
