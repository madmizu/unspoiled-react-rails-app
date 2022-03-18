class IngredientsController < ApplicationController

    def index
        render json: Ingredient.all
    end

    def show
        ingredient = find_ingredient
        render json: ingredient, status: :ok
    end

    def create
        ingredient = Ingredient.create!(ingredient_params)
        render json: ingredient, status: :created
    end

    def update
        ingredient = find_ingredient
        ingredient.update!(ingredient_params)
        render json: ingredient
    end

    def destroy
        ingredient = find_ingredient
        ingredient.destroy!
        head :no_content
    end

    private 

        def ingredient_params
            params.permit(:name, :in_stock, :shopping_list_item_id)
        end

        def find_ingredient
            Ingredient.find(params[:id])
        end

end
