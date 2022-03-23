class RecipesController < ApplicationController
    def index
        render json: Recipe.all, include: ['recipe_ingredients', 'recipe_ingredients.ingredient']
    end

    def show
        recipe = find_recipe
        render json: recipe, status: :ok
    end

    def create
        recipe = Recipe.create!(recipe_params)
        render json: recipe, status: :created
    end

    def update
        recipe = find_recipe
        recipe.update!(recipe_params)
        render json: recipe
    end

    def destroy
        recipe = find_recipe
        recipe.destroy!
        head :no_content
    end

    private 

    def recipe_params
        params.permit(:title, :link, :image)
    end

    def find_recipe
        Recipe.find(params[:id])
    end
end
