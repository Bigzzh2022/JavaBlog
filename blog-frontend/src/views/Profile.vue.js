import { ref, computed } from 'vue';
import { Document, EditPen, Star, GoodsFilled, ChatDotRound, Setting } from '@element-plus/icons-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const activeMenu = ref('articles');
const userInfo = {
    name: '张三',
    avatar: 'https://example.com/avatar.jpg',
    bio: '热爱技术，热爱分享',
    stats: {
        articles: 42,
        followers: '12.5k',
        following: 233
    }
};
const articles = [
    {
        title: 'Vue 3 组合式 API 最佳实践',
        views: 2341,
        likes: 128,
        comments: 23,
        createTime: '2024-03-14 10:00'
    },
    // 更多文章...
];
const contentTitle = computed(() => {
    const titles = {
        articles: '我的文章',
        drafts: '草稿箱',
        collections: '我的收藏',
        likes: '点赞记录',
        comments: '我的评论',
        settings: '账号设置'
    };
    return titles[activeMenu.value] || '';
});
const showNewArticleBtn = computed(() => {
    return ['articles', 'drafts'].includes(activeMenu.value);
});
const handleMenuSelect = (index) => {
    activeMenu.value = index;
};
const editProfile = () => {
    // 实现编辑资料的逻辑
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
    __VLS_styleScopedClasses['profile-header'];
    __VLS_styleScopedClasses['content-header'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("profile") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ gutter: ((20)), }));
    const __VLS_2 = __VLS_1({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ span: ((6)), }));
    const __VLS_8 = __VLS_7({ span: ((6)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("profile-card") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("profile-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("profile-header") }, });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
    /** @type { [typeof __VLS_components.ElAvatar, typeof __VLS_components.elAvatar, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ size: ((100)), src: ((__VLS_ctx.userInfo.avatar)), }));
    const __VLS_20 = __VLS_19({ size: ((100)), src: ((__VLS_ctx.userInfo.avatar)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (__VLS_ctx.userInfo.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("bio") }, });
    (__VLS_ctx.userInfo.bio);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("profile-stats") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.userInfo.stats.articles);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.userInfo.stats.followers);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.userInfo.stats.following);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-label") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onClick': {} }, type: ("primary"), block: (true), }));
    const __VLS_26 = __VLS_25({ ...{ 'onClick': {} }, type: ("primary"), block: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    let __VLS_30;
    const __VLS_31 = {
        onClick: (__VLS_ctx.editProfile)
    };
    let __VLS_27;
    let __VLS_28;
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ class: ("menu-card") }, }));
    const __VLS_34 = __VLS_33({ ...{ class: ("menu-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElMenu;
    /** @type { [typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ 'onSelect': {} }, defaultActive: ((__VLS_ctx.activeMenu)), }));
    const __VLS_40 = __VLS_39({ ...{ 'onSelect': {} }, defaultActive: ((__VLS_ctx.activeMenu)), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    let __VLS_44;
    const __VLS_45 = {
        onSelect: (__VLS_ctx.handleMenuSelect)
    };
    let __VLS_41;
    let __VLS_42;
    const __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ index: ("articles"), }));
    const __VLS_48 = __VLS_47({ index: ("articles"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    const __VLS_52 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({}));
    const __VLS_54 = __VLS_53({}, ...__VLS_functionalComponentArgsRest(__VLS_53));
    const __VLS_58 = __VLS_resolvedLocalAndGlobalComponents.Document;
    /** @type { [typeof __VLS_components.Document, ] } */
    // @ts-ignore
    const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({}));
    const __VLS_60 = __VLS_59({}, ...__VLS_functionalComponentArgsRest(__VLS_59));
    __VLS_nonNullable(__VLS_57.slots).default;
    var __VLS_57;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_51.slots).default;
    var __VLS_51;
    const __VLS_64 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ index: ("drafts"), }));
    const __VLS_66 = __VLS_65({ index: ("drafts"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
    const __VLS_70 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({}));
    const __VLS_72 = __VLS_71({}, ...__VLS_functionalComponentArgsRest(__VLS_71));
    const __VLS_76 = __VLS_resolvedLocalAndGlobalComponents.EditPen;
    /** @type { [typeof __VLS_components.EditPen, ] } */
    // @ts-ignore
    const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({}));
    const __VLS_78 = __VLS_77({}, ...__VLS_functionalComponentArgsRest(__VLS_77));
    __VLS_nonNullable(__VLS_75.slots).default;
    var __VLS_75;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_69.slots).default;
    var __VLS_69;
    const __VLS_82 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ index: ("collections"), }));
    const __VLS_84 = __VLS_83({ index: ("collections"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
    const __VLS_88 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({}));
    const __VLS_90 = __VLS_89({}, ...__VLS_functionalComponentArgsRest(__VLS_89));
    const __VLS_94 = __VLS_resolvedLocalAndGlobalComponents.Star;
    /** @type { [typeof __VLS_components.Star, ] } */
    // @ts-ignore
    const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({}));
    const __VLS_96 = __VLS_95({}, ...__VLS_functionalComponentArgsRest(__VLS_95));
    __VLS_nonNullable(__VLS_93.slots).default;
    var __VLS_93;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_87.slots).default;
    var __VLS_87;
    const __VLS_100 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ index: ("likes"), }));
    const __VLS_102 = __VLS_101({ index: ("likes"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
    const __VLS_106 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({}));
    const __VLS_108 = __VLS_107({}, ...__VLS_functionalComponentArgsRest(__VLS_107));
    const __VLS_112 = __VLS_resolvedLocalAndGlobalComponents.GoodsFilled;
    /** @type { [typeof __VLS_components.GoodsFilled, ] } */
    // @ts-ignore
    const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({}));
    const __VLS_114 = __VLS_113({}, ...__VLS_functionalComponentArgsRest(__VLS_113));
    __VLS_nonNullable(__VLS_111.slots).default;
    var __VLS_111;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_105.slots).default;
    var __VLS_105;
    const __VLS_118 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ index: ("comments"), }));
    const __VLS_120 = __VLS_119({ index: ("comments"), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
    const __VLS_124 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({}));
    const __VLS_126 = __VLS_125({}, ...__VLS_functionalComponentArgsRest(__VLS_125));
    const __VLS_130 = __VLS_resolvedLocalAndGlobalComponents.ChatDotRound;
    /** @type { [typeof __VLS_components.ChatDotRound, ] } */
    // @ts-ignore
    const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({}));
    const __VLS_132 = __VLS_131({}, ...__VLS_functionalComponentArgsRest(__VLS_131));
    __VLS_nonNullable(__VLS_129.slots).default;
    var __VLS_129;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_123.slots).default;
    var __VLS_123;
    const __VLS_136 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({ index: ("settings"), }));
    const __VLS_138 = __VLS_137({ index: ("settings"), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
    const __VLS_142 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({}));
    const __VLS_144 = __VLS_143({}, ...__VLS_functionalComponentArgsRest(__VLS_143));
    const __VLS_148 = __VLS_resolvedLocalAndGlobalComponents.Setting;
    /** @type { [typeof __VLS_components.Setting, ] } */
    // @ts-ignore
    const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({}));
    const __VLS_150 = __VLS_149({}, ...__VLS_functionalComponentArgsRest(__VLS_149));
    __VLS_nonNullable(__VLS_147.slots).default;
    var __VLS_147;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_141.slots).default;
    var __VLS_141;
    __VLS_nonNullable(__VLS_43.slots).default;
    var __VLS_43;
    __VLS_nonNullable(__VLS_37.slots).default;
    var __VLS_37;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_154 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
    // @ts-ignore
    const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({ span: ((18)), }));
    const __VLS_156 = __VLS_155({ span: ((18)), }, ...__VLS_functionalComponentArgsRest(__VLS_155));
    const __VLS_160 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160({ ...{ class: ("content-card") }, }));
    const __VLS_162 = __VLS_161({ ...{ class: ("content-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_161));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_165.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (__VLS_ctx.contentTitle);
        if (__VLS_ctx.showNewArticleBtn) {
            const __VLS_166 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
            // @ts-ignore
            const __VLS_167 = __VLS_asFunctionalComponent(__VLS_166, new __VLS_166({ type: ("primary"), }));
            const __VLS_168 = __VLS_167({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_167));
            __VLS_nonNullable(__VLS_171.slots).default;
            var __VLS_171;
        }
    }
    if (__VLS_ctx.activeMenu === 'articles') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("articles-list") }, });
        const __VLS_172 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
        /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
        // @ts-ignore
        const __VLS_173 = __VLS_asFunctionalComponent(__VLS_172, new __VLS_172({ data: ((__VLS_ctx.articles)), ...{ style: ({}) }, }));
        const __VLS_174 = __VLS_173({ data: ((__VLS_ctx.articles)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_173));
        const __VLS_178 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
        // @ts-ignore
        const __VLS_179 = __VLS_asFunctionalComponent(__VLS_178, new __VLS_178({ prop: ("title"), label: ("标题"), minWidth: ("300"), }));
        const __VLS_180 = __VLS_179({ prop: ("title"), label: ("标题"), minWidth: ("300"), }, ...__VLS_functionalComponentArgsRest(__VLS_179));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_183.slots);
            const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
            const __VLS_184 = __VLS_resolvedLocalAndGlobalComponents.ElLink;
            /** @type { [typeof __VLS_components.ElLink, typeof __VLS_components.elLink, typeof __VLS_components.ElLink, typeof __VLS_components.elLink, ] } */
            // @ts-ignore
            const __VLS_185 = __VLS_asFunctionalComponent(__VLS_184, new __VLS_184({}));
            const __VLS_186 = __VLS_185({}, ...__VLS_functionalComponentArgsRest(__VLS_185));
            (row.title);
            __VLS_nonNullable(__VLS_189.slots).default;
            var __VLS_189;
        }
        var __VLS_183;
        const __VLS_190 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
        // @ts-ignore
        const __VLS_191 = __VLS_asFunctionalComponent(__VLS_190, new __VLS_190({ prop: ("views"), label: ("阅读"), width: ("100"), }));
        const __VLS_192 = __VLS_191({ prop: ("views"), label: ("阅读"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_191));
        const __VLS_196 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
        // @ts-ignore
        const __VLS_197 = __VLS_asFunctionalComponent(__VLS_196, new __VLS_196({ prop: ("likes"), label: ("点赞"), width: ("100"), }));
        const __VLS_198 = __VLS_197({ prop: ("likes"), label: ("点赞"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_197));
        const __VLS_202 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
        // @ts-ignore
        const __VLS_203 = __VLS_asFunctionalComponent(__VLS_202, new __VLS_202({ prop: ("comments"), label: ("评论"), width: ("100"), }));
        const __VLS_204 = __VLS_203({ prop: ("comments"), label: ("评论"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_203));
        const __VLS_208 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
        // @ts-ignore
        const __VLS_209 = __VLS_asFunctionalComponent(__VLS_208, new __VLS_208({ prop: ("createTime"), label: ("发布时间"), width: ("180"), }));
        const __VLS_210 = __VLS_209({ prop: ("createTime"), label: ("发布时间"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_209));
        const __VLS_214 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
        /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
        // @ts-ignore
        const __VLS_215 = __VLS_asFunctionalComponent(__VLS_214, new __VLS_214({ label: ("操作"), width: ("150"), }));
        const __VLS_216 = __VLS_215({ label: ("操作"), width: ("150"), }, ...__VLS_functionalComponentArgsRest(__VLS_215));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_219.slots);
            const __VLS_220 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
            /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, ] } */
            // @ts-ignore
            const __VLS_221 = __VLS_asFunctionalComponent(__VLS_220, new __VLS_220({}));
            const __VLS_222 = __VLS_221({}, ...__VLS_functionalComponentArgsRest(__VLS_221));
            const __VLS_226 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
            // @ts-ignore
            const __VLS_227 = __VLS_asFunctionalComponent(__VLS_226, new __VLS_226({ link: (true), type: ("primary"), }));
            const __VLS_228 = __VLS_227({ link: (true), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_227));
            __VLS_nonNullable(__VLS_231.slots).default;
            var __VLS_231;
            const __VLS_232 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
            // @ts-ignore
            const __VLS_233 = __VLS_asFunctionalComponent(__VLS_232, new __VLS_232({ link: (true), type: ("danger"), }));
            const __VLS_234 = __VLS_233({ link: (true), type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_233));
            __VLS_nonNullable(__VLS_237.slots).default;
            var __VLS_237;
            __VLS_nonNullable(__VLS_225.slots).default;
            var __VLS_225;
        }
        var __VLS_219;
        __VLS_nonNullable(__VLS_177.slots).default;
        var __VLS_177;
    }
    var __VLS_165;
    __VLS_nonNullable(__VLS_159.slots).default;
    var __VLS_159;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['profile'];
    __VLS_styleScopedClasses['profile-card'];
    __VLS_styleScopedClasses['profile-header'];
    __VLS_styleScopedClasses['bio'];
    __VLS_styleScopedClasses['profile-stats'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-label'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-label'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-label'];
    __VLS_styleScopedClasses['menu-card'];
    __VLS_styleScopedClasses['content-card'];
    __VLS_styleScopedClasses['content-header'];
    __VLS_styleScopedClasses['articles-list'];
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
            Document: Document,
            EditPen: EditPen,
            Star: Star,
            GoodsFilled: GoodsFilled,
            ChatDotRound: ChatDotRound,
            Setting: Setting,
            activeMenu: activeMenu,
            userInfo: userInfo,
            articles: articles,
            contentTitle: contentTitle,
            showNewArticleBtn: showNewArticleBtn,
            handleMenuSelect: handleMenuSelect,
            editProfile: editProfile,
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
