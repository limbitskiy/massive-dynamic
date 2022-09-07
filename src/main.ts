import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { i18n } from './i18n'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRocket, faStar, faBullseye, faBolt, faShapes, faBriefcase, faStore, faKeyboard } from '@fortawesome/free-solid-svg-icons'
library.add(faRocket, faStar, faBullseye, faBolt, faShapes, faBriefcase, faStore, faKeyboard)

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
    .use(i18n)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')