import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { View, Star, ChatLineRound } from '@element-plus/icons-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const activeTab = ref('recommended');
// 轮播图数据
const carouselItems = [
    {
        id: 1,
        title: '前端开发趋势',
        description: '2024年前端开发的新趋势和技术展望',
        image: 'https://example.com/image1.jpg'
    },
    // 更多轮播项...
];
// 文章列表数据
const articles = [
    {
        id: 1,
        title: 'Vue 3 组合式 API 最佳实践',
        summary: '本文将介绍 Vue 3 组合式 API 的最佳实践和使用技巧...',
        author: '张三',
        authorAvatar: 'https://example.com/avatar1.jpg',
        createTime: '2024-03-14',
        category: '前端开发',
        cover: 'https://example.com/cover1.jpg',
        views: 1234,
        likes: 88,
        comments: 23
    },
    // 更多文章...
];
// 用户信息
const userInfo = {
    name: '张三',
    avatar: 'https://example.com/avatar.jpg',
    bio: '热爱技术，专注于Web开发',
    articles: 42,
    followers: '12.5k',
    following: 233
};
// 分类数据
const categories = [
    { id: 1, name: '前端开发', count: 128, type: '' },
    { id: 2, name: '后端开发', count: 85, type: 'success' },
    { id: 3, name: '移动开发', count: 64, type: 'warning' },
    { id: 4, name: '算法', count: 32, type: 'danger' }
];
// 标签数据
const tags = [
    { id: 1, name: 'Vue', type: '', effect: 'plain' },
    { id: 2, name: 'React', type: 'success', effect: 'plain' },
    { id: 3, name: 'TypeScript', type: 'warning', effect: 'plain' },
    { id: 4, name: 'Node.js', type: 'danger', effect: 'plain' }
];
const viewArticle = (id) => {
    router.push(`/article/${id}`);
};
const loadMore = () => {
    // 实现加载更多逻辑
};
const filterByCategory = (categoryId) => {
    // 实现分类筛选逻辑
};
const filterByTag = (tagId) => {
    // 实现标签筛选逻辑
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
    __VLS_styleScopedClasses['carousel-content'];
    __VLS_styleScopedClasses['carousel-content'];
    __VLS_styleScopedClasses['article-item'];
    __VLS_styleScopedClasses['article-title'];
    __VLS_styleScopedClasses['article-cover'];
    __VLS_styleScopedClasses['profile-header'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home") }, });
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
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("carousel-card") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("carousel-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElCarousel;
    /** @type { [typeof __VLS_components.ElCarousel, typeof __VLS_components.elCarousel, typeof __VLS_components.ElCarousel, typeof __VLS_components.elCarousel, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ height: ("300px"), }));
    const __VLS_20 = __VLS_19({ height: ("300px"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.carouselItems))) {
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElCarouselItem;
        /** @type { [typeof __VLS_components.ElCarouselItem, typeof __VLS_components.elCarouselItem, typeof __VLS_components.ElCarouselItem, typeof __VLS_components.elCarouselItem, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ key: ((item.id)), }));
        const __VLS_26 = __VLS_25({ key: ((item.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((item.image)), alt: ((item.title)), ...{ class: ("carousel-image") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("carousel-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (item.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (item.description);
        __VLS_nonNullable(__VLS_29.slots).default;
        var __VLS_29;
    }
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: ("article-list") }, }));
    const __VLS_32 = __VLS_31({ ...{ class: ("article-list") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_35.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("list-header") }, });
        const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElTabs;
        /** @type { [typeof __VLS_components.ElTabs, typeof __VLS_components.elTabs, typeof __VLS_components.ElTabs, typeof __VLS_components.elTabs, ] } */
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ modelValue: ((__VLS_ctx.activeTab)), }));
        const __VLS_38 = __VLS_37({ modelValue: ((__VLS_ctx.activeTab)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
        /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ label: ("推荐"), name: ("recommended"), }));
        const __VLS_44 = __VLS_43({ label: ("推荐"), name: ("recommended"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
        /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, ] } */
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ label: ("最新"), name: ("latest"), }));
        const __VLS_50 = __VLS_49({ label: ("最新"), name: ("latest"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
        /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, ] } */
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ label: ("热门"), name: ("popular"), }));
        const __VLS_56 = __VLS_55({ label: ("热门"), name: ("popular"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        __VLS_nonNullable(__VLS_41.slots).default;
        var __VLS_41;
    }
    for (const [article] of __VLS_getVForSourceType((__VLS_ctx.articles))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((article.id)), ...{ class: ("article-item") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-main") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.viewArticle(article.id);
                } }, ...{ class: ("article-title") }, });
        (article.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("article-summary") }, });
        (article.summary);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-meta") }, });
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
        /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
        const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
        const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
        /** @type { [typeof __VLS_components.ElAvatar, typeof __VLS_components.elAvatar, ] } */
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ size: ((24)), src: ((article.authorAvatar)), }));
        const __VLS_68 = __VLS_67({ size: ((24)), src: ((article.authorAvatar)), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (article.author);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("meta-divider") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (article.createTime);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("meta-divider") }, });
        const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
        // @ts-ignore
        const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ size: ("small"), }));
        const __VLS_74 = __VLS_73({ size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
        (article.category);
        __VLS_nonNullable(__VLS_77.slots).default;
        var __VLS_77;
        __VLS_nonNullable(__VLS_65.slots).default;
        var __VLS_65;
        const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
        /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, ] } */
        // @ts-ignore
        const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({}));
        const __VLS_80 = __VLS_79({}, ...__VLS_functionalComponentArgsRest(__VLS_79));
        const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ text: (true), }));
        const __VLS_86 = __VLS_85({ text: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
        const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({}));
        const __VLS_92 = __VLS_91({}, ...__VLS_functionalComponentArgsRest(__VLS_91));
        const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.View;
        /** @type { [typeof __VLS_components.View, ] } */
        // @ts-ignore
        const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({}));
        const __VLS_98 = __VLS_97({}, ...__VLS_functionalComponentArgsRest(__VLS_97));
        __VLS_nonNullable(__VLS_95.slots).default;
        var __VLS_95;
        (article.views);
        __VLS_nonNullable(__VLS_89.slots).default;
        var __VLS_89;
        const __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ text: (true), }));
        const __VLS_104 = __VLS_103({ text: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
        const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({}));
        const __VLS_110 = __VLS_109({}, ...__VLS_functionalComponentArgsRest(__VLS_109));
        const __VLS_114 = __VLS_resolvedLocalAndGlobalComponents.Star;
        /** @type { [typeof __VLS_components.Star, ] } */
        // @ts-ignore
        const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({}));
        const __VLS_116 = __VLS_115({}, ...__VLS_functionalComponentArgsRest(__VLS_115));
        __VLS_nonNullable(__VLS_113.slots).default;
        var __VLS_113;
        (article.likes);
        __VLS_nonNullable(__VLS_107.slots).default;
        var __VLS_107;
        const __VLS_120 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ text: (true), }));
        const __VLS_122 = __VLS_121({ text: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
        const __VLS_126 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({}));
        const __VLS_128 = __VLS_127({}, ...__VLS_functionalComponentArgsRest(__VLS_127));
        const __VLS_132 = __VLS_resolvedLocalAndGlobalComponents.ChatLineRound;
        /** @type { [typeof __VLS_components.ChatLineRound, ] } */
        // @ts-ignore
        const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({}));
        const __VLS_134 = __VLS_133({}, ...__VLS_functionalComponentArgsRest(__VLS_133));
        __VLS_nonNullable(__VLS_131.slots).default;
        var __VLS_131;
        (article.comments);
        __VLS_nonNullable(__VLS_125.slots).default;
        var __VLS_125;
        __VLS_nonNullable(__VLS_83.slots).default;
        var __VLS_83;
        if (article.cover) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-cover") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((article.cover)), alt: ((article.title)), });
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("load-more") }, });
    const __VLS_138 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ ...{ 'onClick': {} }, text: (true), }));
    const __VLS_140 = __VLS_139({ ...{ 'onClick': {} }, text: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
    let __VLS_144;
    const __VLS_145 = {
        onClick: (__VLS_ctx.loadMore)
    };
    let __VLS_141;
    let __VLS_142;
    __VLS_nonNullable(__VLS_143.slots).default;
    var __VLS_143;
    var __VLS_35;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_146 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
    // @ts-ignore
    const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ span: ((8)), }));
    const __VLS_148 = __VLS_147({ span: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
    const __VLS_152 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ ...{ class: ("profile-card") }, }));
    const __VLS_154 = __VLS_153({ ...{ class: ("profile-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_153));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_157.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("profile-header") }, });
        const __VLS_158 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
        /** @type { [typeof __VLS_components.ElAvatar, typeof __VLS_components.elAvatar, ] } */
        // @ts-ignore
        const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({ size: ((64)), src: ((__VLS_ctx.userInfo.avatar)), }));
        const __VLS_160 = __VLS_159({ size: ((64)), src: ((__VLS_ctx.userInfo.avatar)), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (__VLS_ctx.userInfo.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("bio") }, });
        (__VLS_ctx.userInfo.bio);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("profile-stats") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.userInfo.articles);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.userInfo.followers);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-value") }, });
    (__VLS_ctx.userInfo.following);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-label") }, });
    const __VLS_164 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({ type: ("primary"), block: (true), }));
    const __VLS_166 = __VLS_165({ type: ("primary"), block: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_165));
    __VLS_nonNullable(__VLS_169.slots).default;
    var __VLS_169;
    var __VLS_157;
    const __VLS_170 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({ ...{ class: ("category-card") }, }));
    const __VLS_172 = __VLS_171({ ...{ class: ("category-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_171));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_175.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("category-list") }, });
    for (const [category] of __VLS_getVForSourceType((__VLS_ctx.categories))) {
        const __VLS_176 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
        // @ts-ignore
        const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({ ...{ 'onClick': {} }, key: ((category.id)), type: ((category.type)), ...{ class: ("category-tag") }, }));
        const __VLS_178 = __VLS_177({ ...{ 'onClick': {} }, key: ((category.id)), type: ((category.type)), ...{ class: ("category-tag") }, }, ...__VLS_functionalComponentArgsRest(__VLS_177));
        let __VLS_182;
        const __VLS_183 = {
            onClick: (...[$event]) => {
                __VLS_ctx.filterByCategory(category.id);
            }
        };
        let __VLS_179;
        let __VLS_180;
        (category.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("category-count") }, });
        (category.count);
        __VLS_nonNullable(__VLS_181.slots).default;
        var __VLS_181;
    }
    var __VLS_175;
    const __VLS_184 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_185 = __VLS_asFunctionalComponent(__VLS_184, new __VLS_184({ ...{ class: ("tags-card") }, }));
    const __VLS_186 = __VLS_185({ ...{ class: ("tags-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_185));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_189.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tag-cloud") }, });
    for (const [tag] of __VLS_getVForSourceType((__VLS_ctx.tags))) {
        const __VLS_190 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
        // @ts-ignore
        const __VLS_191 = __VLS_asFunctionalComponent(__VLS_190, new __VLS_190({ ...{ 'onClick': {} }, key: ((tag.id)), type: ((tag.type)), effect: ((tag.effect)), ...{ class: ("tag-item") }, }));
        const __VLS_192 = __VLS_191({ ...{ 'onClick': {} }, key: ((tag.id)), type: ((tag.type)), effect: ((tag.effect)), ...{ class: ("tag-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_191));
        let __VLS_196;
        const __VLS_197 = {
            onClick: (...[$event]) => {
                __VLS_ctx.filterByTag(tag.id);
            }
        };
        let __VLS_193;
        let __VLS_194;
        (tag.name);
        __VLS_nonNullable(__VLS_195.slots).default;
        var __VLS_195;
    }
    var __VLS_189;
    __VLS_nonNullable(__VLS_151.slots).default;
    var __VLS_151;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['home'];
    __VLS_styleScopedClasses['carousel-card'];
    __VLS_styleScopedClasses['carousel-image'];
    __VLS_styleScopedClasses['carousel-content'];
    __VLS_styleScopedClasses['article-list'];
    __VLS_styleScopedClasses['list-header'];
    __VLS_styleScopedClasses['article-item'];
    __VLS_styleScopedClasses['article-main'];
    __VLS_styleScopedClasses['article-title'];
    __VLS_styleScopedClasses['article-summary'];
    __VLS_styleScopedClasses['article-meta'];
    __VLS_styleScopedClasses['meta-divider'];
    __VLS_styleScopedClasses['meta-divider'];
    __VLS_styleScopedClasses['article-cover'];
    __VLS_styleScopedClasses['load-more'];
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
    __VLS_styleScopedClasses['category-card'];
    __VLS_styleScopedClasses['card-header'];
    __VLS_styleScopedClasses['category-list'];
    __VLS_styleScopedClasses['category-tag'];
    __VLS_styleScopedClasses['category-count'];
    __VLS_styleScopedClasses['tags-card'];
    __VLS_styleScopedClasses['card-header'];
    __VLS_styleScopedClasses['tag-cloud'];
    __VLS_styleScopedClasses['tag-item'];
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
            View: View,
            Star: Star,
            ChatLineRound: ChatLineRound,
            activeTab: activeTab,
            carouselItems: carouselItems,
            articles: articles,
            userInfo: userInfo,
            categories: categories,
            tags: tags,
            viewArticle: viewArticle,
            loadMore: loadMore,
            filterByCategory: filterByCategory,
            filterByTag: filterByTag,
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
