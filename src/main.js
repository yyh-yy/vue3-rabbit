
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import '@/styles/common.scss'
// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
const app = createApp(App)

app.use(createPinia()).use(router)

app.mount('#app')



//全局指令
app.directive('img-lazy', {
    mounted(el, binding) {
        //el:指令绑定的元素
        //binding:binding.value 等于括号后面绑定的表达式的值 图片 url
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                console.log(isIntersecting);
                if (isIntersecting) el.src = binding.value

            },
        )


    }
})