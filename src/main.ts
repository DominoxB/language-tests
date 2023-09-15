import { createApp } from 'vue'
import App from './App.vue'
import "./main.css"
import i18n from './locales/index'
import router from '@/router/index'

createApp(App).use(i18n).use(router).mount('#app')
