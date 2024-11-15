import { defineStore } from 'pinia';
import { ref } from 'vue';
import { settingApi } from '@/api/setting';
import { ElMessage } from 'element-plus';
export const useSettingStore = defineStore('setting', () => {
    const settings = ref(null);
    const loading = ref(false);
    const fetchSettings = async () => {
        try {
            loading.value = true;
            const response = await settingApi.getSettings();
            settings.value = response;
        }
        catch (error) {
            ElMessage.error('获取设置失败');
        }
        finally {
            loading.value = false;
        }
    };
    const updateSettings = async (newSettings) => {
        try {
            loading.value = true;
            await settingApi.updateSettings(newSettings);
            Object.assign(settings.value || {}, newSettings);
            ElMessage.success('设置已保存');
        }
        catch (error) {
            ElMessage.error('保存设置失败');
        }
        finally {
            loading.value = false;
        }
    };
    return {
        settings,
        loading,
        fetchSettings,
        updateSettings
    };
});
