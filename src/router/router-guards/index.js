/**
 * @file router guards
 */
import store from '@/store';
// import {whiteList} from '@/router/router.config';
import NProgress from 'nprogress';

const beforeEachCallback = async (to, from, next) => {
    NProgress.start();
    store.dispatch('permission/SiderMenu');
    next();
    NProgress.done();
};
const beforeResolveCallback = (to, from, next) => {
    next();
};

const afterEachCallback = (to, from, next) => {
    NProgress.done();
};

export {beforeEachCallback, beforeResolveCallback, afterEachCallback};
