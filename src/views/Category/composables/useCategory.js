// 业务数据
import { getTopCategoryAPI } from "@/api/category";
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
export const useCategory = () => {
    const route = useRoute();
    const categoryData = ref({});
    const getTopCategoryData = async (id = route.params.id) => {
        const res = await getTopCategoryAPI(id);
        categoryData.value = res.result;
    };

    watchEffect(() => {
        if (route.fullPath !== "/") getTopCategoryData(route.params.id);
    });
    return {
        categoryData
    }
}