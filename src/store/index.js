import { createStore } from "vuex";

import blogModule from './modules/blog/index.js';
import recipeModule from './modules/recipe/index.js';

const store = createStore({
    modules: {
        blogs: blogModule,
        recipe: recipeModule
    }
});

export default store;