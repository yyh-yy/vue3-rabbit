import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from "@/api/layout";
export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  const getCategory = async () => {
    const res = await getCategoryAPI();
    if (res.code == 1) {
      categoryList.value = res.result;
    }
  }
  return {
    categoryList,
    getCategory
  }
})
