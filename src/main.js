import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js';
import router from './router.js';
import reusableComponent from './ReusableSlot.js';

const app = createApp(App);
reusableComponent(app);
app.use(router);
app.use(store);
app.mount('#app');