import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import reusableComponent from './ReusableSlot.js';

const app = createApp(App);
reusableComponent(app);
app.use(router);
app.mount('#app');