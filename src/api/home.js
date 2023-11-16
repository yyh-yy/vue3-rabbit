import http from '@/utils/http'


//获取 banner
export const getBanner = () => {
    return http({ url: 'home/banner' })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return http({
        url: '/home/new'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return http({
        url: 'home/hot',
        method: 'get',
        data: {}

    })
}