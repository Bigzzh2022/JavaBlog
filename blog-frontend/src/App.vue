<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { ElMessageBox, ElMessage } from 'element-plus'
import NotificationPopover from '@/components/NotificationPopover.vue'
import ContextMenu from '@/components/ContextMenu.vue'
import {
  Platform,
  User,
  EditPen,
  Setting,
  SwitchButton,
  Monitor,
  Compass,
  Folder,
  Collection,
  Lock,
  CopyDocument,
  Link,
  ChatDotRound,
  Moon,
  Document,
  ArrowLeft,
  ArrowRight,
  Refresh,
  Top,
  Edit,
  Sunny
} from '@element-plus/icons-vue'
import { useStorage } from '@vueuse/core'

const router = useRouter()
const authStore = useAuthStore()
const searchQuery = ref('')
const contextMenuRef = ref()
const isDarkMode = useStorage('theme-mode', false)

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/articles',
      query: { search: searchQuery.value }
    })
  }
}

const handleLogout = async () => {
  try {
    await ElMessageBox.confirm('确定要退出登录吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    authStore.logout()
    router.push('/login')
  } catch {
    // 用户取消操作
  }
}

// 修改菜单项配置
const contextMenuItems = computed(() => [
  {
    key: 'back',
    icon: ArrowLeft,
    handler: () => {
      router.back()
    }
  },
  {
    key: 'forward',
    icon: ArrowRight,
    handler: () => {
      router.forward()
    }
  },
  {
    key: 'refresh',
    icon: Refresh,
    handler: () => {
      window.location.reload()
    }
  },
  {
    key: 'top',
    icon: Top,
    handler: () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  {
    key: 'random',
    label: '随便逛逛',
    icon: Compass,
    handler: () => {
      // 实现随机跳转到一篇文章
    }
  },
  {
    key: 'categories',
    label: '博客分类',
    icon: Folder,
    handler: () => {
      router.push('/categories')
    }
  },
  {
    key: 'tags',
    label: '文章标签',
    icon: Collection,
    handler: () => {
      router.push('/tags')
    }
  },
  {
    key: 'privacy',
    label: '隐私协议',
    icon: Lock,
    handler: () => {
      router.push('/privacy')
    }
  },
  {
    key: 'copyright',
    label: '版权协议',
    icon: CopyDocument,
    handler: () => {
      router.push('/copyright')
    }
  },
  {
    key: 'copyUrl',
    label: '复制地址',
    icon: Link,
    handler: () => {
      navigator.clipboard.writeText(window.location.href)
      ElMessage.success('链接已复制')
    }
  },
  {
    key: 'comments',
    label: '显示热评',
    icon: ChatDotRound,
    handler: () => {
      // 实现显示热门评论的逻辑
    }
  },
  {
    key: 'theme',
    label: isDarkMode.value ? '浅色模式' : '深色模式',
    icon: isDarkMode.value ? Sunny : Moon,
    handler: () => {
      isDarkMode.value = !isDarkMode.value
      updateTheme()
    }
  },
  {
    key: 'language',
    label: '轉為繁體',
    icon: Edit,
    handler: () => {
      // 实现简繁转换的逻辑
    }
  }
])

// 使用 computed 包装菜单项，确保响应式更新
watch(isDarkMode, () => {
  // 强制更新菜单项
  contextMenuRef.value?.hide()
})

// 注册右键菜单事件
const handleContextMenu = (event: MouseEvent) => {
  event.preventDefault()
  if (contextMenuRef.value?.show) {
    contextMenuRef.value.show(event)
  }
}

onMounted(() => {
  document.addEventListener('contextmenu', handleContextMenu)
})

onUnmounted(() => {
  document.removeEventListener('contextmenu', handleContextMenu)
})

// 添加主题更新函数
const updateTheme = () => {
  // 更新 HTML 根元素的 class
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  
  // 更新 Element Plus 组件主题
  const htmlEl = document.querySelector('html')
  if (htmlEl) {
    htmlEl.style.colorScheme = isDarkMode.value ? 'dark' : 'light'
  }
  
  // 更新系统主题色
  document.documentElement.style.setProperty(
    '--el-bg-color',
    isDarkMode.value ? '#1a1a1a' : '#ffffff'
  )
  document.documentElement.style.setProperty(
    '--el-text-color-primary',
    isDarkMode.value ? '#ffffff' : '#303133'
  )
  document.documentElement.style.setProperty(
    '--el-text-color-regular',
    isDarkMode.value ? '#e5eaf3' : '#606266'
  )
  document.documentElement.style.setProperty(
    '--el-border-color',
    isDarkMode.value ? '#4c4d4f' : '#dcdfe6'
  )
  document.documentElement.style.setProperty(
    '--el-border-color-light',
    isDarkMode.value ? '#363637' : '#e4e7ed'
  )
  document.documentElement.style.setProperty(
    '--el-fill-color-blank',
    isDarkMode.value ? '#1a1a1a' : '#ffffff'
  )
  document.documentElement.style.setProperty(
    '--el-bg-color-overlay',
    isDarkMode.value ? '#1d1e1f' : '#ffffff'
  )
  document.documentElement.style.setProperty(
    '--el-mask-color',
    isDarkMode.value ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)'
  )
}

// 在组件挂载时初始化主题
onMounted(() => {
  // 检查系统主题偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (!localStorage.getItem('theme-mode')) {
    isDarkMode.value = prefersDark
  }
  updateTheme()
  
  // 监听系统主题变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme-mode')) {
      isDarkMode.value = e.matches
      updateTheme()
    }
  })
})
</script>

<template>
  <el-container class="layout-container">
    <el-header class="header">
      <div class="header-left">
        <el-button text class="logo" @click="router.push('/')">
          <el-icon><Platform /></el-icon>
          我的博客
        </el-button>
      </div>
      <el-menu mode="horizontal" router :ellipsis="false" class="nav-menu">
        <el-menu-item index="/">文库</el-menu-item>
        <el-menu-item index="/articles">专栏</el-menu-item>
        <el-menu-item index="/about">关于我</el-menu-item>
      </el-menu>
      <div class="header-right">
        <el-space>
          <el-input
            v-model="searchQuery"
            placeholder="搜索文章..."
            prefix-icon="Search"
            class="search-input"
            @keyup.enter="handleSearch"
          />
          <notification-popover v-if="authStore.isAuthenticated" />
          <el-dropdown v-if="authStore.isAuthenticated" trigger="click">
            <el-avatar :size="32" :src="authStore.user?.avatar" />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="router.push('/profile')">
                  <el-icon><User /></el-icon>个人主页
                </el-dropdown-item>
                <el-dropdown-item @click="router.push('/article/edit')">
                  <el-icon><EditPen /></el-icon>写文章
                </el-dropdown-item>
                <el-dropdown-item @click="router.push('/settings')">
                  <el-icon><Setting /></el-icon>设置
                </el-dropdown-item>
                <el-dropdown-item divided @click="handleLogout">
                  <el-icon><SwitchButton /></el-icon>退出登录
                </el-dropdown-item>
                <el-dropdown-item v-if="authStore.user?.isAdmin" @click="router.push('/admin')">
                  <el-icon><Monitor /></el-icon>管理后台
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-button v-else type="primary" @click="router.push('/login')">
            登录
          </el-button>
        </el-space>
      </div>
    </el-header>

    <el-main>
      <router-view />
    </el-main>
  </el-container>
  <context-menu ref="contextMenuRef" :menu-items="contextMenuItems" />
</template>

<style>
/* 修改深色模式样式 */
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --border-color: #dcdfe6;
  --hover-color: #f5f7fa;
  --shadow-color: rgba(0, 0, 0, 0.1);
}

:root.dark {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
  --border-color: #363637;
  --hover-color: #2c2c2c;
  --shadow-color: rgba(0, 0, 0, 0.3);
  
  /* 修改 Element Plus 深色主题变量 */
  --el-bg-color: #1a1a1a !important;
  --el-bg-color-overlay: #1d1e1f !important;
  --el-text-color-primary: #ffffff !important;
  --el-text-color-regular: #e5eaf3 !important;
  --el-border-color: #4c4d4f !important;
  --el-border-color-light: #363637 !important;
  --el-fill-color-blank: #1a1a1a !important;
  --el-mask-color: rgba(0, 0, 0, 0.8) !important;
  --el-bg-color-page: #141414 !important;
}

/* 应用过渡动画 */
body,
.el-card,
.el-button,
.el-input__inner,
.el-select__input,
.el-textarea__inner,
.el-menu,
.el-header {
  transition: var(--theme-transition);
}

/* 深色模式下的元素样式 */
:root.dark .el-header {
  background-color: var(--el-bg-color) !important;
  border-bottom-color: var(--el-border-color-light) !important;
}

:root.dark .el-menu {
  background-color: var(--el-bg-color) !important;
  border-color: var(--el-border-color-light) !important;
}

:root.dark .el-menu-item {
  color: var(--el-text-color-regular) !important;
}

:root.dark .el-menu-item:hover {
  background-color: var(--hover-color) !important;
}

:root.dark .el-menu-item.is-active {
  color: var(--el-color-primary) !important;
}

:root.dark .el-card {
  background-color: var(--el-bg-color) !important;
  border-color: var(--el-border-color-light) !important;
  color: var(--el-text-color-regular) !important;
}

:root.dark .el-input__inner {
  background-color: var(--el-bg-color) !important;
  border-color: var(--el-border-color) !important;
  color: var(--el-text-color-regular) !important;
}

:root.dark .el-button {
  background-color: var(--el-bg-color) !important;
  border-color: var(--el-border-color) !important;
  color: var(--el-text-color-regular) !important;
}

:root.dark .el-button--primary {
  background-color: var(--el-color-primary) !important;
  border-color: var(--el-color-primary) !important;
  color: #ffffff !important;
}

:root.dark .el-dropdown-menu {
  background-color: var(--el-bg-color) !important;
  border-color: var(--el-border-color-light) !important;
}

:root.dark .el-dropdown-menu__item {
  color: var(--el-text-color-regular) !important;
}

:root.dark .el-dropdown-menu__item:hover {
  background-color: var(--hover-color) !important;
}

/* 布局样式 */
.layout-container {
  min-height: 100vh;
  background-color: var(--el-bg-color-page);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--el-border-color-light);
  background-color: var(--el-bg-color);
  padding: 0 20px;
}

.header-left {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 1.2rem;
  font-weight: bold;
}

.nav-menu {
  flex: 1;
  justify-content: center;
  border-bottom: none;
}

.header-right {
  display: flex;
  align-items: center;
}

.search-input {
  width: 200px;
}

/* 深色模式全局样式 */
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --border-color: #dcdfe6;
  --hover-color: #f5f7fa;
  --shadow-color: rgba(0, 0, 0, 0.1);
  
  /* 动画过渡 */
  --theme-transition: background-color 0.3s ease,
                     color 0.3s ease,
                     border-color 0.3s ease,
                     box-shadow 0.3s ease;
}

:root.dark {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
  --border-color: #363637;
  --hover-color: #2c2c2c;
  --shadow-color: rgba(0, 0, 0, 0.3);
  
  /* Element Plus 暗色主题覆盖 */
  --el-color-primary: #409eff;
  --el-color-primary-light-3: #3375b9;
  --el-color-primary-light-5: #2a598a;
  --el-color-primary-light-7: #213d5b;
  --el-color-primary-light-8: #1a2a3d;
  --el-color-primary-light-9: #131a23;
  --el-color-primary-dark-2: #66b1ff;
}

/* 应用过渡动画 */
body,
.el-card,
.el-button,
.el-input__inner,
.el-select__input,
.el-textarea__inner {
  transition: var(--theme-transition);
}

/* 深色模式下的阴影效果 */
:root.dark .el-card {
  box-shadow: 0 2px 12px 0 var(--shadow-color);
}

/* 深色模式下的悬停效果 */
:root.dark .el-button:not(.is-disabled):hover {
  background-color: var(--hover-color);
  border-color: var(--border-color);
}

/* 深色模式下的输入框样式 */
:root.dark .el-input__inner,
:root.dark .el-textarea__inner {
  background-color: #2c2c2c;
  border-color: var(--border-color);
  color: var(--text-color);
}

/* 深色模式下的下拉菜单样式 */
:root.dark .el-select-dropdown,
:root.dark .el-dropdown-menu {
  background-color: #2c2c2c;
  border-color: var(--border-color);
}

:root.dark .el-select-dropdown__item:hover,
:root.dark .el-dropdown-menu__item:hover {
  background-color: var(--hover-color);
}

/* 添加导航菜单样式 */
.context-menu .menu-list {
  display: flex;
  padding: 4px;
  background: var(--el-bg-color);
  border-radius: 8px;
  margin-bottom: 8px;
}

/* 导航按钮样式 */
.context-menu .menu-list .menu-item:nth-child(-n+4) {
  padding: 8px;
  margin: 0 2px;
  border-radius: 6px;
}

/* 导航按钮伪元素 */
.context-menu .menu-list .menu-item:nth-child(1)::after {
  content: '返回上一页';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: var(--el-text-color-secondary);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
}

.context-menu .menu-list .menu-item:nth-child(2)::after {
  content: '回下一页';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: var(--el-text-color-secondary);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
}

.context-menu .menu-list .menu-item:nth-child(3)::after {
  content: '刷新页面';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: var(--el-text-color-secondary);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
}

.context-menu .menu-list .menu-item:nth-child(4)::after {
  content: '回到顶部';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: var(--el-text-color-secondary);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
}

/* 悬停时显示文字 */
.context-menu .menu-list .menu-item:nth-child(-n+4):hover::after {
  opacity: 1;
}

/* 分隔线 */
.context-menu .menu-list::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 1px;
  background-color: var(--el-border-color-lighter);
}

/* 其他菜单项样式 */
.context-menu .menu-list .menu-item:nth-child(n+5) {
  display: block;
  padding: 8px 16px;
  margin: 4px 0;
}
</style>
