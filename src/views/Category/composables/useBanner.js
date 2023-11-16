//轮播图
import { getBanner } from "@/api/home";
import { ref, onMounted } from "vue";
export const useBanner = () => {
    const bannerList = ref([]);
    const getBannerList = async () => {
        const res = await getBanner({ distributionSite: "2" });
        bannerList.value = res.result;
    };
    onMounted(() => {
        getBannerList();
    });
    return {
        bannerList,

    }
}