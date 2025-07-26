import { createRouter, createWebHistory } from "vue-router";
import ContactIndex from "./pages/contact/ContactIndex.vue";
import RecipeIndex from "./pages/recipe/recipeList/RecipeIndex.vue";
import BlogList from "./pages/blog/BlogList/BlogList.vue";
import BlogPost from "./pages/blog/BlogPost/BlogPost.vue";
import AllRecipe from "./pages/recipe/allRecipe/AllRecipe.vue";

// HOME, RECIPE-DETAILS,  BLOG-LIST, BLOG-POST,  CONTACT-US

const routes = [
    { path: '/', component: null },
    { path: '/recipe/page/:recipeNum', component: AllRecipe },
    { path: '/recipe/:recipeId', component: RecipeIndex },
    { path: '/blog', component: BlogList },
    { path: '/blog/:blogId', component: BlogPost },
    { path: '/contact', component: ContactIndex },
    { path: '/:notFound(.*)', component: null },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_, __, savedPosition) {
        if (savedPosition) return savedPosition;
        return { top: 0, left: 0, behavior: 'smooth' }
    }
});

export default router;