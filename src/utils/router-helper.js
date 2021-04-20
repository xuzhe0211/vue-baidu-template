/**
 * @file 路由相关辅助函数
 */

/**
 *
 * 非开发模式路由懒加载
 *
 * @param componentName `./src/views`下的文件名
 */
export const lazyLoadHelper = (componentName) => {
    if (process.env.NODE_ENV === 'development') {
        const comp = require(`@/views/${componentName}.vue`);
        return comp.default || comp;
    }

    return () => import(/* webpackChunkName: "view-[request]-[index]" */ `@/views/${componentName}.vue`);
};

// 公共路由 Path 常量
export const CommonUrls = {
    Root: '',
    Home: '/home',
    Login: '/login'
};

// 导航路由处理
export const getItemPath = (baseUrl, ...paths) => paths.reduce((total, current) => (total += `${current}`), baseUrl);
