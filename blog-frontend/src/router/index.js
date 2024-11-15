import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import AdminLayout from '@/layouts/AdminLayout.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/login',
            component: () => import('@/views/auth/Login.vue'),
            meta: { guest: true }
        },
        {
            path: '/forgot-password',
            component: () => import('@/views/auth/ForgotPassword.vue'),
            meta: { guest: true }
        },
        {
            path: '/articles',
            component: () => import('@/views/Articles.vue')
        },
        {
            path: '/article/:id',
            component: () => import('@/views/ArticleDetail.vue')
        },
        {
            path: '/article/edit/:id?',
            component: () => import('@/views/ArticleEdit.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/profile',
            component: () => import('@/views/Profile.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/about',
            component: () => import('@/views/About.vue')
        },
        {
            path: '/settings',
            component: () => import('@/views/Settings.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/admin',
            component: AdminLayout,
            meta: { requiresAuth: true, requiresAdmin: true },
            children: [
                {
                    path: '',
                    component: () => import('@/views/admin/Dashboard.vue')
                },
                {
                    path: 'articles',
                    component: () => import('@/views/admin/Articles.vue')
                },
                {
                    path: 'categories',
                    component: () => import('@/views/admin/Categories.vue')
                },
                {
                    path: 'comments',
                    component: () => import('@/views/admin/Comments.vue')
                },
                {
                    path: 'users',
                    component: () => import('@/views/admin/Users.vue')
                },
                {
                    path: 'settings',
                    component: () => import('@/views/admin/Settings.vue')
                }
            ]
        }
    ]
});
// 路由守卫
router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    // 检查是否需要认证
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next({ path: '/login', query: { redirect: to.fullPath } });
        return;
    }
    // 检查是否需要管理员权限
    if (to.meta.requiresAdmin && !authStore.user?.isAdmin) {
        next('/');
        return;
    }
    // 已登录用户不能访问游客页面
    if (to.meta.guest && authStore.isAuthenticated) {
        next('/');
        return;
    }
    next();
});
export default router;
