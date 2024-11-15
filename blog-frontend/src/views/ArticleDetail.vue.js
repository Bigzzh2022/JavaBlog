import { ref } from 'vue';
import { StarFilled, CollectionTag, Share, CaretTop, ChatRound } from '@element-plus/icons-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const newComment = ref('');
const article = {
    title: '深入理解 Vue 3 的响应式系统',
    author: '技术专家',
    authorAvatar: 'https://example.com/avatar.jpg',
    publishTime: '2024-03-14 10:00',
    category: '前端开发',
    content: `
    <h2>引言</h2>
    <p>Vue 3 的响应式系统是其核心特性之一...</p>
    <h2>响应式原理</h2>
    <p>通过 Proxy 对象实现数据的响应式追踪...</p>
  `,
    likes: 128,
    collections: 56,
    authorBio: '资深前端开发工程师，专注于 Vue.js 技术栈',
    authorStats: {
        articles: 42,
        followers: '12.5k',
        likes: '88.9k'
    },
    comments: [
        {
            id: 1,
            userName: '读者A',
            userAvatar: 'https://example.com/avatar1.jpg',
            content: '文章写得很好，讲解得很清楚！',
            time: '2小时前',
            likes: 12
        }
    ]
};
const relatedArticles = [
    { title: 'Vue 3 组合式 API 最佳实践', views: 2341 },
    { title: '使用 TypeScript 开发 Vue 应用', views: 1890 },
    { title: 'Pinia 状态管理指南', views: 1567 }
]; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_styleScopedClasses['article-header'];
    __VLS_styleScopedClasses['related-article-item'];
    __VLS_styleScopedClasses['related-article-item'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-detail") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ gutter: ((20)), }));
    const __VLS_2 = __VLS_1({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ span: ((16)), }));
    const __VLS_8 = __VLS_7({ span: ((16)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("article-card") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("article-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    (__VLS_ctx.article.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-meta") }, });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
    /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
    /** @type { [typeof __VLS_components.ElAvatar, typeof __VLS_components.elAvatar, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ size: ((32)), src: ((__VLS_ctx.article.authorAvatar)), }));
    const __VLS_26 = __VLS_25({ size: ((32)), src: ((__VLS_ctx.article.authorAvatar)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("author-name") }, });
    (__VLS_ctx.article.author);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("publish-time") }, });
    (__VLS_ctx.article.publishTime);
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
    /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ size: ("small"), }));
    const __VLS_32 = __VLS_31({ size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    (__VLS_ctx.article.category);
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-content") }, });
    __VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: (__VLS_ctx.article.content) }, null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-actions") }, });
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
    /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ type: ("primary"), icon: ((__VLS_ctx.StarFilled)), }));
    const __VLS_44 = __VLS_43({ type: ("primary"), icon: ((__VLS_ctx.StarFilled)), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    (__VLS_ctx.article.likes);
    __VLS_nonNullable(__VLS_47.slots).default;
    var __VLS_47;
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ icon: ((__VLS_ctx.CollectionTag)), }));
    const __VLS_50 = __VLS_49({ icon: ((__VLS_ctx.CollectionTag)), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    (__VLS_ctx.article.collections);
    __VLS_nonNullable(__VLS_53.slots).default;
    var __VLS_53;
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ icon: ((__VLS_ctx.Share)), }));
    const __VLS_56 = __VLS_55({ icon: ((__VLS_ctx.Share)), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    __VLS_nonNullable(__VLS_59.slots).default;
    var __VLS_59;
    __VLS_nonNullable(__VLS_41.slots).default;
    var __VLS_41;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("comments-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.article.comments.length);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("comment-input") }, });
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ modelValue: ((__VLS_ctx.newComment)), type: ("textarea"), rows: ((3)), placeholder: ("写下你的评论..."), }));
    const __VLS_62 = __VLS_61({ modelValue: ((__VLS_ctx.newComment)), type: ("textarea"), rows: ((3)), placeholder: ("写下你的评论..."), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ type: ("primary"), ...{ class: ("submit-comment") }, }));
    const __VLS_68 = __VLS_67({ type: ("primary"), ...{ class: ("submit-comment") }, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    __VLS_nonNullable(__VLS_71.slots).default;
    var __VLS_71;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("comments-list") }, });
    for (const [comment] of __VLS_getVForSourceType((__VLS_ctx.article.comments))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((comment.id)), ...{ class: ("comment-item") }, });
        const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
        /** @type { [typeof __VLS_components.ElAvatar, typeof __VLS_components.elAvatar, ] } */
        // @ts-ignore
        const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ size: ((40)), src: ((comment.userAvatar)), }));
        const __VLS_74 = __VLS_73({ size: ((40)), src: ((comment.userAvatar)), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("comment-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("comment-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("comment-author") }, });
        (comment.userName);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("comment-time") }, });
        (comment.time);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("comment-text") }, });
        (comment.content);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("comment-actions") }, });
        const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ text: (true), icon: ((__VLS_ctx.CaretTop)), }));
        const __VLS_80 = __VLS_79({ text: (true), icon: ((__VLS_ctx.CaretTop)), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
        (comment.likes);
        __VLS_nonNullable(__VLS_83.slots).default;
        var __VLS_83;
        const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ text: (true), icon: ((__VLS_ctx.ChatRound)), }));
        const __VLS_86 = __VLS_85({ text: (true), icon: ((__VLS_ctx.ChatRound)), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
        __VLS_nonNullable(__VLS_89.slots).default;
        var __VLS_89;
    }
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ span: ((8)), }));
    const __VLS_92 = __VLS_91({ span: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ ...{ class: ("author-card") }, }));
    const __VLS_98 = __VLS_97({ ...{ class: ("author-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("author-info") }, });
    const __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
    /** @type { [typeof __VLS_components.ElAvatar, typeof __VLS_components.elAvatar, ] } */
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ size: ((64)), src: ((__VLS_ctx.article.authorAvatar)), }));
    const __VLS_104 = __VLS_103({ size: ((64)), src: ((__VLS_ctx.article.authorAvatar)), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.article.author);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("author-bio") }, });
    (__VLS_ctx.article.authorBio);
    const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ type: ("primary"), block: (true), }));
    const __VLS_110 = __VLS_109({ type: ("primary"), block: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    __VLS_nonNullable(__VLS_113.slots).default;
    var __VLS_113;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("author-stats") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.article.authorStats.articles);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.article.authorStats.followers);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.article.authorStats.likes);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-label") }, });
    __VLS_nonNullable(__VLS_101.slots).default;
    var __VLS_101;
    const __VLS_114 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ ...{ class: ("related-articles") }, }));
    const __VLS_116 = __VLS_115({ ...{ class: ("related-articles") }, }, ...__VLS_functionalComponentArgsRest(__VLS_115));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_119.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    const __VLS_120 = __VLS_resolvedLocalAndGlobalComponents.ElScrollbar;
    /** @type { [typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, ] } */
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ maxHeight: ("400px"), }));
    const __VLS_122 = __VLS_121({ maxHeight: ("400px"), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
    for (const [article, index] of __VLS_getVForSourceType((__VLS_ctx.relatedArticles))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("related-article-item") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("article-title") }, });
        (article.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("article-views") }, });
        (article.views);
    }
    __VLS_nonNullable(__VLS_125.slots).default;
    var __VLS_125;
    var __VLS_119;
    __VLS_nonNullable(__VLS_95.slots).default;
    var __VLS_95;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['article-detail'];
    __VLS_styleScopedClasses['article-card'];
    __VLS_styleScopedClasses['article-header'];
    __VLS_styleScopedClasses['article-meta'];
    __VLS_styleScopedClasses['author-name'];
    __VLS_styleScopedClasses['publish-time'];
    __VLS_styleScopedClasses['article-content'];
    __VLS_styleScopedClasses['article-actions'];
    __VLS_styleScopedClasses['comments-section'];
    __VLS_styleScopedClasses['comment-input'];
    __VLS_styleScopedClasses['submit-comment'];
    __VLS_styleScopedClasses['comments-list'];
    __VLS_styleScopedClasses['comment-item'];
    __VLS_styleScopedClasses['comment-content'];
    __VLS_styleScopedClasses['comment-header'];
    __VLS_styleScopedClasses['comment-author'];
    __VLS_styleScopedClasses['comment-time'];
    __VLS_styleScopedClasses['comment-text'];
    __VLS_styleScopedClasses['comment-actions'];
    __VLS_styleScopedClasses['author-card'];
    __VLS_styleScopedClasses['author-info'];
    __VLS_styleScopedClasses['author-bio'];
    __VLS_styleScopedClasses['author-stats'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-label'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-label'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-value'];
    __VLS_styleScopedClasses['stat-label'];
    __VLS_styleScopedClasses['related-articles'];
    __VLS_styleScopedClasses['card-header'];
    __VLS_styleScopedClasses['related-article-item'];
    __VLS_styleScopedClasses['article-title'];
    __VLS_styleScopedClasses['article-views'];
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
            StarFilled: StarFilled,
            CollectionTag: CollectionTag,
            Share: Share,
            CaretTop: CaretTop,
            ChatRound: ChatRound,
            newComment: newComment,
            article: article,
            relatedArticles: relatedArticles,
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
