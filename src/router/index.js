import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/Home/index.vue')
            },
            {
                path: 'category/:id',
                component: () => import('@/views/Category/index.vue')
            },
            {
                path: 'category/sub/:id',
                component: () => import('@/views/SubCategory/index.vue')
            },
            {
                path: 'details/:id',
                component: () => import('@/views/Details/index.vue')
            },
            {
                path: 'cartlist',
                component: () => import('@/views/CartList/index.vue')
            },
            {
                path: 'checkout',
                component: () => import('@/views/Checkout/index.vue')
            },
            {
                path: 'pay',
                component: () => import('@/views/Pay/index.vue')
            },
            {
                path: 'paycallback',
                component: () => import('@/views/Pay/PayBack.vue')
            },
            {
                path: 'member',
                component: () => import('@/views/Member/index.vue'),
                children: [
                    {
                        path: '',
                        component: () => import('@/views/Member/components/UserInfo.vue')
                    },
                    {
                        path: 'order',
                        component: () => import('@/views/Member/components/UserOrder.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/Login/index.vue'),

    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router