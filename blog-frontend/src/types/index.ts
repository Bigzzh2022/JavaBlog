// 用户相关类型
export interface User {
  id: number
  username: string
  email: string
  avatar?: string
  isAdmin: boolean
}

// 文章相关类型
export interface Post {
  id: number
  title: string
  content: string
  summary?: string
  cover?: string
  author: string
  authorAvatar?: string
  category?: string
  tags: string[]
  status: 'draft' | 'published' | 'deleted'
  views: number
  likes: number
  comments: number
  createdAt: string
  updatedAt: string
}

// 评论相关类型
export interface Comment {
  id: number
  content: string
  author: User
  post: Post
  createdAt: string
  status: 'pending' | 'approved' | 'rejected'
}

// 分类相关类型
export interface Category {
  id: number
  name: string
  description?: string
  articleCount: number
}

// 标签相关类型
export interface Tag {
  id: number
  name: string
  articleCount: number
}

// 通知相关类型
export interface Notification {
  id: number
  type: 'comment' | 'like' | 'follow' | 'system'
  title: string
  content: string
  isRead: boolean
  createdAt: string
}

// 系统设置相关类型
export interface SiteSettings {
  siteName: string
  siteDescription: string
  logo: string
  icp: string
  allowRegister: boolean
  commentAudit: boolean
  pageSize: number
  summaryLength: number
  smtpServer: string
  smtpPort: string
  emailAccount: string
  emailPassword: string
  senderName: string
  analyticsCode: string
  customCss: string
  customJs: string
}

// 统计相关类型
export interface Statistics {
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