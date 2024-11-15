import api from './index';
export const userApi = {
    // 更新个人资料
    updateProfile(data) {
        return api.put('/user/profile', data);
    },
    // 更新密码
    updatePassword(data) {
        return api.put('/user/password', data);
    },
    // 获取用户通知
    getNotifications() {
        return api.get('/user/notifications');
    },
    // 标记通知为已读
    markNotificationRead(id) {
        return api.put(`/user/notifications/${id}/read`);
    },
    // 获取用户设置
    getSettings() {
        return api.get('/user/settings');
    },
    // 更新用户设置
    updateSettings(settings) {
        return api.put('/user/settings', settings);
    }
};
