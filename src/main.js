import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //automatically imports index

createApp(App).use(router).mount('#app')
