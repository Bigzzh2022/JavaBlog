<template>
  <div class="category-manager">
    <el-card>
      <template #header>
        <div class="header">
          <span>分类管理</span>
          <el-button type="primary" @click="showAddDialog = true">
            新增分类
          </el-button>
        </div>
      </template>

      <el-table :data="categories" style="width: 100%">
        <el-table-column prop="name" label="分类名称" />
        <el-table-column prop="articleCount" label="文章数量" width="100" />
        <el-table-column prop="createTime" label="创建时间" width="180" />
        <el-table-column label="操作" width="150">
          <template #default="{ row }">
            <el-space>
              <el-button link type="primary" @click="handleEdit(row)">
                编辑
              </el-button>
              <el-button link type="danger" @click="handleDelete(row)">
                删除
              </el-button>
            </el-space>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 新增/编辑分类对话框 -->
    <el-dialog
      v-model="showAddDialog"
      :title="editingCategory ? '编辑分类' : '新增分类'"
      width="30%"
    >
      <el-form
        ref="formRef"
        :model="categoryForm"
        :rules="formRules"
        label-width="80px"
      >
        <el-form-item label="分类名称" prop="name">
          <el-input v-model="categoryForm.name" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input
            v-model="categoryForm.description"
            type="textarea"
            :rows="3"
          />
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input-number v-model="categoryForm.sort" :min="0" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'

interface Category {
  id: number
  name: string
  description: string
  sort: number
  articleCount: number
  createTime: string
}

const categories = ref<Category[]>([
  {
    id: 1,
    name: '前端开发',
    description: '前端相关技术文章',
    sort: 1,
    articleCount: 10,
    createTime: '2024-03-14 10:00:00'
  }
])

const showAddDialog = ref(false)
const editingCategory = ref<Category | null>(null)
const formRef = ref<FormInstance>()

const categoryForm = reactive({
  name: '',
  description: '',
  sort: 0
})

const formRules: FormRules = {
  name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
  ]
}

const handleEdit = (category: Category) => {
  editingCategory.value = category
  Object.assign(categoryForm, category)
  showAddDialog.value = true
}

const handleDelete = async (category: Category) => {
  try {
    await ElMessageBox.confirm(
      `确定要删除分类"${category.name}"吗？`,
      '提示',
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

const handleSubmit = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate(async (valid) => {
    if (valid) {
      // 实现保存逻辑
      ElMessage.success(editingCategory.value ? '更新成功' : '添加成功')
      showAddDialog.value = false
    }
  })
}
</script>

<style scoped>
.category-manager {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style> 