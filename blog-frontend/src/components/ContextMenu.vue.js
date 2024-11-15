import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const visible = ref(false);
const x = ref(0);
const y = ref(0);
const show = (event) => {
    event.preventDefault();
    x.value = event.clientX;
    y.value = event.clientY;
    visible.value = true;
    // 添加全局点击事件监听
    document.addEventListener('click', hide);
    document.addEventListener('contextmenu', hide);
};
const hide = () => {
    visible.value = false;
    // 移除全局点击事件监听
    document.removeEventListener('click', hide);
    document.removeEventListener('contextmenu', hide);
};
const handleMenuClick = (item) => {
    if (item.disabled)
        return;
    if (item.handler) {
        item.handler();
    }
    hide();
};
// 获取导航按钮的提示文本
const getNavTitle = (key) => {
    const titles = {
        back: '返回上一页',
        forward: '前往下一页',
        refresh: '刷新页面',
        top: '回到顶部'
    };
    return titles[key] || '';
};
const __VLS_exposed = {
    show,
    hide
};
defineExpose({
    show,
    hide
}); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_styleScopedClasses['context-menu'];
    __VLS_styleScopedClasses['nav-btn'];
    __VLS_styleScopedClasses['dark'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['menu-item-content'];
    __VLS_styleScopedClasses['menu-item'];
    __VLS_styleScopedClasses['menu-item-disabled'];
    __VLS_styleScopedClasses['menu-item-content'];
    __VLS_styleScopedClasses['dark'];
    __VLS_styleScopedClasses['menu-item'];
    __VLS_styleScopedClasses['dark'];
    __VLS_styleScopedClasses['menu-icon'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("context-menu") }, ...{ style: (({ left: __VLS_ctx.x + 'px', top: __VLS_ctx.y + 'px' })) }, });
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: (__VLS_ctx.visible) }, null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("nav-group") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuItems.slice(0, 4)))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.handleMenuClick(item);
                } }, key: ((item.key)), ...{ class: ("nav-btn") }, title: ((__VLS_ctx.getNavTitle(item.key))), });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
        const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
        const __VLS_6 = ((item.icon));
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
        const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_nonNullable(__VLS_5.slots).default;
        var __VLS_5;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-list") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuItems.slice(4)))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.handleMenuClick(item);
                } }, key: ((item.key)), ...{ class: ("menu-item") }, ...{ class: (({ 'menu-item-disabled': item.disabled })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu-item-content") }, });
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("menu-icon") }, }));
        const __VLS_14 = __VLS_13({ ...{ class: ("menu-icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        const __VLS_18 = ((item.icon));
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
        const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_nonNullable(__VLS_17.slots).default;
        var __VLS_17;
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("menu-label") }, });
        (item.label);
    }
    __VLS_styleScopedClasses['context-menu'];
    __VLS_styleScopedClasses['nav-group'];
    __VLS_styleScopedClasses['nav-btn'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['menu-list'];
    __VLS_styleScopedClasses['menu-item'];
    __VLS_styleScopedClasses['menu-item-disabled'];
    __VLS_styleScopedClasses['menu-item-content'];
    __VLS_styleScopedClasses['menu-icon'];
    __VLS_styleScopedClasses['menu-label'];
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
            visible: visible,
            x: x,
            y: y,
            handleMenuClick: handleMenuClick,
            getNavTitle: getNavTitle,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
