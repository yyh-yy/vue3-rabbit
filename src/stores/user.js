import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from "@/api/user";
import { useCartStore } from './cart'
import { mergeCartAPI } from '@/api/cart'
export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()
    const userInfo = ref({})

    // 2. 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
        await mergeCartAPI(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                count: item.count,
                selected: item.selected
            }
        }))
        cartStore.updataNewList()
    }
    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.clearCartList()
    }
    return {
        getUserInfo,
        userInfo,
        clearUserInfo
    }

}, {
    persist: true
})

