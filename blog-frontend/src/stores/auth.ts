import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/api'
import { ElMessage } from 'element-plus'

export interface User {
  id: number
  username: string
  email: string
  avatar?: string
  isAdmin: boolean
}

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'))
  const user = ref<User | null>(null)
  const loading = ref(false)

  const isAuthenticated = computed(() => !!token.value)

  const setToken = (newToken: string | null) => {
    token.value = newToken
    if (newToken) {
      localStorage.setItem('token', newToken)
    } else {
      localStorage.removeItem('token')
    }
  }

  const login = async (email: string, password: string) => {
    try {
      loading.value = true
      const response = await api.post('/auth/login', { email, password })
      setToken(response.token)
      user.value = response.user
      ElMessage.success('登录成功')
      return true
    } catch (error: any) {
      ElMessage.error(error.response?.data?.message || '登录失败')
      return false
    } finally {
      loading.value = false
    }
  }

  const register = async (userData: {
    username: string
    email: string
    password: string
  }) => {
    try {
      loading.value = true
      await api.post('/auth/register', userData)
      ElMessage.success('注册成功')
      return true
    } catch (error: any) {
      ElMessage.error(error.response?.data?.message || '注册失败')
      return false
    } finally {
      loading.value = false
    }
  }

  const logout = () => {
    setToken(null)
    user.value = null
    ElMessage.success('已退出登录')
  }

  const checkAuth = async () => {
    if (!token.value) return false
    
    try {
      loading.value = true
      const response = await api.get('/auth/me')
      user.value = response.data
      return true
    } catch (error) {
      setToken(null)
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    token,
    user,
    loading,
    isAuthenticated,
    login,
    register,
    logout,
    checkAuth
  }
}) 