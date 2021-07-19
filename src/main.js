import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'


createApp(App).use(router).mount('#app')
