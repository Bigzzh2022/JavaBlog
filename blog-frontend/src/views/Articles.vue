<template>
  <div class="articles">
    <el-card>
      <template #header>
        <div class="header">
          <el-form :inline="true" :model="searchForm">
            <el-form-item>
              <el-input
                v-model="searchForm.keyword"
                placeholder="搜索文章"
                clearable
              />
            </el-form-item>
            <el-form-item>
              <el-select v-model="searchForm.category" placeholder="选择分类" clearable>
                <el-option
                  v-for="item in categories"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSearch">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
      </template>

      <div class="article-list">
        <el-row :gutter="20">
          <el-col :span="24" v-for="article in articles" :key="article.id">
            <el-card class="article-card" shadow="hover">
              <div class="article-content">
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
                  </div>
                </div>
                <div class="article-cover" v-if="article.cover">
                  <img :src="article.cover" :alt="article.title">
                </div>
              </div>
              <div class="article-footer">
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
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div class="pagination">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :total="total"
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { View, Star, ChatLineRound } from '@element-plus/icons-vue'

const router = useRouter()

const searchForm = reactive({
  keyword: '',
  category: ''
})

const articles = ref([
  {
    id: 1,
    title: '示例文章标题',
    summary: '这是一篇示例文章的摘要内容...',
    author: '张三',
    authorAvatar: 'https://example.com/avatar.jpg',
    createTime: '2024-03-14',
    category: '前端开发',
    cover: 'https://example.com/cover.jpg',
    views: 100,
    likes: 50,
    comments: 10
  }
])

const categories = [
  { label: '前端开发', value: 'frontend' },
  { label: '后端开发', value: 'backend' },
  { label: '算法', value: 'algorithm' }
]

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)

const handleSearch = () => {
  // 实现搜索逻辑
}

const viewArticle = (id: number) => {
  router.push(`/article/${id}`)
}

const handleSizeChange = (val: number) => {
  pageSize.value = val
  // 重新加载数据
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
  // 重新加载数据
}
</script>

<style scoped>
.articles {
  padding: 20px;
}

.article-card {
  margin-bottom: 20px;
}

.article-content {
  display: flex;
  gap: 20px;
}

.article-main {
  flex: 1;
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.article-meta {
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

.article-footer {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--el-border-color-lighter);
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style> 