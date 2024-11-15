import { ref, reactive } from 'vue';
import { User, Lock, Bell, Plus } from '@element-plus/icons-vue';
import { userApi } from '@/api/user';
import { ElMessage } from 'element-plus';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const activeMenu = ref('profile');
const profileData = reactive({
    username: '',
    avatar: '',
    bio: '',
    email: ''
});
const passwordData = reactive({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
});
const notificationSettings = reactive({
    comment: true,
    like: true,
    follow: true,
    system: true
});
const handleMenuSelect = (key) => {
    activeMenu.value = key;
};
const handleAvatarSuccess = (res) => {
    profileData.avatar = res.url;
};
const updateProfile = async () => {
    try {
        await userApi.updateProfile(profileData);
        ElMessage.success('个人资料更新成功');
    }
    catch (error) {
        ElMessage.error('更新失败');
    }
};
const updatePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
        ElMessage.error('两次输入的密码不一致');
        return;
    }
    try {
        await userApi.updatePassword({
            oldPassword: passwordData.oldPassword,
            newPassword: passwordData.newPassword
        });
        ElMessage.success('密码修改成功');
    }
    catch (error) {
        ElMessage.error('密码修改失败');
    }
};
const saveNotificationSettings = async () => {
    try {
        await userApi.updateSettings({ notifications: notificationSettings });
        ElMessage.success('通知设置已保存');
    }
    catch (error) {
        ElMessage.error('保存失败');
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings") }, });
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
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElMenu;
    /** @type { [typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ 'onSelect': {} }, defaultActive: ((__VLS_ctx.activeMenu)), }));
    const __VLS_20 = __VLS_19({ ...{ 'onSelect': {} }, defaultActive: ((__VLS_ctx.activeMenu)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    let __VLS_24;
    const __VLS_25 = {
        onSelect: (__VLS_ctx.handleMenuSelect)
    };
    let __VLS_21;
    let __VLS_22;
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ index: ("profile"), }));
    const __VLS_28 = __VLS_27({ index: ("profile"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
    const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.User;
    /** @type { [typeof __VLS_components.User, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({}));
    const __VLS_40 = __VLS_39({}, ...__VLS_functionalComponentArgsRest(__VLS_39));
    __VLS_nonNullable(__VLS_37.slots).default;
    var __VLS_37;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_31.slots).default;
    var __VLS_31;
    const __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ index: ("account"), }));
    const __VLS_46 = __VLS_45({ index: ("account"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    const __VLS_50 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({}));
    const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
    const __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.Lock;
    /** @type { [typeof __VLS_components.Lock, ] } */
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({}));
    const __VLS_58 = __VLS_57({}, ...__VLS_functionalComponentArgsRest(__VLS_57));
    __VLS_nonNullable(__VLS_55.slots).default;
    var __VLS_55;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_49.slots).default;
    var __VLS_49;
    const __VLS_62 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ index: ("notification"), }));
    const __VLS_64 = __VLS_63({ index: ("notification"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    const __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({}));
    const __VLS_70 = __VLS_69({}, ...__VLS_functionalComponentArgsRest(__VLS_69));
    const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.Bell;
    /** @type { [typeof __VLS_components.Bell, ] } */
    // @ts-ignore
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({}));
    const __VLS_76 = __VLS_75({}, ...__VLS_functionalComponentArgsRest(__VLS_75));
    __VLS_nonNullable(__VLS_73.slots).default;
    var __VLS_73;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_67.slots).default;
    var __VLS_67;
    const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ index: ("privacy"), }));
    const __VLS_82 = __VLS_81({ index: ("privacy"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({}));
    const __VLS_88 = __VLS_87({}, ...__VLS_functionalComponentArgsRest(__VLS_87));
    const __VLS_92 = __VLS_resolvedLocalAndGlobalComponents.Lock;
    /** @type { [typeof __VLS_components.Lock, ] } */
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({}));
    const __VLS_94 = __VLS_93({}, ...__VLS_functionalComponentArgsRest(__VLS_93));
    __VLS_nonNullable(__VLS_91.slots).default;
    var __VLS_91;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_85.slots).default;
    var __VLS_85;
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_98 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
    // @ts-ignore
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ span: ((18)), }));
    const __VLS_100 = __VLS_99({ span: ((18)), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    const __VLS_104 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({}));
    const __VLS_106 = __VLS_105({}, ...__VLS_functionalComponentArgsRest(__VLS_105));
    if (__VLS_ctx.activeMenu === 'profile') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        const __VLS_110 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
        /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
        // @ts-ignore
        const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ ref: ("profileForm"), model: ((__VLS_ctx.profileData)), labelWidth: ("100px"), }));
        const __VLS_112 = __VLS_111({ ref: ("profileForm"), model: ((__VLS_ctx.profileData)), labelWidth: ("100px"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
        // @ts-ignore navigation for `const profileForm = ref()`
        __VLS_ctx.profileForm;
        var __VLS_116 = {};
        const __VLS_117 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({ label: ("头像"), }));
        const __VLS_119 = __VLS_118({ label: ("头像"), }, ...__VLS_functionalComponentArgsRest(__VLS_118));
        const __VLS_123 = __VLS_resolvedLocalAndGlobalComponents.ElUpload;
        /** @type { [typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ] } */
        // @ts-ignore
        const __VLS_124 = __VLS_asFunctionalComponent(__VLS_123, new __VLS_123({ ...{ class: ("avatar-uploader") }, showFileList: ((false)), onSuccess: ((__VLS_ctx.handleAvatarSuccess)), }));
        const __VLS_125 = __VLS_124({ ...{ class: ("avatar-uploader") }, showFileList: ((false)), onSuccess: ((__VLS_ctx.handleAvatarSuccess)), }, ...__VLS_functionalComponentArgsRest(__VLS_124));
        if (__VLS_ctx.profileData.avatar) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.profileData.avatar)), ...{ class: ("avatar") }, });
        }
        else {
            const __VLS_129 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
            // @ts-ignore
            const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({ ...{ class: ("avatar-uploader-icon") }, }));
            const __VLS_131 = __VLS_130({ ...{ class: ("avatar-uploader-icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_130));
            const __VLS_135 = __VLS_resolvedLocalAndGlobalComponents.Plus;
            /** @type { [typeof __VLS_components.Plus, ] } */
            // @ts-ignore
            const __VLS_136 = __VLS_asFunctionalComponent(__VLS_135, new __VLS_135({}));
            const __VLS_137 = __VLS_136({}, ...__VLS_functionalComponentArgsRest(__VLS_136));
            __VLS_nonNullable(__VLS_134.slots).default;
            var __VLS_134;
        }
        __VLS_nonNullable(__VLS_128.slots).default;
        var __VLS_128;
        __VLS_nonNullable(__VLS_122.slots).default;
        var __VLS_122;
        const __VLS_141 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({ label: ("用户名"), }));
        const __VLS_143 = __VLS_142({ label: ("用户名"), }, ...__VLS_functionalComponentArgsRest(__VLS_142));
        const __VLS_147 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_148 = __VLS_asFunctionalComponent(__VLS_147, new __VLS_147({ modelValue: ((__VLS_ctx.profileData.username)), }));
        const __VLS_149 = __VLS_148({ modelValue: ((__VLS_ctx.profileData.username)), }, ...__VLS_functionalComponentArgsRest(__VLS_148));
        __VLS_nonNullable(__VLS_146.slots).default;
        var __VLS_146;
        const __VLS_153 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, new __VLS_153({ label: ("个人简介"), }));
        const __VLS_155 = __VLS_154({ label: ("个人简介"), }, ...__VLS_functionalComponentArgsRest(__VLS_154));
        const __VLS_159 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_160 = __VLS_asFunctionalComponent(__VLS_159, new __VLS_159({ modelValue: ((__VLS_ctx.profileData.bio)), type: ("textarea"), rows: ((4)), }));
        const __VLS_161 = __VLS_160({ modelValue: ((__VLS_ctx.profileData.bio)), type: ("textarea"), rows: ((4)), }, ...__VLS_functionalComponentArgsRest(__VLS_160));
        __VLS_nonNullable(__VLS_158.slots).default;
        var __VLS_158;
        const __VLS_165 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_166 = __VLS_asFunctionalComponent(__VLS_165, new __VLS_165({ label: ("邮箱"), }));
        const __VLS_167 = __VLS_166({ label: ("邮箱"), }, ...__VLS_functionalComponentArgsRest(__VLS_166));
        const __VLS_171 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_172 = __VLS_asFunctionalComponent(__VLS_171, new __VLS_171({ modelValue: ((__VLS_ctx.profileData.email)), }));
        const __VLS_173 = __VLS_172({ modelValue: ((__VLS_ctx.profileData.email)), }, ...__VLS_functionalComponentArgsRest(__VLS_172));
        __VLS_nonNullable(__VLS_170.slots).default;
        var __VLS_170;
        const __VLS_177 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_178 = __VLS_asFunctionalComponent(__VLS_177, new __VLS_177({}));
        const __VLS_179 = __VLS_178({}, ...__VLS_functionalComponentArgsRest(__VLS_178));
        const __VLS_183 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_184 = __VLS_asFunctionalComponent(__VLS_183, new __VLS_183({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_185 = __VLS_184({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_184));
        let __VLS_189;
        const __VLS_190 = {
            onClick: (__VLS_ctx.updateProfile)
        };
        let __VLS_186;
        let __VLS_187;
        __VLS_nonNullable(__VLS_188.slots).default;
        var __VLS_188;
        __VLS_nonNullable(__VLS_182.slots).default;
        var __VLS_182;
        __VLS_nonNullable(__VLS_115.slots).default;
        var __VLS_115;
    }
    if (__VLS_ctx.activeMenu === 'account') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        const __VLS_191 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
        /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
        // @ts-ignore
        const __VLS_192 = __VLS_asFunctionalComponent(__VLS_191, new __VLS_191({ ref: ("passwordForm"), model: ((__VLS_ctx.passwordData)), labelWidth: ("100px"), }));
        const __VLS_193 = __VLS_192({ ref: ("passwordForm"), model: ((__VLS_ctx.passwordData)), labelWidth: ("100px"), }, ...__VLS_functionalComponentArgsRest(__VLS_192));
        // @ts-ignore navigation for `const passwordForm = ref()`
        __VLS_ctx.passwordForm;
        var __VLS_197 = {};
        const __VLS_198 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_199 = __VLS_asFunctionalComponent(__VLS_198, new __VLS_198({ label: ("当前密码"), }));
        const __VLS_200 = __VLS_199({ label: ("当前密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_199));
        const __VLS_204 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_205 = __VLS_asFunctionalComponent(__VLS_204, new __VLS_204({ modelValue: ((__VLS_ctx.passwordData.oldPassword)), type: ("password"), showPassword: (true), }));
        const __VLS_206 = __VLS_205({ modelValue: ((__VLS_ctx.passwordData.oldPassword)), type: ("password"), showPassword: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_205));
        __VLS_nonNullable(__VLS_203.slots).default;
        var __VLS_203;
        const __VLS_210 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_211 = __VLS_asFunctionalComponent(__VLS_210, new __VLS_210({ label: ("新密码"), }));
        const __VLS_212 = __VLS_211({ label: ("新密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_211));
        const __VLS_216 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_217 = __VLS_asFunctionalComponent(__VLS_216, new __VLS_216({ modelValue: ((__VLS_ctx.passwordData.newPassword)), type: ("password"), showPassword: (true), }));
        const __VLS_218 = __VLS_217({ modelValue: ((__VLS_ctx.passwordData.newPassword)), type: ("password"), showPassword: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_217));
        __VLS_nonNullable(__VLS_215.slots).default;
        var __VLS_215;
        const __VLS_222 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_223 = __VLS_asFunctionalComponent(__VLS_222, new __VLS_222({ label: ("确认新密码"), }));
        const __VLS_224 = __VLS_223({ label: ("确认新密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_223));
        const __VLS_228 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_229 = __VLS_asFunctionalComponent(__VLS_228, new __VLS_228({ modelValue: ((__VLS_ctx.passwordData.confirmPassword)), type: ("password"), showPassword: (true), }));
        const __VLS_230 = __VLS_229({ modelValue: ((__VLS_ctx.passwordData.confirmPassword)), type: ("password"), showPassword: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_229));
        __VLS_nonNullable(__VLS_227.slots).default;
        var __VLS_227;
        const __VLS_234 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_235 = __VLS_asFunctionalComponent(__VLS_234, new __VLS_234({}));
        const __VLS_236 = __VLS_235({}, ...__VLS_functionalComponentArgsRest(__VLS_235));
        const __VLS_240 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_241 = __VLS_asFunctionalComponent(__VLS_240, new __VLS_240({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_242 = __VLS_241({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_241));
        let __VLS_246;
        const __VLS_247 = {
            onClick: (__VLS_ctx.updatePassword)
        };
        let __VLS_243;
        let __VLS_244;
        __VLS_nonNullable(__VLS_245.slots).default;
        var __VLS_245;
        __VLS_nonNullable(__VLS_239.slots).default;
        var __VLS_239;
        __VLS_nonNullable(__VLS_196.slots).default;
        var __VLS_196;
    }
    if (__VLS_ctx.activeMenu === 'notification') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        const __VLS_248 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
        /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
        // @ts-ignore
        const __VLS_249 = __VLS_asFunctionalComponent(__VLS_248, new __VLS_248({ labelWidth: ("200px"), }));
        const __VLS_250 = __VLS_249({ labelWidth: ("200px"), }, ...__VLS_functionalComponentArgsRest(__VLS_249));
        const __VLS_254 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_255 = __VLS_asFunctionalComponent(__VLS_254, new __VLS_254({ label: ("新评论通知"), }));
        const __VLS_256 = __VLS_255({ label: ("新评论通知"), }, ...__VLS_functionalComponentArgsRest(__VLS_255));
        const __VLS_260 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
        /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
        // @ts-ignore
        const __VLS_261 = __VLS_asFunctionalComponent(__VLS_260, new __VLS_260({ modelValue: ((__VLS_ctx.notificationSettings.comment)), }));
        const __VLS_262 = __VLS_261({ modelValue: ((__VLS_ctx.notificationSettings.comment)), }, ...__VLS_functionalComponentArgsRest(__VLS_261));
        __VLS_nonNullable(__VLS_259.slots).default;
        var __VLS_259;
        const __VLS_266 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_267 = __VLS_asFunctionalComponent(__VLS_266, new __VLS_266({ label: ("点赞通知"), }));
        const __VLS_268 = __VLS_267({ label: ("点赞通知"), }, ...__VLS_functionalComponentArgsRest(__VLS_267));
        const __VLS_272 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
        /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
        // @ts-ignore
        const __VLS_273 = __VLS_asFunctionalComponent(__VLS_272, new __VLS_272({ modelValue: ((__VLS_ctx.notificationSettings.like)), }));
        const __VLS_274 = __VLS_273({ modelValue: ((__VLS_ctx.notificationSettings.like)), }, ...__VLS_functionalComponentArgsRest(__VLS_273));
        __VLS_nonNullable(__VLS_271.slots).default;
        var __VLS_271;
        const __VLS_278 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_279 = __VLS_asFunctionalComponent(__VLS_278, new __VLS_278({ label: ("新关注通知"), }));
        const __VLS_280 = __VLS_279({ label: ("新关注通知"), }, ...__VLS_functionalComponentArgsRest(__VLS_279));
        const __VLS_284 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
        /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
        // @ts-ignore
        const __VLS_285 = __VLS_asFunctionalComponent(__VLS_284, new __VLS_284({ modelValue: ((__VLS_ctx.notificationSettings.follow)), }));
        const __VLS_286 = __VLS_285({ modelValue: ((__VLS_ctx.notificationSettings.follow)), }, ...__VLS_functionalComponentArgsRest(__VLS_285));
        __VLS_nonNullable(__VLS_283.slots).default;
        var __VLS_283;
        const __VLS_290 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_291 = __VLS_asFunctionalComponent(__VLS_290, new __VLS_290({ label: ("系统消息通知"), }));
        const __VLS_292 = __VLS_291({ label: ("系统消息通知"), }, ...__VLS_functionalComponentArgsRest(__VLS_291));
        const __VLS_296 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
        /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
        // @ts-ignore
        const __VLS_297 = __VLS_asFunctionalComponent(__VLS_296, new __VLS_296({ modelValue: ((__VLS_ctx.notificationSettings.system)), }));
        const __VLS_298 = __VLS_297({ modelValue: ((__VLS_ctx.notificationSettings.system)), }, ...__VLS_functionalComponentArgsRest(__VLS_297));
        __VLS_nonNullable(__VLS_295.slots).default;
        var __VLS_295;
        const __VLS_302 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_303 = __VLS_asFunctionalComponent(__VLS_302, new __VLS_302({}));
        const __VLS_304 = __VLS_303({}, ...__VLS_functionalComponentArgsRest(__VLS_303));
        const __VLS_308 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_309 = __VLS_asFunctionalComponent(__VLS_308, new __VLS_308({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_310 = __VLS_309({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_309));
        let __VLS_314;
        const __VLS_315 = {
            onClick: (__VLS_ctx.saveNotificationSettings)
        };
        let __VLS_311;
        let __VLS_312;
        __VLS_nonNullable(__VLS_313.slots).default;
        var __VLS_313;
        __VLS_nonNullable(__VLS_307.slots).default;
        var __VLS_307;
        __VLS_nonNullable(__VLS_253.slots).default;
        var __VLS_253;
    }
    __VLS_nonNullable(__VLS_109.slots).default;
    var __VLS_109;
    __VLS_nonNullable(__VLS_103.slots).default;
    var __VLS_103;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['settings'];
    __VLS_styleScopedClasses['avatar-uploader'];
    __VLS_styleScopedClasses['avatar'];
    __VLS_styleScopedClasses['avatar-uploader-icon'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "profileForm": __VLS_116,
        "passwordForm": __VLS_197,
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
            User: User,
            Lock: Lock,
            Bell: Bell,
            Plus: Plus,
            activeMenu: activeMenu,
            profileData: profileData,
            passwordData: passwordData,
            notificationSettings: notificationSettings,
            handleMenuSelect: handleMenuSelect,
            handleAvatarSuccess: handleAvatarSuccess,
            updateProfile: updateProfile,
            updatePassword: updatePassword,
            saveNotificationSettings: saveNotificationSettings,
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
