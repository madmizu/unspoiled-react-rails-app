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
            Purchase.create({date: Faker::Date.between(from: '2021-12-23', to: '2022-01-06') })
        end

    puts "Creating Inventory Items..."    #name, qty, measure, spoil_date, purchaseID
        10.times do
            InventoryItem.create({name: Faker::Food.ingredient, qty: rand(1..10), measure: Faker::Food.measurement, spoil_date: Faker::Date.between(from: '2022-03-15', to: '2022-06-28'), purchase_id: Purchase.all.sample.id} )
        end

    puts "Creating Ingredients..." #name, in_stock?
        10.times  do
            Ingredient.create({name: Faker::Food.ingredient, in_stock:true})
        end
        
        10.times  do
            Ingredient.create({name: Faker::Food.ingredient, in_stock:false})
        end

    puts "Creating Shopping List Items..." #qty, measure, ingredientID
        10.times do
            ShoppingListItem.create({qty: rand(1..10),measure: Faker::Food.measurement, ingredient_id: Ingredient.all.sample.id} )
        end
    
    puts "Creating Recipes..." #title, link, image
        10.times do
            Recipe.create({title: Faker::Food.dish, link: "https://tasty.co/", image: "https://i.ibb.co/k1TcNtQ/recipe-default-image.jpg"})
        end

    puts "Creating Recipe Ingredients..." #qty, measure, optional?, recipeID, ingredientID
        40.times do
            RecipeIngredient.create({qty: rand(1..10), measure: Faker::Food.measurement, optional:true, recipe_id: Recipe.all.sample.id, ingredient_id: Ingredient.all.sample.id})
        end

puts "✅ Done seeding!"
