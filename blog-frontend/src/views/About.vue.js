const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const profile = {
    name: '张三',
    title: '全栈开发工程师',
    avatar: 'https://example.com/avatar.jpg',
    bio: '热爱技术，专注于Web开发和系统架构设计。5年+开发经验，擅长前后端开发，对新技术充满热情。',
    skills: [
        'Vue.js', 'React', 'TypeScript', 'Node.js', 'Java',
        'Spring Boot', 'MySQL', 'Redis', 'Docker', 'Kubernetes'
    ],
    experience: [
        {
            company: 'XX科技有限公司',
            position: '高级前端开发工程师',
            period: '2022-至今',
            description: '负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目。'
        },
        {
            company: 'YY互联网公司',
            position: '全栈开发工程师',
            period: '2020-2022',
            description: '参与企业级应用开发，负责前后端功能实现和性能优化。'
        }
    ],
    email: 'example@email.com',
    github: 'https://github.com/example',
    wechat: 'wxid_example',
    location: '深圳'
};
const tagTypes = ['', 'success', 'warning', 'info'];
const getRandomTagType = () => {
    return tagTypes[Math.floor(Math.random() * tagTypes.length)];
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
    __VLS_styleScopedClasses['about-header'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("about") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ gutter: ((20)), justify: ("center"), }));
    const __VLS_2 = __VLS_1({ gutter: ((20)), justify: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ span: ((16)), }));
    const __VLS_8 = __VLS_7({ span: ((16)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("about-card") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("about-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_17.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("about-header") }, });
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
        /** @type { [typeof __VLS_components.ElAvatar, typeof __VLS_components.elAvatar, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ size: ((100)), src: ((__VLS_ctx.profile.avatar)), }));
        const __VLS_20 = __VLS_19({ size: ((100)), src: ((__VLS_ctx.profile.avatar)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
        (__VLS_ctx.profile.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("subtitle") }, });
        (__VLS_ctx.profile.title);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("about-content") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElDivider;
    /** @type { [typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("bio") }, });
    (__VLS_ctx.profile.bio);
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElDivider;
    /** @type { [typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("skills") }, });
    for (const [skill] of __VLS_getVForSourceType((__VLS_ctx.profile.skills))) {
        const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ] } */
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ key: ((skill)), type: ((__VLS_ctx.getRandomTagType())), ...{ class: ("skill-tag") }, }));
        const __VLS_38 = __VLS_37({ key: ((skill)), type: ((__VLS_ctx.getRandomTagType())), ...{ class: ("skill-tag") }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        (skill);
        __VLS_nonNullable(__VLS_41.slots).default;
        var __VLS_41;
    }
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElDivider;
    /** @type { [typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_nonNullable(__VLS_47.slots).default;
    var __VLS_47;
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElTimeline;
    /** @type { [typeof __VLS_components.ElTimeline, typeof __VLS_components.elTimeline, typeof __VLS_components.ElTimeline, typeof __VLS_components.elTimeline, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
    const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
    for (const [exp] of __VLS_getVForSourceType((__VLS_ctx.profile.experience))) {
        const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElTimelineItem;
        /** @type { [typeof __VLS_components.ElTimelineItem, typeof __VLS_components.elTimelineItem, typeof __VLS_components.ElTimelineItem, typeof __VLS_components.elTimelineItem, ] } */
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ key: ((exp.company)), timestamp: ((exp.period)), placement: ("top"), }));
        const __VLS_56 = __VLS_55({ key: ((exp.company)), timestamp: ((exp.period)), placement: ("top"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
        /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
        const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
        (exp.company);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (exp.position);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("description") }, });
        (exp.description);
        __VLS_nonNullable(__VLS_65.slots).default;
        var __VLS_65;
        __VLS_nonNullable(__VLS_59.slots).default;
        var __VLS_59;
    }
    __VLS_nonNullable(__VLS_53.slots).default;
    var __VLS_53;
    const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElDivider;
    /** @type { [typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ] } */
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
    const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
    __VLS_nonNullable(__VLS_71.slots).default;
    var __VLS_71;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("contact-info") }, });
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElDescriptions;
    /** @type { [typeof __VLS_components.ElDescriptions, typeof __VLS_components.elDescriptions, typeof __VLS_components.ElDescriptions, typeof __VLS_components.elDescriptions, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ column: ((2)), }));
    const __VLS_74 = __VLS_73({ column: ((2)), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElDescriptionsItem;
    /** @type { [typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ label: ("邮箱"), }));
    const __VLS_80 = __VLS_79({ label: ("邮箱"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElLink;
    /** @type { [typeof __VLS_components.ElLink, typeof __VLS_components.elLink, typeof __VLS_components.ElLink, typeof __VLS_components.elLink, ] } */
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ type: ("primary"), href: (('mailto:' + __VLS_ctx.profile.email)), }));
    const __VLS_86 = __VLS_85({ type: ("primary"), href: (('mailto:' + __VLS_ctx.profile.email)), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    (__VLS_ctx.profile.email);
    __VLS_nonNullable(__VLS_89.slots).default;
    var __VLS_89;
    __VLS_nonNullable(__VLS_83.slots).default;
    var __VLS_83;
    const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.ElDescriptionsItem;
    /** @type { [typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ] } */
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ label: ("GitHub"), }));
    const __VLS_92 = __VLS_91({ label: ("GitHub"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElLink;
    /** @type { [typeof __VLS_components.ElLink, typeof __VLS_components.elLink, typeof __VLS_components.ElLink, typeof __VLS_components.elLink, ] } */
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ type: ("primary"), href: ((__VLS_ctx.profile.github)), target: ("_blank"), }));
    const __VLS_98 = __VLS_97({ type: ("primary"), href: ((__VLS_ctx.profile.github)), target: ("_blank"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    (__VLS_ctx.profile.github);
    __VLS_nonNullable(__VLS_101.slots).default;
    var __VLS_101;
    __VLS_nonNullable(__VLS_95.slots).default;
    var __VLS_95;
    const __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.ElDescriptionsItem;
    /** @type { [typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ] } */
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ label: ("微信"), }));
    const __VLS_104 = __VLS_103({ label: ("微信"), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
    (__VLS_ctx.profile.wechat);
    __VLS_nonNullable(__VLS_107.slots).default;
    var __VLS_107;
    const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.ElDescriptionsItem;
    /** @type { [typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ] } */
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ label: ("所在地"), }));
    const __VLS_110 = __VLS_109({ label: ("所在地"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    (__VLS_ctx.profile.location);
    __VLS_nonNullable(__VLS_113.slots).default;
    var __VLS_113;
    __VLS_nonNullable(__VLS_77.slots).default;
    var __VLS_77;
    var __VLS_17;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['about'];
    __VLS_styleScopedClasses['about-card'];
    __VLS_styleScopedClasses['about-header'];
    __VLS_styleScopedClasses['subtitle'];
    __VLS_styleScopedClasses['about-content'];
    __VLS_styleScopedClasses['bio'];
    __VLS_styleScopedClasses['skills'];
    __VLS_styleScopedClasses['skill-tag'];
    __VLS_styleScopedClasses['description'];
    __VLS_styleScopedClasses['contact-info'];
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
            profile: profile,
            getRandomTagType: getRandomTagType,
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
