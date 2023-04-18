import { createApp } from 'vue'
import 'reset-css'
import './assets/styles/global.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.js'

import { createPinia } from 'pinia'
import router from './router'
import api from '@/services/api'

const app = createApp(App)
app.config.globalProperties.$api = api

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
