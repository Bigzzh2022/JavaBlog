<template>
  <div class="forgot-password-container">
    <el-card class="forgot-password-card">
      <template #header>
        <div class="header">
          <h2>重置密码</h2>
          <el-button link @click="router.push('/login')">返回登录</el-button>
        </div>
      </template>

      <el-form
        ref="formRef"
        :model="formData"
        :rules="formRules"
        label-position="top"
      >
        <template v-if="!codeSent">
          <el-form-item label="邮箱" prop="email">
            <el-input
              v-model="formData.email"
              prefix-icon="Message"
              placeholder="请输入注册邮箱"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="submit-btn" @click="sendCode">
              发送验证码
            </el-button>
          </el-form-item>
        </template>

        <template v-else>
          <el-form-item label="验证码" prop="code">
            <el-input
              v-model="formData.code"
              prefix-icon="Key"
              placeholder="请输入验证码"
            />
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input
              v-model="formData.newPassword"
              prefix-icon="Lock"
              type="password"
              show-password
              placeholder="请输入新密码"
            />
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input
              v-model="formData.confirmPassword"
              prefix-icon="Lock"
              type="password"
              show-password
              placeholder="请确认新密码"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="submit-btn" @click="resetPassword">
              重置密码
            </el-button>
          </el-form-item>
        </template>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter()
const formRef = ref<FormInstance>()
const codeSent = ref(false)

const formData = reactive({
  email: '',
  code: '',
  newPassword: '',
  confirmPassword: ''
})

const validatePass2 = (rule: any, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== formData.newPassword) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

const formRules: FormRules = {
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { len: 6, message: '验证码长度应为6位', trigger: 'blur' }
  ],
  newPassword: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    { validator: validatePass2, trigger: 'blur' }
  ]
}

const sendCode = async () => {
  if (!formRef.value) return
  
  await formRef.value.validateField('email', async (valid) => {
    if (valid) {
      // 发送验证码逻辑
      codeSent.value = true
    }
  })
}

const resetPassword = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate((valid) => {
    if (valid) {
      // 重置密码逻辑
      router.push('/login')
    }
  })
}
</script>

<style scoped>
.forgot-password-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--el-bg-color-page);
}

.forgot-password-card {
  width: 100%;
  max-width: 440px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.submit-btn {
  width: 100%;
  padding: 12px 0;
}
</style> 