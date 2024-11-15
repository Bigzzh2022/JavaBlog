<template>
  <div class="statistics-panel">
    <!-- 数据概览卡片 -->
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in overviewItems" :key="item.label">
        <el-card shadow="hover" class="overview-card">
          <div class="overview-content">
            <el-icon class="overview-icon" :class="item.type">
              <component :is="item.icon" />
            </el-icon>
            <div class="overview-info">
              <div class="overview-value">{{ item.value }}</div>
              <div class="overview-label">{{ item.label }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 趋势图表 -->
    <el-row :gutter="20" class="chart-row">
      <el-col :span="16">
        <el-card>
          <template #header>
            <div class="chart-header">
              <span>数据趋势</span>
              <el-radio-group v-model="timeRange" size="small">
                <el-radio-button label="week">最近一周</el-radio-button>
                <el-radio-button label="month">最近一月</el-radio-button>
                <el-radio-button label="year">最近一年</el-radio-button>
              </el-radio-group>
            </div>
          </template>
          <div class="chart-container">
            <v-chart class="chart" :option="trendOption" autoresize />
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <div class="chart-header">
              <span>分类统计</span>
            </div>
          </template>
          <div class="chart-container">
            <v-chart class="chart" :option="categoryOption" autoresize />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 热门文章 -->
    <el-card class="popular-articles">
      <template #header>
        <div class="card-header">
          <span>热门文章</span>
        </div>
      </template>
      <el-table :data="popularArticles" style="width: 100%">
        <el-table-column prop="title" label="标题" min-width="300">
          <template #default="{ row }">
            <el-link @click="router.push(`/article/${row.id}`)">
              {{ row.title }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column prop="views" label="阅读" width="120" />
        <el-table-column prop="likes" label="点赞" width="120" />
        <el-table-column prop="comments" label="评论" width="120" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStatisticsStore } from '@/stores/statistics'
import { Document, View, Star, ChatDotRound } from '@element-plus/icons-vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  LineChart,
  PieChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent
} from 'echarts/components'

// 注册 ECharts 必要组件
use([
  CanvasRenderer,
  LineChart,
  PieChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent
])

const router = useRouter()
const statisticsStore = useStatisticsStore()
const timeRange = ref('week')

onMounted(() => {
  statisticsStore.fetchStatistics()
})

// 数据概览
const overviewItems = computed(() => {
  const stats = statisticsStore.statistics?.articles
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
  ]
})

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
}))

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
}))

// 热门文章
const popularArticles = computed(() => 
  statisticsStore.statistics?.trending.popular || []
)
</script>

<style scoped>
.statistics-panel {
  padding: 20px;
}

.overview-card {
  margin-bottom: 20px;
}

.overview-content {
  display: flex;
  align-items: center;
}

.overview-icon {
  font-size: 48px;
  margin-right: 16px;
}

.overview-icon.primary {
  color: var(--el-color-primary);
}

.overview-icon.success {
  color: var(--el-color-success);
}

.overview-icon.warning {
  color: var(--el-color-warning);
}

.overview-icon.danger {
  color: var(--el-color-danger);
}

.overview-info {
  flex: 1;
}

.overview-value {
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 8px;
}

.overview-label {
  color: var(--el-text-color-secondary);
}

.chart-row {
  margin: 20px 0;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chart-container {
  height: 300px;
}

.chart {
  width: 100%;
  height: 100%;
}

.popular-articles {
  margin-top: 20px;
}
</style> 