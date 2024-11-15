<template>
  <el-popover
    placement="bottom"
    :width="300"
    trigger="click"
    popper-class="notification-popover"
  >
    <template #reference>
      <el-badge :value="unreadCount" :hidden="unreadCount === 0">
        <el-button circle>
          <el-icon><Bell /></el-icon>
        </el-button>
      </el-badge>
    </template>

    <div class="notification-container">
      <div class="notification-header">
        <span>通知</span>
        <el-button link type="primary" size="small" @click="markAllAsRead">
          全部已读
        </el-button>
      </div>

      <el-tabs>
        <el-tab-pane label="全部">
          <el-scrollbar max-height="300px">
            <template v-if="notifications.length">
              <div
                v-for="notification in notifications"
                :key="notification.id"
                class="notification-item"
                :class="{ unread: !notification.isRead }"
                @click="handleNotificationClick(notification)"
              >
                <el-icon class="notification-icon" :class="notification.type">
                  <component :is="getNotificationIcon(notification.type)" />
                </el-icon>
                <div class="notification-content">
                  <div class="notification-title">{{ notification.title }}</div>
                  <div class="notification-text">{{ notification.content }}</div>
                  <div class="notification-time">
                    {{ formatTime(notification.createdAt) }}
                  </div>
                </div>
              </div>
            </template>
            <el-empty v-else description="暂无通知" />
          </el-scrollbar>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Bell, ChatDotRound, Star, User, InfoFilled } from '@element-plus/icons-vue'
import { useNotificationStore } from '@/stores/notification'
import { formatDistanceToNow } from 'date-fns'
import { zhCN } from 'date-fns/locale'

const notificationStore = useNotificationStore()
const { notifications, unreadCount, fetchNotifications, markAsRead } = notificationStore

onMounted(() => {
  fetchNotifications()
})

const getNotificationIcon = (type: string) => {
  const icons = {
    comment: ChatDotRound,
    like: Star,
    follow: User,
    system: InfoFilled
  }
  return icons[type as keyof typeof icons]
}

const formatTime = (time: string) => {
  return formatDistanceToNow(new Date(time), { addSuffix: true, locale: zhCN })
}

const handleNotificationClick = (notification: any) => {
  if (!notification.isRead) {
    markAsRead(notification.id)
  }
  // 处理通知点击，可以根据类型跳转到不同页面
}

const markAllAsRead = () => {
  // 实现全部标记为已读的逻辑
}
</script>

<style scoped>
.notification-container {
  padding: 10px;
}

.notification-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.notification-item {
  display: flex;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.notification-item:hover {
  background-color: var(--el-fill-color-light);
}

.notification-item.unread {
  background-color: var(--el-color-primary-light-9);
}

.notification-icon {
  margin-right: 12px;
  font-size: 20px;
}

.notification-icon.comment {
  color: var(--el-color-success);
}

.notification-icon.like {
  color: var(--el-color-danger);
}

.notification-icon.follow {
  color: var(--el-color-primary);
}

.notification-icon.system {
  color: var(--el-color-warning);
}

.notification-content {
  flex: 1;
}

.notification-title {
  font-weight: bold;
  margin-bottom: 4px;
}

.notification-text {
  color: var(--el-text-color-secondary);
  font-size: 0.9em;
  margin-bottom: 4px;
}

.notification-time {
  color: var(--el-text-color-secondary);
  font-size: 0.8em;
}
</style> 