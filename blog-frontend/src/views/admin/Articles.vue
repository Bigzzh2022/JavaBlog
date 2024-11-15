<template>
  <div class="articles-manage">
    <el-card>
      <template #header>
        <div class="header">
          <el-form :inline="true" :model="searchForm">
            <el-form-item>
              <el-input
                v-model="searchForm.keyword"
                placeholder="搜索文章标题"
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
              <el-select v-model="searchForm.status" placeholder="文章状态" clearable>
                <el-option label="已发布" value="published" />
                <el-option label="草稿" value="draft" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSearch">搜索</el-button>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="$router.push('/article/edit')">
            写文章
          </el-button>
        </div>
      </template>

      <el-table :data="articles" style="width: 100%">
        <el-table-column prop="title" label="标题" min-width="200">
          <template #default="{ row }">
            <el-link @click="$router.push(`/article/${row.id}`)">
              {{ row.title }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column prop="author" label="作者" width="120" />
        <el-table-column prop="category" label="分类" width="120" />
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="row.status === 'published' ? 'success' : 'info'">
              {{ row.status === 'published' ? '已发布' : '草稿' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="views" label="阅读" width="100" />
        <el-table-column prop="comments" label="评论" width="100" />
        <el-table-column prop="createTime" label="创建时间" width="180" />
        <el-table-column label="操作" width="200" fixed="right">
          <template #default="{ row }">
            <el-space>
              <el-button link type="primary" @click="handleEdit(row)">
                编辑
              </el-button>
              <el-button
                link
                type="primary"
                @click="handleChangeStatus(row)"
              >
                {{ row.status === 'published' ? '下架' : '发布' }}
              </el-button>
              <el-button link type="danger" @click="handleDelete(row)">
                删除
              </el-button>
            </el-space>
          </template>
        </el-table-column>
      </el-table>

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
import { ElMessageBox, ElMessage } from 'element-plus'

const router = useRouter()

const searchForm = reactive({
  keyword: '',
  category: '',
  status: ''
})

const articles = ref([
  {
    id: 1,
    title: '示例文章',
    author: '张三',
    category: '前端开发',
    status: 'published',
    views: 100,
    comments: 10,
    createTime: '2024-03-14 10:00:00'
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

const handleEdit = (row: any) => {
  router.push(`/article/edit/${row.id}`)
}

const handleChangeStatus = async (row: any) => {
  try {
    await ElMessageBox.confirm(
      `确定要${row.status === 'published' ? '下架' : '发布'}该文章吗？`,
      '提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    // 实现状态更改逻辑
    ElMessage.success('操作成功')
  } catch {
    // 用户取消操作
  }
}

const handleDelete = async (row: any) => {
  try {
    await ElMessageBox.confirm(
      '删除后无法恢复，确定要删除该文章吗？',
      '警告',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    // 实现删除逻辑
    ElMessage.success('删除成功')
  } catch {
    // 用户取消操作
  }
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
.articles-manage {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style> 