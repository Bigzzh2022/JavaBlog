import { ref, reactive } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const categories = ref([
    {
        id: 1,
        name: '前端开发',
        description: '前端相关技术文章',
        sort: 1,
        articleCount: 10,
        createTime: '2024-03-14 10:00:00'
    }
]);
const showAddDialog = ref(false);
const editingCategory = ref(null);
const formRef = ref();
const categoryForm = reactive({
    name: '',
    description: '',
    sort: 0
});
const formRules = {
    name: [
        { required: true, message: '请输入分类名称', trigger: 'blur' },
        { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
    ]
};
const handleEdit = (category) => {
    editingCategory.value = category;
    Object.assign(categoryForm, category);
    showAddDialog.value = true;
};
const handleDelete = async (category) => {
    try {
        await ElMessageBox.confirm(`确定要删除分类"${category.name}"吗？`, '提示', {
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
const handleSubmit = async () => {
    if (!formRef.value)
        return;
    await formRef.value.validate(async (valid) => {
        if (valid) {
            // 实现保存逻辑
            ElMessage.success(editingCategory.value ? '更新成功' : '添加成功');
            showAddDialog.value = false;
        }
    });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("category-manager") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        let __VLS_12;
        const __VLS_13 = {
            onClick: (...[$event]) => {
                __VLS_ctx.showAddDialog = true;
            }
        };
        let __VLS_9;
        let __VLS_10;
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
    }
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ data: ((__VLS_ctx.categories)), ...{ style: ({}) }, }));
    const __VLS_16 = __VLS_15({ data: ((__VLS_ctx.categories)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ prop: ("name"), label: ("分类名称"), }));
    const __VLS_22 = __VLS_21({ prop: ("name"), label: ("分类名称"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ prop: ("articleCount"), label: ("文章数量"), width: ("100"), }));
    const __VLS_28 = __VLS_27({ prop: ("articleCount"), label: ("文章数量"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ prop: ("createTime"), label: ("创建时间"), width: ("180"), }));
    const __VLS_34 = __VLS_33({ prop: ("createTime"), label: ("创建时间"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ label: ("操作"), width: ("150"), }));
    const __VLS_40 = __VLS_39({ label: ("操作"), width: ("150"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_43.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
        /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, ] } */
        // @ts-ignore
        const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({}));
        const __VLS_46 = __VLS_45({}, ...__VLS_functionalComponentArgsRest(__VLS_45));
        const __VLS_50 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }));
        const __VLS_52 = __VLS_51({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
        let __VLS_56;
        const __VLS_57 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleEdit(row);
            }
        };
        let __VLS_53;
        let __VLS_54;
        __VLS_nonNullable(__VLS_55.slots).default;
        var __VLS_55;
        const __VLS_58 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ ...{ 'onClick': {} }, link: (true), type: ("danger"), }));
        const __VLS_60 = __VLS_59({ ...{ 'onClick': {} }, link: (true), type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
        let __VLS_64;
        const __VLS_65 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleDelete(row);
            }
        };
        let __VLS_61;
        let __VLS_62;
        __VLS_nonNullable(__VLS_63.slots).default;
        var __VLS_63;
        __VLS_nonNullable(__VLS_49.slots).default;
        var __VLS_49;
    }
    var __VLS_43;
    __VLS_nonNullable(__VLS_19.slots).default;
    var __VLS_19;
    var __VLS_5;
    const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ] } */
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ modelValue: ((__VLS_ctx.showAddDialog)), title: ((__VLS_ctx.editingCategory ? '编辑分类' : '新增分类')), width: ("30%"), }));
    const __VLS_68 = __VLS_67({ modelValue: ((__VLS_ctx.showAddDialog)), title: ((__VLS_ctx.editingCategory ? '编辑分类' : '新增分类')), width: ("30%"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ref: ("formRef"), model: ((__VLS_ctx.categoryForm)), rules: ((__VLS_ctx.formRules)), labelWidth: ("80px"), }));
    const __VLS_74 = __VLS_73({ ref: ("formRef"), model: ((__VLS_ctx.categoryForm)), rules: ((__VLS_ctx.formRules)), labelWidth: ("80px"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    // @ts-ignore navigation for `const formRef = ref()`
    __VLS_ctx.formRef;
    var __VLS_78 = {};
    const __VLS_79 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ label: ("分类名称"), prop: ("name"), }));
    const __VLS_81 = __VLS_80({ label: ("分类名称"), prop: ("name"), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
    const __VLS_85 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ modelValue: ((__VLS_ctx.categoryForm.name)), }));
    const __VLS_87 = __VLS_86({ modelValue: ((__VLS_ctx.categoryForm.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
    __VLS_nonNullable(__VLS_84.slots).default;
    var __VLS_84;
    const __VLS_91 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ label: ("描述"), prop: ("description"), }));
    const __VLS_93 = __VLS_92({ label: ("描述"), prop: ("description"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
    const __VLS_97 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ modelValue: ((__VLS_ctx.categoryForm.description)), type: ("textarea"), rows: ((3)), }));
    const __VLS_99 = __VLS_98({ modelValue: ((__VLS_ctx.categoryForm.description)), type: ("textarea"), rows: ((3)), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
    __VLS_nonNullable(__VLS_96.slots).default;
    var __VLS_96;
    const __VLS_103 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({ label: ("排序"), prop: ("sort"), }));
    const __VLS_105 = __VLS_104({ label: ("排序"), prop: ("sort"), }, ...__VLS_functionalComponentArgsRest(__VLS_104));
    const __VLS_109 = __VLS_resolvedLocalAndGlobalComponents.ElInputNumber;
    /** @type { [typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, ] } */
    // @ts-ignore
    const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({ modelValue: ((__VLS_ctx.categoryForm.sort)), min: ((0)), }));
    const __VLS_111 = __VLS_110({ modelValue: ((__VLS_ctx.categoryForm.sort)), min: ((0)), }, ...__VLS_functionalComponentArgsRest(__VLS_110));
    __VLS_nonNullable(__VLS_108.slots).default;
    var __VLS_108;
    __VLS_nonNullable(__VLS_77.slots).default;
    var __VLS_77;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { footer: __VLS_thisSlot } = __VLS_nonNullable(__VLS_71.slots);
        const __VLS_115 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({ ...{ 'onClick': {} }, }));
        const __VLS_117 = __VLS_116({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_116));
        let __VLS_121;
        const __VLS_122 = {
            onClick: (...[$event]) => {
                __VLS_ctx.showAddDialog = false;
            }
        };
        let __VLS_118;
        let __VLS_119;
        __VLS_nonNullable(__VLS_120.slots).default;
        var __VLS_120;
        const __VLS_123 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_124 = __VLS_asFunctionalComponent(__VLS_123, new __VLS_123({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_125 = __VLS_124({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_124));
        let __VLS_129;
        const __VLS_130 = {
            onClick: (__VLS_ctx.handleSubmit)
        };
        let __VLS_126;
        let __VLS_127;
        __VLS_nonNullable(__VLS_128.slots).default;
        var __VLS_128;
    }
    var __VLS_71;
    __VLS_styleScopedClasses['category-manager'];
    __VLS_styleScopedClasses['header'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "formRef": __VLS_78,
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
            categories: categories,
            showAddDialog: showAddDialog,
            editingCategory: editingCategory,
            formRef: formRef,
            categoryForm: categoryForm,
            formRules: formRules,
            handleEdit: handleEdit,
            handleDelete: handleDelete,
            handleSubmit: handleSubmit,
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
