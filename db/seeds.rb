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
        # 10.times  do
        #     Ingredient.create({name: Faker::Food.ingredient, in_stock:true})
        # end
        
        # 10.times  do
        #     Ingredient.create({name: Faker::Food.ingredient, in_stock:false})
        # end

        # Ravioli Recipe
        Ingredient.create({name: "Cheese-Filled Ravioli", in_stock:false})
        Ingredient.create({name: "Tomato Sauce", in_stock:false})
        Ingredient.create({name: "Dried Basil", in_stock:false})
        Ingredient.create({name: "Shredded Cheese", in_stock:false})

        # Enchiladas Recipe
        Ingredient.create({name: "Flour Tortillas", in_stock:false})
        Ingredient.create({name: "Ground Beef", in_stock:false})
        Ingredient.create({name: "Mild Red Enchilada Sauce", in_stock:false})
        Ingredient.create({name: "Salsa", in_stock:false})
        # Ingredient.create({name: "Shredded Cheese", in_stock:false}) - already created

        # Buffalo Chicken Recipe
        Ingredient.create({name: "Boneless Chicken Breasts", in_stock:false})
        Ingredient.create({name: "Buffalo Sauce", in_stock:false})
        Ingredient.create({name: "Ranch Seasoning Mix", in_stock:false})

        # BBQ Bacon Ranch Chicken Recipe
        # Ingredient.create({name: "Boneless Chicken Breasts", in_stock:false}) - already created
        Ingredient.create({name: "BBQ Sauce", in_stock:false})
        # Ingredient.create({name: "Ranch Seasoning Mix", in_stock:false}) - already created
        Ingredient.create({name: "Bacon", in_stock:false})

    puts "Creating Recipes..." #title, link, image
        # 10.times do
        #     Recipe.create({title: Faker::Food.dish, link: "https://tasty.co/", image: "https://i.ibb.co/k1TcNtQ/recipe-default-image.jpg"})
        # end

        Recipe.create({
            title: "Ravioli",
            link: "https://www.pillsbury.com/recipes/speedy-ravioli-bake/912c8091-0f1e-4ffc-99a7-98fbcd062750",
            image: "https://images-gmi-pmc.edge-generalmills.com/945cb308-b01e-4a37-8a71-bb16caf3c76a.jpg"
        })
        Recipe.create({
            title: "Enchiladas",
            link: "https://www.pillsbury.com/recipes/5-ingredient-beef-enchilada-casserole/dde5a588-c427-4d09-b18c-83d064032550",
            image: "https://images-gmi-pmc.edge-generalmills.com/cb5f971b-4174-4022-a117-467816c28c71.jpg"
        })

        Recipe.create({
            title: "Buffalo Chicken",
            link: "https://thefrugalgirls.com/2013/09/crockpot-buffalo-chicken-recipe.html",
            image: "https://i0.wp.com/thefrugalgirls.com/wp-content/uploads/2013/09/Crockpot-Buffalo-Chicken-Recipe.jpg?w=600&ssl=1"
        })

        Recipe.create({
            title: "BBQ Bacon Ranch Chicken",
            link: "https://thefrugalgirls.com/2015/01/crockpot-bbq-bacon-ranch-chicken-recipe.html",
            image: "https://i2.wp.com/thefrugalgirls.com/wp-content/uploads/2015/01/Crockpot-BBQ-Bacon-Ranch-Chicken-Recipe.jpg?w=600&ssl=1"
        })
        

    puts "Creating Recipe Ingredients..." #qty, measure, optional?, recipeID, ingredientID
        # 40.times do
        #     RecipeIngredient.create({qty: rand(1..10), measure: Faker::Food.measurement, optional:true, recipe_id: Recipe.all.sample.id, ingredient_id: Ingredient.all.sample.id})
        # end

    # Recipe 1
        # Ingredient 1 - Cheese-Filled Ravioli
        RecipeIngredient.create({
            qty: 2,
            measure: "Packets",
            optional: false,
            recipe_id: 1,
            ingredient_id: 1
        })
        # Ingredient 2 - Tomato Sauce
        RecipeIngredient.create({
            qty: 1,
            measure: "Jar",
            optional: false,
            recipe_id: 1,
            ingredient_id: 2
        })
        # Ingredient 3 - Dried Basil
        RecipeIngredient.create({
            qty: 1,
            measure: "Teaspoon",
            optional: false,
            recipe_id: 1,
            ingredient_id: 3
        })
        # Ingredient 4 - Shredded cheese
        RecipeIngredient.create({
            qty: 2,
            measure: "Cups",
            optional: false,
            recipe_id: 1,
            ingredient_id: 4
        })
    # Recipe 2
        # Ingredient 5 - Flour Tortillas
        RecipeIngredient.create({
            qty: 8,
            measure: "Whole",
            optional: false,
            recipe_id: 2,
            ingredient_id: 5
        })
        # Ingredient 6 - Ground Beef
        RecipeIngredient.create({
            qty: 1,
            measure: "Pound",
            optional: false,
            recipe_id: 2,
            ingredient_id: 6
        })
        # Ingredient 7 - Mild Red Enchilada Sauce
        RecipeIngredient.create({
            qty: 1,
            measure: "Can",
            optional: false,
            recipe_id: 2,
            ingredient_id: 7
        })
        # Ingredient 8 - Salsa
        RecipeIngredient.create({
            qty: 1,
            measure: "Jar",
            optional: false,
            recipe_id: 2,
            ingredient_id: 8
        })
        # Ingredient 4 - Shredded Cheese
        RecipeIngredient.create({
            qty: 2,
            measure: "Cups",
            optional: false,
            recipe_id: 2,
            ingredient_id: 4
        })
    # Recipe 3
        # Ingredient 9 - Bonless Chicken Breasts
        RecipeIngredient.create({
            qty: 3,
            measure: "Pounds",
            optional: false,
            recipe_id: 3,
            ingredient_id: 9
        })
        # Ingredient 10 - Buffalo Sauce
        RecipeIngredient.create({
            qty: 1,
            measure: "Bottle",
            optional: false,
            recipe_id: 3,
            ingredient_id: 10
        })
        # Ingredient 11 - Ranch Seasoning Mix
        RecipeIngredient.create({
            qty: 1,
            measure: "Packet",
            optional: false,
            recipe_id: 3,
            ingredient_id: 11
        })
    # Recipe 4
        # Ingredient 9 - Bonless Chicken Breasts
        RecipeIngredient.create({
            qty: 3,
            measure: "Pounds",
            optional: false,
            recipe_id: 4,
            ingredient_id: 9
        })
        # Ingredient 12 - BBQ Sauce
        RecipeIngredient.create({
            qty: 1,
            measure: "Bottle",
            optional: false,
            recipe_id: 4,
            ingredient_id: 12
        })
        # Ingredient 11 - Ranch Seasoning Mix
        RecipeIngredient.create({
            qty: 1,
            measure: "Packet",
            optional: false,
            recipe_id: 4,
            ingredient_id: 11
        })
        # Ingredient 13 - Bacon
        RecipeIngredient.create({
            qty: 16,
            measure: "Ounces",
            optional: false,
            recipe_id: 4,
            ingredient_id: 13
        })

    puts "Creating Shopping List Items..." #qty, measure, ingredientID
    10.times do
        ShoppingListItem.create({qty: rand(1..10),measure: Faker::Food.measurement, ingredient_id: Ingredient.all.sample.id} )
    end

puts "✅ Done seeding!"
