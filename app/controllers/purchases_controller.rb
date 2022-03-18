class PurchasesController < ApplicationController
    
    def index
        render json: Purchase.all
    end

    def show
        purchase = find_purchase
        render json: purchase, status: :ok
    end

    def create
        purchase = Purchase.create!(purchase_params)
    end

    def destroy_all
        purchase = find_purchase
        purchase.destroy!
        head :no_content
    end

    private

        def purchase_params
            params.permit(:date)
        end

        def find_purchase
            Purchase.find(params[:id])
        end
end
