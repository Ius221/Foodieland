import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
    namespaced: true,
    state() {
        return {
            recipes: [
                {
                    id: 1,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--1.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_1.jpg", import.meta.url).href,
                    title: "Garlic Garden Cake",
                    prepTime: "50 Minutes",
                    cookTime: "35 Minutes",
                    name: "Bob",
                    date: "2024-08-26",
                    type: "Italian",
                    nutrition: {
                        calories: 627,
                        fat: "18g",
                        protein: "32g",
                        carbohydrate: "21g",
                        cholesterol: "3mg",
                        quote: "A burst of fresh flavors."
                    },
                    desc: "This recipe offers a delightful blend of fresh ingredients and harmonious flavors. Perfect for meals with family or friends, it balances nutrition and taste beautifully creating memorable dining experiences.",
                    mainIngredient: [
                        { item: "Honey drizzle" },
                        { item: "Sautéed spinach" },
                        { item: "Sliced mushrooms" },
                        { item: "Ground black pepper" },
                        { item: "Organic olive oil" }
                    ],
                    sideIngredients: [
                        { item: "Minced garlic cloves" },
                        { item: "Fresh basil leaves" },
                        { item: "Grilled chicken strips" },
                        { item: "Creamy coconut milk" }
                    ],
                    directions: [
                        {
                            title: "Prepare fresh ingredients thoroughly",
                            description: "Start by gathering all fresh ingredients and washing them thoroughly. Ensure everything is properly prepared and organized for efficient cooking process."
                        },
                        {
                            title: "Cook over medium heat",
                            description: "Cook the main components over medium heat to ensure even cooking and proper flavor development throughout the entire dish."
                        },
                        {
                            title: "Mix ingredients until combined",
                            description: "Combine and mix all ingredients until evenly distributed. This ensures consistent flavor and texture throughout the final dish."
                        },
                        {
                            title: "Season and serve immediately",
                            description: "Season the dish carefully with spices and herbs for optimal taste. Serve immediately while hot for best flavor experience."
                        }
                    ]
                },

                {
                    id: 2,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--2.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_2.jpg", import.meta.url).href,
                    title: "Crispy Veggie Shrimp",
                    prepTime: "45 Minutes",
                    cookTime: "30 Minutes",
                    name: "Alice",
                    date: "2025-06-12",
                    type: "Chinese",
                    nutrition: {
                        calories: 614,
                        fat: "11g",
                        protein: "23g",
                        carbohydrate: "30g",
                        cholesterol: "90mg",
                        quote: "Delicious and satisfying meal!"
                    },
                    desc: "A wonderful fusion of crispy vegetables and tender shrimp creates this amazing dish. The perfect balance of textures and flavors makes it ideal for any occasion or special dinner.",
                    mainIngredient: [
                        { item: "Fresh jumbo shrimp" },
                        { item: "Mixed bell peppers" },
                        { item: "Crispy batter mix" },
                        { item: "Soy sauce blend" },
                        { item: "Sesame oil drizzle" }
                    ],
                    sideIngredients: [
                        { item: "Green onion stalks" },
                        { item: "Ginger root minced" },
                        { item: "Cornstarch for coating" },
                        { item: "Rice wine vinegar" }
                    ],
                    directions: [
                        {
                            title: "Prepare shrimp and vegetables",
                            description: "Clean and devein shrimp thoroughly, then cut vegetables into uniform pieces. Pat everything dry to ensure proper cooking and crispiness."
                        },
                        {
                            title: "Create crispy batter mixture",
                            description: "Mix batter ingredients until smooth consistency is achieved. The batter should coat ingredients evenly without being too thick or thin."
                        },
                        {
                            title: "Fry until golden brown",
                            description: "Deep fry coated ingredients in hot oil until golden brown and crispy. Maintain proper oil temperature for even cooking results."
                        }
                    ]
                },

                {
                    id: 3,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--3.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_3.jpg", import.meta.url).href,
                    title: "Spicy Roasted Soup",
                    prepTime: "60 Minutes",
                    cookTime: "45 Minutes",
                    name: "Ethan",
                    date: "2025-03-25",
                    type: "Mexican",
                    nutrition: {
                        calories: 463,
                        fat: "12g",
                        protein: "26g",
                        carbohydrate: "51g",
                        cholesterol: "27mg",
                        quote: "Healthy and hearty comfort food."
                    },
                    desc: "This warming soup combines roasted vegetables with bold Mexican spices. Rich in nutrients and bursting with flavor, it's perfect for cold days and provides comfort food satisfaction.",
                    mainIngredient: [
                        { item: "Roasted tomatoes" },
                        { item: "Red chili peppers" },
                        { item: "Vegetable broth base" },
                        { item: "Black beans cooked" },
                        { item: "Corn kernels fresh" }
                    ],
                    sideIngredients: [
                        { item: "Lime juice fresh" },
                        { item: "Cilantro leaves chopped" },
                        { item: "Cumin powder ground" },
                        { item: "Avocado slices ripe" }
                    ],
                    directions: [
                        {
                            title: "Roast vegetables until charred",
                            description: "Roast tomatoes and peppers in oven until edges are charred and flavors are concentrated. This adds depth to the soup base."
                        },
                        {
                            title: "Simmer with spices slowly",
                            description: "Combine roasted vegetables with broth and spices. Simmer slowly to allow flavors to meld and develop richness throughout the soup."
                        },
                        {
                            title: "Blend to desired consistency",
                            description: "Blend soup to your preferred texture, leaving some chunks for interest. Adjust seasoning and consistency as needed before serving."
                        }
                    ]
                },

                {
                    id: 4,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--4.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_4.jpg", import.meta.url).href,
                    title: "Honey Glazed Salmon",
                    prepTime: "25 Minutes",
                    cookTime: "20 Minutes",
                    name: "Sarah",
                    date: "2024-11-14",
                    type: "Fusion",
                    nutrition: {
                        calories: 542,
                        fat: "22g",
                        protein: "38g",
                        carbohydrate: "18g",
                        cholesterol: "75mg",
                        quote: "Simply elegant and nutritious."
                    },
                    desc: "Perfectly glazed salmon with a sweet honey coating creates an elegant yet simple dish. Rich in omega-3 fatty acids and protein, it's both healthy and incredibly delicious for any meal.",
                    mainIngredient: [
                        { item: "Fresh salmon fillets" },
                        { item: "Pure honey glaze" },
                        { item: "Soy sauce light" },
                        { item: "Garlic cloves minced" },
                        { item: "Ginger root grated" }
                    ],
                    sideIngredients: [
                        { item: "Sesame seeds toasted" },
                        { item: "Green onions sliced" },
                        { item: "Rice wine mirin" },
                        { item: "Lemon zest fresh" }
                    ],
                    directions: [
                        {
                            title: "Marinate salmon in glaze",
                            description: "Combine honey, soy sauce, and aromatics to create marinade. Let salmon absorb flavors for optimal taste development and tenderness."
                        },
                        {
                            title: "Sear until golden crust",
                            description: "Heat pan to medium-high and sear salmon skin-side down first. Create beautiful golden crust while keeping interior moist and flaky."
                        },
                        {
                            title: "Baste with remaining glaze",
                            description: "Continue cooking while basting with reserved glaze. This creates beautiful caramelization and intensifies the honey flavor throughout the fish."
                        }
                    ]
                },

                {
                    id: 5,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--5.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_5.jpg", import.meta.url).href,
                    title: "Creamy Mushroom Risotto",
                    prepTime: "15 Minutes",
                    cookTime: "40 Minutes",
                    name: "Michael",
                    date: "2024-09-08",
                    type: "Italian",
                    nutrition: {
                        calories: 487,
                        fat: "16g",
                        protein: "14g",
                        carbohydrate: "68g",
                        cholesterol: "32mg",
                        quote: "Rich and comforting Italian classic."
                    },
                    desc: "This classic Italian risotto features earthy mushrooms in a creamy rice base. Slow-cooked to perfection, each grain absorbs maximum flavor while maintaining the ideal creamy texture that defines authentic risotto.",
                    mainIngredient: [
                        { item: "Arborio rice premium" },
                        { item: "Mixed mushrooms fresh" },
                        { item: "Parmesan cheese grated" },
                        { item: "White wine dry" },
                        { item: "Vegetable stock warm" }
                    ],
                    sideIngredients: [
                        { item: "Shallots finely diced" },
                        { item: "Heavy cream rich" },
                        { item: "Fresh thyme sprigs" },
                        { item: "Butter European style" }
                    ],
                    directions: [
                        {
                            title: "Sauté mushrooms until golden",
                            description: "Cook mushrooms over high heat until golden brown and moisture evaporates. This concentrates flavors and prevents watery risotto texture."
                        },
                        {
                            title: "Toast rice with aromatics",
                            description: "Sauté rice with shallots until grains are lightly toasted. This creates nutty flavor and helps rice maintain structure during cooking process."
                        },
                        {
                            title: "Add stock gradually stirring",
                            description: "Add warm stock one ladle at a time, stirring constantly. This gradual process releases starch and creates the characteristic creamy risotto texture."
                        },
                        {
                            title: "Finish with cheese butter",
                            description: "Remove from heat and stir in cheese and butter for richness. This final step creates glossy, luxurious texture that defines perfect risotto."
                        }
                    ]
                },

                {
                    id: 6,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--6.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_6.jpg", import.meta.url).href,
                    title: "Tandoori Chicken Skewers",
                    prepTime: "30 Minutes",
                    cookTime: "25 Minutes",
                    name: "Priya",
                    date: "2025-01-19",
                    type: "Indian",
                    nutrition: {
                        calories: 398,
                        fat: "8g",
                        protein: "42g",
                        carbohydrate: "12g",
                        cholesterol: "98mg",
                        quote: "Authentic spices create magic."
                    },
                    desc: "Juicy chicken marinated in traditional tandoori spices and yogurt creates these flavorful skewers. Grilled to perfection, they offer authentic Indian flavors with a healthy protein-rich profile perfect for any gathering.",
                    mainIngredient: [
                        { item: "Chicken breast cubes" },
                        { item: "Greek yogurt thick" },
                        { item: "Tandoori spice blend" },
                        { item: "Garam masala powder" },
                        { item: "Ginger garlic paste" }
                    ],
                    sideIngredients: [
                        { item: "Red onion chunks" },
                        { item: "Bell pepper pieces" },
                        { item: "Lemon juice fresh" },
                        { item: "Mint leaves fresh" }
                    ],
                    directions: [
                        {
                            title: "Marinate chicken overnight thoroughly",
                            description: "Combine yogurt and spices to create marinade. Let chicken absorb flavors for several hours or overnight for maximum taste penetration."
                        },
                        {
                            title: "Thread onto skewers evenly",
                            description: "Alternate chicken with vegetables on skewers for even cooking. Leave space between pieces to ensure proper heat circulation and cooking."
                        },
                        {
                            title: "Grill over medium heat",
                            description: "Cook skewers over medium heat, turning regularly for even browning. Baste with remaining marinade to prevent drying and enhance flavor."
                        }
                    ]
                },

                {
                    id: 7,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--7.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_7.jpg", import.meta.url).href,
                    title: "Classic Caesar Salad",
                    prepTime: "20 Minutes",
                    cookTime: "5 Minutes",
                    name: "David",
                    date: "2024-07-03",
                    type: "American",
                    nutrition: {
                        calories: 312,
                        fat: "24g",
                        protein: "18g",
                        carbohydrate: "8g",
                        cholesterol: "45mg",
                        quote: "Timeless and always satisfying."
                    },
                    desc: "The iconic Caesar salad with crisp romaine lettuce, homemade croutons, and authentic dressing. This restaurant-quality version brings together classic flavors in perfect harmony for a satisfying and nutritious meal experience.",
                    mainIngredient: [
                        { item: "Romaine lettuce crisp" },
                        { item: "Parmesan cheese fresh" },
                        { item: "Anchovies in oil" },
                        { item: "Garlic cloves fresh" },
                        { item: "Egg yolk pasteurized" }
                    ],
                    sideIngredients: [
                        { item: "Sourdough bread cubes" },
                        { item: "Olive oil extra" },
                        { item: "Lemon juice squeezed" },
                        { item: "Black pepper cracked" }
                    ],
                    directions: [
                        {
                            title: "Make homemade croutons first",
                            description: "Cut bread into cubes and toss with olive oil and seasonings. Bake until golden and crispy for perfect texture contrast."
                        },
                        {
                            title: "Prepare traditional dressing carefully",
                            description: "Whisk together anchovies, garlic, egg yolk, and lemon juice. Slowly add oil while whisking to create smooth, emulsified dressing."
                        },
                        {
                            title: "Toss lettuce with dressing",
                            description: "Coat clean, dry lettuce with dressing thoroughly. Add cheese and croutons just before serving to maintain proper textures and freshness."
                        }
                    ]
                },

                {
                    id: 8,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--8.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_8.jpg", import.meta.url).href,
                    title: "Beef Tacos Supreme",
                    prepTime: "35 Minutes",
                    cookTime: "25 Minutes",
                    name: "Carlos",
                    date: "2025-04-17",
                    type: "Mexican",
                    nutrition: {
                        calories: 456,
                        fat: "19g",
                        protein: "28g",
                        carbohydrate: "35g",
                        cholesterol: "67mg",
                        quote: "Bold flavors in every bite."
                    },
                    desc: "Authentic Mexican-style beef tacos with seasoned ground beef, fresh toppings, and warm tortillas. These tacos deliver bold flavors and satisfying textures that make them perfect for casual dining or entertaining guests.",
                    mainIngredient: [
                        { item: "Ground beef lean" },
                        { item: "Taco seasoning blend" },
                        { item: "Corn tortillas fresh" },
                        { item: "Cheddar cheese shredded" },
                        { item: "Tomatoes diced fresh" }
                    ],
                    sideIngredients: [
                        { item: "Lettuce shredded crisp" },
                        { item: "Sour cream thick" },
                        { item: "Red onion diced" },
                        { item: "Jalapeño peppers sliced" }
                    ],
                    directions: [
                        {
                            title: "Brown beef with seasonings",
                            description: "Cook ground beef over medium-high heat, breaking it up as it browns. Add taco seasoning and cook until fragrant and well combined."
                        },
                        {
                            title: "Warm tortillas properly prepared",
                            description: "Heat tortillas in dry pan or directly over flame until warm and pliable. This enhances flavor and makes them easier to fold."
                        },
                        {
                            title: "Assemble tacos with toppings",
                            description: "Fill warm tortillas with seasoned beef and desired toppings. Serve immediately while tortillas are warm and beef is hot for best experience."
                        }
                    ]
                },

                {
                    id: 9,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--9.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_9.jpg", import.meta.url).href,
                    title: "Thai Green Curry",
                    prepTime: "40 Minutes",
                    cookTime: "30 Minutes",
                    name: "Emma",
                    date: "2024-12-05",
                    type: "Fusion",
                    nutrition: {
                        calories: 523,
                        fat: "31g",
                        protein: "22g",
                        carbohydrate: "28g",
                        cholesterol: "54mg",
                        quote: "Aromatic and deeply satisfying."
                    },
                    desc: "Fragrant Thai green curry with tender chicken and vegetables in coconut milk. This authentic recipe balances heat, sweetness, and aromatic herbs to create a complex and satisfying dish that transports you to Thailand.",
                    mainIngredient: [
                        { item: "Chicken thighs boneless" },
                        { item: "Green curry paste" },
                        { item: "Coconut milk full" },
                        { item: "Thai basil fresh" },
                        { item: "Fish sauce authentic" }
                    ],
                    sideIngredients: [
                        { item: "Thai eggplant small" },
                        { item: "Green chilies fresh" },
                        { item: "Palm sugar brown" },
                        { item: "Kaffir lime leaves" }
                    ],
                    directions: [
                        {
                            title: "Fry curry paste until fragrant",
                            description: "Heat curry paste in coconut cream until oil separates and paste becomes very fragrant. This releases essential oils and deepens flavor complexity."
                        },
                        {
                            title: "Add chicken and vegetables",
                            description: "Add chicken pieces and cook until just done. Add vegetables in order of cooking time needed for proper texture and doneness."
                        },
                        {
                            title: "Simmer with remaining coconut",
                            description: "Add remaining coconut milk and seasonings. Simmer gently to meld flavors without overcooking proteins or vegetables for optimal results."
                        },
                        {
                            title: "Finish with fresh herbs",
                            description: "Stir in fresh basil and lime leaves just before serving. This preserves their bright flavor and aromatic qualities in the finished curry."
                        }
                    ]
                },

                {
                    id: 10,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--10.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_10.jpg", import.meta.url).href,
                    title: "Margherita Pizza Classic",
                    prepTime: "90 Minutes",
                    cookTime: "15 Minutes",
                    name: "Giovanni",
                    date: "2025-02-28",
                    type: "Italian",
                    nutrition: {
                        calories: 389,
                        fat: "13g",
                        protein: "16g",
                        carbohydrate: "52g",
                        cholesterol: "28mg",
                        quote: "Simple ingredients, perfect harmony."
                    },
                    desc: "Authentic Neapolitan-style Margherita pizza with hand-stretched dough, San Marzano tomatoes, and fresh mozzarella. This classic combination celebrates the purity of Italian ingredients and traditional pizza-making techniques for perfection.",
                    mainIngredient: [
                        { item: "Pizza dough homemade" },
                        { item: "San Marzano tomatoes" },
                        { item: "Mozzarella cheese fresh" },
                        { item: "Fresh basil leaves" },
                        { item: "Olive oil extra" }
                    ],
                    sideIngredients: [
                        { item: "Sea salt coarse" },
                        { item: "Garlic cloves minced" },
                        { item: "Oregano dried Italian" },
                        { item: "Parmesan cheese grated" }
                    ],
                    directions: [
                        {
                            title: "Prepare dough and let rise",
                            description: "Allow pizza dough to rise properly for optimal texture and flavor development. This creates the characteristic chewy yet tender crust texture."
                        },
                        {
                            title: "Stretch dough by hand",
                            description: "Gently stretch dough by hand to preserve air bubbles and create irregular edges. Avoid rolling pin which removes air and character."
                        },
                        {
                            title: "Add toppings sparingly applied",
                            description: "Apply thin layer of sauce and torn mozzarella pieces. Less is more for authentic Margherita pizza to prevent soggy crust."
                        },
                        {
                            title: "Bake at highest temperature",
                            description: "Bake in hottest possible oven for short time to create charred spots and crispy crust. Add basil after baking for fresh flavor."
                        }
                    ]
                },

                {
                    id: 11,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--11.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_11.jpg", import.meta.url).href,
                    title: "Kung Pao Chicken",
                    prepTime: "25 Minutes",
                    cookTime: "15 Minutes",
                    name: "Lei",
                    date: "2024-10-11",
                    type: "Chinese",
                    nutrition: {
                        calories: 445,
                        fat: "18g",
                        protein: "35g",
                        carbohydrate: "22g",
                        cholesterol: "78mg",
                        quote: "Spicy, sweet, and utterly addictive."
                    },
                    desc: "Classic Sichuan dish featuring diced chicken, peanuts, and dried chilies in a savory-sweet sauce. The perfect balance of heat and flavor makes this stir-fry irresistible and authentic to traditional Chinese cooking methods.",
                    mainIngredient: [
                        { item: "Chicken breast diced" },
                        { item: "Roasted peanuts whole" },
                        { item: "Dried chilies red" },
                        { item: "Sichuan peppercorns whole" },
                        { item: "Soy sauce dark" }
                    ],
                    sideIngredients: [
                        { item: "Green onions chopped" },
                        { item: "Ginger root minced" },
                        { item: "Rice wine Shaoxing" },
                        { item: "Sugar white granulated" }
                    ],
                    directions: [
                        {
                            title: "Marinate chicken pieces briefly",
                            description: "Coat diced chicken with cornstarch and soy sauce for velveting technique. This creates tender texture and helps sauce adhere properly."
                        },
                        {
                            title: "Stir fry over high heat",
                            description: "Cook ingredients quickly over high heat in correct order. Start with aromatics, add chicken, then vegetables for proper texture and doneness."
                        },
                        {
                            title: "Toss with sauce quickly",
                            description: "Add pre-mixed sauce to hot wok and toss rapidly to coat all ingredients. Work quickly to prevent overcooking and maintain crisp textures."
                        }
                    ]
                },

                {
                    id: 12,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--12.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_12.jpg", import.meta.url).href,
                    title: "Chocolate Lava Cake",
                    prepTime: "20 Minutes",
                    cookTime: "12 Minutes",
                    name: "Sophie",
                    date: "2025-05-08",
                    type: "French",
                    nutrition: {
                        calories: 634,
                        fat: "28g",
                        protein: "8g",
                        carbohydrate: "45g",
                        cholesterol: "145mg",
                        quote: "Decadent indulgence in every spoonful."
                    },
                    desc: "Individual chocolate cakes with molten centers that flow like lava when cut. This restaurant-quality dessert combines rich dark chocolate with perfect timing to create an unforgettable finale to any special meal or celebration.",
                    mainIngredient: [
                        { item: "Dark chocolate high" },
                        { item: "Butter unsalted European" },
                        { item: "Eggs whole large" },
                        { item: "Sugar granulated white" },
                        { item: "Flour all purpose" }
                    ],
                    sideIngredients: [
                        { item: "Vanilla extract pure" },
                        { item: "Salt pinch fine" },
                        { item: "Powdered sugar dusting" },
                        { item: "Ice cream vanilla" }
                    ],
                    directions: [
                        {
                            title: "Melt chocolate with butter",
                            description: "Gently melt chocolate and butter together using double boiler method. Stir until smooth and glossy without overheating or burning mixture."
                        },
                        {
                            title: "Whisk eggs and sugar",
                            description: "Beat eggs and sugar until pale and slightly thickened. This incorporates air and creates proper texture for the final cake structure."
                        },
                        {
                            title: "Fold ingredients gently together",
                            description: "Combine chocolate mixture with egg mixture, then fold in flour carefully. Overmixing will result in tough texture instead of tender cake."
                        },
                        {
                            title: "Bake until edges set",
                            description: "Bake in preheated oven until edges are firm but centers still jiggle slightly. Perfect timing is crucial for molten center effect."
                        }
                    ]
                },

                {
                    id: 13,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--13.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_13.jpg", import.meta.url).href,
                    title: "Mediterranean Quinoa Bowl",
                    prepTime: "30 Minutes",
                    cookTime: "20 Minutes",
                    name: "Olivia",
                    date: "2024-08-15",
                    type: "Fusion",
                    nutrition: {
                        calories: 378,
                        fat: "14g",
                        protein: "16g",
                        carbohydrate: "48g",
                        cholesterol: "12mg",
                        quote: "Fresh, healthy, and completely satisfying."
                    },
                    desc: "Nutritious grain bowl featuring fluffy quinoa, fresh vegetables, olives, and feta cheese with lemon herb dressing. This Mediterranean-inspired dish provides complete protein and vibrant flavors for a healthy, satisfying meal.",
                    mainIngredient: [
                        { item: "Quinoa tri color" },
                        { item: "Cucumber diced fresh" },
                        { item: "Cherry tomatoes halved" },
                        { item: "Feta cheese crumbled" },
                        { item: "Kalamata olives pitted" }
                    ],
                    sideIngredients: [
                        { item: "Red onion thinly" },
                        { item: "Fresh parsley chopped" },
                        { item: "Lemon juice squeezed" },
                        { item: "Olive oil extra" }
                    ],
                    directions: [
                        {
                            title: "Cook quinoa until fluffy",
                            description: "Rinse quinoa thoroughly then cook in seasoned broth until tender and fluffy. Let cool completely before assembling bowl for best texture."
                        },
                        {
                            title: "Prepare vegetables and cheese",
                            description: "Dice vegetables uniformly for even distribution and visual appeal. Crumble feta cheese and prepare other toppings while quinoa cools completely."
                        },
                        {
                            title: "Make lemon herb dressing",
                            description: "Whisk together lemon juice, olive oil, and herbs for bright dressing. This Mediterranean-style dressing ties all flavors together beautifully."
                        },
                        {
                            title: "Assemble and toss gently",
                            description: "Combine all ingredients in large bowl and toss gently with dressing. Let flavors meld for few minutes before serving for optimal taste."
                        }
                    ]
                },

                {
                    id: 14,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--14.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_14.jpg", import.meta.url).href,
                    title: "Korean Bibimbap Bowl",
                    prepTime: "45 Minutes",
                    cookTime: "30 Minutes",
                    name: "Jin",
                    date: "2025-01-07",
                    type: "Korean",
                    nutrition: {
                        calories: 492,
                        fat: "16g",
                        protein: "24g",
                        carbohydrate: "62g",
                        cholesterol: "186mg",
                        quote: "Harmony of colors and flavors."
                    },
                    desc: "Traditional Korean mixed rice bowl with seasoned vegetables, marinated beef, and fried egg. This colorful dish represents balance and harmony in Korean cuisine, offering diverse textures and flavors in one satisfying bowl.",
                    mainIngredient: [
                        { item: "Short grain rice" },
                        { item: "Bulgogi beef marinated" },
                        { item: "Mixed vegetables seasoned" },
                        { item: "Fried egg sunny" },
                        { item: "Gochujang sauce spicy" }
                    ],
                    sideIngredients: [
                        { item: "Sesame oil toasted" },
                        { item: "Garlic cloves minced" },
                        { item: "Soy sauce light" },
                        { item: "Sesame seeds white" }
                    ],
                    directions: [
                        {
                            title: "Prepare vegetables separately seasoned",
                            description: "Cook each vegetable separately with appropriate seasonings to maintain distinct flavors and colors. This traditional method preserves individual characteristics."
                        },
                        {
                            title: "Marinate and cook beef",
                            description: "Marinate thin beef slices in bulgogi sauce then cook quickly over high heat. The meat should be tender and caramelized."
                        },
                        {
                            title: "Arrange colorfully in bowl",
                            description: "Arrange components over rice in colorful sections for visual appeal. Top with fried egg and serve with gochujang sauce on side."
                        }
                    ]
                },

                {
                    id: 15,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--15.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_15.jpg", import.meta.url).href,
                    title: "Grilled Portobello Burger",
                    prepTime: "15 Minutes",
                    cookTime: "10 Minutes",
                    name: "Alex",
                    date: "2024-06-22",
                    type: "American",
                    nutrition: {
                        calories: 324,
                        fat: "12g",
                        protein: "18g",
                        carbohydrate: "38g",
                        cholesterol: "15mg",
                        quote: "Meaty satisfaction without the meat."
                    },
                    desc: "Hearty vegetarian burger featuring grilled portobello mushroom caps with all the classic fixings. This satisfying alternative provides meaty texture and rich umami flavors that please both vegetarians and meat-eaters alike.",
                    mainIngredient: [
                        { item: "Portobello mushroom caps" },
                        { item: "Burger buns whole" },
                        { item: "Swiss cheese sliced" },
                        { item: "Lettuce leaves crisp" },
                        { item: "Tomato slices thick" }
                    ],
                    sideIngredients: [
                        { item: "Red onion rings" },
                        { item: "Balsamic vinegar aged" },
                        { item: "Olive oil extra" },
                        { item: "Garlic powder dried" }
                    ],
                    directions: [
                        {
                            title: "Marinate mushroom caps thoroughly",
                            description: "Brush mushroom caps with balsamic marinade and let absorb flavors. Remove stems and scrape out gills for better texture and appearance."
                        },
                        {
                            title: "Grill until tender juicy",
                            description: "Grill mushrooms gill-side down first to release moisture, then flip to create attractive grill marks. Cook until tender throughout."
                        },
                        {
                            title: "Assemble burger with toppings",
                            description: "Layer grilled mushroom on toasted bun with cheese, vegetables, and condiments. Serve immediately while mushroom is hot and cheese is melted."
                        }
                    ]
                },

                {
                    id: 16,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--16.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_16.jpg", import.meta.url).href,
                    title: "Coconut Curry Shrimp",
                    prepTime: "20 Minutes",
                    cookTime: "15 Minutes",
                    name: "Maya",
                    date: "2025-03-14",
                    type: "Indian",
                    nutrition: {
                        calories: 412,
                        fat: "22g",
                        protein: "32g",
                        carbohydrate: "18g",
                        cholesterol: "238mg",
                        quote: "Tropical flavors meet spicy warmth."
                    },
                    desc: "Succulent shrimp in aromatic coconut curry sauce with traditional Indian spices. This dish combines the sweetness of coconut milk with warming spices to create a luxurious and flavorful curry perfect with rice.",
                    mainIngredient: [
                        { item: "Large shrimp peeled" },
                        { item: "Coconut milk thick" },
                        { item: "Curry powder blend" },
                        { item: "Onions diced yellow" },
                        { item: "Ginger paste fresh" }
                    ],
                    sideIngredients: [
                        { item: "Garlic cloves crushed" },
                        { item: "Turmeric powder ground" },
                        { item: "Cilantro leaves fresh" },
                        { item: "Lime juice squeezed" }
                    ],
                    directions: [
                        {
                            title: "Sauté aromatics until fragrant",
                            description: "Cook onions, ginger, and garlic until softened and fragrant. This creates the flavor base that will infuse the entire curry sauce."
                        },
                        {
                            title: "Add spices and coconut",
                            description: "Stir in curry powder and turmeric, then add coconut milk. Simmer to allow spices to bloom and sauce to thicken slightly."
                        },
                        {
                            title: "Cook shrimp just until done",
                            description: "Add shrimp to simmering sauce and cook just until pink and cooked through. Overcooking will make shrimp tough and rubbery."
                        }
                    ]
                },

                {
                    id: 17,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--17.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_17.jpg", import.meta.url).href,
                    title: "French Onion Soup",
                    prepTime: "30 Minutes",
                    cookTime: "60 Minutes",
                    name: "Pierre",
                    date: "2024-11-28",
                    type: "French",
                    nutrition: {
                        calories: 356,
                        fat: "18g",
                        protein: "22g",
                        carbohydrate: "28g",
                        cholesterol: "48mg",
                        quote: "Classic comfort in a bowl."
                    },
                    desc: "Traditional French soup with caramelized onions in rich beef broth, topped with crusty bread and melted Gruyère cheese. This restaurant-quality soup requires patience but delivers deeply satisfying flavors that epitomize French comfort food.",
                    mainIngredient: [
                        { item: "Yellow onions large" },
                        { item: "Beef broth homemade" },
                        { item: "Gruyère cheese grated" },
                        { item: "French bread crusty" },
                        { item: "Dry white wine" }
                    ],
                    sideIngredients: [
                        { item: "Butter unsalted European" },
                        { item: "Fresh thyme sprigs" },
                        { item: "Bay leaves dried" },
                        { item: "Salt and pepper" }
                    ],
                    directions: [
                        {
                            title: "Caramelize onions very slowly",
                            description: "Cook sliced onions slowly over low heat until deep golden brown and caramelized. This process takes time but creates the soup's signature flavor."
                        },
                        {
                            title: "Deglaze with wine carefully",
                            description: "Add wine to caramelized onions to deglaze pan and capture browned bits. Let alcohol cook off before adding broth for clean flavor."
                        },
                        {
                            title: "Simmer with herbs patiently",
                            description: "Add broth and herbs, then simmer to meld flavors and develop richness. Long, slow cooking creates the soup's characteristic depth."
                        },
                        {
                            title: "Broil with cheese topping",
                            description: "Top soup bowls with bread and cheese, then broil until bubbly and golden. Serve immediately while cheese is still melted and stretchy."
                        }
                    ]
                },

                {
                    id: 18,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--18.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_18.jpg", import.meta.url).href,
                    title: "Sushi Roll Platter",
                    prepTime: "60 Minutes",
                    cookTime: "0 Minutes",
                    name: "Hiroshi",
                    date: "2025-04-03",
                    type: "Japanese",
                    nutrition: {
                        calories: 298,
                        fat: "6g",
                        protein: "18g",
                        carbohydrate: "48g",
                        cholesterol: "24mg",
                        quote: "Art meets flavor in harmony."
                    },
                    desc: "Assorted sushi rolls featuring fresh fish, vegetables, and perfectly seasoned sushi rice. This artistic presentation showcases traditional Japanese techniques while offering variety and visual appeal for an authentic sushi experience at home.",
                    mainIngredient: [
                        { item: "Sushi rice prepared" },
                        { item: "Nori seaweed sheets" },
                        { item: "Fresh salmon grade" },
                        { item: "Cucumber julienned thin" },
                        { item: "Avocado slices ripe" }
                    ],
                    sideIngredients: [
                        { item: "Wasabi paste real" },
                        { item: "Pickled ginger sliced" },
                        { item: "Soy sauce low" },
                        { item: "Sesame seeds black" }
                    ],
                    directions: [
                        {
                            title: "Prepare sushi rice properly",
                            description: "Cook sushi rice with proper technique and season with rice vinegar mixture while still warm. Fan rice while mixing to achieve proper texture."
                        },
                        {
                            title: "Cut fish with sharp knife",
                            description: "Use very sharp knife to cut fish cleanly without tearing. Cut against the grain for best texture and appearance in finished rolls."
                        },
                        {
                            title: "Roll tightly with bamboo mat",
                            description: "Use bamboo mat to roll sushi firmly but not too tight. Apply even pressure to create uniform shape without crushing ingredients."
                        },
                        {
                            title: "Slice with wet knife",
                            description: "Clean knife with damp cloth between cuts to prevent sticking. Cut rolls with swift, confident motion for clean edges and attractive presentation."
                        }
                    ]
                },

                {
                    id: 19,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--19.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_19.jpg", import.meta.url).href,
                    title: "Stuffed Bell Peppers",
                    prepTime: "25 Minutes",
                    cookTime: "45 Minutes",
                    name: "Maria",
                    date: "2024-09-19",
                    type: "American",
                    nutrition: {
                        calories: 367,
                        fat: "14g",
                        protein: "26g",
                        carbohydrate: "32g",
                        cholesterol: "72mg",
                        quote: "Wholesome comfort food classic."
                    },
                    desc: "Colorful bell peppers stuffed with seasoned ground beef, rice, and vegetables, then baked until tender. This hearty, nutritious meal provides complete satisfaction while showcasing the natural sweetness of roasted peppers beautifully.",
                    mainIngredient: [
                        { item: "Bell peppers large" },
                        { item: "Ground beef lean" },
                        { item: "Cooked rice white" },
                        { item: "Onion diced yellow" },
                        { item: "Cheddar cheese shredded" }
                    ],
                    sideIngredients: [
                        { item: "Diced tomatoes canned" },
                        { item: "Garlic cloves minced" },
                        { item: "Italian seasoning dried" },
                        { item: "Beef broth low" }
                    ],
                    directions: [
                        {
                            title: "Prepare peppers for stuffing",
                            description: "Cut tops off peppers and remove seeds and membranes. Blanch briefly in boiling water to soften slightly before stuffing and baking."
                        },
                        {
                            title: "Cook filling mixture thoroughly",
                            description: "Brown beef with onions and garlic, then add rice, tomatoes, and seasonings. Cook until heated through and flavors are well combined."
                        },
                        {
                            title: "Stuff peppers and bake",
                            description: "Fill peppers with meat mixture and place in baking dish with small amount of broth. Cover and bake until peppers are tender."
                        },
                        {
                            title: "Top with cheese finish",
                            description: "Remove cover and top with cheese during last few minutes of baking. Let rest briefly before serving to allow cheese to set."
                        }
                    ]
                },

                {
                    id: 20,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--20.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_20.jpg", import.meta.url).href,
                    title: "Pad Thai Noodles",
                    prepTime: "30 Minutes",
                    cookTime: "10 Minutes",
                    name: "Siriporn",
                    date: "2025-02-11",
                    type: "Thai",
                    nutrition: {
                        calories: 418,
                        fat: "12g",
                        protein: "20g",
                        carbohydrate: "58g",
                        cholesterol: "124mg",
                        quote: "Sweet, sour, salty perfection."
                    },
                    desc: "Classic Thai stir-fried noodles with shrimp, tofu, eggs, and bean sprouts in traditional tamarind-based sauce. This iconic dish balances sweet, sour, and salty flavors while providing satisfying textures that define authentic Thai street food.",
                    mainIngredient: [
                        { item: "Rice noodles wide" },
                        { item: "Shrimp medium peeled" },
                        { item: "Tofu firm cubed" },
                        { item: "Eggs beaten fresh" },
                        { item: "Bean sprouts fresh" }
                    ],
                    sideIngredients: [
                        { item: "Tamarind paste concentrated" },
                        { item: "Fish sauce premium" },
                        { item: "Palm sugar brown" },
                        { item: "Crushed peanuts roasted" }
                    ],
                    directions: [
                        {
                            title: "Soak noodles until soft",
                            description: "Soak rice noodles in warm water until pliable but still firm. They will finish cooking in the wok with the sauce and other ingredients."
                        },
                        {
                            title: "Prepare sauce mixture beforehand",
                            description: "Mix tamarind paste, fish sauce, and palm sugar for sauce. Having sauce ready ensures quick cooking without burning ingredients in hot wok."
                        },
                        {
                            title: "Stir fry over high heat",
                            description: "Cook ingredients quickly over high heat in correct order. Start with proteins, add noodles and sauce, then finish with bean sprouts."
                        },
                        {
                            title: "Garnish with peanuts lime",
                            description: "Serve immediately garnished with crushed peanuts, lime wedges, and additional bean sprouts. Fresh garnishes add texture and brightness to finished dish."
                        }
                    ]
                },

                {
                    id: 21,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--21.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_21.jpg", import.meta.url).href,
                    title: "Moroccan Lamb Tagine",
                    prepTime: "40 Minutes",
                    cookTime: "120 Minutes",
                    name: "Fatima",
                    date: "2024-12-16",
                    type: "Moroccan",
                    nutrition: {
                        calories: 534,
                        fat: "21g",
                        protein: "38g",
                        carbohydrate: "42g",
                        cholesterol: "98mg",
                        quote: "Exotic spices transport your senses."
                    },
                    desc: "Slow-cooked Moroccan stew with tender lamb, dried fruits, and aromatic spices in traditional tagine. This exotic dish combines sweet and savory elements while the slow cooking process creates incredibly tender meat and complex flavors.",
                    mainIngredient: [
                        { item: "Lamb shoulder cubed" },
                        { item: "Dried apricots whole" },
                        { item: "Chickpeas cooked tender" },
                        { item: "Onions sliced thick" },
                        { item: "Ras el hanout" }
                    ],
                    sideIngredients: [
                        { item: "Cinnamon stick whole" },
                        { item: "Fresh ginger sliced" },
                        { item: "Preserved lemons chopped" },
                        { item: "Fresh cilantro chopped" }
                    ],
                    directions: [
                        {
                            title: "Brown lamb in batches",
                            description: "Sear lamb pieces in batches to develop deep brown color and flavor. Don't overcrowd pan as this will steam rather than brown meat."
                        },
                        {
                            title: "Layer ingredients in tagine",
                            description: "Layer browned lamb with onions, spices, and aromatics in tagine or heavy pot. Traditional layering technique ensures even cooking and flavor distribution."
                        },
                        {
                            title: "Slow cook until tender",
                            description: "Cook covered over low heat for extended time until lamb is fork-tender. The slow process allows tough connective tissues to break down."
                        },
                        {
                            title: "Add fruits near end",
                            description: "Add dried fruits and delicate ingredients during last portion of cooking time to prevent them from breaking down too much."
                        }
                    ]
                },

                {
                    id: 22,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--22.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_22.jpg", import.meta.url).href,
                    title: "Greek Moussaka Layers",
                    prepTime: "50 Minutes",
                    cookTime: "75 Minutes",
                    name: "Dimitri",
                    date: "2025-05-21",
                    type: "Greek",
                    nutrition: {
                        calories: 456,
                        fat: "24g",
                        protein: "28g",
                        carbohydrate: "26g",
                        cholesterol: "87mg",
                        quote: "Layers of Mediterranean comfort."
                    },
                    desc: "Traditional Greek casserole with layers of eggplant, seasoned ground lamb, and creamy béchamel sauce. This iconic dish requires patience to build layers properly but rewards with rich, satisfying flavors that embody Greek comfort food.",
                    mainIngredient: [
                        { item: "Eggplant large sliced" },
                        { item: "Ground lamb lean" },
                        { item: "Béchamel sauce creamy" },
                        { item: "Tomatoes crushed canned" },
                        { item: "Parmesan cheese grated" }
                    ],
                    sideIngredients: [
                        { item: "Red wine dry" },
                        { item: "Oregano dried Greek" },
                        { item: "Nutmeg ground fresh" },
                        { item: "Olive oil extra" }
                    ],
                    directions: [
                        {
                            title: "Salt and drain eggplant",
                            description: "Slice eggplant and salt generously, then let drain to remove bitterness. Pat dry before cooking to prevent soggy texture in finished dish."
                        },
                        {
                            title: "Make rich meat sauce",
                            description: "Brown lamb and cook with tomatoes, wine, and herbs until thick and flavorful. This sauce forms the heart of the moussaka layers."
                        },
                        {
                            title: "Prepare smooth béchamel sauce",
                            description: "Make creamy béchamel sauce without lumps by whisking constantly. This white sauce creates the signature top layer that browns beautifully."
                        },
                        {
                            title: "Layer and bake until golden",
                            description: "Layer eggplant, meat sauce, and béchamel carefully in baking dish. Bake until top is golden brown and layers are set throughout."
                        }
                    ]
                },

                {
                    id: 23,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--23.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_23.jpg", import.meta.url).href,
                    title: "Vietnamese Pho Soup",
                    prepTime: "30 Minutes",
                    cookTime: "240 Minutes",
                    name: "Linh",
                    date: "2024-10-04",
                    type: "Vietnamese",
                    nutrition: {
                        calories: 387,
                        fat: "8g",
                        protein: "31g",
                        carbohydrate: "52g",
                        cholesterol: "56mg",
                        quote: "Soul-warming broth of life."
                    },
                    desc: "Aromatic Vietnamese noodle soup with rich bone broth, rice noodles, and fresh herbs. This iconic comfort food requires long simmering to develop the complex, deeply satisfying broth that defines authentic pho experience.",
                    mainIngredient: [
                        { item: "Beef bones marrow" },
                        { item: "Rice noodles fresh" },
                        { item: "Beef sirloin sliced" },
                        { item: "Star anise whole" },
                        { item: "Fish sauce authentic" }
                    ],
                    sideIngredients: [
                        { item: "Fresh herbs mixed" },
                        { item: "Bean sprouts crisp" },
                        { item: "Lime wedges fresh" },
                        { item: "Chili sauce hot" }
                    ],
                    directions: [
                        {
                            title: "Simmer bones for hours",
                            description: "Roast bones then simmer for many hours to extract collagen and create rich, gelatinous broth. This long process is essential for authentic flavor."
                        },
                        {
                            title: "Toast spices until fragrant",
                            description: "Char onion and ginger over open flame, then toast whole spices in dry pan. These aromatics form the backbone of pho's distinctive flavor."
                        },
                        {
                            title: "Strain broth crystal clear",
                            description: "Strain finished broth through fine mesh to remove all solids and impurities. Clear broth is hallmark of well-made pho."
                        },
                        {
                            title: "Assemble bowls with garnishes",
                            description: "Place noodles and raw beef in bowls, then ladle boiling broth over to cook meat. Serve with fresh herbs and condiments on side."
                        }
                    ]
                },

                {
                    id: 24,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--24.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_24.jpg", import.meta.url).href,
                    title: "Brazilian Feijoada Stew",
                    prepTime: "60 Minutes",
                    cookTime: "180 Minutes",
                    name: "Carlos",
                    date: "2025-01-30",
                    type: "Brazilian",
                    nutrition: {
                        calories: 598,
                        fat: "28g",
                        protein: "34g",
                        carbohydrate: "48g",
                        cholesterol: "76mg",
                        quote: "Rich tradition in every bite."
                    },
                    desc: "Brazil's national dish featuring black beans slow-cooked with various pork cuts and sausages. This hearty stew represents Brazilian culinary heritage and requires patience to develop the rich, complex flavors that make it legendary.",
                    mainIngredient: [
                        { item: "Black beans dried" },
                        { item: "Pork shoulder chunks" },
                        { item: "Brazilian sausage linguiça" },
                        { item: "Bacon thick cut" },
                        { item: "Bay leaves dried" }
                    ],
                    sideIngredients: [
                        { item: "Orange zest fresh" },
                        { item: "Garlic cloves whole" },
                        { item: "Onions diced large" },
                        { item: "Cachaça Brazilian rum" }
                    ],
                    directions: [
                        {
                            title: "Soak beans overnight thoroughly",
                            description: "Soak black beans in plenty of water overnight to soften and reduce cooking time. This traditional step ensures even cooking and better texture."
                        },
                        {
                            title: "Brown meats in batches",
                            description: "Sear different cuts of pork and sausages separately to develop flavor through browning. Each meat contributes unique taste and texture to stew."
                        },
                        {
                            title: "Simmer very slowly together",
                            description: "Combine beans, meats, and aromatics then simmer gently for hours. Low, slow cooking allows flavors to meld and beans to become creamy."
                        },
                        {
                            title: "Mash beans for thickness",
                            description: "Partially mash some beans against side of pot to thicken stew naturally. This creates traditional creamy consistency while maintaining some whole beans."
                        }
                    ]
                },

                {
                    id: 25,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--25.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_25.jpg", import.meta.url).href,
                    title: "Russian Beef Stroganoff",
                    prepTime: "25 Minutes",
                    cookTime: "30 Minutes",
                    name: "Natasha",
                    date: "2024-07-13",
                    type: "Russian",
                    nutrition: {
                        calories: 512,
                        fat: "26g",
                        protein: "32g",
                        carbohydrate: "28g",
                        cholesterol: "94mg",
                        quote: "Classic elegance meets comfort."
                    },
                    desc: "Tender beef strips in rich sour cream sauce with mushrooms served over egg noodles. This Russian classic combines elegant presentation with hearty satisfaction, creating a dish that's both comforting and sophisticated for any occasion.",
                    mainIngredient: [
                        { item: "Beef tenderloin strips" },
                        { item: "Mushrooms sliced fresh" },
                        { item: "Sour cream thick" },
                        { item: "Egg noodles wide" },
                        { item: "Beef broth rich" }
                    ],
                    sideIngredients: [
                        { item: "Onions sliced thin" },
                        { item: "Dijon mustard smooth" },
                        { item: "Fresh dill chopped" },
                        { item: "Paprika Hungarian sweet" }
                    ],
                    directions: [
                        {
                            title: "Sear beef strips quickly",
                            description: "Cook beef strips over high heat just until browned but still tender inside. Overcooking will make meat tough and chewy."
                        },
                        {
                            title: "Sauté mushrooms until golden",
                            description: "Cook mushrooms separately until golden brown and moisture evaporates. This concentrates flavor and prevents watery sauce later."
                        },
                        {
                            title: "Make cream sauce carefully",
                            description: "Combine broth and sour cream off heat to prevent curdling. Whisk smooth then return to gentle heat to warm through without boiling."
                        },
                        {
                            title: "Combine gently before serving",
                            description: "Add beef and mushrooms to warm sauce gently to reheat without overcooking. Serve immediately over cooked noodles with fresh dill garnish."
                        }
                    ]
                },

                {
                    id: 26,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--26.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_26.jpg", import.meta.url).href,
                    title: "Spanish Paella Valencia",
                    prepTime: "45 Minutes",
                    cookTime: "40 Minutes",
                    name: "Isabella",
                    date: "2025-06-08",
                    type: "Spanish",
                    nutrition: {
                        calories: 467,
                        fat: "16g",
                        protein: "26g",
                        carbohydrate: "56g",
                        cholesterol: "142mg",
                        quote: "Sunshine and sea in every grain."
                    },
                    desc: "Traditional Spanish rice dish with saffron, chicken, seafood, and vegetables cooked in a wide paella pan. This iconic dish brings together diverse ingredients in perfect harmony while the socarrat (crispy bottom) adds textural interest.",
                    mainIngredient: [
                        { item: "Bomba rice Spanish" },
                        { item: "Saffron threads genuine" },
                        { item: "Chicken thighs cut" },
                        { item: "Mussels fresh cleaned" },
                        { item: "Green beans trimmed" }
                    ],
                    sideIngredients: [
                        { item: "Shrimp large peeled" },
                        { item: "Red bell peppers" },
                        { item: "Garlic cloves minced" },
                        { item: "Spanish olive oil" }
                    ],
                    directions: [
                        {
                            title: "Heat paella pan properly",
                            description: "Heat wide paella pan evenly over large burner or multiple burners. Proper heat distribution is crucial for even cooking of rice and ingredients."
                        },
                        {
                            title: "Build flavors in layers",
                            description: "Cook chicken first, then vegetables, building flavor base before adding rice. Each ingredient contributes to the overall depth of flavor."
                        },
                        {
                            title: "Add rice and saffron",
                            description: "Stir rice into sofrito base with saffron-infused broth. Distribute evenly then resist urge to stir once cooking begins for proper texture."
                        },
                        {
                            title: "Create socarrat crust carefully",
                            description: "Listen for gentle crackling sound and smell toasty aroma to know when socarrat forms. This crispy bottom layer is traditional paella's signature."
                        }
                    ]
                },

                {
                    id: 27,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--27.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_27.jpg", import.meta.url).href,
                    title: "Ethiopian Doro Wat",
                    prepTime: "35 Minutes",
                    cookTime: "90 Minutes",
                    name: "Almaz",
                    date: "2024-08-07",
                    type: "Ethiopian",
                    nutrition: {
                        calories: 489,
                        fat: "22g",
                        protein: "36g",
                        carbohydrate: "28g",
                        cholesterol: "156mg",
                        quote: "Spicy warmth meets tender perfection."
                    },
                    desc: "Ethiopia's national dish featuring chicken in berbere spice sauce with hard-boiled eggs. This complex stew showcases the unique spice blends of Ethiopian cuisine while providing deep, warming flavors that define this cultural treasure.",
                    mainIngredient: [
                        { item: "Chicken pieces bone" },
                        { item: "Berbere spice blend" },
                        { item: "Red onions large" },
                        { item: "Hard boiled eggs" },
                        { item: "Ethiopian butter niter" }
                    ],
                    sideIngredients: [
                        { item: "Ginger root fresh" },
                        { item: "Garlic cloves whole" },
                        { item: "Cardamom pods green" },
                        { item: "Red wine dry" }
                    ],
                    directions: [
                        {
                            title: "Caramelize onions very slowly",
                            description: "Cook massive amount of onions slowly until deep brown and caramelized. This forms the flavor foundation and takes considerable time but is essential."
                        },
                        {
                            title: "Toast berbere spice blend",
                            description: "Add berbere spice to caramelized onions and cook until fragrant. This blooms the spices and prevents raw spice taste in finished stew."
                        },
                        {
                            title: "Simmer chicken until tender",
                            description: "Add chicken pieces and liquid, then simmer slowly until meat falls off bone. Long cooking develops complex flavors and tender texture."
                        },
                        {
                            title: "Add eggs during last",
                            description: "Add peeled hard-boiled eggs during final cooking stage to heat through and absorb flavors. Serve with injera bread for authentic experience."
                        }
                    ]
                },

                {
                    id: 28,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--28.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_28.jpg", import.meta.url).href,
                    title: "Polish Pierogi Dumplings",
                    prepTime: "90 Minutes",
                    cookTime: "20 Minutes",
                    name: "Anna",
                    date: "2025-03-02",
                    type: "Polish",
                    nutrition: {
                        calories: 345,
                        fat: "12g",
                        protein: "14g",
                        carbohydrate: "48g",
                        cholesterol: "78mg",
                        quote: "Hand-made love in every dumpling."
                    },
                    desc: "Traditional Polish dumplings filled with potato and cheese, boiled then pan-fried until golden. These comfort food classics require patience to make from scratch but provide incredible satisfaction and authentic Polish flavors.",
                    mainIngredient: [
                        { item: "All purpose flour" },
                        { item: "Potatoes mashed smooth" },
                        { item: "Farmer cheese crumbled" },
                        { item: "Eggs large fresh" },
                        { item: "Sour cream thick" }
                    ],
                    sideIngredients: [
                        { item: "Onions caramelized golden" },
                        { item: "Butter clarified European" },
                        { item: "Fresh chives chopped" },
                        { item: "Salt and pepper" }
                    ],
                    directions: [
                        {
                            title: "Make tender pasta dough",
                            description: "Combine flour, eggs, and water to form smooth, elastic dough. Knead until silky then rest to develop gluten for easy rolling."
                        },
                        {
                            title: "Prepare potato cheese filling",
                            description: "Mash potatoes until completely smooth and mix with cheese and seasonings. Filling should be well-seasoned and hold together when shaped."
                        },
                        {
                            title: "Roll and fill carefully",
                            description: "Roll dough thin and cut circles, then fill and seal edges carefully. Proper sealing prevents filling from leaking during cooking."
                        },
                        {
                            title: "Boil then pan fry",
                            description: "Cook pierogi in boiling water until they float, then pan-fry in butter until golden. This two-step process creates perfect texture contrast."
                        }
                    ]
                },

                {
                    id: 29,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--29.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_29.jpg", import.meta.url).href,
                    title: "Turkish Baklava Layers",
                    prepTime: "75 Minutes",
                    cookTime: "45 Minutes",
                    name: "Ayşe",
                    date: "2024-11-09",
                    type: "Turkish",
                    nutrition: {
                        calories: 287,
                        fat: "18g",
                        protein: "6g",
                        carbohydrate: "32g",
                        cholesterol: "15mg",
                        quote: "Sweet layers of pure indulgence."
                    },
                    desc: "Delicate phyllo pastry layers with nuts and honey syrup creates this iconic Middle Eastern dessert. Each paper-thin layer contributes to the complex texture while the sweet syrup binds everything into heavenly perfection.",
                    mainIngredient: [
                        { item: "Phyllo dough sheets" },
                        { item: "Walnuts chopped fine" },
                        { item: "Pistachios ground coarse" },
                        { item: "Butter melted clarified" },
                        { item: "Honey pure golden" }
                    ],
                    sideIngredients: [
                        { item: "Sugar granulated white" },
                        { item: "Lemon juice fresh" },
                        { item: "Cinnamon ground fine" },
                        { item: "Rose water drops" }
                    ],
                    directions: [
                        {
                            title: "Layer phyllo with butter",
                            description: "Brush each delicate phyllo sheet with melted butter before layering. Handle gently as phyllo tears easily but creates beautiful flaky texture."
                        },
                        {
                            title: "Add nuts between layers",
                            description: "Sprinkle spiced nut mixture between phyllo layers according to traditional pattern. Even distribution ensures consistent flavor in every bite."
                        },
                        {
                            title: "Score diamond patterns carefully",
                            description: "Cut through top layers in diamond pattern before baking to create traditional shape. This also allows syrup penetration later."
                        },
                        {
                            title: "Pour syrup while hot",
                            description: "Pour cool syrup over hot baklava immediately after baking. The temperature contrast helps syrup absorb properly without making pastry soggy."
                        }
                    ]
                },

                {
                    id: 30,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--30.png", import.meta.url).href,
                    humanFace: new URL("@/assets/uiFaces/img_30.jpg", import.meta.url).href,
                    title: "Jamaican Jerk Chicken",
                    prepTime: "240 Minutes",
                    cookTime: "35 Minutes",
                    name: "Marcus",
                    date: "2025-07-15",
                    type: "Caribbean",
                    nutrition: {
                        calories: 423,
                        fat: "15g",
                        protein: "41g",
                        carbohydrate: "18g",
                        cholesterol: "125mg",
                        quote: "Island fire meets smoky perfection."
                    },
                    desc: "Spicy Caribbean chicken marinated in scotch bonnet peppers, allspice, and aromatic herbs then grilled over charcoal. This iconic Jamaican dish delivers intense heat balanced with complex spice flavors that embody island cooking traditions.",
                    mainIngredient: [
                        { item: "Chicken pieces whole" },
                        { item: "Scotch bonnet peppers" },
                        { item: "Allspice berries ground" },
                        { item: "Thyme fresh sprigs" },
                        { item: "Lime juice fresh" }
                    ],
                    sideIngredients: [
                        { item: "Ginger root grated" },
                        { item: "Garlic cloves crushed" },
                        { item: "Brown sugar dark" },
                        { item: "Soy sauce dark" }
                    ],
                    directions: [
                        {
                            title: "Marinate chicken for hours",
                            description: "Blend all spices and aromatics into paste and coat chicken thoroughly. Marinate for several hours or overnight for maximum flavor penetration."
                        },
                        {
                            title: "Prepare charcoal grill hot",
                            description: "Build hot charcoal fire with pimento wood if available for authentic flavor. High heat creates characteristic charred exterior and smoky taste."
                        },
                        {
                            title: "Grill over direct heat",
                            description: "Start chicken over direct high heat to sear and create crust, then move to cooler side to finish cooking through without burning."
                        },
                        {
                            title: "Rest before serving sliced",
                            description: "Let grilled chicken rest briefly to redistribute juices before serving. Slice and serve with traditional rice and peas for complete meal."
                        }
                    ]
                }
            ],
        }
    },
    mutations,
    getters,
    actions,
}