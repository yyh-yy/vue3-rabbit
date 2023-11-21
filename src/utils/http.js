import axios from "axios";
import { useUserStore } from "@/stores/user";
import { ElMessage } from "element-plus";
import router from '@/router'
const http = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 5000
})

//请求拦截器

http.interceptors.request.use(config => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, err => {
    return Promise.reject(err)
})

//响应拦截器
http.interceptors.response.use(res => {


    return res.data
}, e => {
    const userStore = useUserStore()
    //统一错误提示
    if (e.response.status === 401) {
        userStore.clearUserInfo()
        router.push('/login')
    }
    ElMessage({
        type: 'warning',
        message: e.response.data.message
    })

    return Promise.reject(e)
})


export default http;