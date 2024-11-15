<template>
  <div class="home">
    <el-row :gutter="20">
      <!-- 左侧主要内容区域 -->
      <el-col :span="16">
        <!-- 轮播图 -->
        <el-card class="carousel-card">
          <el-carousel height="300px">
            <el-carousel-item v-for="item in carouselItems" :key="item.id">
              <img :src="item.image" :alt="item.title" class="carousel-image">
              <div class="carousel-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-card>

        <!-- 文章列表 -->
        <el-card class="article-list">
          <template #header>
            <div class="list-header">
              <el-tabs v-model="activeTab">
                <el-tab-pane label="推荐" name="recommended" />
                <el-tab-pane label="最新" name="latest" />
                <el-tab-pane label="热门" name="popular" />
              </el-tabs>
            </div>
          </template>

          <div v-for="article in articles" :key="article.id" class="article-item">
            <div class="article-main">
              <h2 class="article-title" @click="viewArticle(article.id)">
                {{ article.title }}
              </h2>
              <p class="article-summary">{{ article.summary }}</p>
              <div class="article-meta">
                <el-space>
                  <el-avatar :size="24" :src="article.authorAvatar" />
                  <span>{{ article.author }}</span>
                  <span class="meta-divider">·</span>
                  <span>{{ article.createTime }}</span>
                  <span class="meta-divider">·</span>
                  <el-tag size="small">{{ article.category }}</el-tag>
                </el-space>
                <el-space>
                  <el-button text>
                    <el-icon><View /></el-icon>
                    {{ article.views }}
                  </el-button>
                  <el-button text>
                    <el-icon><Star /></el-icon>
                    {{ article.likes }}
                  </el-button>
                  <el-button text>
                    <el-icon><ChatLineRound /></el-icon>
                    {{ article.comments }}
                  </el-button>
                </el-space>
              </div>
            </div>
            <div class="article-cover" v-if="article.cover">
              <img :src="article.cover" :alt="article.title">
            </div>
          </div>

          <div class="load-more">
            <el-button text @click="loadMore">加载更多</el-button>
          </div>
        </el-card>
      </el-col>

      <!-- 右侧边栏 -->
      <el-col :span="8">
        <!-- 个人信息卡片 -->
        <el-card class="profile-card">
          <template #header>
            <div class="profile-header">
              <el-avatar :size="64" :src="userInfo.avatar" />
              <h3>{{ userInfo.name }}</h3>
              <p class="bio">{{ userInfo.bio }}</p>
            </div>
          </template>
          <div class="profile-stats">
            <div class="stat-item">
              <div class="stat-value">{{ userInfo.articles }}</div>
              <div class="stat-label">文章</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{{ userInfo.followers }}</div>
              <div class="stat-label">关注者</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{{ userInfo.following }}</div>
              <div class="stat-label">关注中</div>
            </div>
          </div>
          <el-button type="primary" block>编辑资料</el-button>
        </el-card>

        <!-- 分类导航 -->
        <el-card class="category-card">
          <template #header>
            <div class="card-header">
              <span>分类导航</span>
            </div>
          </template>
          <div class="category-list">
            <el-tag
              v-for="category in categories"
              :key="category.id"
              :type="category.type"
              class="category-tag"
              @click="filterByCategory(category.id)"
            >
              {{ category.name }}
              <span class="category-count">({{ category.count }})</span>
            </el-tag>
          </div>
        </el-card>

        <!-- 标签云 -->
        <el-card class="tags-card">
          <template #header>
            <div class="card-header">
              <span>热门标签</span>
            </div>
          </template>
          <div class="tag-cloud">
            <el-tag
              v-for="tag in tags"
              :key="tag.id"
              :type="tag.type"
              :effect="tag.effect"
              class="tag-item"
              @click="filterByTag(tag.id)"
            >
              {{ tag.name }}
            </el-tag>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { View, Star, ChatLineRound } from '@element-plus/icons-vue'

const router = useRouter()
const activeTab = ref('recommended')

// 轮播图数据
const carouselItems = [
  {
    id: 1,
    title: '前端开发趋势',
    description: '2024年前端开发的新趋势和技术展望',
    image: 'https://example.com/image1.jpg'
  },
  // 更多轮播项...
]

// 文章列表数据
const articles = [
  {
    id: 1,
    title: 'Vue 3 组合式 API 最佳实践',
    summary: '本文将介绍 Vue 3 组合式 API 的最佳实践和使用技巧...',
    author: '张三',
    authorAvatar: 'https://example.com/avatar1.jpg',
    createTime: '2024-03-14',
    category: '前端开发',
    cover: 'https://example.com/cover1.jpg',
    views: 1234,
    likes: 88,
    comments: 23
  },
  // 更多文章...
]

// 用户信息
const userInfo = {
  name: '张三',
  avatar: 'https://example.com/avatar.jpg',
  bio: '热爱技术，专注于Web开发',
  articles: 42,
  followers: '12.5k',
  following: 233
}

// 分类数据
const categories = [
  { id: 1, name: '前端开发', count: 128, type: '' },
  { id: 2, name: '后端开发', count: 85, type: 'success' },
  { id: 3, name: '移动开发', count: 64, type: 'warning' },
  { id: 4, name: '算法', count: 32, type: 'danger' }
]

// 标签数据
const tags = [
  { id: 1, name: 'Vue', type: '', effect: 'plain' },
  { id: 2, name: 'React', type: 'success', effect: 'plain' },
  { id: 3, name: 'TypeScript', type: 'warning', effect: 'plain' },
  { id: 4, name: 'Node.js', type: 'danger', effect: 'plain' }
]

const viewArticle = (id: number) => {
  router.push(`/article/${id}`)
}

const loadMore = () => {
  // 实现加载更多逻辑
}

const filterByCategory = (categoryId: number) => {
  // 实现分类筛选逻辑
}

const filterByTag = (tagId: number) => {
  // 实现标签筛选逻辑
}
</script>

<style scoped>
.home {
  padding: 20px;
}

.carousel-card {
  margin-bottom: 20px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
}

.carousel-content h3 {
  margin: 0 0 10px;
}

.carousel-content p {
  margin: 0;
  opacity: 0.9;
}

.article-list {
  margin-bottom: 20px;
}

.article-item {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.article-item:last-child {
  border-bottom: none;
}

.article-main {
  flex: 1;
  margin-right: 20px;
}

.article-title {
  margin: 0 0 10px;
  font-size: 1.2em;
  cursor: pointer;
}

.article-title:hover {
  color: var(--el-color-primary);
}

.article-summary {
  color: var(--el-text-color-secondary);
  margin: 10px 0;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--el-text-color-secondary);
  font-size: 0.9em;
}

.meta-divider {
  margin: 0 8px;
}

.article-cover {
  width: 200px;
  height: 120px;
  overflow: hidden;
  border-radius: 4px;
}

.article-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.load-more {
  text-align: center;
  margin-top: 20px;
}

.profile-card,
.category-card,
.tags-card {
  margin-bottom: 20px;
}

.profile-header {
  text-align: center;
}

.profile-header h3 {
  margin: 10px 0 5px;
}

.bio {
  color: var(--el-text-color-secondary);
  margin: 0;
}

.profile-stats {
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

.category-list,
.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.category-tag,
.tag-item {
  cursor: pointer;
}

.category-count {
  margin-left: 4px;
  opacity: 0.8;
}
</style> 