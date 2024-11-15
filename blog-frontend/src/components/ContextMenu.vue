<template>
    <div v-show="visible" class="context-menu" :style="{ left: x + 'px', top: y + 'px' }">
        <!-- 导航按钮组（水平布局） -->
        <div class="nav-group">
            <div
                v-for="item in menuItems.slice(0, 4)"
                :key="item.key"
                class="nav-btn"
                :title="getNavTitle(item.key)"
                @click="handleMenuClick(item)"
            >
                <el-icon>
                    <component :is="item.icon" />
                </el-icon>
            </div>
        </div>

        <!-- 分隔线 -->
        <div class="divider"></div>

        <!-- 其他菜单项（垂直布局） -->
        <div class="menu-list">
            <div
                v-for="item in menuItems.slice(4)"
                :key="item.key"
                class="menu-item"
                :class="{ 'menu-item-disabled': item.disabled }"
                @click="handleMenuClick(item)"
            >
                <div class="menu-item-content">
                    <el-icon class="menu-icon">
                        <component :is="item.icon" />
                    </el-icon>
                    <span class="menu-label">{{ item.label }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface MenuItem {
    key: string
    label?: string
    icon?: string
    disabled?: boolean
    handler?: () => void
}

const props = defineProps<{
    menuItems: MenuItem[]
}>()

const visible = ref(false)
const x = ref(0)
const y = ref(0)

const show = (event: MouseEvent) => {
    event.preventDefault()
    x.value = event.clientX
    y.value = event.clientY
    visible.value = true

    // 添加全局点击事件监听
    document.addEventListener('click', hide)
    document.addEventListener('contextmenu', hide)
}

const hide = () => {
    visible.value = false
    // 移除全局点击事件监听
    document.removeEventListener('click', hide)
    document.removeEventListener('contextmenu', hide)
}

const handleMenuClick = (item: MenuItem) => {
    if (item.disabled) return
    if (item.handler) {
        item.handler()
    }
    hide()
}

// 获取导航按钮的提示文本
const getNavTitle = (key: string) => {
    const titles: Record<string, string> = {
        back: '返回上一页',
        forward: '前往下一页',
        refresh: '刷新页面',
        top: '回到顶部'
    }
    return titles[key] || ''
}

defineExpose({
    show,
    hide
})
</script>

<style scoped>
.context-menu {
    position: fixed;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.98);
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    min-width: 200px;
    backdrop-filter: blur(8px);
    padding: 8px 4px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    overflow: hidden;
}

:root.dark .context-menu {
    background: rgba(30, 30, 30, 0.98);
    border-color: rgba(255, 255, 255, 0.1);
}

/* 导航按钮组样式（水平布局） */
.nav-group {
    display: flex;
    justify-content: space-between;
    padding: 4px;
}

.nav-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: var(--el-text-color-regular);
}

.nav-btn:hover {
    background-color: var(--el-color-primary);
    color: white;
}

/* 分隔线 */
.divider {
    height: 1px;
    background-color: var(--el-border-color-lighter);
    margin: 4px 8px;
}

:root.dark .divider {
    background-color: rgba(255, 255, 255, 0.1);
}

/* 菜单列表样式（垂直布局） */
.menu-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}

.menu-item {
    width: 100%;
    transition: all 0.2s ease;
    padding: 0 4px;
}

.menu-item-content {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px; /* 修改：增加左右内边距 */
    margin: 0 4px; /* 新增：添加左右外边距 */
    width: calc(100% - 8px); /* 修改：减去左右外边距的宽度 */
    border-radius: 4px;
}

.menu-item-content:hover {
    background-color: var(--el-color-primary-light-9);
}

.menu-item:hover {
    background-color: transparent;
}

.menu-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: var(--el-text-color-regular);
    width: 20px;
}

.menu-label {
    flex: 1;
    font-size: 14px;
    line-height: 1.4;
    color: var(--el-text-color-regular);
}

.menu-item-disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.menu-item-disabled:hover .menu-item-content {
    background-color: transparent;
}

:root.dark .menu-item,
:root.dark .menu-icon {
    color: rgba(255, 255, 255, 0.85);
}
</style>
