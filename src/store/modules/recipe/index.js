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
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--2.png", import.meta.url)
                        .href,
                    title: "Creamy Mushroom Curry Served with Jeera Rice",
                    time: "40 Minutes",
                    type: "Fusion",
                },
                {
                    id: 2,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--3.png", import.meta.url)
                        .href,
                    title: "Traditional Rajasthani Dal Baati",
                    time: "50 Minutes",
                    type: "Rajasthani",
                },
                {
                    id: 3,
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--4.png", import.meta.url)
                        .href,
                    title: "Tandoori Veg Platter with Mint Chutney",
                    time: "35 Minutes",
                    type: "Punjabi",
                },
                {
                    id: 4,
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--1.png", import.meta.url)
                        .href,
                    title: "Spicy Paneer Delight with Garlic Twist",
                    time: "25 Minutes",
                    type: "South Indian",
                },
            ],
        }
    },
    mutations,
    getters,
    actions,
}