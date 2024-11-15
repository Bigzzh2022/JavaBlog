import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const formRef = ref();
const codeSent = ref(false);
const formData = reactive({
    email: '',
    code: '',
    newPassword: '',
    confirmPassword: ''
});
const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    }
    else if (value !== formData.newPassword) {
        callback(new Error('两次输入密码不一致!'));
    }
    else {
        callback();
    }
};
const formRules = {
    email: [
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
    ],
    code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { len: 6, message: '验证码长度应为6位', trigger: 'blur' }
    ],
    newPassword: [
        { required: true, message: '请输入新密码', trigger: 'blur' },
        { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
    ],
    confirmPassword: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        { validator: validatePass2, trigger: 'blur' }
    ]
};
const sendCode = async () => {
    if (!formRef.value)
        return;
    await formRef.value.validateField('email', async (valid) => {
        if (valid) {
            // 发送验证码逻辑
            codeSent.value = true;
        }
    });
};
const resetPassword = async () => {
    if (!formRef.value)
        return;
    await formRef.value.validate((valid) => {
        if (valid) {
            // 重置密码逻辑
            router.push('/login');
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
    __VLS_styleScopedClasses['header'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("forgot-password-container") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("forgot-password-card") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("forgot-password-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, link: (true), }));
        const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, link: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        let __VLS_12;
        const __VLS_13 = {
            onClick: (...[$event]) => {
                __VLS_ctx.router.push('/login');
            }
        };
        let __VLS_9;
        let __VLS_10;
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
    if (!__VLS_ctx.codeSent) {
        const __VLS_21 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ label: ("邮箱"), prop: ("email"), }));
        const __VLS_23 = __VLS_22({ label: ("邮箱"), prop: ("email"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
        const __VLS_27 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ modelValue: ((__VLS_ctx.formData.email)), prefixIcon: ("Message"), placeholder: ("请输入注册邮箱"), }));
        const __VLS_29 = __VLS_28({ modelValue: ((__VLS_ctx.formData.email)), prefixIcon: ("Message"), placeholder: ("请输入注册邮箱"), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
        __VLS_nonNullable(__VLS_26.slots).default;
        var __VLS_26;
        const __VLS_33 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({}));
        const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
        const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ ...{ 'onClick': {} }, type: ("primary"), ...{ class: ("submit-btn") }, }));
        const __VLS_41 = __VLS_40({ ...{ 'onClick': {} }, type: ("primary"), ...{ class: ("submit-btn") }, }, ...__VLS_functionalComponentArgsRest(__VLS_40));
        let __VLS_45;
        const __VLS_46 = {
            onClick: (__VLS_ctx.sendCode)
        };
        let __VLS_42;
        let __VLS_43;
        __VLS_nonNullable(__VLS_44.slots).default;
        var __VLS_44;
        __VLS_nonNullable(__VLS_38.slots).default;
        var __VLS_38;
    }
    else {
        const __VLS_47 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ label: ("验证码"), prop: ("code"), }));
        const __VLS_49 = __VLS_48({ label: ("验证码"), prop: ("code"), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
        const __VLS_53 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ modelValue: ((__VLS_ctx.formData.code)), prefixIcon: ("Key"), placeholder: ("请输入验证码"), }));
        const __VLS_55 = __VLS_54({ modelValue: ((__VLS_ctx.formData.code)), prefixIcon: ("Key"), placeholder: ("请输入验证码"), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
        __VLS_nonNullable(__VLS_52.slots).default;
        var __VLS_52;
        const __VLS_59 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ label: ("新密码"), prop: ("newPassword"), }));
        const __VLS_61 = __VLS_60({ label: ("新密码"), prop: ("newPassword"), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
        const __VLS_65 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ modelValue: ((__VLS_ctx.formData.newPassword)), prefixIcon: ("Lock"), type: ("password"), showPassword: (true), placeholder: ("请输入新密码"), }));
        const __VLS_67 = __VLS_66({ modelValue: ((__VLS_ctx.formData.newPassword)), prefixIcon: ("Lock"), type: ("password"), showPassword: (true), placeholder: ("请输入新密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
        __VLS_nonNullable(__VLS_64.slots).default;
        var __VLS_64;
        const __VLS_71 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ label: ("确认密码"), prop: ("confirmPassword"), }));
        const __VLS_73 = __VLS_72({ label: ("确认密码"), prop: ("confirmPassword"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
        const __VLS_77 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({ modelValue: ((__VLS_ctx.formData.confirmPassword)), prefixIcon: ("Lock"), type: ("password"), showPassword: (true), placeholder: ("请确认新密码"), }));
        const __VLS_79 = __VLS_78({ modelValue: ((__VLS_ctx.formData.confirmPassword)), prefixIcon: ("Lock"), type: ("password"), showPassword: (true), placeholder: ("请确认新密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
        __VLS_nonNullable(__VLS_76.slots).default;
        var __VLS_76;
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
            onClick: (__VLS_ctx.resetPassword)
        };
        let __VLS_92;
        let __VLS_93;
        __VLS_nonNullable(__VLS_94.slots).default;
        var __VLS_94;
        __VLS_nonNullable(__VLS_88.slots).default;
        var __VLS_88;
    }
    __VLS_nonNullable(__VLS_19.slots).default;
    var __VLS_19;
    var __VLS_5;
    __VLS_styleScopedClasses['forgot-password-container'];
    __VLS_styleScopedClasses['forgot-password-card'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['submit-btn'];
    __VLS_styleScopedClasses['submit-btn'];
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
            router: router,
            formRef: formRef,
            codeSent: codeSent,
            formData: formData,
            formRules: formRules,
            sendCode: sendCode,
            resetPassword: resetPassword,
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
