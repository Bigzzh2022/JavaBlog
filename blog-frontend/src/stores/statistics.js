import { defineStore } from 'pinia';
import { ref } from 'vue';
import { statisticsApi } from '@/api/statistics';
export const useStatisticsStore = defineStore('statistics', () => {
    const statistics = ref(null);
    const loading = ref(false);
    const fetchStatistics = async () => {
        try {
            loading.value = true;
            const response = await statisticsApi.getOverview();
            statistics.value = response;
        }
        finally {
            loading.value = false;
        }
    };
    const fetchTimeRange = async (start, end) => {
        try {
            loading.value = true;
            const response = await statisticsApi.getTimeRange(start, end);
            statistics.value = response;
        }
        finally {
            loading.value = false;
        }
    };
    return {
        statistics,
        loading,
        fetchStatistics,
        fetchTimeRange
    };
});
