import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from "@/api/user";
export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})

    // 2. 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
    }
    const clearUserInfo = () => {
        userInfo.value = {}
    }
    return {
        getUserInfo,
        userInfo,
        clearUserInfo
    }

}, {
    persist: true
})

