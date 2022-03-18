class ShoppingListItemsController < ApplicationController

    def index
        render json: ShoppingListItem.all
    end

    def show
        item = find_shopping_item
        render json: item, status: :ok
    end

    def create
        item = ShoppingListItem.create!(shopping_item_params)
        render json: item, status: :created
    end

    def update
        item = find_shopping_item
        item.update!(shopping_item_params)
        render json: item
    end

    def destroy
        item = find_shopping_item
        item.destroy!
        head :no_content
    end

    private 

        def shopping_item_params
            params.permit(:qty, :measure, :ingredient_id)
        end

        def find_shopping_item
            ShoppingListItem.find(params[:id])
        end
end
