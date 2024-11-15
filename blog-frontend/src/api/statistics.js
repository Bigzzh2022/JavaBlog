import api from './index';
export const statisticsApi = {
    // 获取总体统计数据
    getOverview() {
        return api.get('/statistics/overview');
    },
    // 获取指定时间范围的统计数据
    getTimeRange(start, end) {
        return api.get('/statistics/range', {
            params: { start, end }
        });
    },
    // 获取文章访问详情
    getArticleStats(articleId) {
        return api.get(`/statistics/articles/${articleId}`);
    }
};
