import api from './index'

export interface StatisticsData {
  articles: {
    total: number
    published: number
    draft: number
    views: number
    likes: number
    comments: number
  }
  categories: {
    name: string
    count: number
  }[]
  tags: {
    name: string
    count: number
  }[]
  trending: {
    daily: {
      views: number[]
      likes: number[]
      comments: number[]
      dates: string[]
    }
    popular: {
      id: number
      title: string
      views: number
      likes: number
    }[]
  }
}

export const statisticsApi = {
  // 获取总体统计数据
  getOverview() {
    return api.get<StatisticsData>('/statistics/overview')
  },

  // 获取指定时间范围的统计数据
  getTimeRange(start: string, end: string) {
    return api.get<StatisticsData>('/statistics/range', {
      params: { start, end }
    })
  },

  // 获取文章访问详情
  getArticleStats(articleId: number) {
    return api.get(`/statistics/articles/${articleId}`)
  }
} 