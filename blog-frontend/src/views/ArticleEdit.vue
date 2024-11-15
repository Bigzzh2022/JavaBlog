<template>
  <div class="article-edit">
    <el-form :model="articleForm" label-width="80px">
      <el-card class="edit-card">
        <template #header>
          <div class="card-header">
            <span>{{ isEdit ? '编辑文章' : '写文章' }}</span>
            <el-space>
              <el-button @click="saveDraft">存草稿</el-button>
              <el-button type="primary" @click="publishArticle">发布文章</el-button>
            </el-space>
          </div>
        </template>

        <el-form-item label="标题">
          <el-input v-model="articleForm.title" placeholder="请输入文章标题" />
        </el-form-item>

        <el-form-item label="分类">
          <el-select
            v-model="articleForm.category"
            placeholder="选择分类"
            class="category-select"
          >
            <el-option
              v-for="item in categories"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-button
            text
            type="primary"
            @click="showCategoryManager = true"
          >
            <el-icon><Setting /></el-icon>
            管理分类
          </el-button>
        </el-form-item>

        <el-form-item label="标签">
          <el-select
            v-model="articleForm.tags"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择或输入标签"
            class="tag-select"
          >
            <el-option
              v-for="tag in tags"
              :key="tag"
              :label="tag"
              :value="tag"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="封面">
          <el-upload
            class="cover-uploader"
            :show-file-list="false"
            :on-success="handleCoverSuccess"
            :before-upload="beforeCoverUpload"
          >
            <img
              v-if="articleForm.cover"
              :src="articleForm.cover"
              class="cover"
            />
            <el-icon v-else class="cover-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>

        <el-form-item label="内容" class="content-item">
          <md-editor
            v-model="articleForm.content"
            :toolbars="toolbars"
            @onUploadImg="onUploadImg"
            :preview="preview"
          />
        </el-form-item>

        <el-form-item label="摘要">
          <el-input
            v-model="articleForm.summary"
            type="textarea"
            :rows="3"
            placeholder="请输入文章摘要"
          />
        </el-form-item>
      </el-card>
    </el-form>

    <!-- 分类管理对话框 -->
    <el-dialog
      v-model="showCategoryManager"
      title="分类管理"
      width="60%"
      destroy-on-close
    >
      <category-manager />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { Setting, Plus } from '@element-plus/icons-vue'
import CategoryManager from '@/components/CategoryManager.vue'
import { ElMessage } from 'element-plus'
import { useArticleStore } from '@/stores/article'

const route = useRoute()
const router = useRouter()
const articleStore = useArticleStore()
const isEdit = computed(() => route.params.id !== undefined)
const preview = ref(false)

const articleForm = ref({
  title: '',
  category: '',
  tags: [] as string[],
  cover: '',
  content: '',
  summary: ''
})

const categories = [
  { label: '前端开发', value: 'frontend' },
  { label: '后端开发', value: 'backend' },
  { label: '算法', value: 'algorithm' }
]

const tags = ['Vue', 'React', 'TypeScript', 'Java', 'Spring Boot']
const showCategoryManager = ref(false)

const toolbars = [
  'bold',
  'italic',
  'strikethrough',
  'sub',
  'sup',
  'quote',
  'unordered-list',
  'ordered-list',
  'task-list',
  'link',
  'image',
  'table',
  'code',
  'inline-code',
  'preview',
  'fullscreen'
]

const handleCoverSuccess = (res: any) => {
  articleForm.value.cover = res.url
}

const beforeCoverUpload = (file: File) => {
  const isImage = file.type.startsWith('image/')
  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isImage) {
    ElMessage.error('只能上传图片文件!')
  }
  if (!isLt2M) {
    ElMessage.error('图片大小不能超过 2MB!')
  }

  return isImage && isLt2M
}

const onUploadImg = async (files: File[], callback: (urls: string[]) => void) => {
  // 实现图片上传逻辑
  const urls = await Promise.all(
    files.map(async (file) => {
      // 上传图片并返回 URL
      return 'https://example.com/image.jpg'
    })
  )
  callback(urls)
}

const saveDraft = async () => {
  const articleData = {
    title: articleForm.value.title,
    content: articleForm.value.content,
    summary: articleForm.value.summary,
    cover: articleForm.value.cover,
    categoryId: articleForm.value.category,
    tags: articleForm.value.tags,
    status: 'draft' as const
  }

  try {
    if (isEdit.value) {
      const result = await articleStore.updateArticle(Number(route.params.id), articleData)
      if (result) {
        ElMessage.success('草稿已保存')
        router.push('/admin/articles')
      }
    } else {
      const result = await articleStore.createArticle(articleData)
      if (result) {
        ElMessage.success('草稿已保存')
        router.push('/admin/articles')
      }
    }
  } catch (error) {
    ElMessage.error('保存失败')
  }
}

const publishArticle = async () => {
  const articleData = {
    title: articleForm.value.title,
    content: articleForm.value.content,
    summary: articleForm.value.summary,
    cover: articleForm.value.cover,
    categoryId: articleForm.value.category,
    tags: articleForm.value.tags,
    status: 'published' as const
  }

  try {
    if (isEdit.value) {
      const result = await articleStore.updateArticle(Number(route.params.id), articleData)
      if (result) {
        ElMessage.success('文章已更新')
        router.push('/admin/articles')
      }
    } else {
      const result = await articleStore.createArticle(articleData)
      if (result) {
        ElMessage.success('文章已发布')
        router.push('/admin/articles')
      }
    }
  } catch (error) {
    ElMessage.error('发布失败')
  }
}
</script>

<style scoped>
.article-edit {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.edit-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category-select {
  width: 200px;
  margin-right: 10px;
}

.tag-select {
  width: 100%;
}

.cover-uploader {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cover-uploader:hover {
  border-color: var(--el-color-primary);
}

.cover-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 40px;
  height: 40px;
}

.cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-item :deep(.md-editor) {
  height: 600px;
}
</style> 