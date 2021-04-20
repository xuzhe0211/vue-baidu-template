import axios from 'axios';
import {
    loadingRequestHandler,
    loadingResponseHandler,
    tokenRequestHandler,
    commonErrorHandler
} from './interceptorHandler';

// 创建 Axios 实例
let APP_URL_PREFIX = '';
if (process.env.NODE_ENV === 'development') {
    APP_URL_PREFIX = '/v2x/bsp/console';
} else {
    // const prefix = location.hostname.endsWith('78') ? location.host : `${location.hostname}:8088`;
    APP_URL_PREFIX = `//${location.host}/v2x/bsp/console`;
}
const axiosInstance = axios.create({
    timeout: 15000,
    baseURL: APP_URL_PREFIX
});

// 请求拦截器，后添加的先执行
axiosInstance.interceptors.request.use(tokenRequestHandler.onFulfilled, tokenRequestHandler.onRejected);
axiosInstance.interceptors.request.use(loadingRequestHandler.onFulfilled, loadingRequestHandler.onRejected);

// 响应拦截器，后添加的后执行
axiosInstance.interceptors.response.use(loadingResponseHandler.onFulfilled, loadingResponseHandler.onRejected);
axiosInstance.interceptors.response.use(commonErrorHandler.onFulfilled, commonErrorHandler.onRejected);

// 封装 get 方法
const get = async (url, params, config) => {
    const response = await axiosInstance.get(url, {params, ...config});
    return response.data;
};

// 封装 post 方法
const post = async (url, data, config) => {
    const response = await axiosInstance.post(url, data, {
        ...config
    });
    return response.data;
};

// 封装 put 方法
const put = async (url, data, config) => {
    const response = await axiosInstance.put(url, data, {
        ...config
    });
    return response.data;
};

// 封装 put 方法
const del = async (url, data, config) => {
    const response = await axiosInstance.delete(url, {
        data,
        ...config
    });
    return response.data;
};

// 使用 request 统一调用
const request = {get, post, del, put};

export {request};
