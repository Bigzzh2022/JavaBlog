import { defineStore } from 'pinia'
import { ref } from 'vue'
import { articleApi, type CreateArticleData } from '@/api/article'
import type { Post } from '@/types'
import { ElMessage } from 'element-plus'

export const useArticleStore = defineStore('article', () => {
  const currentArticle = ref<Post | null>(null)
  const loading = ref(false)

  const createArticle = async (data: CreateArticleData) => {
    try {
      loading.value = true
      const response = await articleApi.createArticle(data)
      ElMessage.success(data.status === 'published' ? '文章已发布' : '草稿已保存')
      return response
    } catch (error: any) {
      ElMessage.error(error.response?.data?.message || '操作失败')
      return null
    } finally {
      loading.value = false
    }
  }

  const updateArticle = async (id: number, data: Partial<CreateArticleData>) => {
    try {
      loading.value = true
      const response = await articleApi.updateArticle(id, data)
      ElMessage.success(data.status === 'published' ? '文章已更新' : '草稿已保存')
      return response
    } catch (error: any) {
      ElMessage.error(error.response?.data?.message || '操作失败')
      return null
    } finally {
      loading.value = false
    }
  }

  const getArticle = async (id: number) => {
    try {
      loading.value = true
      const response = await articleApi.getArticle(id)
      currentArticle.value = response
      return response
    } catch (error: any) {
      ElMessage.error(error.response?.data?.message || '获取文章失败')
      return null
    } finally {
      loading.value = false
    }
  }

  const publishArticle = async (id: number) => {
    try {
      loading.value = true
      await articleApi.publishArticle(id)
      ElMessage.success('文章已发布')
      return true
    } catch (error: any) {
      ElMessage.error(error.response?.data?.message || '发布失败')
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    currentArticle,
    loading,
    createArticle,
    updateArticle,
    getArticle,
    publishArticle
  }
}) 