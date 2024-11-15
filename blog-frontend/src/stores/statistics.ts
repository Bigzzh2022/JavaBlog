import { defineStore } from 'pinia'
import { ref } from 'vue'
import { statisticsApi, type StatisticsData } from '@/api/statistics'

export const useStatisticsStore = defineStore('statistics', () => {
  const statistics = ref<StatisticsData | null>(null)
  const loading = ref(false)

  const fetchStatistics = async () => {
    try {
      loading.value = true
      const response = await statisticsApi.getOverview()
      statistics.value = response
    } finally {
      loading.value = false
    }
  }

  const fetchTimeRange = async (start: string, end: string) => {
    try {
      loading.value = true
      const response = await statisticsApi.getTimeRange(start, end)
      statistics.value = response
    } finally {
      loading.value = false
    }
  }

  return {
    statistics,
    loading,
    fetchStatistics,
    fetchTimeRange
  }
}) 