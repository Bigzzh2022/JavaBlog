<template>
  <div class="users-manage">
    <el-card>
      <template #header>
        <div class="header">
          <el-form :inline="true" :model="searchForm">
            <el-form-item>
              <el-input
                v-model="searchForm.keyword"
                placeholder="搜索用户名/邮箱"
                clearable
              />
            </el-form-item>
            <el-form-item>
              <el-select v-model="searchForm.role" placeholder="用户角色" clearable>
                <el-option label="管理员" value="admin" />
                <el-option label="普通用户" value="user" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select v-model="searchForm.status" placeholder="账号状态" clearable>
                <el-option label="正常" value="active" />
                <el-option label="禁用" value="disabled" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSearch">搜索</el-button>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="showAddDialog = true">
            添加用户
          </el-button>
        </div>
      </template>

      <el-table :data="users" style="width: 100%">
        <el-table-column prop="username" label="用户名" min-width="120" />
        <el-table-column prop="email" label="邮箱" min-width="180" />
        <el-table-column prop="role" label="角色" width="100">
          <template #default="{ row }">
            <el-tag :type="row.role === 'admin' ? 'danger' : ''">
              {{ row.role === 'admin' ? '管理员' : '用户' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="row.status === 'active' ? 'success' : 'info'">
              {{ row.status === 'active' ? '正常' : '禁用' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="articles" label="文章数" width="100" />
        <el-table-column prop="registerTime" label="注册时间" width="180" />
        <el-table-column label="操作" width="250" fixed="right">
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
                {{ row.status === 'active' ? '禁用' : '启用' }}
              </el-button>
              <el-button
                link
                type="primary"
                @click="handleResetPassword(row)"
              >
                重置密码
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

    <!-- 添加/编辑用户对话框 -->
    <el-dialog
      v-model="showAddDialog"
      :title="editingUser ? '编辑用户' : '添加用户'"
      width="500px"
    >
      <el-form
        ref="formRef"
        :model="userForm"
        :rules="formRules"
        label-width="100px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="userForm.username" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userForm.email" />
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="!editingUser">
          <el-input v-model="userForm.password" type="password" show-password />
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select v-model="userForm.role">
            <el-option label="管理员" value="admin" />
            <el-option label="普通用户" value="user" />
          </el-select>
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
import { ElMessageBox, ElMessage } from 'element-plus'

const searchForm = reactive({
  keyword: '',
  role: '',
  status: ''
})

const users = ref([
  {
    id: 1,
    username: '张三',
    email: 'zhangsan@example.com',
    role: 'admin',
    status: 'active',
    articles: 10,
    registerTime: '2024-03-14 10:00:00'
  }
])

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)

const showAddDialog = ref(false)
const editingUser = ref<any>(null)
const formRef = ref<FormInstance>()

const userForm = reactive({
  username: '',
  email: '',
  password: '',
  role: 'user'
})

const formRules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
  ],
  role: [
    { required: true, message: '请选择角色', trigger: 'change' }
  ]
}

const handleSearch = () => {
  // 实现搜索逻辑
}

const handleEdit = (row: any) => {
  editingUser.value = row
  Object.assign(userForm, row)
  showAddDialog.value = true
}

const handleChangeStatus = async (row: any) => {
  try {
    await ElMessageBox.confirm(
      `确定要${row.status === 'active' ? '禁用' : '启用'}该用户吗？`,
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

const handleResetPassword = async (row: any) => {
  try {
    await ElMessageBox.confirm(
      '确定要重置该用户的密码吗？',
      '提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    // 实现重置密码逻辑
    ElMessage.success('密码重置成功')
  } catch {
    // 用户取消操作
  }
}

const handleDelete = async (row: any) => {
  try {
    await ElMessageBox.confirm(
      '删除后无法恢复，确定要删除该用户吗？',
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

const handleSubmit = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate(async (valid) => {
    if (valid) {
      // 实现保存逻辑
      ElMessage.success(editingUser.value ? '更新成功' : '添加成功')
      showAddDialog.value = false
    }
  })
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
.users-manage {
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