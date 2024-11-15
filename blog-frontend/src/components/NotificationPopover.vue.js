import { onMounted } from 'vue';
import { Bell, ChatDotRound, Star, User, InfoFilled } from '@element-plus/icons-vue';
import { useNotificationStore } from '@/stores/notification';
import { formatDistanceToNow } from 'date-fns';
import { zhCN } from 'date-fns/locale';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const notificationStore = useNotificationStore();
const { notifications, unreadCount, fetchNotifications, markAsRead } = notificationStore;
onMounted(() => {
    fetchNotifications();
});
const getNotificationIcon = (type) => {
    const icons = {
        comment: ChatDotRound,
        like: Star,
        follow: User,
        system: InfoFilled
    };
    return icons[type];
};
const formatTime = (time) => {
    return formatDistanceToNow(new Date(time), { addSuffix: true, locale: zhCN });
};
const handleNotificationClick = (notification) => {
    if (!notification.isRead) {
        markAsRead(notification.id);
    }
    // 处理通知点击，可以根据类型跳转到不同页面
};
const markAllAsRead = () => {
    // 实现全部标记为已读的逻辑
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
    __VLS_styleScopedClasses['notification-item'];
    __VLS_styleScopedClasses['notification-item'];
    __VLS_styleScopedClasses['notification-icon'];
    __VLS_styleScopedClasses['notification-icon'];
    __VLS_styleScopedClasses['notification-icon'];
    __VLS_styleScopedClasses['notification-icon'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElPopover;
    /** @type { [typeof __VLS_components.ElPopover, typeof __VLS_components.elPopover, typeof __VLS_components.ElPopover, typeof __VLS_components.elPopover, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ placement: ("bottom"), width: ((300)), trigger: ("click"), popperClass: ("notification-popover"), }));
    const __VLS_2 = __VLS_1({ placement: ("bottom"), width: ((300)), trigger: ("click"), popperClass: ("notification-popover"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { reference: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.ElBadge;
        /** @type { [typeof __VLS_components.ElBadge, typeof __VLS_components.elBadge, typeof __VLS_components.ElBadge, typeof __VLS_components.elBadge, ] } */
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ value: ((__VLS_ctx.unreadCount)), hidden: ((__VLS_ctx.unreadCount === 0)), }));
        const __VLS_9 = __VLS_8({ value: ((__VLS_ctx.unreadCount)), hidden: ((__VLS_ctx.unreadCount === 0)), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
        const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ circle: (true), }));
        const __VLS_15 = __VLS_14({ circle: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
        const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
        const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
        const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.Bell;
        /** @type { [typeof __VLS_components.Bell, ] } */
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
        const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
        __VLS_nonNullable(__VLS_24.slots).default;
        var __VLS_24;
        __VLS_nonNullable(__VLS_18.slots).default;
        var __VLS_18;
        __VLS_nonNullable(__VLS_12.slots).default;
        var __VLS_12;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("notification-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("notification-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{ 'onClick': {} }, link: (true), type: ("primary"), size: ("small"), }));
    const __VLS_33 = __VLS_32({ ...{ 'onClick': {} }, link: (true), type: ("primary"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    let __VLS_37;
    const __VLS_38 = {
        onClick: (__VLS_ctx.markAllAsRead)
    };
    let __VLS_34;
    let __VLS_35;
    __VLS_nonNullable(__VLS_36.slots).default;
    var __VLS_36;
    const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.ElTabs;
    /** @type { [typeof __VLS_components.ElTabs, typeof __VLS_components.elTabs, typeof __VLS_components.ElTabs, typeof __VLS_components.elTabs, ] } */
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({}));
    const __VLS_41 = __VLS_40({}, ...__VLS_functionalComponentArgsRest(__VLS_40));
    const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.ElTabPane;
    /** @type { [typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, ] } */
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ label: ("全部"), }));
    const __VLS_47 = __VLS_46({ label: ("全部"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    const __VLS_51 = __VLS_resolvedLocalAndGlobalComponents.ElScrollbar;
    /** @type { [typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, typeof __VLS_components.ElScrollbar, typeof __VLS_components.elScrollbar, ] } */
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ maxHeight: ("300px"), }));
    const __VLS_53 = __VLS_52({ maxHeight: ("300px"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    if (__VLS_ctx.notifications.length) {
        for (const [notification] of __VLS_getVForSourceType((__VLS_ctx.notifications))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.notifications.length)))
                            return;
                        __VLS_ctx.handleNotificationClick(notification);
                    } }, key: ((notification.id)), ...{ class: ("notification-item") }, ...{ class: (({ unread: !notification.isRead })) }, });
            const __VLS_57 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
            /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
            // @ts-ignore
            const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ ...{ class: ("notification-icon") }, ...{ class: ((notification.type)) }, }));
            const __VLS_59 = __VLS_58({ ...{ class: ("notification-icon") }, ...{ class: ((notification.type)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_58));
            const __VLS_63 = ((__VLS_ctx.getNotificationIcon(notification.type)));
            // @ts-ignore
            const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({}));
            const __VLS_65 = __VLS_64({}, ...__VLS_functionalComponentArgsRest(__VLS_64));
            __VLS_nonNullable(__VLS_62.slots).default;
            var __VLS_62;
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("notification-content") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("notification-title") }, });
            (notification.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("notification-text") }, });
            (notification.content);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("notification-time") }, });
            (__VLS_ctx.formatTime(notification.createdAt));
        }
    }
    else {
        const __VLS_69 = __VLS_resolvedLocalAndGlobalComponents.ElEmpty;
        /** @type { [typeof __VLS_components.ElEmpty, typeof __VLS_components.elEmpty, ] } */
        // @ts-ignore
        const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({ description: ("暂无通知"), }));
        const __VLS_71 = __VLS_70({ description: ("暂无通知"), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
    }
    __VLS_nonNullable(__VLS_56.slots).default;
    var __VLS_56;
    __VLS_nonNullable(__VLS_50.slots).default;
    var __VLS_50;
    __VLS_nonNullable(__VLS_44.slots).default;
    var __VLS_44;
    var __VLS_5;
    __VLS_styleScopedClasses['notification-container'];
    __VLS_styleScopedClasses['notification-header'];
    __VLS_styleScopedClasses['notification-item'];
    __VLS_styleScopedClasses['unread'];
    __VLS_styleScopedClasses['notification-icon'];
    __VLS_styleScopedClasses['notification-content'];
    __VLS_styleScopedClasses['notification-title'];
    __VLS_styleScopedClasses['notification-text'];
    __VLS_styleScopedClasses['notification-time'];
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
            Bell: Bell,
            notifications: notifications,
            unreadCount: unreadCount,
            getNotificationIcon: getNotificationIcon,
            formatTime: formatTime,
            handleNotificationClick: handleNotificationClick,
            markAllAsRead: markAllAsRead,
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
