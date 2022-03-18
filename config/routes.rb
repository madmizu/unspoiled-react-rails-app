Rails.application.routes.draw do
  
  resources :recipe_ingredients #all routes
  resources :shopping_list_items #all routes
  resources :ingredients #all routes
  resources :recipes #all routes
  resources :inventory_items #all routes
  resources :purchases, only: [:index, :show, :create, :destroy] #no update
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
