import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { View, Star, ChatLineRound } from '@element-plus/icons-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const searchForm = reactive({
    keyword: '',
    category: ''
});
const articles = ref([
    {
        id: 1,
        title: '示例文章标题',
        summary: '这是一篇示例文章的摘要内容...',
        author: '张三',
        authorAvatar: 'https://example.com/avatar.jpg',
        createTime: '2024-03-14',
        category: '前端开发',
        cover: 'https://example.com/cover.jpg',
        views: 100,
        likes: 50,
        comments: 10
    }
]);
const categories = [
    { label: '前端开发', value: 'frontend' },
    { label: '后端开发', value: 'backend' },
    { label: '算法', value: 'algorithm' }
];
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(100);
const handleSearch = () => {
    // 实现搜索逻辑
};
const viewArticle = (id) => {
    router.push(`/article/${id}`);
};
const handleSizeChange = (val) => {
    pageSize.value = val;
    // 重新加载数据
};
const handleCurrentChange = (val) => {
    currentPage.value = val;
    // 重新加载数据
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
    __VLS_styleScopedClasses['article-title'];
    __VLS_styleScopedClasses['article-cover'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("articles") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header") }, });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
        /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ inline: ((true)), model: ((__VLS_ctx.searchForm)), }));
        const __VLS_8 = __VLS_7({ inline: ((true)), model: ((__VLS_ctx.searchForm)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
        const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.searchForm.keyword)), placeholder: ("搜索文章"), clearable: (true), }));
        const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.searchForm.keyword)), placeholder: ("搜索文章"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_nonNullable(__VLS_17.slots).default;
        var __VLS_17;
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
        const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
        const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
        /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ modelValue: ((__VLS_ctx.searchForm.category)), placeholder: ("选择分类"), clearable: (true), }));
        const __VLS_32 = __VLS_31({ modelValue: ((__VLS_ctx.searchForm.category)), placeholder: ("选择分类"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.categories))) {
            const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
            /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
            // @ts-ignore
            const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ key: ((item.value)), label: ((item.label)), value: ((item.value)), }));
            const __VLS_38 = __VLS_37({ key: ((item.value)), label: ((item.label)), value: ((item.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        }
        __VLS_nonNullable(__VLS_35.slots).default;
        var __VLS_35;
        __VLS_nonNullable(__VLS_29.slots).default;
        var __VLS_29;
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
        const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
        const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_50 = __VLS_49({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        let __VLS_54;
        const __VLS_55 = {
            onClick: (__VLS_ctx.handleSearch)
        };
        let __VLS_51;
        let __VLS_52;
        __VLS_nonNullable(__VLS_53.slots).default;
        var __VLS_53;
        __VLS_nonNullable(__VLS_47.slots).default;
        var __VLS_47;
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-list") }, });
    const __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ gutter: ((20)), }));
    const __VLS_58 = __VLS_57({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    for (const [article] of __VLS_getVForSourceType((__VLS_ctx.articles))) {
        const __VLS_62 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ span: ((24)), key: ((article.id)), }));
        const __VLS_64 = __VLS_63({ span: ((24)), key: ((article.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
        const __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
        /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
        // @ts-ignore
        const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ ...{ class: ("article-card") }, shadow: ("hover"), }));
        const __VLS_70 = __VLS_69({ ...{ class: ("article-card") }, shadow: ("hover"), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-main") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.viewArticle(article.id);
                } }, ...{ class: ("article-title") }, });
        (article.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("article-summary") }, });
        (article.summary);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-meta") }, });
        const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
        /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, ] } */
        // @ts-ignore
        const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({}));
        const __VLS_76 = __VLS_75({}, ...__VLS_functionalComponentArgsRest(__VLS_75));
        const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
        /** @type { [typeof __VLS_components.ElAvatar, typeof __VLS_components.elAvatar, ] } */
        // @ts-ignore
        const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ size: ((24)), src: ((article.authorAvatar)), }));
        const __VLS_82 = __VLS_81({ size: ((24)), src: ((article.authorAvatar)), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (article.author);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("meta-divider") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (article.createTime);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("meta-divider") }, });
        const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
        // @ts-ignore
        const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ size: ("small"), }));
        const __VLS_88 = __VLS_87({ size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
        (article.category);
        __VLS_nonNullable(__VLS_91.slots).default;
        var __VLS_91;
        __VLS_nonNullable(__VLS_79.slots).default;
        var __VLS_79;
        if (article.cover) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-cover") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((article.cover)), alt: ((article.title)), });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-footer") }, });
        const __VLS_92 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
        /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, ] } */
        // @ts-ignore
        const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({}));
        const __VLS_94 = __VLS_93({}, ...__VLS_functionalComponentArgsRest(__VLS_93));
        const __VLS_98 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ text: (true), }));
        const __VLS_100 = __VLS_99({ text: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
        const __VLS_104 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({}));
        const __VLS_106 = __VLS_105({}, ...__VLS_functionalComponentArgsRest(__VLS_105));
        const __VLS_110 = __VLS_resolvedLocalAndGlobalComponents.View;
        /** @type { [typeof __VLS_components.View, ] } */
        // @ts-ignore
        const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({}));
        const __VLS_112 = __VLS_111({}, ...__VLS_functionalComponentArgsRest(__VLS_111));
        __VLS_nonNullable(__VLS_109.slots).default;
        var __VLS_109;
        (article.views);
        __VLS_nonNullable(__VLS_103.slots).default;
        var __VLS_103;
        const __VLS_116 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ text: (true), }));
        const __VLS_118 = __VLS_117({ text: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
        const __VLS_122 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({}));
        const __VLS_124 = __VLS_123({}, ...__VLS_functionalComponentArgsRest(__VLS_123));
        const __VLS_128 = __VLS_resolvedLocalAndGlobalComponents.Star;
        /** @type { [typeof __VLS_components.Star, ] } */
        // @ts-ignore
        const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({}));
        const __VLS_130 = __VLS_129({}, ...__VLS_functionalComponentArgsRest(__VLS_129));
        __VLS_nonNullable(__VLS_127.slots).default;
        var __VLS_127;
        (article.likes);
        __VLS_nonNullable(__VLS_121.slots).default;
        var __VLS_121;
        const __VLS_134 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({ text: (true), }));
        const __VLS_136 = __VLS_135({ text: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
        const __VLS_140 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({}));
        const __VLS_142 = __VLS_141({}, ...__VLS_functionalComponentArgsRest(__VLS_141));
        const __VLS_146 = __VLS_resolvedLocalAndGlobalComponents.ChatLineRound;
        /** @type { [typeof __VLS_components.ChatLineRound, ] } */
        // @ts-ignore
        const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({}));
        const __VLS_148 = __VLS_147({}, ...__VLS_functionalComponentArgsRest(__VLS_147));
        __VLS_nonNullable(__VLS_145.slots).default;
        var __VLS_145;
        (article.comments);
        __VLS_nonNullable(__VLS_139.slots).default;
        var __VLS_139;
        __VLS_nonNullable(__VLS_97.slots).default;
        var __VLS_97;
        __VLS_nonNullable(__VLS_73.slots).default;
        var __VLS_73;
        __VLS_nonNullable(__VLS_67.slots).default;
        var __VLS_67;
    }
    __VLS_nonNullable(__VLS_61.slots).default;
    var __VLS_61;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pagination") }, });
    const __VLS_152 = __VLS_resolvedLocalAndGlobalComponents.ElPagination;
    /** @type { [typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ] } */
    // @ts-ignore
    const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ ...{ 'onSizeChange': {} }, ...{ 'onCurrentChange': {} }, currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), total: ((__VLS_ctx.total)), pageSizes: (([10, 20, 50, 100])), layout: ("total, sizes, prev, pager, next, jumper"), }));
    const __VLS_154 = __VLS_153({ ...{ 'onSizeChange': {} }, ...{ 'onCurrentChange': {} }, currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), total: ((__VLS_ctx.total)), pageSizes: (([10, 20, 50, 100])), layout: ("total, sizes, prev, pager, next, jumper"), }, ...__VLS_functionalComponentArgsRest(__VLS_153));
    let __VLS_158;
    const __VLS_159 = {
        onSizeChange: (__VLS_ctx.handleSizeChange)
    };
    const __VLS_160 = {
        onCurrentChange: (__VLS_ctx.handleCurrentChange)
    };
    let __VLS_155;
    let __VLS_156;
    var __VLS_157;
    var __VLS_5;
    __VLS_styleScopedClasses['articles'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['article-list'];
    __VLS_styleScopedClasses['article-card'];
    __VLS_styleScopedClasses['article-content'];
    __VLS_styleScopedClasses['article-main'];
    __VLS_styleScopedClasses['article-title'];
    __VLS_styleScopedClasses['article-summary'];
    __VLS_styleScopedClasses['article-meta'];
    __VLS_styleScopedClasses['meta-divider'];
    __VLS_styleScopedClasses['meta-divider'];
    __VLS_styleScopedClasses['article-cover'];
    __VLS_styleScopedClasses['article-footer'];
    __VLS_styleScopedClasses['pagination'];
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
            searchForm: searchForm,
            articles: articles,
            categories: categories,
            currentPage: currentPage,
            pageSize: pageSize,
            total: total,
            handleSearch: handleSearch,
            viewArticle: viewArticle,
            handleSizeChange: handleSizeChange,
            handleCurrentChange: handleCurrentChange,
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
