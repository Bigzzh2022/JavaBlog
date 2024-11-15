import { defineStore } from 'pinia'
import { ref } from 'vue'
import { articleApi } from '@/api/article'
import type { Post } from '@/types'

export const useSearchStore = defineStore('search', () => {
  const searchResults = ref<Post[]>([])
  const loading = ref(false)
  const total = ref(0)
  const currentPage = ref(1)
  const pageSize = ref(10)

  const search = async (query: string) => {
    try {
      loading.value = true
      const response = await articleApi.getArticles({
        page: currentPage.value,
        size: pageSize.value,
        search: query
      })
      searchResults.value = response.items
      total.value = response.total
    } finally {
      loading.value = false
    }
  }

  const updatePage = (page: number) => {
    currentPage.value = page
  }

  const clearResults = () => {
    searchResults.value = []
    total.value = 0
    currentPage.value = 1
  }

  return {
    searchResults,
    loading,
    total,
    currentPage,
    pageSize,
    search,
    updatePage,
    clearResults
  }
}) 