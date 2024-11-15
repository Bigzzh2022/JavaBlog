import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userApi } from '@/api/user'
import { ElMessage } from 'element-plus'

export interface Notification {
  id: number
  type: 'comment' | 'like' | 'follow' | 'system'
  title: string
  content: string
  isRead: boolean
  createdAt: string
}

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref<Notification[]>([])
  const unreadCount = ref(0)
  const loading = ref(false)

  const fetchNotifications = async () => {
    try {
      loading.value = true
      const response = await userApi.getNotifications()
      if (Array.isArray(response.data)) {
        notifications.value = response.data
        updateUnreadCount()
      } else {
        notifications.value = []
        unreadCount.value = 0
      }
    } catch (error) {
      notifications.value = []
      unreadCount.value = 0
      ElMessage.error('获取通知失败')
    } finally {
      loading.value = false
    }
  }

  const markAsRead = async (id: number) => {
    try {
      await userApi.markNotificationRead(id)
      const notification = notifications.value.find(n => n.id === id)
      if (notification) {
        notification.isRead = true
        updateUnreadCount()
      }
    } catch (error) {
      ElMessage.error('标记已读失败')
    }
  }

  const updateUnreadCount = () => {
    if (Array.isArray(notifications.value)) {
      unreadCount.value = notifications.value.filter(n => !n.isRead).length
    } else {
      unreadCount.value = 0
    }
  }

  const markAllAsRead = async () => {
    try {
      notifications.value.forEach(notification => {
        notification.isRead = true
      })
      updateUnreadCount()
      ElMessage.success('全部标记为已读')
    } catch (error) {
      ElMessage.error('操作失败')
    }
  }

  return {
    notifications,
    unreadCount,
    loading,
    fetchNotifications,
    markAsRead,
    markAllAsRead
  }
}) 