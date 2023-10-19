import { createApp } from 'vue'
import App from './App.vue'
import "./main.css"
import i18n from './locales/index'
import router from '@/router/index'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(i18n).use(router).use(pinia).mount('#app')
