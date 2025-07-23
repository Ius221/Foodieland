import { createRouter, createWebHistory } from "vue-router";
import ContactIndex from "./pages/contact/ContactIndex.vue";
import BlogList from "./pages/blog/BlogList/BlogList.vue";
import BlogPost from "./pages/blog/BlogPost/BlogPost.vue";

// HOME, RECIPE-DETAILS,  BLOG-LIST, BLOG-POST,  CONTACT-US

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: null },
    { path: '/recipe/:id', component: null },
    { path: '/blog', component: BlogList },
    { path: '/blog/:blogId', component: BlogPost },
    { path: '/contact', component: ContactIndex },
    { path: '/:notFound(.*)', component: null },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    // scrollBehavior(_, _, savedPosition) {
    //     if (savedPosition) return savedPosition;
    //     return { left: 0, top: 0 }
    // }
});

export default router;