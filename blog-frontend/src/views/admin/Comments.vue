<template>
  <div class="comments-manage">
    <el-card>
      <template #header>
        <div class="header">
          <el-form :inline="true" :model="searchForm">
            <el-form-item>
              <el-input
                v-model="searchForm.keyword"
                placeholder="搜索评论内容"
                clearable
              />
            </el-form-item>
            <el-form-item>
              <el-select v-model="searchForm.status" placeholder="评论状态" clearable>
                <el-option label="已审核" value="approved" />
                <el-option label="待审核" value="pending" />
                <el-option label="已拒绝" value="rejected" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSearch">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
      </template>

      <el-table :data="comments" style="width: 100%">
        <el-table-column prop="content" label="评论内容" min-width="300">
          <template #default="{ row }">
            <div class="comment-content">
              <div class="comment-text">{{ row.content }}</div>
              <div class="article-info">
                文章：<el-link @click="$router.push(`/article/${row.articleId}`)">
                  {{ row.articleTitle }}
                </el-link>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="author" label="评论者" width="120" />
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="getStatusType(row.status)">
              {{ getStatusText(row.status) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="评论时间" width="180" />
        <el-table-column label="操作" width="250" fixed="right">
          <template #default="{ row }">
            <el-space>
              <template v-if="row.status === 'pending'">
                <el-button link type="success" @click="handleApprove(row)">
                  通过
                </el-button>
                <el-button link type="danger" @click="handleReject(row)">
                  拒绝
                </el-button>
              </template>
              <el-button link type="primary" @click="handleReply(row)">
                回复
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

    <!-- 回复评论对话框 -->
    <el-dialog v-model="showReplyDialog" title="回复评论" width="500px">
      <el-form :model="replyForm">
        <el-form-item label="评论内容">
          <div class="original-comment">{{ selectedComment?.content }}</div>
        </el-form-item>
        <el-form-item label="回复内容">
          <el-input
            v-model="replyForm.content"
            type="textarea"
            :rows="4"
            placeholder="请输入回复内容"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showReplyDialog = false">取消</el-button>
        <el-button type="primary" @click="submitReply">发表回复</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'

const searchForm = reactive({
  keyword: '',
  status: ''
})

const comments = ref([
  {
    id: 1,
    content: '这是一条评论内容',
    author: '张三',
    status: 'pending',
    createTime: '2024-03-14 10:00:00',
    articleId: 1,
    articleTitle: '示例文章标题'
  }
])

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)

const showReplyDialog = ref(false)
const selectedComment = ref<any>(null)
const replyForm = reactive({
  content: ''
})

const getStatusType = (status: string) => {
  const types = {
    approved: 'success',
    pending: 'warning',
    rejected: 'danger'
  }
  return types[status as keyof typeof types]
}

const getStatusText = (status: string) => {
  const texts = {
    approved: '已审核',
    pending: '待审核',
    rejected: '已���绝'
  }
  return texts[status as keyof typeof texts]
}

const handleSearch = () => {
  // 实现搜索逻辑
}

const handleApprove = async (row: any) => {
  try {
    await ElMessageBox.confirm('确定要通过这条评论吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    // 实现审核通过逻辑
    ElMessage.success('操作成功')
  } catch {
    // 用户取消操作
  }
}

const handleReject = async (row: any) => {
  try {
    await ElMessageBox.confirm('确定要拒绝这条评论吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    // 实现拒绝评论逻辑
    ElMessage.success('操作成功')
  } catch {
    // 用户取消操作
  }
}

const handleReply = (row: any) => {
  selectedComment.value = row
  showReplyDialog.value = true
}

const handleDelete = async (row: any) => {
  try {
    await ElMessageBox.confirm(
      '删除后无法恢复，确定要删除这条评论吗？',
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

const submitReply = async () => {
  if (!replyForm.content.trim()) {
    ElMessage.warning('请输入回复内容')
    return
  }
  // 实现提交回复逻辑
  ElMessage.success('回复成功')
  showReplyDialog.value = false
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
.comments-manage {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.comment-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.comment-text {
  color: var(--el-text-color-primary);
}

.article-info {
  font-size: 0.9em;
  color: var(--el-text-color-secondary);
}

.original-comment {
  padding: 12px;
  background-color: var(--el-fill-color-light);
  border-radius: 4px;
  margin-bottom: 12px;
  color: var(--el-text-color-secondary);
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style> 