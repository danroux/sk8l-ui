// npm install vue
// <script src="https://cdn.jsdelivr.net/npm/vue@3.3/dist/vue.global.js"></script>
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
