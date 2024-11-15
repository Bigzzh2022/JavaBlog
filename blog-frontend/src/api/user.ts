import api from './index'
import type { User } from '@/types'

export interface UpdateProfileData {
  username?: string
  avatar?: string
  bio?: string
  email?: string
}

export interface UpdatePasswordData {
  oldPassword: string
  newPassword: string
}

export const userApi = {
  // 更新个人资料
  updateProfile(data: UpdateProfileData) {
    return api.put<User>('/user/profile', data)
  },

  // 更新密码
  updatePassword(data: UpdatePasswordData) {
    return api.put('/user/password', data)
  },

  // 获取用户通知
  getNotifications() {
    return api.get('/user/notifications')
  },

  // 标记通知为已读
  markNotificationRead(id: number) {
    return api.put(`/user/notifications/${id}/read`)
  },

  // 获取用户设置
  getSettings() {
    return api.get('/user/settings')
  },

  // 更新用户设置
  updateSettings(settings: any) {
    return api.put('/user/settings', settings)
  }
} 