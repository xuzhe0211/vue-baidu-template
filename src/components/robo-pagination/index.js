/**
 * @file 基于 el-pagination 的定制翻页组件
 */
import RoboPagination from './robo-pagination.vue';

export default {
    install(Vue) {
        Vue.component('RoboPagination', RoboPagination);
    }
};
