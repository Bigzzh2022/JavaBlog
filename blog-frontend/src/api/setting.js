import api from './index';
export const settingApi = {
    getSettings() {
        return api.get('/settings');
    },
    updateSettings(settings) {
        return api.put('/settings', settings);
    },
    getSetting(key) {
        return api.get(`/settings/${key}`);
    },
    setSetting(key, value) {
        return api.put(`/settings/${key}`, value);
    }
};
