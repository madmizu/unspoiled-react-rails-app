puts "Destroying all seeds..."
Purchase.destroy_all
InventoryItem.destroy_all

Ingredient.destroy_all
ShoppingListItem.destroy_all

Recipe.destroy_all
RecipeIngredient.destroy_all

puts "🌱 Seeding..."
    puts "Creating Purchases..." # date
        5.times do
            Purchase.create({purchase_date: Faker::Date.between(from: '2021-12-23', to: '2022-01-06') })
        end

    puts "Creating Inventory Items..."    #name, qty, measure, spoil_date, purchaseID
        20.times do
            Inventory.create({name: Faker::Food.ingredient, qty: rand(1..10),measure: Faker::Food.measurement, spoil_date: Faker::Date.between(from: '2022-03-15', to: '2022-06-28'), purchase: Purchase.all.sample.id} )
        end

    puts "Creating Ingredients..." #name, in_stock?, shoppingListID?
        10.times  do
            Ingredient.create({name: Faker::Food.ingredient, in_stock:true, shopping_list_item: ShoppingListItem.all.sample.id)
        end
        
        10.times  do
            Ingredient.create({name: Faker::Food.ingredient, in_stock:false, shopping_list_item: ShoppingListItem.all.sample.id})
        end

        5.times  do
            Ingredient.create({name: Faker::Food.ingredient, in_stock:false, shopping_list_item: null})
        end

        5.times  do
            Ingredient.create({name: Faker::Food.ingredient, in_stock:true, shopping_list_item: null})
        end
    puts "Creating Recipes..." #title, link, image
        10.times do
            Recipe.create({quantity: rand(1..10), unit_of_measure: Faker::Food.measurement, grocery_item_id: GroceryItem.all.sample.id})
        end

    puts "Creating Recipe Ingredients..." #qty, measure, optional?, recipeID, ingredientID
        40.times do
            InventoryItem.create({quantity: rand(1..10), unit_of_measure: Faker::Food.measurement, grocery_item_id: GroceryItem.all.sample.id})
        end

puts "✅ Done seeding!"
