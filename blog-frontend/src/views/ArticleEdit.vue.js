import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { Setting, Plus } from '@element-plus/icons-vue';
import CategoryManager from '@/components/CategoryManager.vue';
import { ElMessage } from 'element-plus';
import { useArticleStore } from '@/stores/article';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const articleStore = useArticleStore();
const isEdit = computed(() => route.params.id !== undefined);
const preview = ref(false);
const articleForm = ref({
    title: '',
    category: '',
    tags: [],
    cover: '',
    content: '',
    summary: ''
});
const categories = [
    { label: '前端开发', value: 'frontend' },
    { label: '后端开发', value: 'backend' },
    { label: '算法', value: 'algorithm' }
];
const tags = ['Vue', 'React', 'TypeScript', 'Java', 'Spring Boot'];
const showCategoryManager = ref(false);
const toolbars = [
    'bold',
    'italic',
    'strikethrough',
    'sub',
    'sup',
    'quote',
    'unordered-list',
    'ordered-list',
    'task-list',
    'link',
    'image',
    'table',
    'code',
    'inline-code',
    'preview',
    'fullscreen'
];
const handleCoverSuccess = (res) => {
    articleForm.value.cover = res.url;
};
const beforeCoverUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isImage) {
        ElMessage.error('只能上传图片文件!');
    }
    if (!isLt2M) {
        ElMessage.error('图片大小不能超过 2MB!');
    }
    return isImage && isLt2M;
};
const onUploadImg = async (files, callback) => {
    // 实现图片上传逻辑
    const urls = await Promise.all(files.map(async (file) => {
        // 上传图片并返回 URL
        return 'https://example.com/image.jpg';
    }));
    callback(urls);
};
const saveDraft = async () => {
    const articleData = {
        title: articleForm.value.title,
        content: articleForm.value.content,
        summary: articleForm.value.summary,
        cover: articleForm.value.cover,
        categoryId: articleForm.value.category,
        tags: articleForm.value.tags,
        status: 'draft'
    };
    try {
        if (isEdit.value) {
            const result = await articleStore.updateArticle(Number(route.params.id), articleData);
            if (result) {
                ElMessage.success('草稿已保存');
                router.push('/admin/articles');
            }
        }
        else {
            const result = await articleStore.createArticle(articleData);
            if (result) {
                ElMessage.success('草稿已保存');
                router.push('/admin/articles');
            }
        }
    }
    catch (error) {
        ElMessage.error('保存失败');
    }
};
const publishArticle = async () => {
    const articleData = {
        title: articleForm.value.title,
        content: articleForm.value.content,
        summary: articleForm.value.summary,
        cover: articleForm.value.cover,
        categoryId: articleForm.value.category,
        tags: articleForm.value.tags,
        status: 'published'
    };
    try {
        if (isEdit.value) {
            const result = await articleStore.updateArticle(Number(route.params.id), articleData);
            if (result) {
                ElMessage.success('文章已更新');
                router.push('/admin/articles');
            }
        }
        else {
            const result = await articleStore.createArticle(articleData);
            if (result) {
                ElMessage.success('文章已发布');
                router.push('/admin/articles');
            }
        }
    }
    catch (error) {
        ElMessage.error('发布失败');
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
    __VLS_styleScopedClasses['cover-uploader'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("article-edit") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ model: ((__VLS_ctx.articleForm)), labelWidth: ("80px"), }));
    const __VLS_2 = __VLS_1({ model: ((__VLS_ctx.articleForm)), labelWidth: ("80px"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("edit-card") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("edit-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_11.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.isEdit ? '编辑文章' : '写文章');
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElSpace;
        /** @type { [typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, typeof __VLS_components.ElSpace, typeof __VLS_components.elSpace, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
        const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ 'onClick': {} }, }));
        const __VLS_20 = __VLS_19({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        let __VLS_24;
        const __VLS_25 = {
            onClick: (__VLS_ctx.saveDraft)
        };
        let __VLS_21;
        let __VLS_22;
        __VLS_nonNullable(__VLS_23.slots).default;
        var __VLS_23;
        const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_28 = __VLS_27({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
        let __VLS_32;
        const __VLS_33 = {
            onClick: (__VLS_ctx.publishArticle)
        };
        let __VLS_29;
        let __VLS_30;
        __VLS_nonNullable(__VLS_31.slots).default;
        var __VLS_31;
        __VLS_nonNullable(__VLS_17.slots).default;
        var __VLS_17;
    }
    const __VLS_34 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({ label: ("标题"), }));
    const __VLS_36 = __VLS_35({ label: ("标题"), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    const __VLS_40 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ modelValue: ((__VLS_ctx.articleForm.title)), placeholder: ("请输入文章标题"), }));
    const __VLS_42 = __VLS_41({ modelValue: ((__VLS_ctx.articleForm.title)), placeholder: ("请输入文章标题"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    __VLS_nonNullable(__VLS_39.slots).default;
    var __VLS_39;
    const __VLS_46 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ label: ("分类"), }));
    const __VLS_48 = __VLS_47({ label: ("分类"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    const __VLS_52 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
    /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ modelValue: ((__VLS_ctx.articleForm.category)), placeholder: ("选择分类"), ...{ class: ("category-select") }, }));
    const __VLS_54 = __VLS_53({ modelValue: ((__VLS_ctx.articleForm.category)), placeholder: ("选择分类"), ...{ class: ("category-select") }, }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.categories))) {
        const __VLS_58 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ key: ((item.value)), label: ((item.label)), value: ((item.value)), }));
        const __VLS_60 = __VLS_59({ key: ((item.value)), label: ((item.label)), value: ((item.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
    }
    __VLS_nonNullable(__VLS_57.slots).default;
    var __VLS_57;
    const __VLS_64 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{ 'onClick': {} }, text: (true), type: ("primary"), }));
    const __VLS_66 = __VLS_65({ ...{ 'onClick': {} }, text: (true), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
    let __VLS_70;
    const __VLS_71 = {
        onClick: (...[$event]) => {
            __VLS_ctx.showCategoryManager = true;
        }
    };
    let __VLS_67;
    let __VLS_68;
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({}));
    const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.Setting;
    /** @type { [typeof __VLS_components.Setting, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({}));
    const __VLS_80 = __VLS_79({}, ...__VLS_functionalComponentArgsRest(__VLS_79));
    __VLS_nonNullable(__VLS_77.slots).default;
    var __VLS_77;
    __VLS_nonNullable(__VLS_69.slots).default;
    var __VLS_69;
    __VLS_nonNullable(__VLS_51.slots).default;
    var __VLS_51;
    const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ label: ("标签"), }));
    const __VLS_86 = __VLS_85({ label: ("标签"), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElSelect;
    /** @type { [typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ] } */
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ modelValue: ((__VLS_ctx.articleForm.tags)), multiple: (true), filterable: (true), allowCreate: (true), defaultFirstOption: (true), placeholder: ("请选择或输入标签"), ...{ class: ("tag-select") }, }));
    const __VLS_92 = __VLS_91({ modelValue: ((__VLS_ctx.articleForm.tags)), multiple: (true), filterable: (true), allowCreate: (true), defaultFirstOption: (true), placeholder: ("请选择或输入标签"), ...{ class: ("tag-select") }, }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    for (const [tag] of __VLS_getVForSourceType((__VLS_ctx.tags))) {
        const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElOption;
        /** @type { [typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ] } */
        // @ts-ignore
        const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ key: ((tag)), label: ((tag)), value: ((tag)), }));
        const __VLS_98 = __VLS_97({ key: ((tag)), label: ((tag)), value: ((tag)), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    }
    __VLS_nonNullable(__VLS_95.slots).default;
    var __VLS_95;
    __VLS_nonNullable(__VLS_89.slots).default;
    var __VLS_89;
    const __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ label: ("封面"), }));
    const __VLS_104 = __VLS_103({ label: ("封面"), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
    const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.ElUpload;
    /** @type { [typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ] } */
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ ...{ class: ("cover-uploader") }, showFileList: ((false)), onSuccess: ((__VLS_ctx.handleCoverSuccess)), beforeUpload: ((__VLS_ctx.beforeCoverUpload)), }));
    const __VLS_110 = __VLS_109({ ...{ class: ("cover-uploader") }, showFileList: ((false)), onSuccess: ((__VLS_ctx.handleCoverSuccess)), beforeUpload: ((__VLS_ctx.beforeCoverUpload)), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    if (__VLS_ctx.articleForm.cover) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.articleForm.cover)), ...{ class: ("cover") }, });
    }
    else {
        const __VLS_114 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ ...{ class: ("cover-uploader-icon") }, }));
        const __VLS_116 = __VLS_115({ ...{ class: ("cover-uploader-icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_115));
        const __VLS_120 = __VLS_resolvedLocalAndGlobalComponents.Plus;
        /** @type { [typeof __VLS_components.Plus, ] } */
        // @ts-ignore
        const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({}));
        const __VLS_122 = __VLS_121({}, ...__VLS_functionalComponentArgsRest(__VLS_121));
        __VLS_nonNullable(__VLS_119.slots).default;
        var __VLS_119;
    }
    __VLS_nonNullable(__VLS_113.slots).default;
    var __VLS_113;
    __VLS_nonNullable(__VLS_107.slots).default;
    var __VLS_107;
    const __VLS_126 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ label: ("内容"), ...{ class: ("content-item") }, }));
    const __VLS_128 = __VLS_127({ label: ("内容"), ...{ class: ("content-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_127));
    const __VLS_132 = __VLS_resolvedLocalAndGlobalComponents.MdEditor;
    /** @type { [typeof __VLS_components.MdEditor, typeof __VLS_components.mdEditor, ] } */
    // @ts-ignore
    const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({ ...{ 'onOnUploadImg': {} }, modelValue: ((__VLS_ctx.articleForm.content)), toolbars: ((__VLS_ctx.toolbars)), preview: ((__VLS_ctx.preview)), }));
    const __VLS_134 = __VLS_133({ ...{ 'onOnUploadImg': {} }, modelValue: ((__VLS_ctx.articleForm.content)), toolbars: ((__VLS_ctx.toolbars)), preview: ((__VLS_ctx.preview)), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
    let __VLS_138;
    const __VLS_139 = {
        onOnUploadImg: (__VLS_ctx.onUploadImg)
    };
    let __VLS_135;
    let __VLS_136;
    var __VLS_137;
    __VLS_nonNullable(__VLS_131.slots).default;
    var __VLS_131;
    const __VLS_140 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({ label: ("摘要"), }));
    const __VLS_142 = __VLS_141({ label: ("摘要"), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
    const __VLS_146 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ modelValue: ((__VLS_ctx.articleForm.summary)), type: ("textarea"), rows: ((3)), placeholder: ("请输入文章摘要"), }));
    const __VLS_148 = __VLS_147({ modelValue: ((__VLS_ctx.articleForm.summary)), type: ("textarea"), rows: ((3)), placeholder: ("请输入文章摘要"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
    __VLS_nonNullable(__VLS_145.slots).default;
    var __VLS_145;
    var __VLS_11;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_152 = __VLS_resolvedLocalAndGlobalComponents.ElDialog;
    /** @type { [typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ] } */
    // @ts-ignore
    const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ modelValue: ((__VLS_ctx.showCategoryManager)), title: ("分类管理"), width: ("60%"), destroyOnClose: (true), }));
    const __VLS_154 = __VLS_153({ modelValue: ((__VLS_ctx.showCategoryManager)), title: ("分类管理"), width: ("60%"), destroyOnClose: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_153));
    // @ts-ignore
    [CategoryManager,];
    // @ts-ignore
    const __VLS_158 = __VLS_asFunctionalComponent(CategoryManager, new CategoryManager({}));
    const __VLS_159 = __VLS_158({}, ...__VLS_functionalComponentArgsRest(__VLS_158));
    __VLS_nonNullable(__VLS_157.slots).default;
    var __VLS_157;
    __VLS_styleScopedClasses['article-edit'];
    __VLS_styleScopedClasses['edit-card'];
    __VLS_styleScopedClasses['card-header'];
    __VLS_styleScopedClasses['category-select'];
    __VLS_styleScopedClasses['tag-select'];
    __VLS_styleScopedClasses['cover-uploader'];
    __VLS_styleScopedClasses['cover'];
    __VLS_styleScopedClasses['cover-uploader-icon'];
    __VLS_styleScopedClasses['content-item'];
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
            MdEditor: MdEditor,
            Setting: Setting,
            Plus: Plus,
            CategoryManager: CategoryManager,
            isEdit: isEdit,
            preview: preview,
            articleForm: articleForm,
            categories: categories,
            tags: tags,
            showCategoryManager: showCategoryManager,
            toolbars: toolbars,
            handleCoverSuccess: handleCoverSuccess,
            beforeCoverUpload: beforeCoverUpload,
            onUploadImg: onUploadImg,
            saveDraft: saveDraft,
            publishArticle: publishArticle,
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
