import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

export default {
    namespaced: true,
    state() {
        return {
            blogs: [
                {
                    foodImage: new URL("@/assets/blogImages/img--1.png", import.meta.url)
                        .href,
                    humanFace: new URL("@/assets/uiFaces/img_1.jpg", import.meta.url)
                        .href,
                    foodName: "Spaghetti Carbonara",
                    desc: "A creamy pasta dish made with eggs, cheese, pancetta, and pepper, originating from Rome, Italy.",
                    name: "Lroem Ipsum",
                    date: "12 November 2021",
                },
                {
                    foodImage: new URL("@/assets/blogImages/img--2.png", import.meta.url)
                        .href,
                    humanFace: new URL("@/assets/uiFaces/img_2.jpg", import.meta.url)
                        .href,
                    foodName: "Margherita Pizza",
                    desc: "Classic Neapolitan pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.",
                    name: "Jane Doe",
                    date: "5 January 2022",
                },
                {
                    foodImage: new URL("@/assets/blogImages/img--3.png", import.meta.url)
                        .href,
                    humanFace: new URL("@/assets/uiFaces/img_3.jpg", import.meta.url)
                        .href,
                    foodName: "Chicken Biryani",
                    desc: "A flavorful Indian rice dish cooked with marinated chicken, aromatic spices, and saffron.",
                    name: "John Smith",
                    date: "20 February 2022",
                },
                {
                    foodImage: new URL("@/assets/blogImages/img--4.png", import.meta.url)
                        .href,
                    humanFace: new URL("@/assets/uiFaces/img_4.jpg", import.meta.url)
                        .href,
                    foodName: "Sushi Platter",
                    desc: "An assortment of sushi rolls and nigiri made with vinegared rice, seafood, and vegetables.",
                    name: "Alice Johnson",
                    date: "3 March 2022",
                },
                {
                    foodImage: new URL("@/assets/blogImages/img--5.png", import.meta.url)
                        .href,
                    humanFace: new URL("@/assets/uiFaces/img_5.jpg", import.meta.url)
                        .href,
                    foodName: "Avocado Toast",
                    desc: "Toasted sourdough bread topped with smashed avocado, chili flakes, and a drizzle of olive oil.",
                    name: "Robert Brown",
                    date: "17 April 2022",
                },
                {
                    foodImage: new URL("@/assets/blogImages/img--6.png", import.meta.url)
                        .href,
                    humanFace: new URL("@/assets/uiFaces/img_6.jpg", import.meta.url)
                        .href,
                    foodName: "Ramen Bowl",
                    desc: "Japanese noodle soup with a rich broth, tender pork, soft-boiled egg, and fresh vegetables.",
                    name: "Emily Davis",
                    date: "25 May 2022",
                },
            ],
        }
    },
    mutations,
    getters,
    actions,
}