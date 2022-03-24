puts "Destroying all seeds..."
Purchase.destroy_all
InventoryItem.destroy_all

Ingredient.destroy_all
ShoppingListItem.destroy_all

Recipe.destroy_all
RecipeIngredient.destroy_all

puts "🌱 Seeding..."
    puts "Creating Purchases..." # date
        3.times do
            Purchase.create({date: Faker::Date.between(from: '2022-3-10', to: '2022-3-24') })
        end
        
    puts "Creating Ingredients..." #name, in_stock?

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

    puts "Creating Inventory Items..."    # qty, measure, spoil_date, purchaseID, Ingredient_Id
    # Ingredient 1 - Cheese-Filled Ravioli (instock)
        InventoryItem.create({
            qty: 2,
            measure: "Packets",
            spoil_date: Faker::Date.between(from: '2022-03-15', to: '2022-06-28'),
            purchase_id: Purchase.all.sample.id,
            ingredient_id: 1
        } )
        # Ingredient 4 - Shredded cheese (instock)
        InventoryItem.create({
            qty: 2,
            measure: "Cups",
            spoil_date: Faker::Date.between(from: '2022-03-15', to: '2022-06-28'),
            purchase_id: Purchase.all.sample.id,
            ingredient_id: 4
        } )
        # Ingredient 5 - Flour Tortillas
        InventoryItem.create({
            qty: 8,
            measure: "Whole",
            spoil_date: Faker::Date.between(from: '2022-03-15', to: '2022-06-28'),
            purchase_id: Purchase.all.sample.id,
            ingredient_id: 5
        } )
        # Ingredient 6 - Ground Beef
        InventoryItem.create({
            qty: 1,
            measure: "Pound",
            spoil_date: Faker::Date.between(from: '2022-03-15', to: '2022-06-28'),
            purchase_id: Purchase.all.sample.id,
            ingredient_id: 6
        } )
        # Ingredient 7 - Mild Red Enchilada Sauce
        InventoryItem.create({
            qty: 1,
            measure: "Can",
            spoil_date: Faker::Date.between(from: '2022-03-30', to: '2022-06-28'),
            purchase_id: Purchase.all.sample.id,
            ingredient_id: 8
        } )
        # Ingredient 8 - Salsa
        InventoryItem.create({
            qty: 1,
            measure: "Jar",
            spoil_date: Faker::Date.between(from: '2022-03-15', to: '2022-06-28'),
            purchase_id: Purchase.all.sample.id,
            ingredient_id: 8
        } )
        # Ingredient 11 - Ranch Seasoning Mix
        InventoryItem.create({
            qty: 1,
            measure: "Packet",
            spoil_date: Faker::Date.between(from: '2022-03-15', to: '2022-06-28'),
            purchase_id: Purchase.all.sample.id,
            ingredient_id: 8
        } )

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
        

    puts "Creating Recipe Ingredients..." #qty, measure, recipeID, ingredientID

    # Recipe 1
        # Ingredient 1 - Cheese-Filled Ravioli (instock)
        RecipeIngredient.create({
            qty: 2,
            measure: "Packets",
            optional: false,
            recipe_id: 1,
            ingredient_id: 1
        })
        # Ingredient 2 - Tomato Sauce (wishlist)
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
        # Ingredient 4 - Shredded cheese (instock)
        RecipeIngredient.create({
            qty: 2,
            measure: "Cups",
            optional: false,
            recipe_id: 1,
            ingredient_id: 4
        })
    # Recipe 2
        # Ingredient 5 - Flour Tortillas (instock)
        RecipeIngredient.create({
            qty: 8,
            measure: "Whole",
            optional: false,
            recipe_id: 2,
            ingredient_id: 5
        })
        # Ingredient 6 - Ground Beef (instock)
        RecipeIngredient.create({
            qty: 1,
            measure: "Pound",
            optional: false,
            recipe_id: 2,
            ingredient_id: 6
        })
        # Ingredient 7 - Mild Red Enchilada Sauce (instock)
        RecipeIngredient.create({
            qty: 1,
            measure: "Can",
            optional: false,
            recipe_id: 2,
            ingredient_id: 7
        })
        # Ingredient 8 - Salsa (instock)
        RecipeIngredient.create({
            qty: 1,
            measure: "Jar",
            optional: false,
            recipe_id: 2,
            ingredient_id: 8
        })
        # Ingredient 4 - Shredded Cheese (instock)
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
        # Ingredient 10 - Buffalo Sauce (wishlist)
        RecipeIngredient.create({
            qty: 1,
            measure: "Bottle",
            optional: false,
            recipe_id: 3,
            ingredient_id: 10
        })
        # Ingredient 11 - Ranch Seasoning Mix (instock)
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
        # Ingredient 11 - Ranch Seasoning Mix (instock)
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

    # Ingredient 2 - Tomato Sauce
        ShoppingListItem.create({
            qty: 1,
            measure: "Jar",
            ingredient_id: 2
            } )

    # Ingredient 10 - Buffalo Sauce
        ShoppingListItem.create({
            qty: 1,
            measure: "Bottle",
            ingredient_id: 10
            } )

    # Ingredient 13 - Bacon
        ShoppingListItem.create({
            qty: 16,
            measure: "Ounces",
            ingredient_id: 13
            } )

puts "✅ Done seeding!"
