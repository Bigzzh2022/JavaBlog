import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStatisticsStore } from '@/stores/statistics';
import { Document, View, Star, ChatDotRound } from '@element-plus/icons-vue';
import VChart from 'vue-echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, PieChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// 注册 ECharts 必要组件
use([
    CanvasRenderer,
    LineChart,
    PieChart,
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent
]);
const router = useRouter();
const statisticsStore = useStatisticsStore();
const timeRange = ref('week');
onMounted(() => {
    statisticsStore.fetchStatistics();
});
// 数据概览
const overviewItems = computed(() => {
    const stats = statisticsStore.statistics?.articles;
    return [
        {
            label: '文章总数',
            value: stats?.total || 0,
            icon: Document,
            type: 'primary'
        },
        {
            label: '总阅读量',
            value: stats?.views || 0,
            icon: View,
            type: 'success'
        },
        {
            label: '获赞总数',
            value: stats?.likes || 0,
            icon: Star,
            type: 'warning'
        },
        {
            label: '评论总数',
            value: stats?.comments || 0,
            icon: ChatDotRound,
            type: 'danger'
        }
    ];
});
// 趋势图表配置
const trendOption = computed(() => ({
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['阅读量', '点赞数', '评论数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: statisticsStore.statistics?.trending.daily.dates || []
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '阅读量',
            type: 'line',
            data: statisticsStore.statistics?.trending.daily.views || []
        },
        {
            name: '点赞数',
            type: 'line',
            data: statisticsStore.statistics?.trending.daily.likes || []
        },
        {
            name: '评论数',
            type: 'line',
            data: statisticsStore.statistics?.trending.daily.comments || []
        }
    ]
}));
// 分类统计图表配置
const categoryOption = computed(() => ({
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
    },
    series: [
        {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '14',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: statisticsStore.statistics?.categories.map(item => ({
                name: item.name,
                value: item.count
            })) || []
        }
    ]
}));
// 热门文章
const popularArticles = computed(() => statisticsStore.statistics?.trending.popular || []); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_styleScopedClasses['overview-icon'];
    __VLS_styleScopedClasses['overview-icon'];
    __VLS_styleScopedClasses['overview-icon'];
    __VLS_styleScopedClasses['overview-icon'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("statistics-panel") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ gutter: ((20)), }));
    const __VLS_2 = __VLS_1({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.overviewItems))) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
        /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ span: ((6)), key: ((item.label)), }));
        const __VLS_8 = __VLS_7({ span: ((6)), key: ((item.label)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
        /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ shadow: ("hover"), ...{ class: ("overview-card") }, }));
        const __VLS_14 = __VLS_13({ shadow: ("hover"), ...{ class: ("overview-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overview-content") }, });
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("overview-icon") }, ...{ class: ((item.type)) }, }));
        const __VLS_20 = __VLS_19({ ...{ class: ("overview-icon") }, ...{ class: ((item.type)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        const __VLS_24 = ((item.icon));
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
        const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
        __VLS_nonNullable(__VLS_23.slots).default;
        var __VLS_23;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overview-info") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overview-value") }, });
        (item.value);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overview-label") }, });
        (item.label);
        __VLS_nonNullable(__VLS_17.slots).default;
        var __VLS_17;
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ElRow;
    /** @type { [typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ gutter: ((20)), ...{ class: ("chart-row") }, }));
    const __VLS_32 = __VLS_31({ gutter: ((20)), ...{ class: ("chart-row") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ span: ((16)), }));
    const __VLS_38 = __VLS_37({ span: ((16)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_47.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chart-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElRadioGroup;
        /** @type { [typeof __VLS_components.ElRadioGroup, typeof __VLS_components.elRadioGroup, typeof __VLS_components.ElRadioGroup, typeof __VLS_components.elRadioGroup, ] } */
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ modelValue: ((__VLS_ctx.timeRange)), size: ("small"), }));
        const __VLS_50 = __VLS_49({ modelValue: ((__VLS_ctx.timeRange)), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.ElRadioButton;
        /** @type { [typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, ] } */
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ label: ("week"), }));
        const __VLS_56 = __VLS_55({ label: ("week"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        __VLS_nonNullable(__VLS_59.slots).default;
        var __VLS_59;
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElRadioButton;
        /** @type { [typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ label: ("month"), }));
        const __VLS_62 = __VLS_61({ label: ("month"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        __VLS_nonNullable(__VLS_65.slots).default;
        var __VLS_65;
        const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.ElRadioButton;
        /** @type { [typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, ] } */
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ label: ("year"), }));
        const __VLS_68 = __VLS_67({ label: ("year"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        __VLS_nonNullable(__VLS_71.slots).default;
        var __VLS_71;
        __VLS_nonNullable(__VLS_53.slots).default;
        var __VLS_53;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chart-container") }, });
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.VChart;
    /** @type { [typeof __VLS_components.VChart, typeof __VLS_components.vChart, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ class: ("chart") }, option: ((__VLS_ctx.trendOption)), autoresize: (true), }));
    const __VLS_74 = __VLS_73({ ...{ class: ("chart") }, option: ((__VLS_ctx.trendOption)), autoresize: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    var __VLS_47;
    __VLS_nonNullable(__VLS_41.slots).default;
    var __VLS_41;
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElCol;
    /** @type { [typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ span: ((8)), }));
    const __VLS_80 = __VLS_79({ span: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({}));
    const __VLS_86 = __VLS_85({}, ...__VLS_functionalComponentArgsRest(__VLS_85));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_89.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chart-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chart-container") }, });
    const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.VChart;
    /** @type { [typeof __VLS_components.VChart, typeof __VLS_components.vChart, ] } */
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ ...{ class: ("chart") }, option: ((__VLS_ctx.categoryOption)), autoresize: (true), }));
    const __VLS_92 = __VLS_91({ ...{ class: ("chart") }, option: ((__VLS_ctx.categoryOption)), autoresize: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    var __VLS_89;
    __VLS_nonNullable(__VLS_83.slots).default;
    var __VLS_83;
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElCard;
    /** @type { [typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ] } */
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ ...{ class: ("popular-articles") }, }));
    const __VLS_98 = __VLS_97({ ...{ class: ("popular-articles") }, }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { header: __VLS_thisSlot } = __VLS_nonNullable(__VLS_101.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    const __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.ElTable;
    /** @type { [typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ] } */
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ data: ((__VLS_ctx.popularArticles)), ...{ style: ({}) }, }));
    const __VLS_104 = __VLS_103({ data: ((__VLS_ctx.popularArticles)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_103));
    const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ prop: ("title"), label: ("标题"), minWidth: ("300"), }));
    const __VLS_110 = __VLS_109({ prop: ("title"), label: ("标题"), minWidth: ("300"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_113.slots);
        const [{ row }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_114 = __VLS_resolvedLocalAndGlobalComponents.ElLink;
        /** @type { [typeof __VLS_components.ElLink, typeof __VLS_components.elLink, typeof __VLS_components.ElLink, typeof __VLS_components.elLink, ] } */
        // @ts-ignore
        const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ ...{ 'onClick': {} }, }));
        const __VLS_116 = __VLS_115({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_115));
        let __VLS_120;
        const __VLS_121 = {
            onClick: (...[$event]) => {
                __VLS_ctx.router.push(`/article/${row.id}`);
            }
        };
        let __VLS_117;
        let __VLS_118;
        (row.title);
        __VLS_nonNullable(__VLS_119.slots).default;
        var __VLS_119;
    }
    var __VLS_113;
    const __VLS_122 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ prop: ("views"), label: ("阅读"), width: ("120"), }));
    const __VLS_124 = __VLS_123({ prop: ("views"), label: ("阅读"), width: ("120"), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
    const __VLS_128 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ prop: ("likes"), label: ("点赞"), width: ("120"), }));
    const __VLS_130 = __VLS_129({ prop: ("likes"), label: ("点赞"), width: ("120"), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
    const __VLS_134 = __VLS_resolvedLocalAndGlobalComponents.ElTableColumn;
    /** @type { [typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ] } */
    // @ts-ignore
    const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({ prop: ("comments"), label: ("评论"), width: ("120"), }));
    const __VLS_136 = __VLS_135({ prop: ("comments"), label: ("评论"), width: ("120"), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
    __VLS_nonNullable(__VLS_107.slots).default;
    var __VLS_107;
    var __VLS_101;
    __VLS_styleScopedClasses['statistics-panel'];
    __VLS_styleScopedClasses['overview-card'];
    __VLS_styleScopedClasses['overview-content'];
    __VLS_styleScopedClasses['overview-icon'];
    __VLS_styleScopedClasses['overview-info'];
    __VLS_styleScopedClasses['overview-value'];
    __VLS_styleScopedClasses['overview-label'];
    __VLS_styleScopedClasses['chart-row'];
    __VLS_styleScopedClasses['chart-header'];
    __VLS_styleScopedClasses['chart-container'];
    __VLS_styleScopedClasses['chart'];
    __VLS_styleScopedClasses['chart-header'];
    __VLS_styleScopedClasses['chart-container'];
    __VLS_styleScopedClasses['chart'];
    __VLS_styleScopedClasses['popular-articles'];
    __VLS_styleScopedClasses['card-header'];
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
            VChart: VChart,
            router: router,
            timeRange: timeRange,
            overviewItems: overviewItems,
            trendOption: trendOption,
            categoryOption: categoryOption,
            popularArticles: popularArticles,
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
