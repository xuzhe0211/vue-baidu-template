/**
 * @file Describe the file
*/
import {lazyLoadHelper} from '@/utils/router-helper';

export const constantRouterMap = [
    {
        path: '/',
        redirect: '/camera',
        siderHidden: true
    },
    {
        path: '/camera',
        name: 'camera',
        redirect: '/camera/internal',
        component: resolve => require(['@/components/layouts/Home.vue'], resolve),
        meta: {title: '摄像头', icon: 'rsu-index'},
        children: [
            {
                path: '/camera/internal',
                name: 'cameraInternal',
                component: lazyLoadHelper('camera/internal/index'),
                meta: {title: '内参标定', icon: 'rsu-index'}
            }, {
                path: '/camera/external',
                name: 'cameraExternal',
                component: lazyLoadHelper('camera/external/index'),
                meta: {title: '外参标定', icon: 'rsu-index'}
            }, {
                path: '/camera/cross',
                name: 'cameraCross',
                component: lazyLoadHelper('home/index'),
                meta: {title: '交叉验证', icon: 'rsu-index'}
            }
        ]
    },
    {
        path: '/service1',
        redirect: '/services1',
        component: resolve => require(['@/components/layouts/Home.vue'], resolve),
        meta: {title: '毫米波雷达'},
        children: [
            {
                path: '/services1',
                name: 'services1',
                component: lazyLoadHelper('home/index'),
                meta: {title: '外参数标定', icon: 'rsu-services'}
            }
        ]
    }, {
        path: '/base',
        redirect: '/base',
        component: resolve => require(['@/components/layouts/Home.vue'], resolve),
        meta: {title: '基础数据管理', icon: 'rsu-billing'},
        children: [
            {
                path: '/roadPoint',
                name: 'roadPoint',
                component: lazyLoadHelper('basicData/roadPoint/index'),
                meta: {title: '路测点管理'}
            }, {
                path: '/equipmentManufacturer',
                name: 'equipmentManufacturer',
                component: lazyLoadHelper('basicData/equipmentManufacturer/index'),
                meta: {title: '设备厂商管理'}
            }, {
                path: '/equipmentModel',
                name: 'equipmentModel',
                component: lazyLoadHelper('basicData/equipmentModel/index'),
                meta: {title: '设备型号管理'}
            }
        ]
    },
];