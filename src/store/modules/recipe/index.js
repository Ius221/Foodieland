import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
    namespaced: true,
    state() {
        return {
            recipes: [
                {
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--1.png", import.meta.url)
                        .href,
                    title: "Spicy Paneer Delight with Garlic Twist",
                    time: "25 Minutes",
                    type: "South Indian",
                },
                {
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--2.png", import.meta.url)
                        .href,
                    title: "Creamy Mushroom Curry Served with Jeera Rice",
                    time: "40 Minutes",
                    type: "Fusion",
                },
                {
                    liked: false,
                    imgpath: new URL("@/assets/foodImages/img--3.png", import.meta.url)
                        .href,
                    title: "Traditional Rajasthani Dal Baati",
                    time: "50 Minutes",
                    type: "Rajasthani",
                },
                {
                    liked: true,
                    imgpath: new URL("@/assets/foodImages/img--4.png", import.meta.url)
                        .href,
                    title: "Tandoori Veg Platter with Mint Chutney",
                    time: "35 Minutes",
                    type: "Punjabi",
                },
            ],
        }
    },
    mutations,
    getters,
    actions,
}