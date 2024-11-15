import { ref, reactive } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const searchForm = reactive({
    keyword: '',
    role: '',
    status: ''
});
const users = ref([
    {
        id: 1,
        username: '张三',
        email: 'zhangsan@example.com',
        role: 'admin',
        status: 'active',
        articles: 10,
        registerTime: '2024-03-14 10:00:00'
    }
]);
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(100);
const showAddDialog = ref(false);
const editingUser = ref(null);
const formRef = ref();
const userForm = reactive({
    username: '',
    email: '',
    password: '',
    role: 'user'
});
const formRules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
    ],
    email: [
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
    ],
    role: [
        { required: true, message: '请选择角色', trigger: 'change' }
    ]
};
const handleSearch = () => {
    // 实现搜索逻辑
};
const handleEdit = (row) => {
    editingUser.value = row;
    Object.assign(userForm, row);
    showAddDialog.value = true;
};
const handleChangeStatus = async (row) => {
    try {
        await ElMessageBox.confirm(`确定要${row.status === 'active' ? '禁用' : '启用'}该用户吗？`, '提示', {
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
const handleResetPassword = async (row) => {
    try {
        await ElMessageBox.confirm('确定要重置该用户的密码吗？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        });
        // 实现重置密码逻辑
        ElMessage.success('密码重置成功');
    }
    catch {
        // 用户取消操作
    }
};
const handleDelete = async (row) => {
    try {
        await ElMessageBox.confirm('删除后无法恢复，确定要删除该用户吗？', '警告', {
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
            ElMessage.success(editingUser.value ? '更新成功' : '添加成功');
            showAddDialog.value = false;
        }
    });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("users-manage") }, });
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
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.searchForm.keyword)), placeholder: ("搜索用户名/邮箱"), clearable: (true), }));
        const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.searchForm.keyword)), placeholder: ("搜索用户名/邮箱"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
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
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ modelValue: ((__VLS_ctx.searchForm.role)), placeholder: ("用户角色"), clearable: (true), }));
        const __VLS_32 = __VLS_31({ modelValue: ((__VLS_ctx.searchForm.role)), placeholder: ("用户角色"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ label: ("管理员"), value: ("admin"), }));
        const __VLS_38 = __VLS_37({ label: ("管理员"), value: ("admin"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ label: ("普通用户"), value: ("user"), }));
        const __VLS_44 = __VLS_43({ label: ("普通用户"), value: ("user"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        __VLS_nonNullable(__VLS_35.slots).default;
        var __VLS_35;
        __VLS_nonNullable(__VLS_29.slots).default;
        var __VLS_29;
        const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
        const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
        const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
        /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ modelValue: ((__VLS_ctx.searchForm.status)), placeholder: ("账号状态"), clearable: (true), }));
        const __VLS_56 = __VLS_55({ modelValue: ((__VLS_ctx.searchForm.status)), placeholder: ("账号状态"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ label: ("正常"), value: ("active"), }));
        const __VLS_62 = __VLS_61({ label: ("正常"), value: ("active"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ label: ("禁用"), value: ("disabled"), }));
        const __VLS_68 = __VLS_67({ label: ("禁用"), value: ("disabled"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        __VLS_nonNullable(__VLS_59.slots).default;
        var __VLS_59;
        __VLS_nonNullable(__VLS_53.slots).default;
        var __VLS_53;
        const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({}));
        const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
        const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_80 = __VLS_79({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
        let __VLS_84;
        const __VLS_85 = {
            onClick: (__VLS_ctx.handleSearch)
        };
        let __VLS_81;
        let __VLS_82;
        __VLS_nonNullable(__VLS_83.slots).default;
        var __VLS_83;
        __VLS_nonNullable(__VLS_77.slots).default;
        var __VLS_77;
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
        const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_88 = __VLS_87({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
        let __VLS_92;
        const __VLS_93 = {
            onClick: (...[$event]) => {
                __VLS_ctx.showAddDialog = true;
            }
        };
        let __VLS_89;
        let __VLS_90;
        __VLS_nonNullable(__VLS_91.slots).default;
        var __VLS_91;
    }
    const __VLS_94 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ data: ((__VLS_ctx.users)), ...{ style: ({}) }, }));
    const __VLS_96 = __VLS_95({ data: ((__VLS_ctx.users)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_95));
    const __VLS_100 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ prop: ("username"), label: ("用户名"), minWidth: ("120"), }));
    const __VLS_102 = __VLS_101({ prop: ("username"), label: ("用户名"), minWidth: ("120"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
    const __VLS_106 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ prop: ("email"), label: ("邮箱"), minWidth: ("180"), }));
    const __VLS_108 = __VLS_107({ prop: ("email"), label: ("邮箱"), minWidth: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
    const __VLS_112 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({ prop: ("role"), label: ("角色"), width: ("100"), }));
    const __VLS_114 = __VLS_113({ prop: ("role"), label: ("角色"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_117.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_118 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
        // @ts-ignore
        const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ type: ((row.role === 'admin' ? 'danger' : '')), }));
        const __VLS_120 = __VLS_119({ type: ((row.role === 'admin' ? 'danger' : '')), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
        (row.role === 'admin' ? '管理员' : '用户');
        __VLS_nonNullable(__VLS_123.slots).default;
        var __VLS_123;
    }
    var __VLS_117;
    const __VLS_124 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({ prop: ("status"), label: ("状态"), width: ("100"), }));
    const __VLS_126 = __VLS_125({ prop: ("status"), label: ("状态"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_125));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_129.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_130 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
        // @ts-ignore
        const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ type: ((row.status === 'active' ? 'success' : 'info')), }));
        const __VLS_132 = __VLS_131({ type: ((row.status === 'active' ? 'success' : 'info')), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
        (row.status === 'active' ? '正常' : '禁用');
        __VLS_nonNullable(__VLS_135.slots).default;
        var __VLS_135;
    }
    var __VLS_129;
    const __VLS_136 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({ prop: ("articles"), label: ("文章数"), width: ("100"), }));
    const __VLS_138 = __VLS_137({ prop: ("articles"), label: ("文章数"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
    const __VLS_142 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({ prop: ("registerTime"), label: ("注册时间"), width: ("180"), }));
    const __VLS_144 = __VLS_143({ prop: ("registerTime"), label: ("注册时间"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_143));
    const __VLS_148 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({ label: ("操作"), width: ("250"), fixed: ("right"), }));
    const __VLS_150 = __VLS_149({ label: ("操作"), width: ("250"), fixed: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_149));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_153.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_154 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
        /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, ] } */
        // @ts-ignore
        const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({}));
        const __VLS_156 = __VLS_155({}, ...__VLS_functionalComponentArgsRest(__VLS_155));
        const __VLS_160 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }));
        const __VLS_162 = __VLS_161({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_161));
        let __VLS_166;
        const __VLS_167 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleEdit(row);
            }
        };
        let __VLS_163;
        let __VLS_164;
        __VLS_nonNullable(__VLS_165.slots).default;
        var __VLS_165;
        const __VLS_168 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }));
        const __VLS_170 = __VLS_169({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_169));
        let __VLS_174;
        const __VLS_175 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleChangeStatus(row);
            }
        };
        let __VLS_171;
        let __VLS_172;
        (row.status === 'active' ? '禁用' : '启用');
        __VLS_nonNullable(__VLS_173.slots).default;
        var __VLS_173;
        const __VLS_176 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }));
        const __VLS_178 = __VLS_177({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_177));
        let __VLS_182;
        const __VLS_183 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleResetPassword(row);
            }
        };
        let __VLS_179;
        let __VLS_180;
        __VLS_nonNullable(__VLS_181.slots).default;
        var __VLS_181;
        const __VLS_184 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_185 = __VLS_asFunctionalComponent(__VLS_184, new __VLS_184({ ...{ 'onClick': {} }, link: (true), type: ("danger"), }));
        const __VLS_186 = __VLS_185({ ...{ 'onClick': {} }, link: (true), type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_185));
        let __VLS_190;
        const __VLS_191 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleDelete(row);
            }
        };
        let __VLS_187;
        let __VLS_188;
        __VLS_nonNullable(__VLS_189.slots).default;
        var __VLS_189;
        __VLS_nonNullable(__VLS_159.slots).default;
        var __VLS_159;
    }
    var __VLS_153;
    __VLS_nonNullable(__VLS_99.slots).default;
    var __VLS_99;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pagination") }, });
    const __VLS_192 = __VLS_resolvedLocalAndGlobalComponents.ElPagination;
    /** @type { [typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ] } */
    // @ts-ignore
    const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({ ...{ 'onSizeChange': {} }, ...{ 'onCurrentChange': {} }, currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), total: ((__VLS_ctx.total)), pageSizes: (([10, 20, 50, 100])), layout: ("total, sizes, prev, pager, next, jumper"), }));
    const __VLS_194 = __VLS_193({ ...{ 'onSizeChange': {} }, ...{ 'onCurrentChange': {} }, currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), total: ((__VLS_ctx.total)), pageSizes: (([10, 20, 50, 100])), layout: ("total, sizes, prev, pager, next, jumper"), }, ...__VLS_functionalComponentArgsRest(__VLS_193));
    let __VLS_198;
    const __VLS_199 = {
        onSizeChange: (__VLS_ctx.handleSizeChange)
    };
    const __VLS_200 = {
        onCurrentChange: (__VLS_ctx.handleCurrentChange)
    };
    let __VLS_195;
    let __VLS_196;
    var __VLS_197;
    var __VLS_5;
    const __VLS_201 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ] } */
    // @ts-ignore
    const __VLS_202 = __VLS_asFunctionalComponent(__VLS_201, new __VLS_201({ modelValue: ((__VLS_ctx.showAddDialog)), title: ((__VLS_ctx.editingUser ? '编辑用户' : '添加用户')), width: ("500px"), }));
    const __VLS_203 = __VLS_202({ modelValue: ((__VLS_ctx.showAddDialog)), title: ((__VLS_ctx.editingUser ? '编辑用户' : '添加用户')), width: ("500px"), }, ...__VLS_functionalComponentArgsRest(__VLS_202));
    const __VLS_207 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    const __VLS_208 = __VLS_asFunctionalComponent(__VLS_207, new __VLS_207({ ref: ("formRef"), model: ((__VLS_ctx.userForm)), rules: ((__VLS_ctx.formRules)), labelWidth: ("100px"), }));
    const __VLS_209 = __VLS_208({ ref: ("formRef"), model: ((__VLS_ctx.userForm)), rules: ((__VLS_ctx.formRules)), labelWidth: ("100px"), }, ...__VLS_functionalComponentArgsRest(__VLS_208));
    // @ts-ignore navigation for `const formRef = ref()`
    __VLS_ctx.formRef;
    var __VLS_213 = {};
    const __VLS_214 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_215 = __VLS_asFunctionalComponent(__VLS_214, new __VLS_214({ label: ("用户名"), prop: ("username"), }));
    const __VLS_216 = __VLS_215({ label: ("用户名"), prop: ("username"), }, ...__VLS_functionalComponentArgsRest(__VLS_215));
    const __VLS_220 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_221 = __VLS_asFunctionalComponent(__VLS_220, new __VLS_220({ modelValue: ((__VLS_ctx.userForm.username)), }));
    const __VLS_222 = __VLS_221({ modelValue: ((__VLS_ctx.userForm.username)), }, ...__VLS_functionalComponentArgsRest(__VLS_221));
    __VLS_nonNullable(__VLS_219.slots).default;
    var __VLS_219;
    const __VLS_226 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_227 = __VLS_asFunctionalComponent(__VLS_226, new __VLS_226({ label: ("邮箱"), prop: ("email"), }));
    const __VLS_228 = __VLS_227({ label: ("邮箱"), prop: ("email"), }, ...__VLS_functionalComponentArgsRest(__VLS_227));
    const __VLS_232 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_233 = __VLS_asFunctionalComponent(__VLS_232, new __VLS_232({ modelValue: ((__VLS_ctx.userForm.email)), }));
    const __VLS_234 = __VLS_233({ modelValue: ((__VLS_ctx.userForm.email)), }, ...__VLS_functionalComponentArgsRest(__VLS_233));
    __VLS_nonNullable(__VLS_231.slots).default;
    var __VLS_231;
    if (!__VLS_ctx.editingUser) {
        const __VLS_238 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_239 = __VLS_asFunctionalComponent(__VLS_238, new __VLS_238({ label: ("密码"), prop: ("password"), }));
        const __VLS_240 = __VLS_239({ label: ("密码"), prop: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_239));
        const __VLS_244 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_245 = __VLS_asFunctionalComponent(__VLS_244, new __VLS_244({ modelValue: ((__VLS_ctx.userForm.password)), type: ("password"), showPassword: (true), }));
        const __VLS_246 = __VLS_245({ modelValue: ((__VLS_ctx.userForm.password)), type: ("password"), showPassword: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_245));
        __VLS_nonNullable(__VLS_243.slots).default;
        var __VLS_243;
    }
    const __VLS_250 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_251 = __VLS_asFunctionalComponent(__VLS_250, new __VLS_250({ label: ("角色"), prop: ("role"), }));
    const __VLS_252 = __VLS_251({ label: ("角色"), prop: ("role"), }, ...__VLS_functionalComponentArgsRest(__VLS_251));
    const __VLS_256 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
    /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
    // @ts-ignore
    const __VLS_257 = __VLS_asFunctionalComponent(__VLS_256, new __VLS_256({ modelValue: ((__VLS_ctx.userForm.role)), }));
    const __VLS_258 = __VLS_257({ modelValue: ((__VLS_ctx.userForm.role)), }, ...__VLS_functionalComponentArgsRest(__VLS_257));
    const __VLS_262 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
    /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
    // @ts-ignore
    const __VLS_263 = __VLS_asFunctionalComponent(__VLS_262, new __VLS_262({ label: ("管理员"), value: ("admin"), }));
    const __VLS_264 = __VLS_263({ label: ("管理员"), value: ("admin"), }, ...__VLS_functionalComponentArgsRest(__VLS_263));
    const __VLS_268 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
    /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
    // @ts-ignore
    const __VLS_269 = __VLS_asFunctionalComponent(__VLS_268, new __VLS_268({ label: ("普通用户"), value: ("user"), }));
    const __VLS_270 = __VLS_269({ label: ("普通用户"), value: ("user"), }, ...__VLS_functionalComponentArgsRest(__VLS_269));
    __VLS_nonNullable(__VLS_261.slots).default;
    var __VLS_261;
    __VLS_nonNullable(__VLS_255.slots).default;
    var __VLS_255;
    __VLS_nonNullable(__VLS_212.slots).default;
    var __VLS_212;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { footer: __VLS_thisSlot } = __VLS_nonNullable(__VLS_206.slots);
        const __VLS_274 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_275 = __VLS_asFunctionalComponent(__VLS_274, new __VLS_274({ ...{ 'onClick': {} }, }));
        const __VLS_276 = __VLS_275({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_275));
        let __VLS_280;
        const __VLS_281 = {
            onClick: (...[$event]) => {
                __VLS_ctx.showAddDialog = false;
            }
        };
        let __VLS_277;
        let __VLS_278;
        __VLS_nonNullable(__VLS_279.slots).default;
        var __VLS_279;
        const __VLS_282 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_283 = __VLS_asFunctionalComponent(__VLS_282, new __VLS_282({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_284 = __VLS_283({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_283));
        let __VLS_288;
        const __VLS_289 = {
            onClick: (__VLS_ctx.handleSubmit)
        };
        let __VLS_285;
        let __VLS_286;
        __VLS_nonNullable(__VLS_287.slots).default;
        var __VLS_287;
    }
    var __VLS_206;
    __VLS_styleScopedClasses['users-manage'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['pagination'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "formRef": __VLS_213,
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
            searchForm: searchForm,
            users: users,
            currentPage: currentPage,
            pageSize: pageSize,
            total: total,
            showAddDialog: showAddDialog,
            editingUser: editingUser,
            formRef: formRef,
            userForm: userForm,
            formRules: formRules,
            handleSearch: handleSearch,
            handleEdit: handleEdit,
            handleChangeStatus: handleChangeStatus,
            handleResetPassword: handleResetPassword,
            handleDelete: handleDelete,
            handleSubmit: handleSubmit,
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
