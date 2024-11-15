<template>
  <div class="profile">
    <el-row :gutter="20">
      <el-col :span="6">
        <!-- 个人信息卡片 -->
        <el-card class="profile-card">
          <div class="profile-header">
            <el-avatar :size="100" :src="userInfo.avatar" />
            <h2>{{ userInfo.name }}</h2>
            <p class="bio">{{ userInfo.bio }}</p>
          </div>
          <div class="profile-stats">
            <div class="stat-item">
              <div class="stat-value">{{ userInfo.stats.articles }}</div>
              <div class="stat-label">文章</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{{ userInfo.stats.followers }}</div>
              <div class="stat-label">关注者</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{{ userInfo.stats.following }}</div>
              <div class="stat-label">关注中</div>
            </div>
          </div>
          <el-button type="primary" block @click="editProfile">
            编辑资料
          </el-button>
        </el-card>

        <!-- 导航菜单 -->
        <el-card class="menu-card">
          <el-menu
            :default-active="activeMenu"
            @select="handleMenuSelect"
          >
            <el-menu-item index="articles">
              <el-icon><Document /></el-icon>
              <span>我的文章</span>
            </el-menu-item>
            <el-menu-item index="drafts">
              <el-icon><EditPen /></el-icon>
              <span>草稿箱</span>
            </el-menu-item>
            <el-menu-item index="collections">
              <el-icon><Star /></el-icon>
              <span>收藏夹</span>
            </el-menu-item>
            <el-menu-item index="likes">
              <el-icon><GoodsFilled /></el-icon>
              <span>点赞记录</span>
            </el-menu-item>
            <el-menu-item index="comments">
              <el-icon><ChatDotRound /></el-icon>
              <span>我的评论</span>
            </el-menu-item>
            <el-menu-item index="settings">
              <el-icon><Setting /></el-icon>
              <span>账号设置</span>
            </el-menu-item>
          </el-menu>
        </el-card>
      </el-col>

      <el-col :span="18">
        <!-- 内容区域 -->
        <el-card class="content-card">
          <template #header>
            <div class="content-header">
              <h3>{{ contentTitle }}</h3>
              <el-button type="primary" v-if="showNewArticleBtn">
                写文章
              </el-button>
            </div>
          </template>

          <!-- 文章列表 -->
          <div v-if="activeMenu === 'articles'" class="articles-list">
            <el-table :data="articles" style="width: 100%">
              <el-table-column prop="title" label="标题" min-width="300">
                <template #default="{ row }">
                  <el-link>{{ row.title }}</el-link>
                </template>
              </el-table-column>
              <el-table-column prop="views" label="阅读" width="100" />
              <el-table-column prop="likes" label="点赞" width="100" />
              <el-table-column prop="comments" label="评论" width="100" />
              <el-table-column prop="createTime" label="发布时间" width="180" />
              <el-table-column label="操作" width="150">
                <template #default>
                  <el-space>
                    <el-button link type="primary">编辑</el-button>
                    <el-button link type="danger">删除</el-button>
                  </el-space>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Document,
  EditPen,
  Star,
  GoodsFilled,
  ChatDotRound,
  Setting
} from '@element-plus/icons-vue'

const activeMenu = ref('articles')
const userInfo = {
  name: '张三',
  avatar: 'https://example.com/avatar.jpg',
  bio: '热爱技术，热爱分享',
  stats: {
    articles: 42,
    followers: '12.5k',
    following: 233
  }
}

const articles = [
  {
    title: 'Vue 3 组合式 API 最佳实践',
    views: 2341,
    likes: 128,
    comments: 23,
    createTime: '2024-03-14 10:00'
  },
  // 更多文章...
]

const contentTitle = computed(() => {
  const titles = {
    articles: '我的文章',
    drafts: '草稿箱',
    collections: '我的收藏',
    likes: '点赞记录',
    comments: '我的评论',
    settings: '账号设置'
  }
  return titles[activeMenu.value] || ''
})

const showNewArticleBtn = computed(() => {
  return ['articles', 'drafts'].includes(activeMenu.value)
})

const handleMenuSelect = (index: string) => {
  activeMenu.value = index
}

const editProfile = () => {
  // 实现编辑资料的逻辑
}
</script>

<style scoped>
.profile {
  padding: 20px;
}

.profile-card {
  margin-bottom: 20px;
}

.profile-header {
  text-align: center;
  padding: 20px 0;
}

.profile-header h2 {
  margin: 15px 0 10px;
}

.bio {
  color: var(--el-text-color-secondary);
  margin: 10px 0;
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

.menu-card {
  margin-top: 20px;
}

.content-card {
  min-height: 500px;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content-header h3 {
  margin: 0;
}

.articles-list {
  margin-top: 20px;
}
</style> 