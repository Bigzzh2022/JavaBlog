<template>
  <div class="article-detail">
    <el-row :gutter="20">
      <el-col :span="16">
        <el-card class="article-card">
          <div class="article-header">
            <h1>{{ article.title }}</h1>
            <div class="article-meta">
              <el-space>
                <el-avatar :size="32" :src="article.authorAvatar" />
                <span class="author-name">{{ article.author }}</span>
                <span class="publish-time">{{ article.publishTime }}</span>
                <el-tag size="small">{{ article.category }}</el-tag>
              </el-space>
            </div>
          </div>
          <div class="article-content" v-html="article.content"></div>
          <div class="article-actions">
            <el-space>
              <el-button type="primary" :icon="StarFilled">
                点赞 {{ article.likes }}
              </el-button>
              <el-button :icon="CollectionTag">
                收藏 {{ article.collections }}
              </el-button>
              <el-button :icon="Share">分享</el-button>
            </el-space>
          </div>
          
          <!-- 评论区 -->
          <div class="comments-section">
            <h3>评论 ({{ article.comments.length }})</h3>
            <div class="comment-input">
              <el-input
                v-model="newComment"
                type="textarea"
                :rows="3"
                placeholder="写下你的评论..."
              />
              <el-button type="primary" class="submit-comment">
                发表评论
              </el-button>
            </div>
            <div class="comments-list">
              <div v-for="comment in article.comments" :key="comment.id" class="comment-item">
                <el-avatar :size="40" :src="comment.userAvatar" />
                <div class="comment-content">
                  <div class="comment-header">
                    <span class="comment-author">{{ comment.userName }}</span>
                    <span class="comment-time">{{ comment.time }}</span>
                  </div>
                  <p class="comment-text">{{ comment.content }}</p>
                  <div class="comment-actions">
                    <el-button text :icon="CaretTop">
                      {{ comment.likes }}
                    </el-button>
                    <el-button text :icon="ChatRound">回复</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      
      <el-col :span="8">
        <!-- 作者信息卡片 -->
        <el-card class="author-card">
          <div class="author-info">
            <el-avatar :size="64" :src="article.authorAvatar" />
            <h3>{{ article.author }}</h3>
            <p class="author-bio">{{ article.authorBio }}</p>
            <el-button type="primary" block>关注作者</el-button>
          </div>
          <div class="author-stats">
            <div class="stat-item">
              <div class="stat-value">{{ article.authorStats.articles }}</div>
              <div class="stat-label">文章</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{{ article.authorStats.followers }}</div>
              <div class="stat-label">粉丝</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{{ article.authorStats.likes }}</div>
              <div class="stat-label">获赞</div>
            </div>
          </div>
        </el-card>

        <!-- 相关文章 -->
        <el-card class="related-articles">
          <template #header>
            <div class="card-header">
              <span>相关文章</span>
            </div>
          </template>
          <el-scrollbar max-height="400px">
            <div v-for="(article, index) in relatedArticles" :key="index" class="related-article-item">
              <span class="article-title">{{ article.title }}</span>
              <span class="article-views">{{ article.views }} 阅读</span>
            </div>
          </el-scrollbar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  StarFilled,
  CollectionTag,
  Share,
  CaretTop,
  ChatRound
} from '@element-plus/icons-vue'

const newComment = ref('')

const article = {
  title: '深入理解 Vue 3 的响应式系统',
  author: '技术专家',
  authorAvatar: 'https://example.com/avatar.jpg',
  publishTime: '2024-03-14 10:00',
  category: '前端开发',
  content: `
    <h2>引言</h2>
    <p>Vue 3 的响应式系统是其核心特性之一...</p>
    <h2>响应式原理</h2>
    <p>通过 Proxy 对象实现数据的响应式追踪...</p>
  `,
  likes: 128,
  collections: 56,
  authorBio: '资深前端开发工程师，专注于 Vue.js 技术栈',
  authorStats: {
    articles: 42,
    followers: '12.5k',
    likes: '88.9k'
  },
  comments: [
    {
      id: 1,
      userName: '读者A',
      userAvatar: 'https://example.com/avatar1.jpg',
      content: '文章写得很好，讲解得很清楚！',
      time: '2小时前',
      likes: 12
    }
  ]
}

const relatedArticles = [
  { title: 'Vue 3 组合式 API 最佳实践', views: 2341 },
  { title: '使用 TypeScript 开发 Vue 应用', views: 1890 },
  { title: 'Pinia 状态管理指南', views: 1567 }
]
</script>

<style scoped>
.article-detail {
  padding: 20px;
}

.article-card {
  margin-bottom: 20px;
}

.article-header {
  margin-bottom: 30px;
}

.article-header h1 {
  margin-bottom: 20px;
}

.article-meta {
  color: var(--el-text-color-secondary);
}

.author-name {
  font-weight: bold;
}

.publish-time {
  color: var(--el-text-color-secondary);
}

.article-content {
  margin: 30px 0;
  line-height: 1.8;
}

.article-actions {
  margin: 30px 0;
  padding-top: 20px;
  border-top: 1px solid var(--el-border-color-lighter);
}

.comments-section {
  margin-top: 40px;
}

.comment-input {
  margin: 20px 0;
}

.submit-comment {
  margin-top: 10px;
  float: right;
}

.comment-item {
  display: flex;
  gap: 15px;
  margin: 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.comment-content {
  flex: 1;
}

.comment-header {
  margin-bottom: 8px;
}

.comment-author {
  font-weight: bold;
  margin-right: 10px;
}

.comment-time {
  color: var(--el-text-color-secondary);
  font-size: 0.9em;
}

.comment-text {
  margin: 8px 0;
}

.author-card {
  margin-bottom: 20px;
}

.author-info {
  text-align: center;
  padding: 20px 0;
}

.author-bio {
  color: var(--el-text-color-secondary);
  margin: 15px 0;
}

.author-stats {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 1.2em;
  font-weight: bold;
}

.stat-label {
  color: var(--el-text-color-secondary);
  font-size: 0.9em;
}

.related-article-item {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--el-border-color-lighter);
  cursor: pointer;
}

.related-article-item:hover {
  background-color: var(--el-fill-color-light);
}

.related-article-item:last-child {
  border-bottom: none;
}

.article-title {
  flex: 1;
  margin-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.article-views {
  color: var(--el-text-color-secondary);
  font-size: 0.9em;
}
</style> 