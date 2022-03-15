puts "Destroying all seeds..."
Purchase.destroy_all
SpoilDate.destroy_all
GroceryItem.destroy_all
ShoppingListItem.destroy_all
InventoryItem.destroy_all
Recipe.destroy_all
RecipeIngredient.destroy_all


puts "Creating categories..."
cateories = ['dairy', 'meat', 'dry good', 'ready-to-eat', 'other']

puts "🌱 Seeding spices..."
    puts "Creating Purchases..."
        5.times do
            Purchase.create({purchase_date: Faker::Date.between(from: '2021-12-23', to: '2022-01-06') })
        end

    puts "Creating Spoil Dates..."    
        10.times do
            SpoilDate.create({spoil_date: Faker::Date.between(from: '2022-01-05', to: '2022-03-28') })
        end
    puts "Creating Grocery Items..."
        20.times  do
            GroceryItem.create({item_name: Faker::Food.ingredient, purchase_id: Purchase.all.sample.id, spoil_date_id: SpoilDate.all.sample.id})
        end
        10.times do
            GroceryItem.create({item_name: Faker::Food.fruits, purchase_id: Purchase.all.sample.id, spoil_date_id: SpoilDate.all.sample.id})
        end
        10.times do
            GroceryItem.create({item_name: Faker::Food.vegetables, purchase_id: Purchase.all.sample.id, spoil_date_id: SpoilDate.all.sample.id})
        end
        10.times do
            GroceryItem.create({item_name: Faker::Food.spice, purchase_id: Purchase.all.sample.id, spoil_date_id: SpoilDate.all.sample.id})
        end

    puts "Creating Shopping List Items..."
        10.times do
            ShoppingListItem.create({quantity: rand(1..10), unit_of_measure: Faker::Food.measurement, grocery_item_id: GroceryItem.all.sample.id})
        end

    puts "Creating Inventory Items..."
        40.times do
            InventoryItem.create({quantity: rand(1..10), unit_of_measure: Faker::Food.measurement, grocery_item_id: GroceryItem.all.sample.id})
        end

    puts "Creating Recipes..."
        6.times do 
            Recipe.create({recipe_name: Faker::Food.dish, link: "insert url", image: "insert photo"})
        end

    puts "Creating Recipe Ingredients..."
        30.times do
            RecipeIngredient.create({quantity: rand(1..10), unit_of_measure: Faker::Food.measurement, required: 'true', recipe: Recipe.all.sample, grocery_item_id: GroceryItem.all.sample.id})
        end

        10.times do
            RecipeIngredient.create({quantity: rand(1..10), unit_of_measure: Faker::Food.measurement, required: 'false', recipe: Recipe.all.sample, grocery_item_id: GroceryItem.all.sample.id})
        end

puts "✅ Done seeding!"
