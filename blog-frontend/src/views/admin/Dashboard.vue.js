import { ref } from 'vue';
import { useRouter } from 'vue-router';
import StatisticsPanel from '@/components/StatisticsPanel.vue';
import { DataLine, Document, Files, ChatDotRound, User, Setting } from '@element-plus/icons-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const activeMenu = ref('/admin');
const handleMenuSelect = (index) => {
    activeMenu.value = index;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("admin-dashboard") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElContainer;
    /** @type { [typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElAside;
    /** @type { [typeof __VLS_components.ElAside, typeof __VLS_components.elAside, typeof __VLS_components.ElAside, typeof __VLS_components.elAside, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ width: ("200px"), }));
    const __VLS_8 = __VLS_7({ width: ("200px"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElMenu;
    /** @type { [typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onSelect': {} }, defaultActive: ((__VLS_ctx.activeMenu)), ...{ class: ("admin-menu") }, router: (true), }));
    const __VLS_14 = __VLS_13({ ...{ 'onSelect': {} }, defaultActive: ((__VLS_ctx.activeMenu)), ...{ class: ("admin-menu") }, router: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onSelect: (__VLS_ctx.handleMenuSelect)
    };
    let __VLS_15;
    let __VLS_16;
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ index: ("/admin"), }));
    const __VLS_22 = __VLS_21({ index: ("/admin"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
    const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.DataLine;
    /** @type { [typeof __VLS_components.DataLine, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
    const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
    __VLS_nonNullable(__VLS_31.slots).default;
    var __VLS_31;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_25.slots).default;
    var __VLS_25;
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ index: ("/admin/articles"), }));
    const __VLS_40 = __VLS_39({ index: ("/admin/articles"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    const __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({}));
    const __VLS_46 = __VLS_45({}, ...__VLS_functionalComponentArgsRest(__VLS_45));
    const __VLS_50 = __VLS_resolvedLocalAndGlobalComponents.Document;
    /** @type { [typeof __VLS_components.Document, ] } */
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({}));
    const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
    __VLS_nonNullable(__VLS_49.slots).default;
    var __VLS_49;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_43.slots).default;
    var __VLS_43;
    const __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ index: ("/admin/categories"), }));
    const __VLS_58 = __VLS_57({ index: ("/admin/categories"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    const __VLS_62 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({}));
    const __VLS_64 = __VLS_63({}, ...__VLS_functionalComponentArgsRest(__VLS_63));
    const __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.Files;
    /** @type { [typeof __VLS_components.Files, ] } */
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({}));
    const __VLS_70 = __VLS_69({}, ...__VLS_functionalComponentArgsRest(__VLS_69));
    __VLS_nonNullable(__VLS_67.slots).default;
    var __VLS_67;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_61.slots).default;
    var __VLS_61;
    const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ index: ("/admin/comments"), }));
    const __VLS_76 = __VLS_75({ index: ("/admin/comments"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({}));
    const __VLS_82 = __VLS_81({}, ...__VLS_functionalComponentArgsRest(__VLS_81));
    const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.ChatDotRound;
    /** @type { [typeof __VLS_components.ChatDotRound, ] } */
    // @ts-ignore
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({}));
    const __VLS_88 = __VLS_87({}, ...__VLS_functionalComponentArgsRest(__VLS_87));
    __VLS_nonNullable(__VLS_85.slots).default;
    var __VLS_85;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_79.slots).default;
    var __VLS_79;
    const __VLS_92 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ index: ("/admin/users"), }));
    const __VLS_94 = __VLS_93({ index: ("/admin/users"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    const __VLS_98 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({}));
    const __VLS_100 = __VLS_99({}, ...__VLS_functionalComponentArgsRest(__VLS_99));
    const __VLS_104 = __VLS_resolvedLocalAndGlobalComponents.User;
    /** @type { [typeof __VLS_components.User, ] } */
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({}));
    const __VLS_106 = __VLS_105({}, ...__VLS_functionalComponentArgsRest(__VLS_105));
    __VLS_nonNullable(__VLS_103.slots).default;
    var __VLS_103;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_97.slots).default;
    var __VLS_97;
    const __VLS_110 = __VLS_resolvedLocalAndGlobalComponents.ElMenuItem;
    /** @type { [typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ] } */
    // @ts-ignore
    const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ index: ("/admin/settings"), }));
    const __VLS_112 = __VLS_111({ index: ("/admin/settings"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
    const __VLS_116 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
    // @ts-ignore
    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({}));
    const __VLS_118 = __VLS_117({}, ...__VLS_functionalComponentArgsRest(__VLS_117));
    const __VLS_122 = __VLS_resolvedLocalAndGlobalComponents.Setting;
    /** @type { [typeof __VLS_components.Setting, ] } */
    // @ts-ignore
    const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({}));
    const __VLS_124 = __VLS_123({}, ...__VLS_functionalComponentArgsRest(__VLS_123));
    __VLS_nonNullable(__VLS_121.slots).default;
    var __VLS_121;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_nonNullable(__VLS_115.slots).default;
    var __VLS_115;
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_128 = __VLS_resolvedLocalAndGlobalComponents.ElMain;
    /** @type { [typeof __VLS_components.ElMain, typeof __VLS_components.elMain, typeof __VLS_components.ElMain, typeof __VLS_components.elMain, ] } */
    // @ts-ignore
    const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({}));
    const __VLS_130 = __VLS_129({}, ...__VLS_functionalComponentArgsRest(__VLS_129));
    if (__VLS_ctx.activeMenu === '/admin') {
        // @ts-ignore
        [StatisticsPanel,];
        // @ts-ignore
        const __VLS_134 = __VLS_asFunctionalComponent(StatisticsPanel, new StatisticsPanel({}));
        const __VLS_135 = __VLS_134({}, ...__VLS_functionalComponentArgsRest(__VLS_134));
    }
    else {
        const __VLS_139 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
        /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
        // @ts-ignore
        const __VLS_140 = __VLS_asFunctionalComponent(__VLS_139, new __VLS_139({}));
        const __VLS_141 = __VLS_140({}, ...__VLS_functionalComponentArgsRest(__VLS_140));
    }
    __VLS_nonNullable(__VLS_133.slots).default;
    var __VLS_133;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['admin-dashboard'];
    __VLS_styleScopedClasses['admin-menu'];
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
            StatisticsPanel: StatisticsPanel,
            DataLine: DataLine,
            Document: Document,
            Files: Files,
            ChatDotRound: ChatDotRound,
            User: User,
            Setting: Setting,
            activeMenu: activeMenu,
            handleMenuSelect: handleMenuSelect,
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
