import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessageBox, ElMessage } from 'element-plus';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const searchForm = reactive({
    keyword: '',
    category: '',
    status: ''
});
const articles = ref([
    {
        id: 1,
        title: '示例文章',
        author: '张三',
        category: '前端开发',
        status: 'published',
        views: 100,
        comments: 10,
        createTime: '2024-03-14 10:00:00'
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
const handleEdit = (row) => {
    router.push(`/article/edit/${row.id}`);
};
const handleChangeStatus = async (row) => {
    try {
        await ElMessageBox.confirm(`确定要${row.status === 'published' ? '下架' : '发布'}该文章吗？`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        });
        // 实现状态更改逻辑
        ElMessage.success('操作成功');
    }
    catch {
        // 用户取消操作
    }
};
const handleDelete = async (row) => {
    try {
        await ElMessageBox.confirm('删除后无法恢复，确定要删除该文章吗？', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        });
        // 实现删除逻辑
        ElMessage.success('删除成功');
    }
    catch {
        // 用户取消操作
    }
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("articles-manage") }, });
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
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.searchForm.keyword)), placeholder: ("搜索文章标题"), clearable: (true), }));
        const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.searchForm.keyword)), placeholder: ("搜索文章标题"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
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
        const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
        /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ modelValue: ((__VLS_ctx.searchForm.status)), placeholder: ("文章状态"), clearable: (true), }));
        const __VLS_50 = __VLS_49({ modelValue: ((__VLS_ctx.searchForm.status)), placeholder: ("文章状态"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ label: ("已发布"), value: ("published"), }));
        const __VLS_56 = __VLS_55({ label: ("已发布"), value: ("published"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ label: ("草稿"), value: ("draft"), }));
        const __VLS_62 = __VLS_61({ label: ("草稿"), value: ("draft"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        __VLS_nonNullable(__VLS_53.slots).default;
        var __VLS_53;
        __VLS_nonNullable(__VLS_47.slots).default;
        var __VLS_47;
        const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
        const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
        const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_74 = __VLS_73({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
        let __VLS_78;
        const __VLS_79 = {
            onClick: (__VLS_ctx.handleSearch)
        };
        let __VLS_75;
        let __VLS_76;
        __VLS_nonNullable(__VLS_77.slots).default;
        var __VLS_77;
        __VLS_nonNullable(__VLS_71.slots).default;
        var __VLS_71;
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
        const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_82 = __VLS_81({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
        let __VLS_86;
        const __VLS_87 = {
            onClick: (...[$event]) => {
                __VLS_ctx.$router.push('/article/edit');
            }
        };
        let __VLS_83;
        let __VLS_84;
        __VLS_nonNullable(__VLS_85.slots).default;
        var __VLS_85;
    }
    const __VLS_88 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ data: ((__VLS_ctx.articles)), ...{ style: ({}) }, }));
    const __VLS_90 = __VLS_89({ data: ((__VLS_ctx.articles)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_89));
    const __VLS_94 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ prop: ("title"), label: ("标题"), minWidth: ("200"), }));
    const __VLS_96 = __VLS_95({ prop: ("title"), label: ("标题"), minWidth: ("200"), }, ...__VLS_functionalComponentArgsRest(__VLS_95));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_99.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_100 = __VLS_resolvedLocalAndGlobalComponents.ElLink;
        /** @type { [typeof __VLS_components.ElLink, typeof __VLS_components.elLink, typeof __VLS_components.ElLink, typeof __VLS_components.elLink, ] } */
        // @ts-ignore
        const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ ...{ 'onClick': {} }, }));
        const __VLS_102 = __VLS_101({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_101));
        let __VLS_106;
        const __VLS_107 = {
            onClick: (...[$event]) => {
                __VLS_ctx.$router.push(`/article/${row.id}`);
            }
        };
        let __VLS_103;
        let __VLS_104;
        (row.title);
        __VLS_nonNullable(__VLS_105.slots).default;
        var __VLS_105;
    }
    var __VLS_99;
    const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ prop: ("author"), label: ("作者"), width: ("120"), }));
    const __VLS_110 = __VLS_109({ prop: ("author"), label: ("作者"), width: ("120"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    const __VLS_114 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ prop: ("category"), label: ("分类"), width: ("120"), }));
    const __VLS_116 = __VLS_115({ prop: ("category"), label: ("分类"), width: ("120"), }, ...__VLS_functionalComponentArgsRest(__VLS_115));
    const __VLS_120 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ prop: ("status"), label: ("状态"), width: ("100"), }));
    const __VLS_122 = __VLS_121({ prop: ("status"), label: ("状态"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_125.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_126 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
        // @ts-ignore
        const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ type: ((row.status === 'published' ? 'success' : 'info')), }));
        const __VLS_128 = __VLS_127({ type: ((row.status === 'published' ? 'success' : 'info')), }, ...__VLS_functionalComponentArgsRest(__VLS_127));
        (row.status === 'published' ? '已发布' : '草稿');
        __VLS_nonNullable(__VLS_131.slots).default;
        var __VLS_131;
    }
    var __VLS_125;
    const __VLS_132 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({ prop: ("views"), label: ("阅读"), width: ("100"), }));
    const __VLS_134 = __VLS_133({ prop: ("views"), label: ("阅读"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
    const __VLS_138 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ prop: ("comments"), label: ("评论"), width: ("100"), }));
    const __VLS_140 = __VLS_139({ prop: ("comments"), label: ("评论"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
    const __VLS_144 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({ prop: ("createTime"), label: ("创建时间"), width: ("180"), }));
    const __VLS_146 = __VLS_145({ prop: ("createTime"), label: ("创建时间"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_145));
    const __VLS_150 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({ label: ("操作"), width: ("200"), fixed: ("right"), }));
    const __VLS_152 = __VLS_151({ label: ("操作"), width: ("200"), fixed: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_151));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_155.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_156 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
        /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, ] } */
        // @ts-ignore
        const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({}));
        const __VLS_158 = __VLS_157({}, ...__VLS_functionalComponentArgsRest(__VLS_157));
        const __VLS_162 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }));
        const __VLS_164 = __VLS_163({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_163));
        let __VLS_168;
        const __VLS_169 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleEdit(row);
            }
        };
        let __VLS_165;
        let __VLS_166;
        __VLS_nonNullable(__VLS_167.slots).default;
        var __VLS_167;
        const __VLS_170 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }));
        const __VLS_172 = __VLS_171({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_171));
        let __VLS_176;
        const __VLS_177 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleChangeStatus(row);
            }
        };
        let __VLS_173;
        let __VLS_174;
        (row.status === 'published' ? '下架' : '发布');
        __VLS_nonNullable(__VLS_175.slots).default;
        var __VLS_175;
        const __VLS_178 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_179 = __VLS_asFunctionalComponent(__VLS_178, new __VLS_178({ ...{ 'onClick': {} }, link: (true), type: ("danger"), }));
        const __VLS_180 = __VLS_179({ ...{ 'onClick': {} }, link: (true), type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_179));
        let __VLS_184;
        const __VLS_185 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleDelete(row);
            }
        };
        let __VLS_181;
        let __VLS_182;
        __VLS_nonNullable(__VLS_183.slots).default;
        var __VLS_183;
        __VLS_nonNullable(__VLS_161.slots).default;
        var __VLS_161;
    }
    var __VLS_155;
    __VLS_nonNullable(__VLS_93.slots).default;
    var __VLS_93;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pagination") }, });
    const __VLS_186 = __VLS_resolvedLocalAndGlobalComponents.ElPagination;
    /** @type { [typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ] } */
    // @ts-ignore
    const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({ ...{ 'onSizeChange': {} }, ...{ 'onCurrentChange': {} }, currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), total: ((__VLS_ctx.total)), pageSizes: (([10, 20, 50, 100])), layout: ("total, sizes, prev, pager, next, jumper"), }));
    const __VLS_188 = __VLS_187({ ...{ 'onSizeChange': {} }, ...{ 'onCurrentChange': {} }, currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), total: ((__VLS_ctx.total)), pageSizes: (([10, 20, 50, 100])), layout: ("total, sizes, prev, pager, next, jumper"), }, ...__VLS_functionalComponentArgsRest(__VLS_187));
    let __VLS_192;
    const __VLS_193 = {
        onSizeChange: (__VLS_ctx.handleSizeChange)
    };
    const __VLS_194 = {
        onCurrentChange: (__VLS_ctx.handleCurrentChange)
    };
    let __VLS_189;
    let __VLS_190;
    var __VLS_191;
    var __VLS_5;
    __VLS_styleScopedClasses['articles-manage'];
    __VLS_styleScopedClasses['header'];
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
            searchForm: searchForm,
            articles: articles,
            categories: categories,
            currentPage: currentPage,
            pageSize: pageSize,
            total: total,
            handleSearch: handleSearch,
            handleEdit: handleEdit,
            handleChangeStatus: handleChangeStatus,
            handleDelete: handleDelete,
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
