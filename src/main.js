
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import '@/styles/common.scss'
import { lazyPlugin } from '@/directives/index'

const app = createApp(App)

app.use(createPinia()).use(router)
app.use(lazyPlugin)
app.mount('#app')



