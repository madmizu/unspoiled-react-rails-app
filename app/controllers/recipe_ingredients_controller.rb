class RecipeIngredientsController < ApplicationController

    def index
        render json: RecipeIngredient.all
    end

    def show
        item = find_recipe_item
        render json: item, status: :ok
    end

    def create
        item = RecipeIngredient.create!(recipe_item_params)
        render json: item, status: :created
    end

    def update
        item = find_recipe_item
        item.update!(recipe_item_params)
        render json: item
    end

    def destroy
        item = find_recipe_item
        item.destroy!
        head :no_content
    end

    private 

        def recipe_item_params
            params.permit(:qty, :measure, :optional, :recipe_id, :ingredient_id)
        end

        def find_recipe_item
            RecipeIngredient.find(params[:id])
        end
end
