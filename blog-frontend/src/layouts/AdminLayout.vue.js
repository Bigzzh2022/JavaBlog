import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import NotificationPopover from '@/components/NotificationPopover.vue';
import { Fold, Expand, DataLine, Document, Files, ChatDotRound, User, Setting, SwitchButton } from '@element-plus/icons-vue';
import { ElMessageBox } from 'element-plus';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const isCollapse = ref(false);
const userAvatar = ref('https://example.com/avatar.jpg');
const activeMenu = computed(() => route.path);
const toggleSidebar = () => {
    isCollapse.value = !isCollapse.value;
};
const handleLogout = async () => {
    try {
        await ElMessageBox.confirm('确定要退出登录吗？', '提示', {
            confirmButtonText: '���定',
            cancelButtonText: '取消',
            type: 'warning'
        });
        authStore.logout();
        router.push('/login');
    }
    catch {
        // 用户取消操作
    }
}; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("admin-layout") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElHeader;
    /** @type { [typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("admin-header") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("admin-header") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header-left") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, text: (true), }));
    const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, text: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onClick: (__VLS_ctx.toggleSidebar)
    };
    let __VLS_9;
    let __VLS_10;
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    if (__VLS_ctx.isCollapse) {
        const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.Fold;
        /** @type { [typeof __VLS_components.Fold, ] } */
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
        const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
    }
    else {
        const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.Expand;
        /** @type { [typeof __VLS_components.Expand, ] } */
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
        const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
    }
    __VLS_nonNullable(__VLS_19.slots).default;
    var __VLS_19;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("header-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header-right") }, });
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
    /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
    const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
    // @ts-ignore
    [NotificationPopover,];
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(NotificationPopover, new NotificationPopover({}));
    const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
    const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.ElDropdown;
    /** @type { [typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ] } */
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({}));
    const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
    const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
    /** @type { [typeof __VLS_components.ElAvatar, typeof __VLS_components.elAvatar, ] } */
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ size: ((32)), src: ((__VLS_ctx.userAvatar)), }));
    const __VLS_51 = __VLS_50({ size: ((32)), src: ((__VLS_ctx.userAvatar)), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { dropdown: __VLS_thisSlot } = __VLS_nonNullable(__VLS_48.slots);
        const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownMenu;
        /** @type { [typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ] } */
        // @ts-ignore
        const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({}));
        const __VLS_57 = __VLS_56({}, ...__VLS_functionalComponentArgsRest(__VLS_56));
        const __VLS_61 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
        /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ] } */
        // @ts-ignore
        const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{ 'onClick': {} }, }));
        const __VLS_63 = __VLS_62({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_62));
        let __VLS_67;
        const __VLS_68 = {
            onClick: (...[$event]) => {
                __VLS_ctx.$router.push('/profile');
            }
        };
        let __VLS_64;
        let __VLS_65;
        const __VLS_69 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({}));
        const __VLS_71 = __VLS_70({}, ...__VLS_functionalComponentArgsRest(__VLS_70));
        const __VLS_75 = __VLS_resolvedLocalAndGlobalComponents.User;
        /** @type { [typeof __VLS_components.User, ] } */
        // @ts-ignore
        const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({}));
        const __VLS_77 = __VLS_76({}, ...__VLS_functionalComponentArgsRest(__VLS_76));
        __VLS_nonNullable(__VLS_74.slots).default;
        var __VLS_74;
        __VLS_nonNullable(__VLS_66.slots).default;
        var __VLS_66;
        const __VLS_81 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
        /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ] } */
        // @ts-ignore
        const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{ 'onClick': {} }, }));
        const __VLS_83 = __VLS_82({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_82));
        let __VLS_87;
        const __VLS_88 = {
            onClick: (...[$event]) => {
                __VLS_ctx.$router.push('/settings');
            }
        };
        let __VLS_84;
        let __VLS_85;
        const __VLS_89 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({}));
        const __VLS_91 = __VLS_90({}, ...__VLS_functionalComponentArgsRest(__VLS_90));
        const __VLS_95 = __VLS_resolvedLocalAndGlobalComponents.Setting;
        /** @type { [typeof __VLS_components.Setting, ] } */
        // @ts-ignore
        const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({}));
        const __VLS_97 = __VLS_96({}, ...__VLS_functionalComponentArgsRest(__VLS_96));
        __VLS_nonNullable(__VLS_94.slots).default;
        var __VLS_94;
        __VLS_nonNullable(__VLS_86.slots).default;
        var __VLS_86;
        const __VLS_101 = __VLS_resolvedLocalAndGlobalComponents.ElDropdownItem;
        /** @type { [typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ] } */
        // @ts-ignore
        const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({ ...{ 'onClick': {} }, divided: (true), }));
        const __VLS_103 = __VLS_102({ ...{ 'onClick': {} }, divided: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
        let __VLS_107;
        const __VLS_108 = {
            onClick: (__VLS_ctx.handleLogout)
        };
        let __VLS_104;
        let __VLS_105;
        const __VLS_109 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({}));
        const __VLS_111 = __VLS_110({}, ...__VLS_functionalComponentArgsRest(__VLS_110));
        const __VLS_115 = __VLS_resolvedLocalAndGlobalComponents.SwitchButton;
        /** @type { [typeof __VLS_components.SwitchButton, ] } */
        // @ts-ignore
        const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({}));
        const __VLS_117 = __VLS_116({}, ...__VLS_functionalComponentArgsRest(__VLS_116));
        __VLS_nonNullable(__VLS_114.slots).default;
        var __VLS_114;
        __VLS_nonNullable(__VLS_106.slots).default;
        var __VLS_106;
        __VLS_nonNullable(__VLS_60.slots).default;
        var __VLS_60;
    }
    var __VLS_48;
    __VLS_nonNullable(__VLS_37.slots).default;
    var __VLS_37;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_121 = __VLS_resolvedLocalAndGlobalComponents.ElContainer;
    /** @type { [typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ] } */
    // @ts-ignore
    const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({ ...{ class: ("admin-container") }, }));
    const __VLS_123 = __VLS_122({ ...{ class: ("admin-container") }, }, ...__VLS_functionalComponentArgsRest(__VLS_122));
    const __VLS_127 = __VLS_resolvedLocalAndGlobalComponents.ElAside;
    /** @type { [typeof __VLS_components.ElAside, typeof __VLS_components.elAside, typeof __VLS_components.ElAside, typeof __VLS_components.elAside, ] } */
    // @ts-ignore
    const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({ width: ((__VLS_ctx.isCollapse ? '64px' : '200px')), ...{ class: ("admin-aside") }, }));
    const __VLS_129 = __VLS_128({ width: ((__VLS_ctx.isCollapse ? '64px' : '200px')), ...{ class: ("admin-aside") }, }, ...__VLS_functionalComponentArgsRest(__VLS_128));
    const __VLS_133 = __VLS_resolvedLocalAndGlobalComponents.ElMenu;
    /** @type { [typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ] } */
    // @ts-ignore
    const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({ defaultActive: ((__VLS_ctx.activeMenu)), collapse: ((__VLS_ctx.isCollapse)), collapseTransition: ((false)), router: (true), }));
    const __VLS_135 = __VLS_134({ defaultActive: ((__VLS_ctx.activeMenu)), collapse: ((__VLS_ctx.isCollapse)), collapseTransition: ((false)), router: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
    const __VLS_139 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_140 = __VLS_asFunctionalComponent(__VLS_139, new __VLS_139({ index: ("/admin"), }));
    const __VLS_141 = __VLS_140({ index: ("/admin"), }, ...__VLS_functionalComponentArgsRest(__VLS_140));
    const __VLS_145 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({}));
    const __VLS_147 = __VLS_146({}, ...__VLS_functionalComponentArgsRest(__VLS_146));
    const __VLS_151 = __VLS_resolvedLocalAndGlobalComponents.DataLine;
    /** @type { [typeof __VLS_components.DataLine, ] } */
    // @ts-ignore
    const __VLS_152 = __VLS_asFunctionalComponent(__VLS_151, new __VLS_151({}));
    const __VLS_153 = __VLS_152({}, ...__VLS_functionalComponentArgsRest(__VLS_152));
    __VLS_nonNullable(__VLS_150.slots).default;
    var __VLS_150;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_144.slots);
    }
    var __VLS_144;
    const __VLS_157 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_158 = __VLS_asFunctionalComponent(__VLS_157, new __VLS_157({ index: ("/admin/articles"), }));
    const __VLS_159 = __VLS_158({ index: ("/admin/articles"), }, ...__VLS_functionalComponentArgsRest(__VLS_158));
    const __VLS_163 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_164 = __VLS_asFunctionalComponent(__VLS_163, new __VLS_163({}));
    const __VLS_165 = __VLS_164({}, ...__VLS_functionalComponentArgsRest(__VLS_164));
    const __VLS_169 = __VLS_resolvedLocalAndGlobalComponents.Document;
    /** @type { [typeof __VLS_components.Document, ] } */
    // @ts-ignore
    const __VLS_170 = __VLS_asFunctionalComponent(__VLS_169, new __VLS_169({}));
    const __VLS_171 = __VLS_170({}, ...__VLS_functionalComponentArgsRest(__VLS_170));
    __VLS_nonNullable(__VLS_168.slots).default;
    var __VLS_168;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_162.slots);
    }
    var __VLS_162;
    const __VLS_175 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_176 = __VLS_asFunctionalComponent(__VLS_175, new __VLS_175({ index: ("/admin/categories"), }));
    const __VLS_177 = __VLS_176({ index: ("/admin/categories"), }, ...__VLS_functionalComponentArgsRest(__VLS_176));
    const __VLS_181 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_182 = __VLS_asFunctionalComponent(__VLS_181, new __VLS_181({}));
    const __VLS_183 = __VLS_182({}, ...__VLS_functionalComponentArgsRest(__VLS_182));
    const __VLS_187 = __VLS_resolvedLocalAndGlobalComponents.Files;
    /** @type { [typeof __VLS_components.Files, ] } */
    // @ts-ignore
    const __VLS_188 = __VLS_asFunctionalComponent(__VLS_187, new __VLS_187({}));
    const __VLS_189 = __VLS_188({}, ...__VLS_functionalComponentArgsRest(__VLS_188));
    __VLS_nonNullable(__VLS_186.slots).default;
    var __VLS_186;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_180.slots);
    }
    var __VLS_180;
    const __VLS_193 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_194 = __VLS_asFunctionalComponent(__VLS_193, new __VLS_193({ index: ("/admin/comments"), }));
    const __VLS_195 = __VLS_194({ index: ("/admin/comments"), }, ...__VLS_functionalComponentArgsRest(__VLS_194));
    const __VLS_199 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_200 = __VLS_asFunctionalComponent(__VLS_199, new __VLS_199({}));
    const __VLS_201 = __VLS_200({}, ...__VLS_functionalComponentArgsRest(__VLS_200));
    const __VLS_205 = __VLS_resolvedLocalAndGlobalComponents.ChatDotRound;
    /** @type { [typeof __VLS_components.ChatDotRound, ] } */
    // @ts-ignore
    const __VLS_206 = __VLS_asFunctionalComponent(__VLS_205, new __VLS_205({}));
    const __VLS_207 = __VLS_206({}, ...__VLS_functionalComponentArgsRest(__VLS_206));
    __VLS_nonNullable(__VLS_204.slots).default;
    var __VLS_204;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_198.slots);
    }
    var __VLS_198;
    const __VLS_211 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_212 = __VLS_asFunctionalComponent(__VLS_211, new __VLS_211({ index: ("/admin/users"), }));
    const __VLS_213 = __VLS_212({ index: ("/admin/users"), }, ...__VLS_functionalComponentArgsRest(__VLS_212));
    const __VLS_217 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_218 = __VLS_asFunctionalComponent(__VLS_217, new __VLS_217({}));
    const __VLS_219 = __VLS_218({}, ...__VLS_functionalComponentArgsRest(__VLS_218));
    const __VLS_223 = __VLS_resolvedLocalAndGlobalComponents.User;
    /** @type { [typeof __VLS_components.User, ] } */
    // @ts-ignore
    const __VLS_224 = __VLS_asFunctionalComponent(__VLS_223, new __VLS_223({}));
    const __VLS_225 = __VLS_224({}, ...__VLS_functionalComponentArgsRest(__VLS_224));
    __VLS_nonNullable(__VLS_222.slots).default;
    var __VLS_222;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_216.slots);
    }
    var __VLS_216;
    const __VLS_229 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_230 = __VLS_asFunctionalComponent(__VLS_229, new __VLS_229({ index: ("/admin/settings"), }));
    const __VLS_231 = __VLS_230({ index: ("/admin/settings"), }, ...__VLS_functionalComponentArgsRest(__VLS_230));
    const __VLS_235 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_236 = __VLS_asFunctionalComponent(__VLS_235, new __VLS_235({}));
    const __VLS_237 = __VLS_236({}, ...__VLS_functionalComponentArgsRest(__VLS_236));
    const __VLS_241 = __VLS_resolvedLocalAndGlobalComponents.Setting;
    /** @type { [typeof __VLS_components.Setting, ] } */
    // @ts-ignore
    const __VLS_242 = __VLS_asFunctionalComponent(__VLS_241, new __VLS_241({}));
    const __VLS_243 = __VLS_242({}, ...__VLS_functionalComponentArgsRest(__VLS_242));
    __VLS_nonNullable(__VLS_240.slots).default;
    var __VLS_240;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_234.slots);
    }
    var __VLS_234;
    __VLS_nonNullable(__VLS_138.slots).default;
    var __VLS_138;
    __VLS_nonNullable(__VLS_132.slots).default;
    var __VLS_132;
    const __VLS_247 = __VLS_resolvedLocalAndGlobalComponents.ElMain;
    /** @type { [typeof __VLS_components.ElMain, typeof __VLS_components.elMain, typeof __VLS_components.ElMain, typeof __VLS_components.elMain, ] } */
    // @ts-ignore
    const __VLS_248 = __VLS_asFunctionalComponent(__VLS_247, new __VLS_247({ ...{ class: ("admin-main") }, }));
    const __VLS_249 = __VLS_248({ ...{ class: ("admin-main") }, }, ...__VLS_functionalComponentArgsRest(__VLS_248));
    const __VLS_253 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_254 = __VLS_asFunctionalComponent(__VLS_253, new __VLS_253({}));
    const __VLS_255 = __VLS_254({}, ...__VLS_functionalComponentArgsRest(__VLS_254));
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_258.slots);
        const [{ Component }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_259 = __VLS_resolvedLocalAndGlobalComponents.transition;
        /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ] } */
        // @ts-ignore
        const __VLS_260 = __VLS_asFunctionalComponent(__VLS_259, new __VLS_259({ name: ("fade"), mode: ("out-in"), }));
        const __VLS_261 = __VLS_260({ name: ("fade"), mode: ("out-in"), }, ...__VLS_functionalComponentArgsRest(__VLS_260));
        const __VLS_265 = ((Component));
        // @ts-ignore
        const __VLS_266 = __VLS_asFunctionalComponent(__VLS_265, new __VLS_265({}));
        const __VLS_267 = __VLS_266({}, ...__VLS_functionalComponentArgsRest(__VLS_266));
        __VLS_nonNullable(__VLS_264.slots).default;
        var __VLS_264;
        __VLS_nonNullable(__VLS_258.slots)['' /* empty slot name completion */];
    }
    var __VLS_258;
    __VLS_nonNullable(__VLS_252.slots).default;
    var __VLS_252;
    __VLS_nonNullable(__VLS_126.slots).default;
    var __VLS_126;
    __VLS_styleScopedClasses['admin-layout'];
    __VLS_styleScopedClasses['admin-header'];
    __VLS_styleScopedClasses['header-left'];
    __VLS_styleScopedClasses['header-title'];
    __VLS_styleScopedClasses['header-right'];
    __VLS_styleScopedClasses['admin-container'];
    __VLS_styleScopedClasses['admin-aside'];
    __VLS_styleScopedClasses['admin-main'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
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
            Fold: Fold,
            Expand: Expand,
            DataLine: DataLine,
            Document: Document,
            Files: Files,
            ChatDotRound: ChatDotRound,
            User: User,
            Setting: Setting,
            SwitchButton: SwitchButton,
            isCollapse: isCollapse,
            userAvatar: userAvatar,
            activeMenu: activeMenu,
            toggleSidebar: toggleSidebar,
            handleLogout: handleLogout,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
