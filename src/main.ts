import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { i18n } from './i18n'
import { UIComponents } from './components/UI'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

UIComponents.forEach(c => {
    app.component(c.name, c.component)
})

app.use(pinia)
    .use(i18n)
    .use(router)
    .mount('#app')