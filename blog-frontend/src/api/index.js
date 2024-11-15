import axios from 'axios';
import { ElMessage } from 'element-plus';
import router from '@/router';
// 创建 axios 实例
const api = axios.create({
    baseURL: '/api', // 通过 Vite 代理转发到后端
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json'
    }
});
// 请求拦截器
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
// 响应拦截器
api.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                ElMessage.error('请先登录');
                router.push('/login');
                break;
            case 403:
                ElMessage.error('没有权限');
                break;
            case 404:
                ElMessage.error('资源不存在');
                break;
            case 500:
                ElMessage.error('服务器错误');
                break;
            default:
                ElMessage.error(error.response.data.message || '请求失败');
        }
    }
    else {
        ElMessage.error('网络错误');
    }
    return Promise.reject(error);
});
export default api;
