import api from './index'
import type { Post } from '@/types'

export interface ArticleQuery {
  page: number
  size: number
  category?: string
  tag?: string
  search?: string
  status?: string
}

export interface CreateArticleData {
  title: string
  content: string
  summary?: string
  cover?: string
  categoryId?: number
  tags?: string[]
  status: 'draft' | 'published'
}

export const articleApi = {
  // 获取文章列表
  getArticles(query: ArticleQuery) {
    return api.get<{ items: Post[], total: number }>('/articles', { params: query })
  },

  // 获取文章详情
  getArticle(id: number) {
    return api.get<Post>(`/articles/${id}`)
  },

  // 创建文章
  createArticle(data: CreateArticleData) {
    return api.post<Post>('/articles', data)
  },

  // 更新文章
  updateArticle(id: number, data: Partial<CreateArticleData>) {
    return api.put<Post>(`/articles/${id}`, data)
  },

  // 删除文章
  deleteArticle(id: number) {
    return api.delete(`/articles/${id}`)
  },

  // 发布文章
  publishArticle(id: number) {
    return api.post<Post>(`/articles/${id}/publish`)
  },

  // 取消发布文章
  unpublishArticle(id: number) {
    return api.post<Post>(`/articles/${id}/unpublish`)
  }
} 