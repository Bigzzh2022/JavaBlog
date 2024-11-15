import api from './index';
export const articleApi = {
    // 获取文章列表
    getArticles(query) {
        return api.get('/articles', { params: query });
    },
    // 获取文章详情
    getArticle(id) {
        return api.get(`/articles/${id}`);
    },
    // 创建文章
    createArticle(data) {
        return api.post('/articles', data);
    },
    // 更新文章
    updateArticle(id, data) {
        return api.put(`/articles/${id}`, data);
    },
    // 删除文章
    deleteArticle(id) {
        return api.delete(`/articles/${id}`);
    },
    // 发布文章
    publishArticle(id) {
        return api.post(`/articles/${id}/publish`);
    },
    // 取消发布文章
    unpublishArticle(id) {
        return api.post(`/articles/${id}/unpublish`);
    }
};
