import { ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Platform, Apple, Monitor } from '@element-plus/icons-vue';
import { useAuthStore } from '@/stores/auth';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const route = useRoute();
const formRef = ref();
const isLogin = ref(true);
const formData = reactive({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    remember: false
});
const authStore = useAuthStore();
const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    }
    else if (value !== formData.password) {
        callback(new Error('两次输入密码不一致!'));
    }
    else {
        callback();
    }
};
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
    confirmPassword: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        { validator: validatePass2, trigger: 'blur' }
    ]
};
const toggleAuthMode = () => {
    isLogin.value = !isLogin.value;
    formRef.value?.resetFields();
};
const handleSubmit = async () => {
    if (!formRef.value)
        return;
    await formRef.value.validate(async (valid) => {
        if (valid) {
            if (isLogin.value) {
                // 登录逻辑
                const success = await authStore.login(formData.email, formData.password);
                if (success) {
                    const redirect = route.query.redirect || '/';
                    router.push(redirect);
                }
            }
            else {
                // 注册逻辑
                const success = await authStore.register({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                });
                if (success) {
                    isLogin.value = true;
                    ElMessage.success('注册成功，请登录');
                }
            }
        }
    });
};
const forgotPassword = () => {
    router.push('/forgot-password');
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
    __VLS_styleScopedClasses['auth-header'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['divider'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("login-container") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("login-card") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("login-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("auth-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        (__VLS_ctx.isLogin ? '登录' : '注册');
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }));
        const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        let __VLS_12;
        const __VLS_13 = {
            onClick: (__VLS_ctx.toggleAuthMode)
        };
        let __VLS_9;
        let __VLS_10;
        (__VLS_ctx.isLogin ? '没有账号？去注册' : '已有账号？去登录');
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
    }
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ref: ("formRef"), model: ((__VLS_ctx.formData)), rules: ((__VLS_ctx.formRules)), labelPosition: ("top"), }));
    const __VLS_16 = __VLS_15({ ref: ("formRef"), model: ((__VLS_ctx.formData)), rules: ((__VLS_ctx.formRules)), labelPosition: ("top"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    // @ts-ignore navigation for `const formRef = ref()`
    __VLS_ctx.formRef;
    var __VLS_20 = {};
    if (!__VLS_ctx.isLogin) {
        const __VLS_21 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ label: ("用户名"), prop: ("username"), }));
        const __VLS_23 = __VLS_22({ label: ("用户名"), prop: ("username"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
        const __VLS_27 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ modelValue: ((__VLS_ctx.formData.username)), prefixIcon: ("User"), placeholder: ("请输入用户名"), }));
        const __VLS_29 = __VLS_28({ modelValue: ((__VLS_ctx.formData.username)), prefixIcon: ("User"), placeholder: ("请输入用户名"), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
        __VLS_nonNullable(__VLS_26.slots).default;
        var __VLS_26;
    }
    const __VLS_33 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ label: ("邮箱"), prop: ("email"), }));
    const __VLS_35 = __VLS_34({ label: ("邮箱"), prop: ("email"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ modelValue: ((__VLS_ctx.formData.email)), prefixIcon: ("Message"), placeholder: ("请输入邮箱"), }));
    const __VLS_41 = __VLS_40({ modelValue: ((__VLS_ctx.formData.email)), prefixIcon: ("Message"), placeholder: ("请输入邮箱"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    __VLS_nonNullable(__VLS_38.slots).default;
    var __VLS_38;
    const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ label: ("密码"), prop: ("password"), }));
    const __VLS_47 = __VLS_46({ label: ("密码"), prop: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    const __VLS_51 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ modelValue: ((__VLS_ctx.formData.password)), prefixIcon: ("Lock"), type: ("password"), placeholder: ("请输入密码"), showPassword: (true), }));
    const __VLS_53 = __VLS_52({ modelValue: ((__VLS_ctx.formData.password)), prefixIcon: ("Lock"), type: ("password"), placeholder: ("请输入密码"), showPassword: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    __VLS_nonNullable(__VLS_50.slots).default;
    var __VLS_50;
    if (!__VLS_ctx.isLogin) {
        const __VLS_57 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ label: ("确认密码"), prop: ("confirmPassword"), }));
        const __VLS_59 = __VLS_58({ label: ("确认密码"), prop: ("confirmPassword"), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
        const __VLS_63 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({ modelValue: ((__VLS_ctx.formData.confirmPassword)), prefixIcon: ("Lock"), type: ("password"), placeholder: ("请确认密码"), showPassword: (true), }));
        const __VLS_65 = __VLS_64({ modelValue: ((__VLS_ctx.formData.confirmPassword)), prefixIcon: ("Lock"), type: ("password"), placeholder: ("请确认密码"), showPassword: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_64));
        __VLS_nonNullable(__VLS_62.slots).default;
        var __VLS_62;
    }
    if (__VLS_ctx.isLogin) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("remember-forgot") }, });
        const __VLS_69 = __VLS_resolvedLocalAndGlobalComponents.ElCheckbox;
        /** @type { [typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, ] } */
        // @ts-ignore
        const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({ modelValue: ((__VLS_ctx.formData.remember)), }));
        const __VLS_71 = __VLS_70({ modelValue: ((__VLS_ctx.formData.remember)), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
        __VLS_nonNullable(__VLS_74.slots).default;
        var __VLS_74;
        const __VLS_75 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }));
        const __VLS_77 = __VLS_76({ ...{ 'onClick': {} }, link: (true), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
        let __VLS_81;
        const __VLS_82 = {
            onClick: (__VLS_ctx.forgotPassword)
        };
        let __VLS_78;
        let __VLS_79;
        __VLS_nonNullable(__VLS_80.slots).default;
        var __VLS_80;
    }
    const __VLS_83 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({}));
    const __VLS_85 = __VLS_84({}, ...__VLS_functionalComponentArgsRest(__VLS_84));
    const __VLS_89 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({ ...{ 'onClick': {} }, type: ("primary"), ...{ class: ("submit-btn") }, }));
    const __VLS_91 = __VLS_90({ ...{ 'onClick': {} }, type: ("primary"), ...{ class: ("submit-btn") }, }, ...__VLS_functionalComponentArgsRest(__VLS_90));
    let __VLS_95;
    const __VLS_96 = {
        onClick: (__VLS_ctx.handleSubmit)
    };
    let __VLS_92;
    let __VLS_93;
    (__VLS_ctx.isLogin ? '登录' : '注册');
    __VLS_nonNullable(__VLS_94.slots).default;
    var __VLS_94;
    __VLS_nonNullable(__VLS_88.slots).default;
    var __VLS_88;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.isLogin ? '登录' : '注册');
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("social-login") }, });
    const __VLS_97 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ circle: (true), }));
    const __VLS_99 = __VLS_98({ circle: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
    const __VLS_103 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({}));
    const __VLS_105 = __VLS_104({}, ...__VLS_functionalComponentArgsRest(__VLS_104));
    const __VLS_109 = __VLS_resolvedLocalAndGlobalComponents.Platform;
    /** @type { [typeof __VLS_components.Platform, ] } */
    // @ts-ignore
    const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({}));
    const __VLS_111 = __VLS_110({}, ...__VLS_functionalComponentArgsRest(__VLS_110));
    __VLS_nonNullable(__VLS_108.slots).default;
    var __VLS_108;
    __VLS_nonNullable(__VLS_102.slots).default;
    var __VLS_102;
    const __VLS_115 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({ circle: (true), }));
    const __VLS_117 = __VLS_116({ circle: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
    const __VLS_121 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({}));
    const __VLS_123 = __VLS_122({}, ...__VLS_functionalComponentArgsRest(__VLS_122));
    const __VLS_127 = __VLS_resolvedLocalAndGlobalComponents.Apple;
    /** @type { [typeof __VLS_components.Apple, ] } */
    // @ts-ignore
    const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({}));
    const __VLS_129 = __VLS_128({}, ...__VLS_functionalComponentArgsRest(__VLS_128));
    __VLS_nonNullable(__VLS_126.slots).default;
    var __VLS_126;
    __VLS_nonNullable(__VLS_120.slots).default;
    var __VLS_120;
    const __VLS_133 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({ circle: (true), }));
    const __VLS_135 = __VLS_134({ circle: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
    const __VLS_139 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_140 = __VLS_asFunctionalComponent(__VLS_139, new __VLS_139({}));
    const __VLS_141 = __VLS_140({}, ...__VLS_functionalComponentArgsRest(__VLS_140));
    const __VLS_145 = __VLS_resolvedLocalAndGlobalComponents.Monitor;
    /** @type { [typeof __VLS_components.Monitor, ] } */
    // @ts-ignore
    const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({}));
    const __VLS_147 = __VLS_146({}, ...__VLS_functionalComponentArgsRest(__VLS_146));
    __VLS_nonNullable(__VLS_144.slots).default;
    var __VLS_144;
    __VLS_nonNullable(__VLS_138.slots).default;
    var __VLS_138;
    __VLS_nonNullable(__VLS_19.slots).default;
    var __VLS_19;
    var __VLS_5;
    __VLS_styleScopedClasses['login-container'];
    __VLS_styleScopedClasses['login-card'];
    __VLS_styleScopedClasses['auth-header'];
    __VLS_styleScopedClasses['remember-forgot'];
    __VLS_styleScopedClasses['submit-btn'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['social-login'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "formRef": __VLS_20,
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
            Platform: Platform,
            Apple: Apple,
            Monitor: Monitor,
            formRef: formRef,
            isLogin: isLogin,
            formData: formData,
            formRules: formRules,
            toggleAuthMode: toggleAuthMode,
            handleSubmit: handleSubmit,
            forgotPassword: forgotPassword,
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
