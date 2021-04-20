/**
 * @file Describe the file
 */
import {lazyLoadHelper} from '@/utils/router-helper';

export const constantRouterMap = [
    {
        path: '/',
        name: 'Home',
        component: lazyLoadHelper('Home')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
];
