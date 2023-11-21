
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import '@/styles/common.scss'
import { lazyPlugin } from '@/directives/index'
import { componentPlugin } from '@/components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(router)
app.use(pinia)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')



