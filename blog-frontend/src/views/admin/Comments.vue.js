import { ref, reactive } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const searchForm = reactive({
    keyword: '',
    status: ''
});
const comments = ref([
    {
        id: 1,
        content: '这是一条评论内容',
        author: '张三',
        status: 'pending',
        createTime: '2024-03-14 10:00:00',
        articleId: 1,
        articleTitle: '示例文章标题'
    }
]);
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(100);
const showReplyDialog = ref(false);
const selectedComment = ref(null);
const replyForm = reactive({
    content: ''
});
const getStatusType = (status) => {
    const types = {
        approved: 'success',
        pending: 'warning',
        rejected: 'danger'
    };
    return types[status];
};
const getStatusText = (status) => {
    const texts = {
        approved: '已审核',
        pending: '待审核',
        rejected: '已���绝'
    };
    return texts[status];
};
const handleSearch = () => {
    // 实现搜索逻辑
};
const handleApprove = async (row) => {
    try {
        await ElMessageBox.confirm('确定要通过这条评论吗？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        });
        // 实现审核通过逻辑
        ElMessage.success('操作成功');
    }
    catch {
        // 用户取消操作
    }
};
const handleReject = async (row) => {
    try {
        await ElMessageBox.confirm('确定要拒绝这条评论吗？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        });
        // 实现拒绝评论逻辑
        ElMessage.success('操作成功');
    }
    catch {
        // 用户取消操作
    }
};
const handleReply = (row) => {
    selectedComment.value = row;
    showReplyDialog.value = true;
};
const handleDelete = async (row) => {
    try {
        await ElMessageBox.confirm('删除后无法恢复，确定要删除这条评论吗？', '警告', {
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
const submitReply = async () => {
    if (!replyForm.content.trim()) {
        ElMessage.warning('请输入回复内容');
        return;
    }
    // 实现提交回复逻辑
    ElMessage.success('回复成功');
    showReplyDialog.value = false;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("comments-manage") }, });
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
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.searchForm.keyword)), placeholder: ("搜索评论内容"), clearable: (true), }));
        const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.searchForm.keyword)), placeholder: ("搜索评论内容"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
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
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ modelValue: ((__VLS_ctx.searchForm.status)), placeholder: ("评论状态"), clearable: (true), }));
        const __VLS_32 = __VLS_31({ modelValue: ((__VLS_ctx.searchForm.status)), placeholder: ("评论状态"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ label: ("已审核"), value: ("approved"), }));
        const __VLS_38 = __VLS_37({ label: ("已审核"), value: ("approved"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ label: ("待审核"), value: ("pending"), }));
        const __VLS_44 = __VLS_43({ label: ("待审核"), value: ("pending"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ label: ("已拒绝"), value: ("rejected"), }));
        const __VLS_50 = __VLS_49({ label: ("已拒绝"), value: ("rejected"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        __VLS_nonNullable(__VLS_35.slots).default;
        var __VLS_35;
        __VLS_nonNullable(__VLS_29.slots).default;
        var __VLS_29;
        const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
        const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_62 = __VLS_61({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        let __VLS_66;
        const __VLS_67 = {
            onClick: (__VLS_ctx.handleSearch)
        };
        let __VLS_63;
        let __VLS_64;
        __VLS_nonNullable(__VLS_65.slots).default;
        var __VLS_65;
        __VLS_nonNullable(__VLS_59.slots).default;
        var __VLS_59;
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
    }
    const __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ data: ((__VLS_ctx.comments)), ...{ style: ({}) }, }));
    const __VLS_70 = __VLS_69({ data: ((__VLS_ctx.comments)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ prop: ("content"), label: ("评论内容"), minWidth: ("300"), }));
    const __VLS_76 = __VLS_75({ prop: ("content"), label: ("评论内容"), minWidth: ("300"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_79.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("comment-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("comment-text") }, });
        (row.content);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-info") }, });
        const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.ElLink;
        /** @type { [typeof __VLS_components.ElLink, typeof __VLS_components.elLink, typeof __VLS_components.ElLink, typeof __VLS_components.elLink, ] } */
        // @ts-ignore
        const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{ 'onClick': {} }, }));
        const __VLS_82 = __VLS_81({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_81));
        let __VLS_86;
        const __VLS_87 = {
            onClick: (...[$event]) => {
                __VLS_ctx.$router.push(`/article/${row.articleId}`);
            }
        };
        let __VLS_83;
        let __VLS_84;
        (row.articleTitle);
        __VLS_nonNullable(__VLS_85.slots).default;
        var __VLS_85;
    }
    var __VLS_79;
    const __VLS_88 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ prop: ("author"), label: ("评论者"), width: ("120"), }));
    const __VLS_90 = __VLS_89({ prop: ("author"), label: ("评论者"), width: ("120"), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
    const __VLS_94 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ prop: ("status"), label: ("状态"), width: ("100"), }));
    const __VLS_96 = __VLS_95({ prop: ("status"), label: ("状态"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_95));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_99.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_100 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
        // @ts-ignore
        const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ type: ((__VLS_ctx.getStatusType(row.status))), }));
        const __VLS_102 = __VLS_101({ type: ((__VLS_ctx.getStatusType(row.status))), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
        (__VLS_ctx.getStatusText(row.status));
        __VLS_nonNullable(__VLS_105.slots).default;
        var __VLS_105;
    }
    var __VLS_99;
    const __VLS_106 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ prop: ("createTime"), label: ("评论时间"), width: ("180"), }));
    const __VLS_108 = __VLS_107({ prop: ("createTime"), label: ("评论时间"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
    const __VLS_112 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({ label: ("操作"), width: ("250"), fixed: ("right"), }));
    const __VLS_114 = __VLS_113({ label: ("操作"), width: ("250"), fixed: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_117.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_118 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
        /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, ] } */
        // @ts-ignore
        const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({}));
        const __VLS_120 = __VLS_119({}, ...__VLS_functionalComponentArgsRest(__VLS_119));
        if (row.status === 'pending') {
            const __VLS_124 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
            // @ts-ignore
            const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({ ...{ 'onClick': {} }, link: (true), type: ("success"), }));
            const __VLS_126 = __VLS_125({ ...{ 'onClick': {} }, link: (true), type: ("success"), }, ...__VLS_functionalComponentArgsRest(__VLS_125));
            let __VLS_130;
            const __VLS_131 = {
                onClick: (...[$event]) => {
                    if (!((row.status === 'pending')))
                        return;
                    __VLS_ctx.handleApprove(row);
                }
            };
            let __VLS_127;
            let __VLS_128;
            __VLS_nonNullable(__VLS_129.slots).default;
            var __VLS_129;
            const __VLS_132 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
            /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
            // @ts-ignore
            const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({ ...{ 'onClick': {} }, link: (true), type: ("danger"), }));
            const __VLS_134 = __VLS_133({ ...{ 'onClick': {} }, link: (true), type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
            let __VLS_138;
            const __VLS_139 = {
                onClick: (...[$event]) => {
                    if (!((row.status === 'pending')))
                        return;
                    __VLS_ctx.handleReject(row);
                }
            };
            let __VLS_135;
            let __VLS_136;
            __VLS_nonNullable(__VLS_137.slots).default;
            var __VLS_137;
        }
        const __VLS_140 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }));
        const __VLS_142 = __VLS_141({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
        let __VLS_146;
        const __VLS_147 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleReply(row);
            }
        };
        let __VLS_143;
        let __VLS_144;
        __VLS_nonNullable(__VLS_145.slots).default;
        var __VLS_145;
        const __VLS_148 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({ ...{ 'onClick': {} }, link: (true), type: ("danger"), }));
        const __VLS_150 = __VLS_149({ ...{ 'onClick': {} }, link: (true), type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_149));
        let __VLS_154;
        const __VLS_155 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleDelete(row);
            }
        };
        let __VLS_151;
        let __VLS_152;
        __VLS_nonNullable(__VLS_153.slots).default;
        var __VLS_153;
        __VLS_nonNullable(__VLS_123.slots).default;
        var __VLS_123;
    }
    var __VLS_117;
    __VLS_nonNullable(__VLS_73.slots).default;
    var __VLS_73;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pagination") }, });
    const __VLS_156 = __VLS_resolvedLocalAndGlobalComponents.ElPagination;
    /** @type { [typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ] } */
    // @ts-ignore
    const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({ ...{ 'onSizeChange': {} }, ...{ 'onCurrentChange': {} }, currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), total: ((__VLS_ctx.total)), pageSizes: (([10, 20, 50, 100])), layout: ("total, sizes, prev, pager, next, jumper"), }));
    const __VLS_158 = __VLS_157({ ...{ 'onSizeChange': {} }, ...{ 'onCurrentChange': {} }, currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), total: ((__VLS_ctx.total)), pageSizes: (([10, 20, 50, 100])), layout: ("total, sizes, prev, pager, next, jumper"), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
    let __VLS_162;
    const __VLS_163 = {
        onSizeChange: (__VLS_ctx.handleSizeChange)
    };
    const __VLS_164 = {
        onCurrentChange: (__VLS_ctx.handleCurrentChange)
    };
    let __VLS_159;
    let __VLS_160;
    var __VLS_161;
    var __VLS_5;
    const __VLS_165 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ] } */
    // @ts-ignore
    const __VLS_166 = __VLS_asFunctionalComponent(__VLS_165, new __VLS_165({ modelValue: ((__VLS_ctx.showReplyDialog)), title: ("回复评论"), width: ("500px"), }));
    const __VLS_167 = __VLS_166({ modelValue: ((__VLS_ctx.showReplyDialog)), title: ("回复评论"), width: ("500px"), }, ...__VLS_functionalComponentArgsRest(__VLS_166));
    const __VLS_171 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    const __VLS_172 = __VLS_asFunctionalComponent(__VLS_171, new __VLS_171({ model: ((__VLS_ctx.replyForm)), }));
    const __VLS_173 = __VLS_172({ model: ((__VLS_ctx.replyForm)), }, ...__VLS_functionalComponentArgsRest(__VLS_172));
    const __VLS_177 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_178 = __VLS_asFunctionalComponent(__VLS_177, new __VLS_177({ label: ("评论内容"), }));
    const __VLS_179 = __VLS_178({ label: ("评论内容"), }, ...__VLS_functionalComponentArgsRest(__VLS_178));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("original-comment") }, });
    (__VLS_ctx.selectedComment?.content);
    __VLS_nonNullable(__VLS_182.slots).default;
    var __VLS_182;
    const __VLS_183 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_184 = __VLS_asFunctionalComponent(__VLS_183, new __VLS_183({ label: ("回复内容"), }));
    const __VLS_185 = __VLS_184({ label: ("回复内容"), }, ...__VLS_functionalComponentArgsRest(__VLS_184));
    const __VLS_189 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_190 = __VLS_asFunctionalComponent(__VLS_189, new __VLS_189({ modelValue: ((__VLS_ctx.replyForm.content)), type: ("textarea"), rows: ((4)), placeholder: ("请输入回复内容"), }));
    const __VLS_191 = __VLS_190({ modelValue: ((__VLS_ctx.replyForm.content)), type: ("textarea"), rows: ((4)), placeholder: ("请输入回复内容"), }, ...__VLS_functionalComponentArgsRest(__VLS_190));
    __VLS_nonNullable(__VLS_188.slots).default;
    var __VLS_188;
    __VLS_nonNullable(__VLS_176.slots).default;
    var __VLS_176;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { footer: __VLS_thisSlot } = __VLS_nonNullable(__VLS_170.slots);
        const __VLS_195 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_196 = __VLS_asFunctionalComponent(__VLS_195, new __VLS_195({ ...{ 'onClick': {} }, }));
        const __VLS_197 = __VLS_196({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_196));
        let __VLS_201;
        const __VLS_202 = {
            onClick: (...[$event]) => {
                __VLS_ctx.showReplyDialog = false;
            }
        };
        let __VLS_198;
        let __VLS_199;
        __VLS_nonNullable(__VLS_200.slots).default;
        var __VLS_200;
        const __VLS_203 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_204 = __VLS_asFunctionalComponent(__VLS_203, new __VLS_203({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_205 = __VLS_204({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_204));
        let __VLS_209;
        const __VLS_210 = {
            onClick: (__VLS_ctx.submitReply)
        };
        let __VLS_206;
        let __VLS_207;
        __VLS_nonNullable(__VLS_208.slots).default;
        var __VLS_208;
    }
    var __VLS_170;
    __VLS_styleScopedClasses['comments-manage'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['comment-content'];
    __VLS_styleScopedClasses['comment-text'];
    __VLS_styleScopedClasses['article-info'];
    __VLS_styleScopedClasses['pagination'];
    __VLS_styleScopedClasses['original-comment'];
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
            comments: comments,
            currentPage: currentPage,
            pageSize: pageSize,
            total: total,
            showReplyDialog: showReplyDialog,
            selectedComment: selectedComment,
            replyForm: replyForm,
            getStatusType: getStatusType,
            getStatusText: getStatusText,
            handleSearch: handleSearch,
            handleApprove: handleApprove,
            handleReject: handleReject,
            handleReply: handleReply,
            handleDelete: handleDelete,
            submitReply: submitReply,
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
