export const colors ={
    COLOR_PRIMARY : "#f96163", 
    COLOR_LIGHT : "#fFF", 
    COLOR_DARK : "#000",
    COLOR_DARK_ALT : "#262626",
}


export const categories =[
    {
        id: "01",
        category : "Breakfast",
    },
    {
        id: "02",
        category : "Lunch",
    },
    {
        id: "03",
        category : "Dinner",
    },
    {
        id: "04",
        category : "Asian",
    },
    {
        id: "05",
        category : "Italian",
    },
    {
        id: "06",
        category : "Desserts",
    },
    {
        id: "07",
        category : "Vegetarian",
    },
    {
        id: "08",
        category : "SeaFood",
    }

]
export const ReciepeList = [
    {
        id: "01",
        name: "Tuna Tartare",
        image: require("../../assets/images/tuna.jpg"),
        rating: "4.2",
        ingredients: ["Fresh Tuna", "Lime Juice", "Red Onion", "Avocado"],
        time: "40 mins",
        difficulty: "easy",
        calories: "420 cal",
        color: "green",
        description: [
            "A refreshing and healthy appetizer made with fresh tuna and zesty lime juice.",
            "Perfect for seafood lovers seeking a light, flavorful dish."
        ],
        steps: [
            "Dice the fresh tuna into small cubes.",
            "Mix lime juice, finely chopped red onion, and avocado in a bowl.",
            "Combine all ingredients, season with salt and pepper, and serve chilled."
        ]
    },
    {
        id: "02",
        name: "Lasagna",
        image: require("../../assets/images/Lasagna.jpg"),
        rating: "3.7",
        ingredients: ["Lasagna Noodles", "Ground Beef", "Red Onion", "Ricotta cheese"],
        time: "1 hour",
        difficulty: "medium",
        calories: "600 cal",
        color: "violet",
        description: [
            "A classic Italian dish with layers of pasta, meat sauce, and creamy ricotta.",
            "Rich, comforting, and perfect for family dinners."
        ],
        steps: [
            "Cook lasagna noodles as per package instructions.",
            "Prepare a meat sauce by sautéing ground beef and red onion in tomato sauce.",
            "Layer noodles, meat sauce, and ricotta in a baking dish, and bake until golden."
        ]
    },
    {
        id: "03",
        name: "Hot Dog",
        image: require("../../assets/images/hot-dog.jpg"),
        rating: "3.3",
        ingredients: ["Buns", "Frankfurters", "Ketchup", "Mustard"],
        time: "20 mins",
        difficulty: "hard",
        calories: "300 cal",
        color: "olive",
        description: [
            "An American favorite, perfect for quick meals or casual gatherings.",
            "Customizable with various toppings to suit all tastes."
        ],
        steps: [
            "Grill or boil the frankfurters until cooked.",
            "Place the cooked frankfurters in a bun.",
            "Top with ketchup, mustard, and any additional toppings of choice."
        ]
    },
    {
        id: "04",
        name: "Manchurian",
        image: require("../../assets/images/manchuri.jpg"),
        rating: "3.2",
        ingredients: ["Cauliflower", "Soy Sauce", "Ginger", "Garlic"],
        time: "40 mins",
        difficulty: "medium",
        calories: "320 cal",
        color: "maroon",
        description: [
            "A popular Indo-Chinese dish known for its spicy and tangy flavor.",
            "Perfect for serving as an appetizer or main course."
        ],
        steps: [
            "Prepare a batter and coat cauliflower florets.",
            "Deep fry the coated florets until crispy.",
            "Sauté ginger, garlic, and soy sauce in a pan, then toss in the fried florets."
        ]
    },
    {
        id: "05",
        name: "Chicken",
        image: require("../../assets/images/butt-chic.jpg"),
        rating: "2.2",
        ingredients: ["Chicken breasts", "Soy Sauce", "Salt", "Black pepper"],
        time: "30 mins",
        difficulty: "Easy",
        calories: "320 cal",
        color: "#f39c12",
        description: [
            "A simple and flavorful chicken recipe that’s quick to prepare.",
            "Ideal for busy weeknights or meal prep."
        ],
        steps: [
            "Marinate chicken breasts in soy sauce, salt, and black pepper.",
            "Grill or pan-sear the chicken until cooked through.",
            "Serve hot with a side of vegetables or rice."
        ]
    },
    {
        id: "06",
        name: "Cupcakes",
        image: require("../../assets/images/cake.jpg"),
        rating: "3.2",
        ingredients: ["Flour", "Sugar", "Cream", "Flavors"],
        time: "50 mins",
        difficulty: "medium",
        calories: "520 cal",
        color: "pink",
        description: [
            "Delightful individual cakes that are soft, fluffy, and full of flavor.",
            "Perfect for celebrations or as a sweet treat."
        ],
        steps: [
            "Mix flour, sugar, and cream to form a smooth batter.",
            "Add desired flavors and pour the batter into cupcake molds.",
            "Bake at 350°F (175°C) for 20-25 minutes, then cool and frost as desired."
        ]
    }
];
