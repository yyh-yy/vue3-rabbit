// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                //el:指令绑定的元素
                //binding:binding.value 等于括号后面绑定的表达式的值 图片 url
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}