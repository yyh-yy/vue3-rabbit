import http from '@/utils/http'


//获取 banner
export const getBanner = (param = {}) => {
    const { distributionSite = '1' } = param
    return http({ url: 'home/banner', params: { distributionSite } })
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

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return http({
        url: '/home/goods'
    })
}