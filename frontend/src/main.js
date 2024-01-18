import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import routes from './plugin/routes'

createApp(App)
    .use(routes)
    .mount('#app')
