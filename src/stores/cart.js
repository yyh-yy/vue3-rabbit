import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/api/cart'
export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    const cartList = ref([])

    const addCart = async (goods) => {
        const { skuId, count } = goods
        if (isLogin.value) {

            await insertCartAPI({ skuId, count })
            updataNewList()
        } else {
            const item = cartList.value.find(item => item.skuId === goods.skuId)
            if (item) {
                item.count += goods.count
            } else {
                cartList.value.push(goods)
            }
        }

    }
    const delCart = async (skuId) => {
        if (isLogin.value) {
            await delCartAPI([skuId])
            updataNewList()
        } else {
            cartList.value = cartList.value.filter(item => item.skuId !== skuId)
        }

    }
    const updataNewList = async () => {
        const res = await findNewCartListAPI()
        cartList.value = res.result
    }
    const clearCartList = () => {
        cartList.value = []
    }
    const allCount = computed(() => {
        return cartList.value.reduce((a, c) => a + c.count, 0)
    })
    const allPrice = computed(() => {
        return (cartList.value.reduce((a, c) => a + c.count * c.price, 0)).toFixed(2)
    })
    const singleCleck = (skuId, flag) => {
        const item = cartList.value.find(item => item.skuId === skuId)
        item.selected = flag
    }

    const isAll = computed(() => cartList.value.every(item => item.selected))
    const allCheck = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    }
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    return {
        addCart,
        cartList,
        delCart,
        allCount,
        allPrice,
        singleCleck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice,
        clearCartList,
        updataNewList
    }
}, {
    persist: true
})