import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.css'

createApp(App).use(store).use(router).mount('#app')
