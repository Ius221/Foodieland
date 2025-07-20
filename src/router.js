import { createRouter, createWebHistory } from "vue-router";
import ContactIndex from "./pages/contact/ContactIndex.vue";

// HOME, RECIPE-DETAILS,  BLOG-LIST, BLOG-POST,  CONTACT-US

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: null },
    { path: '/recipe/:id', component: null },
    { path: '/blog', component: null },
    { path: '/blog/:id', component: null },
    { path: '/contact', component: ContactIndex },
    { path: '/:notFound(.*)', component: null },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;