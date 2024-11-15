<template>
  <div class="login-container">
    <el-card class="login-card">
      <template #header>
        <div class="auth-header">
          <h2>{{ isLogin ? '登录' : '注册' }}</h2>
          <el-button link type="primary" @click="toggleAuthMode">
            {{ isLogin ? '没有账号？去注册' : '已有账号？去登录' }}
          </el-button>
        </div>
      </template>

      <el-form
        ref="formRef"
        :model="formData"
        :rules="formRules"
        label-position="top"
      >
        <template v-if="!isLogin">
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="formData.username"
              prefix-icon="User"
              placeholder="请输入用户名"
            />
          </el-form-item>
        </template>

        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="formData.email"
            prefix-icon="Message"
            placeholder="请输入邮箱"
          />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            v-model="formData.password"
            prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>

        <template v-if="!isLogin">
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input
              v-model="formData.confirmPassword"
              prefix-icon="Lock"
              type="password"
              placeholder="请确认密码"
              show-password
            />
          </el-form-item>
        </template>

        <template v-if="isLogin">
          <div class="remember-forgot">
            <el-checkbox v-model="formData.remember">记住我</el-checkbox>
            <el-button link type="primary" @click="forgotPassword">
              忘记密码？
            </el-button>
          </div>
        </template>

        <el-form-item>
          <el-button type="primary" class="submit-btn" @click="handleSubmit">
            {{ isLogin ? '登录' : '注册' }}
          </el-button>
        </el-form-item>

        <div class="divider">
          <span>或使用以下方式{{ isLogin ? '登录' : '注册' }}</span>
        </div>

        <div class="social-login">
          <el-button circle>
            <el-icon><Platform /></el-icon>
          </el-button>
          <el-button circle>
            <el-icon><Apple /></el-icon>
          </el-button>
          <el-button circle>
            <el-icon><Monitor /></el-icon>
          </el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { User, Lock, Message, Platform, Apple, Monitor } from '@element-plus/icons-vue'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const formRef = ref<FormInstance>()
const isLogin = ref(true)

const formData = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  remember: false
})

const authStore = useAuthStore()

const validatePass2 = (rule: any, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== formData.password) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

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
  confirmPassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    { validator: validatePass2, trigger: 'blur' }
  ]
}

const toggleAuthMode = () => {
  isLogin.value = !isLogin.value
  formRef.value?.resetFields()
}

const handleSubmit = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate(async (valid) => {
    if (valid) {
      if (isLogin.value) {
        // 登录逻辑
        const success = await authStore.login(formData.email, formData.password)
        if (success) {
          const redirect = route.query.redirect as string || '/'
          router.push(redirect)
        }
      } else {
        // 注册逻辑
        const success = await authStore.register({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
        if (success) {
          isLogin.value = true
          ElMessage.success('注册成功，请登录')
        }
      }
    }
  })
}

const forgotPassword = () => {
  router.push('/forgot-password')
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--el-bg-color-page);
}

.login-card {
  width: 100%;
  max-width: 440px;
}

.auth-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.auth-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.remember-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.submit-btn {
  width: 100%;
  padding: 12px 0;
}

.divider {
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: var(--el-text-color-secondary);
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--el-border-color-lighter);
  margin: 0 16px;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
</style> 