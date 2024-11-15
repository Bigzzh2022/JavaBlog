<template>
  <div class="admin-dashboard">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="activeMenu"
          class="admin-menu"
          @select="handleMenuSelect"
          router
        >
          <el-menu-item index="/admin">
            <el-icon><DataLine /></el-icon>
            <span>数据概览</span>
          </el-menu-item>
          <el-menu-item index="/admin/articles">
            <el-icon><Document /></el-icon>
            <span>文章管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/categories">
            <el-icon><Files /></el-icon>
            <span>分类管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/comments">
            <el-icon><ChatDotRound /></el-icon>
            <span>评论管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/users">
            <el-icon><User /></el-icon>
            <span>用户管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/settings">
            <el-icon><Setting /></el-icon>
            <span>系统设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      
      <el-main>
        <statistics-panel v-if="activeMenu === '/admin'" />
        <router-view v-else />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import StatisticsPanel from '@/components/StatisticsPanel.vue'
import {
  DataLine,
  Document,
  Files,
  ChatDotRound,
  User,
  Setting
} from '@element-plus/icons-vue'

const router = useRouter()
const activeMenu = ref('/admin')

const handleMenuSelect = (index: string) => {
  activeMenu.value = index
}
</script>

<style scoped>
.admin-dashboard {
  min-height: 100vh;
  background-color: var(--el-bg-color-page);
}

.el-aside {
  background-color: var(--el-bg-color);
  border-right: 1px solid var(--el-border-color-light);
}

.admin-menu {
  height: 100vh;
  border-right: none;
}

.el-main {
  padding: 20px;
}
</style> 