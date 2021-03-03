import Vue from 'vue';
import Router from 'vue-router';
import {constantRouterMap} from './router.config';
import {beforeEachCallback, beforeResolveCallback, afterEachCallback} from '@/router/router-guards/index';

// 当页面再次进入同一个路由地址时，控制台报错
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch((error) => error);
};

Vue.use(Router);

const createRouter = () =>
    new Router({
        // mode: 'history',
        // base: process.env.BASE_URL,
        routes: constantRouterMap,
        scrollBehavior: () => ({y: 0})
    });
const router = createRouter();

// 全局前置导航
router.beforeEach(beforeEachCallback);

// 全局解析前置
router.beforeResolve(beforeResolveCallback);

// 全局后置
router.afterEach(afterEachCallback);

// reset路由
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}
export default router;
