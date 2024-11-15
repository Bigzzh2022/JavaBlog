import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { ElMessageBox, ElMessage } from 'element-plus';
import NotificationPopover from '@/components/NotificationPopover.vue';
import ContextMenu from '@/components/ContextMenu.vue';
import { Platform, User, EditPen, Setting, SwitchButton, Monitor, Compass, Folder, Collection, Lock, CopyDocument, Link, ChatDotRound, Moon, ArrowLeft, ArrowRight, Refresh, Top, Edit, Sunny } from '@element-plus/icons-vue';
import { useStorage } from '@vueuse/core';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const authStore = useAuthStore();
const searchQuery = ref('');
const contextMenuRef = ref();
const isDarkMode = useStorage('theme-mode', false);
const handleSearch = () => {
    if (searchQuery.value.trim()) {
        router.push({
            path: '/articles',
            query: { search: searchQuery.value }
        });
    }
};
const handleLogout = async () => {
    try {
        await ElMessageBox.confirm('确定要退出登录吗？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        });
        authStore.logout();
        router.push('/login');
    }
    catch {
        // 用户取消操作
    }
};
// 修改菜单项配置
const contextMenuItems = computed(() => [
    {
        key: 'back',
        icon: ArrowLeft,
        handler: () => {
            router.back();
        }
    },
    {
        key: 'forward',
        icon: ArrowRight,
        handler: () => {
            router.forward();
        }
    },
    {
        key: 'refresh',
        icon: Refresh,
        handler: () => {
            window.location.reload();
        }
    },
    {
        key: 'top',
        icon: Top,
        handler: () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
            router.push('/categories');
        }
    },
    {
        key: 'tags',
        label: '文章标签',
        icon: Collection,
        handler: () => {
            router.push('/tags');
        }
    },
    {
        key: 'privacy',
        label: '隐私协议',
        icon: Lock,
        handler: () => {
            router.push('/privacy');
        }
    },
    {
        key: 'copyright',
        label: '版权协议',
        icon: CopyDocument,
        handler: () => {
            router.push('/copyright');
        }
    },
    {
        key: 'copyUrl',
        label: '复制地址',
        icon: Link,
        handler: () => {
            navigator.clipboard.writeText(window.location.href);
            ElMessage.success('链接已复制');
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
            isDarkMode.value = !isDarkMode.value;
            updateTheme();
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
]);
// 使用 computed 包装菜单项，确保响应式更新
watch(isDarkMode, () => {
    // 强制更新菜单项
    contextMenuRef.value?.hide();
});
// 注册右键菜单事件
const handleContextMenu = (event) => {
    event.preventDefault();
    if (contextMenuRef.value?.show) {
        contextMenuRef.value.show(event);
    }
};
onMounted(() => {
    document.addEventListener('contextmenu', handleContextMenu);
});
onUnmounted(() => {
    document.removeEventListener('contextmenu', handleContextMenu);
});
// 添加主题更新函数
const updateTheme = () => {
    // 更新 HTML 根元素的 class
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    // 更新 Element Plus 组件主题
    const htmlEl = document.querySelector('html');
    if (htmlEl) {
        htmlEl.style.colorScheme = isDarkMode.value ? 'dark' : 'light';
    }
    // 更新系统主题色
    document.documentElement.style.setProperty('--el-bg-color', isDarkMode.value ? '#1a1a1a' : '#ffffff');
    document.documentElement.style.setProperty('--el-text-color-primary', isDarkMode.value ? '#ffffff' : '#303133');
    document.documentElement.style.setProperty('--el-text-color-regular', isDarkMode.value ? '#e5eaf3' : '#606266');
    document.documentElement.style.setProperty('--el-border-color', isDarkMode.value ? '#4c4d4f' : '#dcdfe6');
    document.documentElement.style.setProperty('--el-border-color-light', isDarkMode.value ? '#363637' : '#e4e7ed');
    document.documentElement.style.setProperty('--el-fill-color-blank', isDarkMode.value ? '#1a1a1a' : '#ffffff');
    document.documentElement.style.setProperty('--el-bg-color-overlay', isDarkMode.value ? '#1d1e1f' : '#ffffff');
    document.documentElement.style.setProperty('--el-mask-color', isDarkMode.value ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)');
};
// 在组件挂载时初始化主题
onMounted(() => {
    // 检查系统主题偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (!localStorage.getItem('theme-mode')) {
        isDarkMode.value = prefersDark;
    }
    updateTheme();
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme-mode')) {
            isDarkMode.value = e.matches;
            updateTheme();
        }
    });
}); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElContainer;
    /** @type { [typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("layout-container") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("layout-container") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElHeader;
    /** @type { [typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("header") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("header") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header-left") }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onClick': {} }, text: (true), ...{ class: ("logo") }, }));
    const __VLS_14 = __VLS_13({ ...{ 'onClick': {} }, text: (true), ...{ class: ("logo") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onClick: (...[$event]) => {
            __VLS_ctx.router.push('/');
        }
    };
    let __VLS_15;
    let __VLS_16;
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
    const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.Platform;
    /** @type { [typeof __VLS_components.Platform, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
    const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
    __VLS_nonNullable(__VLS_25.slots).default;
    var __VLS_25;
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElMenu;
    /** @type { [typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ mode: ("horizontal"), router: (true), ellipsis: ((false)), ...{ class: ("nav-menu") }, }));
    const __VLS_34 = __VLS_33({ mode: ("horizontal"), router: (true), ellipsis: ((false)), ...{ class: ("nav-menu") }, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ index: ("/"), }));
    const __VLS_40 = __VLS_39({ index: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    __VLS_nonNullable(__VLS_43.slots).default;
    var __VLS_43;
    const __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ index: ("/articles"), }));
    const __VLS_46 = __VLS_45({ index: ("/articles"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    __VLS_nonNullable(__VLS_49.slots).default;
    var __VLS_49;
    const __VLS_50 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ index: ("/about"), }));
    const __VLS_52 = __VLS_51({ index: ("/about"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    __VLS_nonNullable(__VLS_55.slots).default;
    var __VLS_55;
    __VLS_nonNullable(__VLS_37.slots).default;
    var __VLS_37;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header-right") }, });
    const __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
    /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, ] } */
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({}));
    const __VLS_58 = __VLS_57({}, ...__VLS_functionalComponentArgsRest(__VLS_57));
    const __VLS_62 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ ...{ 'onKeyup': {} }, modelValue: ((__VLS_ctx.searchQuery)), placeholder: ("搜索文章..."), prefixIcon: ("Search"), ...{ class: ("search-input") }, }));
    const __VLS_64 = __VLS_63({ ...{ 'onKeyup': {} }, modelValue: ((__VLS_ctx.searchQuery)), placeholder: ("搜索文章..."), prefixIcon: ("Search"), ...{ class: ("search-input") }, }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    let __VLS_68;
    const __VLS_69 = {
        onKeyup: (__VLS_ctx.handleSearch)
    };
    let __VLS_65;
    let __VLS_66;
    var __VLS_67;
    if (__VLS_ctx.authStore.isAuthenticated) {
        // @ts-ignore
        [NotificationPopover,];
        // @ts-ignore
        const __VLS_70 = __VLS_asFunctionalComponent(NotificationPopover, new NotificationPopover({}));
        const __VLS_71 = __VLS_70({}, ...__VLS_functionalComponentArgsRest(__VLS_70));
    }
    if (__VLS_ctx.authStore.isAuthenticated) {
        const __VLS_75 = __VLS_resolvedLocalAndGlobalComponents.ElDropdown;
        /** @type { [typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ] } */
        // @ts-ignore
        const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ trigger: ("click"), }));
        const __VLS_77 = __VLS_76({ trigger: ("click"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
        const __VLS_81 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
        /** @type { [typeof __VLS_components.ElAvatar, typeof __VLS_components.elAvatar, ] } */
        // @ts-ignore
        const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ size: ((32)), src: ((__VLS_ctx.authStore.user?.avatar)), }));
        const __VLS_83 = __VLS_82({ size: ((32)), src: ((__VLS_ctx.authStore.user?.avatar)), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { dropdown: __VLS_thisSlot } = __VLS_nonNullable(__VLS_80.slots);
            const __VLS_87 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownMenu;
            /** @type { [typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ] } */
            // @ts-ignore
            const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({}));
            const __VLS_89 = __VLS_88({}, ...__VLS_functionalComponentArgsRest(__VLS_88));
            const __VLS_93 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ] } */
            // @ts-ignore
            const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({ ...{ 'onClick': {} }, }));
            const __VLS_95 = __VLS_94({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_94));
            let __VLS_99;
            const __VLS_100 = {
                onClick: (...[$event]) => {
                    if (!((__VLS_ctx.authStore.isAuthenticated)))
                        return;
                    __VLS_ctx.router.push('/profile');
                }
            };
            let __VLS_96;
            let __VLS_97;
            const __VLS_101 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
            // @ts-ignore
            const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({}));
            const __VLS_103 = __VLS_102({}, ...__VLS_functionalComponentArgsRest(__VLS_102));
            const __VLS_107 = __VLS_resolvedLocalAndGlobalComponents.User;
            /** @type { [typeof __VLS_components.User, ] } */
            // @ts-ignore
            const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({}));
            const __VLS_109 = __VLS_108({}, ...__VLS_functionalComponentArgsRest(__VLS_108));
            __VLS_nonNullable(__VLS_106.slots).default;
            var __VLS_106;
            __VLS_nonNullable(__VLS_98.slots).default;
            var __VLS_98;
            const __VLS_113 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ] } */
            // @ts-ignore
            const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({ ...{ 'onClick': {} }, }));
            const __VLS_115 = __VLS_114({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_114));
            let __VLS_119;
            const __VLS_120 = {
                onClick: (...[$event]) => {
                    if (!((__VLS_ctx.authStore.isAuthenticated)))
                        return;
                    __VLS_ctx.router.push('/article/edit');
                }
            };
            let __VLS_116;
            let __VLS_117;
            const __VLS_121 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
            // @ts-ignore
            const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({}));
            const __VLS_123 = __VLS_122({}, ...__VLS_functionalComponentArgsRest(__VLS_122));
            const __VLS_127 = __VLS_resolvedLocalAndGlobalComponents.EditPen;
            /** @type { [typeof __VLS_components.EditPen, ] } */
            // @ts-ignore
            const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({}));
            const __VLS_129 = __VLS_128({}, ...__VLS_functionalComponentArgsRest(__VLS_128));
            __VLS_nonNullable(__VLS_126.slots).default;
            var __VLS_126;
            __VLS_nonNullable(__VLS_118.slots).default;
            var __VLS_118;
            const __VLS_133 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ] } */
            // @ts-ignore
            const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({ ...{ 'onClick': {} }, }));
            const __VLS_135 = __VLS_134({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_134));
            let __VLS_139;
            const __VLS_140 = {
                onClick: (...[$event]) => {
                    if (!((__VLS_ctx.authStore.isAuthenticated)))
                        return;
                    __VLS_ctx.router.push('/settings');
                }
            };
            let __VLS_136;
            let __VLS_137;
            const __VLS_141 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
            // @ts-ignore
            const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({}));
            const __VLS_143 = __VLS_142({}, ...__VLS_functionalComponentArgsRest(__VLS_142));
            const __VLS_147 = __VLS_resolvedLocalAndGlobalComponents.Setting;
            /** @type { [typeof __VLS_components.Setting, ] } */
            // @ts-ignore
            const __VLS_148 = __VLS_asFunctionalComponent(__VLS_147, new __VLS_147({}));
            const __VLS_149 = __VLS_148({}, ...__VLS_functionalComponentArgsRest(__VLS_148));
            __VLS_nonNullable(__VLS_146.slots).default;
            var __VLS_146;
            __VLS_nonNullable(__VLS_138.slots).default;
            var __VLS_138;
            const __VLS_153 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
            /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ] } */
            // @ts-ignore
            const __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, new __VLS_153({ ...{ 'onClick': {} }, divided: (true), }));
            const __VLS_155 = __VLS_154({ ...{ 'onClick': {} }, divided: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_154));
            let __VLS_159;
            const __VLS_160 = {
                onClick: (__VLS_ctx.handleLogout)
            };
            let __VLS_156;
            let __VLS_157;
            const __VLS_161 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
            // @ts-ignore
            const __VLS_162 = __VLS_asFunctionalComponent(__VLS_161, new __VLS_161({}));
            const __VLS_163 = __VLS_162({}, ...__VLS_functionalComponentArgsRest(__VLS_162));
            const __VLS_167 = __VLS_resolvedLocalAndGlobalComponents.SwitchButton;
            /** @type { [typeof __VLS_components.SwitchButton, ] } */
            // @ts-ignore
            const __VLS_168 = __VLS_asFunctionalComponent(__VLS_167, new __VLS_167({}));
            const __VLS_169 = __VLS_168({}, ...__VLS_functionalComponentArgsRest(__VLS_168));
            __VLS_nonNullable(__VLS_166.slots).default;
            var __VLS_166;
            __VLS_nonNullable(__VLS_158.slots).default;
            var __VLS_158;
            if (__VLS_ctx.authStore.user?.isAdmin) {
                const __VLS_173 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
                /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ] } */
                // @ts-ignore
                const __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({ ...{ 'onClick': {} }, }));
                const __VLS_175 = __VLS_174({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_174));
                let __VLS_179;
                const __VLS_180 = {
                    onClick: (...[$event]) => {
                        if (!((__VLS_ctx.authStore.isAuthenticated)))
                            return;
                        if (!((__VLS_ctx.authStore.user?.isAdmin)))
                            return;
                        __VLS_ctx.router.push('/admin');
                    }
                };
                let __VLS_176;
                let __VLS_177;
                const __VLS_181 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
                /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
                // @ts-ignore
                const __VLS_182 = __VLS_asFunctionalComponent(__VLS_181, new __VLS_181({}));
                const __VLS_183 = __VLS_182({}, ...__VLS_functionalComponentArgsRest(__VLS_182));
                const __VLS_187 = __VLS_resolvedLocalAndGlobalComponents.Monitor;
                /** @type { [typeof __VLS_components.Monitor, ] } */
                // @ts-ignore
                const __VLS_188 = __VLS_asFunctionalComponent(__VLS_187, new __VLS_187({}));
                const __VLS_189 = __VLS_188({}, ...__VLS_functionalComponentArgsRest(__VLS_188));
                __VLS_nonNullable(__VLS_186.slots).default;
                var __VLS_186;
                __VLS_nonNullable(__VLS_178.slots).default;
                var __VLS_178;
            }
            __VLS_nonNullable(__VLS_92.slots).default;
            var __VLS_92;
        }
        var __VLS_80;
    }
    else {
        const __VLS_193 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_194 = __VLS_asFunctionalComponent(__VLS_193, new __VLS_193({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_195 = __VLS_194({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_194));
        let __VLS_199;
        const __VLS_200 = {
            onClick: (...[$event]) => {
                if (!(!((__VLS_ctx.authStore.isAuthenticated))))
                    return;
                __VLS_ctx.router.push('/login');
            }
        };
        let __VLS_196;
        let __VLS_197;
        __VLS_nonNullable(__VLS_198.slots).default;
        var __VLS_198;
    }
    __VLS_nonNullable(__VLS_61.slots).default;
    var __VLS_61;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_201 = __VLS_resolvedLocalAndGlobalComponents.ElMain;
    /** @type { [typeof __VLS_components.ElMain, typeof __VLS_components.elMain, typeof __VLS_components.ElMain, typeof __VLS_components.elMain, ] } */
    // @ts-ignore
    const __VLS_202 = __VLS_asFunctionalComponent(__VLS_201, new __VLS_201({}));
    const __VLS_203 = __VLS_202({}, ...__VLS_functionalComponentArgsRest(__VLS_202));
    const __VLS_207 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_208 = __VLS_asFunctionalComponent(__VLS_207, new __VLS_207({}));
    const __VLS_209 = __VLS_208({}, ...__VLS_functionalComponentArgsRest(__VLS_208));
    __VLS_nonNullable(__VLS_206.slots).default;
    var __VLS_206;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    // @ts-ignore
    [ContextMenu,];
    // @ts-ignore
    const __VLS_213 = __VLS_asFunctionalComponent(ContextMenu, new ContextMenu({ ref: ("contextMenuRef"), menuItems: ((__VLS_ctx.contextMenuItems)), }));
    const __VLS_214 = __VLS_213({ ref: ("contextMenuRef"), menuItems: ((__VLS_ctx.contextMenuItems)), }, ...__VLS_functionalComponentArgsRest(__VLS_213));
    // @ts-ignore navigation for `const contextMenuRef = ref()`
    __VLS_ctx.contextMenuRef;
    var __VLS_218 = {};
    var __VLS_217;
    __VLS_styleScopedClasses['layout-container'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['header-left'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['nav-menu'];
    __VLS_styleScopedClasses['header-right'];
    __VLS_styleScopedClasses['search-input'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "contextMenuRef": __VLS_218,
    };
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            NotificationPopover: NotificationPopover,
            ContextMenu: ContextMenu,
            Platform: Platform,
            User: User,
            EditPen: EditPen,
            Setting: Setting,
            SwitchButton: SwitchButton,
            Monitor: Monitor,
            router: router,
            authStore: authStore,
            searchQuery: searchQuery,
            contextMenuRef: contextMenuRef,
            handleSearch: handleSearch,
            handleLogout: handleLogout,
            contextMenuItems: contextMenuItems,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
