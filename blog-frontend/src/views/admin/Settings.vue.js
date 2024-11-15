import { reactive } from 'vue';
import { Plus } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const basicSettings = reactive({
    siteName: '我的博客',
    siteDescription: '这是一个基于 Vue 3 的博客系统',
    logo: '',
    icp: ''
});
const contentSettings = reactive({
    commentAudit: true,
    allowRegister: true,
    pageSize: 10,
    summaryLength: 200
});
const emailSettings = reactive({
    smtpServer: '',
    smtpPort: '',
    emailAccount: '',
    emailPassword: '',
    senderName: ''
});
const otherSettings = reactive({
    analyticsCode: '',
    customCss: '',
    customJs: ''
});
const handleLogoSuccess = (res) => {
    basicSettings.logo = res.url;
};
const saveBasicSettings = () => {
    // 实现保存基本设置逻辑
    ElMessage.success('保存成功');
};
const saveContentSettings = () => {
    // 实现保存内容设置逻辑
    ElMessage.success('保存成功');
};
const saveEmailSettings = () => {
    // 实现保存邮件设置逻辑
    ElMessage.success('保存成功');
};
const testEmailSettings = () => {
    // 实现发送测试邮件逻辑
    ElMessage.success('测试邮件已发送');
};
const saveOtherSettings = () => {
    // 实现保存其他设置逻辑
    ElMessage.success('保存成功');
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
    __VLS_styleScopedClasses['logo-uploader'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("system-settings") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElTabs;
    /** @type { [typeof __VLS_components.ElTabs, typeof __VLS_components.elTabs, typeof __VLS_components.ElTabs, typeof __VLS_components.elTabs, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ label: ("基本设置"), }));
    const __VLS_8 = __VLS_7({ label: ("基本设置"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ref: ("basicFormRef"), model: ((__VLS_ctx.basicSettings)), labelWidth: ("120px"), }));
    const __VLS_20 = __VLS_19({ ref: ("basicFormRef"), model: ((__VLS_ctx.basicSettings)), labelWidth: ("120px"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    // @ts-ignore navigation for `const basicFormRef = ref()`
    __VLS_ctx.basicFormRef;
    var __VLS_24 = {};
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ label: ("网站名称"), }));
    const __VLS_27 = __VLS_26({ label: ("网站名称"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ modelValue: ((__VLS_ctx.basicSettings.siteName)), }));
    const __VLS_33 = __VLS_32({ modelValue: ((__VLS_ctx.basicSettings.siteName)), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ label: ("网站描述"), }));
    const __VLS_39 = __VLS_38({ label: ("网站描述"), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ modelValue: ((__VLS_ctx.basicSettings.siteDescription)), type: ("textarea"), rows: ((3)), }));
    const __VLS_45 = __VLS_44({ modelValue: ((__VLS_ctx.basicSettings.siteDescription)), type: ("textarea"), rows: ((3)), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    __VLS_nonNullable(__VLS_42.slots).default;
    var __VLS_42;
    const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ label: ("网站Logo"), }));
    const __VLS_51 = __VLS_50({ label: ("网站Logo"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.ElUpload;
    /** @type { [typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ] } */
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{ class: ("logo-uploader") }, showFileList: ((false)), onSuccess: ((__VLS_ctx.handleLogoSuccess)), }));
    const __VLS_57 = __VLS_56({ ...{ class: ("logo-uploader") }, showFileList: ((false)), onSuccess: ((__VLS_ctx.handleLogoSuccess)), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    if (__VLS_ctx.basicSettings.logo) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.basicSettings.logo)), ...{ class: ("logo") }, });
    }
    else {
        const __VLS_61 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{ class: ("logo-uploader-icon") }, }));
        const __VLS_63 = __VLS_62({ ...{ class: ("logo-uploader-icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_62));
        const __VLS_67 = __VLS_resolvedLocalAndGlobalComponents.Plus;
        /** @type { [typeof __VLS_components.Plus, ] } */
        // @ts-ignore
        const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({}));
        const __VLS_69 = __VLS_68({}, ...__VLS_functionalComponentArgsRest(__VLS_68));
        __VLS_nonNullable(__VLS_66.slots).default;
        var __VLS_66;
    }
    __VLS_nonNullable(__VLS_60.slots).default;
    var __VLS_60;
    __VLS_nonNullable(__VLS_54.slots).default;
    var __VLS_54;
    const __VLS_73 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ label: ("ICP备案号"), }));
    const __VLS_75 = __VLS_74({ label: ("ICP备案号"), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    const __VLS_79 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ modelValue: ((__VLS_ctx.basicSettings.icp)), }));
    const __VLS_81 = __VLS_80({ modelValue: ((__VLS_ctx.basicSettings.icp)), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
    __VLS_nonNullable(__VLS_78.slots).default;
    var __VLS_78;
    const __VLS_85 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({}));
    const __VLS_87 = __VLS_86({}, ...__VLS_functionalComponentArgsRest(__VLS_86));
    const __VLS_91 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_93 = __VLS_92({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
    let __VLS_97;
    const __VLS_98 = {
        onClick: (__VLS_ctx.saveBasicSettings)
    };
    let __VLS_94;
    let __VLS_95;
    __VLS_nonNullable(__VLS_96.slots).default;
    var __VLS_96;
    __VLS_nonNullable(__VLS_90.slots).default;
    var __VLS_90;
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_99 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, ] } */
    // @ts-ignore
    const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({ label: ("内容设置"), }));
    const __VLS_101 = __VLS_100({ label: ("内容设置"), }, ...__VLS_functionalComponentArgsRest(__VLS_100));
    const __VLS_105 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({}));
    const __VLS_107 = __VLS_106({}, ...__VLS_functionalComponentArgsRest(__VLS_106));
    const __VLS_111 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({ ref: ("contentFormRef"), model: ((__VLS_ctx.contentSettings)), labelWidth: ("120px"), }));
    const __VLS_113 = __VLS_112({ ref: ("contentFormRef"), model: ((__VLS_ctx.contentSettings)), labelWidth: ("120px"), }, ...__VLS_functionalComponentArgsRest(__VLS_112));
    // @ts-ignore navigation for `const contentFormRef = ref()`
    __VLS_ctx.contentFormRef;
    var __VLS_117 = {};
    const __VLS_118 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ label: ("评论审核"), }));
    const __VLS_120 = __VLS_119({ label: ("评论审核"), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
    const __VLS_124 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
    /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
    // @ts-ignore
    const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({ modelValue: ((__VLS_ctx.contentSettings.commentAudit)), }));
    const __VLS_126 = __VLS_125({ modelValue: ((__VLS_ctx.contentSettings.commentAudit)), }, ...__VLS_functionalComponentArgsRest(__VLS_125));
    __VLS_nonNullable(__VLS_123.slots).default;
    var __VLS_123;
    const __VLS_130 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ label: ("允许注册"), }));
    const __VLS_132 = __VLS_131({ label: ("允许注册"), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
    const __VLS_136 = __VLS_resolvedLocalAndGlobalComponents.ElSwitch;
    /** @type { [typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ] } */
    // @ts-ignore
    const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({ modelValue: ((__VLS_ctx.contentSettings.allowRegister)), }));
    const __VLS_138 = __VLS_137({ modelValue: ((__VLS_ctx.contentSettings.allowRegister)), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
    __VLS_nonNullable(__VLS_135.slots).default;
    var __VLS_135;
    const __VLS_142 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({ label: ("每页文章数"), }));
    const __VLS_144 = __VLS_143({ label: ("每页文章数"), }, ...__VLS_functionalComponentArgsRest(__VLS_143));
    const __VLS_148 = __VLS_resolvedLocalAndGlobalComponents.ElInputNumber;
    /** @type { [typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, ] } */
    // @ts-ignore
    const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({ modelValue: ((__VLS_ctx.contentSettings.pageSize)), min: ((1)), max: ((50)), }));
    const __VLS_150 = __VLS_149({ modelValue: ((__VLS_ctx.contentSettings.pageSize)), min: ((1)), max: ((50)), }, ...__VLS_functionalComponentArgsRest(__VLS_149));
    __VLS_nonNullable(__VLS_147.slots).default;
    var __VLS_147;
    const __VLS_154 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({ label: ("文章摘要长度"), }));
    const __VLS_156 = __VLS_155({ label: ("文章摘要长度"), }, ...__VLS_functionalComponentArgsRest(__VLS_155));
    const __VLS_160 = __VLS_resolvedLocalAndGlobalComponents.ElInputNumber;
    /** @type { [typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, ] } */
    // @ts-ignore
    const __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160({ modelValue: ((__VLS_ctx.contentSettings.summaryLength)), min: ((50)), max: ((500)), }));
    const __VLS_162 = __VLS_161({ modelValue: ((__VLS_ctx.contentSettings.summaryLength)), min: ((50)), max: ((500)), }, ...__VLS_functionalComponentArgsRest(__VLS_161));
    __VLS_nonNullable(__VLS_159.slots).default;
    var __VLS_159;
    const __VLS_166 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_167 = __VLS_asFunctionalComponent(__VLS_166, new __VLS_166({}));
    const __VLS_168 = __VLS_167({}, ...__VLS_functionalComponentArgsRest(__VLS_167));
    const __VLS_172 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_173 = __VLS_asFunctionalComponent(__VLS_172, new __VLS_172({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_174 = __VLS_173({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_173));
    let __VLS_178;
    const __VLS_179 = {
        onClick: (__VLS_ctx.saveContentSettings)
    };
    let __VLS_175;
    let __VLS_176;
    __VLS_nonNullable(__VLS_177.slots).default;
    var __VLS_177;
    __VLS_nonNullable(__VLS_171.slots).default;
    var __VLS_171;
    __VLS_nonNullable(__VLS_116.slots).default;
    var __VLS_116;
    __VLS_nonNullable(__VLS_110.slots).default;
    var __VLS_110;
    __VLS_nonNullable(__VLS_104.slots).default;
    var __VLS_104;
    const __VLS_180 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, ] } */
    // @ts-ignore
    const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({ label: ("邮件设置"), }));
    const __VLS_182 = __VLS_181({ label: ("邮件设置"), }, ...__VLS_functionalComponentArgsRest(__VLS_181));
    const __VLS_186 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({}));
    const __VLS_188 = __VLS_187({}, ...__VLS_functionalComponentArgsRest(__VLS_187));
    const __VLS_192 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({ ref: ("emailFormRef"), model: ((__VLS_ctx.emailSettings)), labelWidth: ("120px"), }));
    const __VLS_194 = __VLS_193({ ref: ("emailFormRef"), model: ((__VLS_ctx.emailSettings)), labelWidth: ("120px"), }, ...__VLS_functionalComponentArgsRest(__VLS_193));
    // @ts-ignore navigation for `const emailFormRef = ref()`
    __VLS_ctx.emailFormRef;
    var __VLS_198 = {};
    const __VLS_199 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_200 = __VLS_asFunctionalComponent(__VLS_199, new __VLS_199({ label: ("SMTP服务器"), }));
    const __VLS_201 = __VLS_200({ label: ("SMTP服务器"), }, ...__VLS_functionalComponentArgsRest(__VLS_200));
    const __VLS_205 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_206 = __VLS_asFunctionalComponent(__VLS_205, new __VLS_205({ modelValue: ((__VLS_ctx.emailSettings.smtpServer)), }));
    const __VLS_207 = __VLS_206({ modelValue: ((__VLS_ctx.emailSettings.smtpServer)), }, ...__VLS_functionalComponentArgsRest(__VLS_206));
    __VLS_nonNullable(__VLS_204.slots).default;
    var __VLS_204;
    const __VLS_211 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_212 = __VLS_asFunctionalComponent(__VLS_211, new __VLS_211({ label: ("SMTP端口"), }));
    const __VLS_213 = __VLS_212({ label: ("SMTP端口"), }, ...__VLS_functionalComponentArgsRest(__VLS_212));
    const __VLS_217 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_218 = __VLS_asFunctionalComponent(__VLS_217, new __VLS_217({ modelValue: ((__VLS_ctx.emailSettings.smtpPort)), }));
    const __VLS_219 = __VLS_218({ modelValue: ((__VLS_ctx.emailSettings.smtpPort)), }, ...__VLS_functionalComponentArgsRest(__VLS_218));
    __VLS_nonNullable(__VLS_216.slots).default;
    var __VLS_216;
    const __VLS_223 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_224 = __VLS_asFunctionalComponent(__VLS_223, new __VLS_223({ label: ("邮箱账号"), }));
    const __VLS_225 = __VLS_224({ label: ("邮箱账号"), }, ...__VLS_functionalComponentArgsRest(__VLS_224));
    const __VLS_229 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_230 = __VLS_asFunctionalComponent(__VLS_229, new __VLS_229({ modelValue: ((__VLS_ctx.emailSettings.emailAccount)), }));
    const __VLS_231 = __VLS_230({ modelValue: ((__VLS_ctx.emailSettings.emailAccount)), }, ...__VLS_functionalComponentArgsRest(__VLS_230));
    __VLS_nonNullable(__VLS_228.slots).default;
    var __VLS_228;
    const __VLS_235 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_236 = __VLS_asFunctionalComponent(__VLS_235, new __VLS_235({ label: ("邮箱密码"), }));
    const __VLS_237 = __VLS_236({ label: ("邮箱密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_236));
    const __VLS_241 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_242 = __VLS_asFunctionalComponent(__VLS_241, new __VLS_241({ modelValue: ((__VLS_ctx.emailSettings.emailPassword)), type: ("password"), showPassword: (true), }));
    const __VLS_243 = __VLS_242({ modelValue: ((__VLS_ctx.emailSettings.emailPassword)), type: ("password"), showPassword: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_242));
    __VLS_nonNullable(__VLS_240.slots).default;
    var __VLS_240;
    const __VLS_247 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_248 = __VLS_asFunctionalComponent(__VLS_247, new __VLS_247({ label: ("发件人名称"), }));
    const __VLS_249 = __VLS_248({ label: ("发件人名称"), }, ...__VLS_functionalComponentArgsRest(__VLS_248));
    const __VLS_253 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_254 = __VLS_asFunctionalComponent(__VLS_253, new __VLS_253({ modelValue: ((__VLS_ctx.emailSettings.senderName)), }));
    const __VLS_255 = __VLS_254({ modelValue: ((__VLS_ctx.emailSettings.senderName)), }, ...__VLS_functionalComponentArgsRest(__VLS_254));
    __VLS_nonNullable(__VLS_252.slots).default;
    var __VLS_252;
    const __VLS_259 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_260 = __VLS_asFunctionalComponent(__VLS_259, new __VLS_259({}));
    const __VLS_261 = __VLS_260({}, ...__VLS_functionalComponentArgsRest(__VLS_260));
    const __VLS_265 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_266 = __VLS_asFunctionalComponent(__VLS_265, new __VLS_265({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_267 = __VLS_266({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_266));
    let __VLS_271;
    const __VLS_272 = {
        onClick: (__VLS_ctx.saveEmailSettings)
    };
    let __VLS_268;
    let __VLS_269;
    __VLS_nonNullable(__VLS_270.slots).default;
    var __VLS_270;
    const __VLS_273 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_274 = __VLS_asFunctionalComponent(__VLS_273, new __VLS_273({ ...{ 'onClick': {} }, }));
    const __VLS_275 = __VLS_274({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_274));
    let __VLS_279;
    const __VLS_280 = {
        onClick: (__VLS_ctx.testEmailSettings)
    };
    let __VLS_276;
    let __VLS_277;
    __VLS_nonNullable(__VLS_278.slots).default;
    var __VLS_278;
    __VLS_nonNullable(__VLS_264.slots).default;
    var __VLS_264;
    __VLS_nonNullable(__VLS_197.slots).default;
    var __VLS_197;
    __VLS_nonNullable(__VLS_191.slots).default;
    var __VLS_191;
    __VLS_nonNullable(__VLS_185.slots).default;
    var __VLS_185;
    const __VLS_281 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, ] } */
    // @ts-ignore
    const __VLS_282 = __VLS_asFunctionalComponent(__VLS_281, new __VLS_281({ label: ("其他设置"), }));
    const __VLS_283 = __VLS_282({ label: ("其他设置"), }, ...__VLS_functionalComponentArgsRest(__VLS_282));
    const __VLS_287 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_288 = __VLS_asFunctionalComponent(__VLS_287, new __VLS_287({}));
    const __VLS_289 = __VLS_288({}, ...__VLS_functionalComponentArgsRest(__VLS_288));
    const __VLS_293 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    const __VLS_294 = __VLS_asFunctionalComponent(__VLS_293, new __VLS_293({ ref: ("otherFormRef"), model: ((__VLS_ctx.otherSettings)), labelWidth: ("120px"), }));
    const __VLS_295 = __VLS_294({ ref: ("otherFormRef"), model: ((__VLS_ctx.otherSettings)), labelWidth: ("120px"), }, ...__VLS_functionalComponentArgsRest(__VLS_294));
    // @ts-ignore navigation for `const otherFormRef = ref()`
    __VLS_ctx.otherFormRef;
    var __VLS_299 = {};
    const __VLS_300 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_301 = __VLS_asFunctionalComponent(__VLS_300, new __VLS_300({ label: ("统计代码"), }));
    const __VLS_302 = __VLS_301({ label: ("统计代码"), }, ...__VLS_functionalComponentArgsRest(__VLS_301));
    const __VLS_306 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_307 = __VLS_asFunctionalComponent(__VLS_306, new __VLS_306({ modelValue: ((__VLS_ctx.otherSettings.analyticsCode)), type: ("textarea"), rows: ((4)), }));
    const __VLS_308 = __VLS_307({ modelValue: ((__VLS_ctx.otherSettings.analyticsCode)), type: ("textarea"), rows: ((4)), }, ...__VLS_functionalComponentArgsRest(__VLS_307));
    __VLS_nonNullable(__VLS_305.slots).default;
    var __VLS_305;
    const __VLS_312 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_313 = __VLS_asFunctionalComponent(__VLS_312, new __VLS_312({ label: ("自定义CSS"), }));
    const __VLS_314 = __VLS_313({ label: ("自定义CSS"), }, ...__VLS_functionalComponentArgsRest(__VLS_313));
    const __VLS_318 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_319 = __VLS_asFunctionalComponent(__VLS_318, new __VLS_318({ modelValue: ((__VLS_ctx.otherSettings.customCss)), type: ("textarea"), rows: ((4)), }));
    const __VLS_320 = __VLS_319({ modelValue: ((__VLS_ctx.otherSettings.customCss)), type: ("textarea"), rows: ((4)), }, ...__VLS_functionalComponentArgsRest(__VLS_319));
    __VLS_nonNullable(__VLS_317.slots).default;
    var __VLS_317;
    const __VLS_324 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_325 = __VLS_asFunctionalComponent(__VLS_324, new __VLS_324({ label: ("自定义JS"), }));
    const __VLS_326 = __VLS_325({ label: ("自定义JS"), }, ...__VLS_functionalComponentArgsRest(__VLS_325));
    const __VLS_330 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_331 = __VLS_asFunctionalComponent(__VLS_330, new __VLS_330({ modelValue: ((__VLS_ctx.otherSettings.customJs)), type: ("textarea"), rows: ((4)), }));
    const __VLS_332 = __VLS_331({ modelValue: ((__VLS_ctx.otherSettings.customJs)), type: ("textarea"), rows: ((4)), }, ...__VLS_functionalComponentArgsRest(__VLS_331));
    __VLS_nonNullable(__VLS_329.slots).default;
    var __VLS_329;
    const __VLS_336 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_337 = __VLS_asFunctionalComponent(__VLS_336, new __VLS_336({}));
    const __VLS_338 = __VLS_337({}, ...__VLS_functionalComponentArgsRest(__VLS_337));
    const __VLS_342 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_343 = __VLS_asFunctionalComponent(__VLS_342, new __VLS_342({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_344 = __VLS_343({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_343));
    let __VLS_348;
    const __VLS_349 = {
        onClick: (__VLS_ctx.saveOtherSettings)
    };
    let __VLS_345;
    let __VLS_346;
    __VLS_nonNullable(__VLS_347.slots).default;
    var __VLS_347;
    __VLS_nonNullable(__VLS_341.slots).default;
    var __VLS_341;
    __VLS_nonNullable(__VLS_298.slots).default;
    var __VLS_298;
    __VLS_nonNullable(__VLS_292.slots).default;
    var __VLS_292;
    __VLS_nonNullable(__VLS_286.slots).default;
    var __VLS_286;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['system-settings'];
    __VLS_styleScopedClasses['logo-uploader'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['logo-uploader-icon'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "basicFormRef": __VLS_24,
        "contentFormRef": __VLS_117,
        "emailFormRef": __VLS_198,
        "otherFormRef": __VLS_299,
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
            Plus: Plus,
            basicSettings: basicSettings,
            contentSettings: contentSettings,
            emailSettings: emailSettings,
            otherSettings: otherSettings,
            handleLogoSuccess: handleLogoSuccess,
            saveBasicSettings: saveBasicSettings,
            saveContentSettings: saveContentSettings,
            saveEmailSettings: saveEmailSettings,
            testEmailSettings: testEmailSettings,
            saveOtherSettings: saveOtherSettings,
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
