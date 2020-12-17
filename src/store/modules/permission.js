/**
 * @file router permisson
 */
import {constantRouterMap} from '@/router/router.config';

export default {
    namespaced: true,
    state: {
        routerSides: '',
    },
    actions: {
        SiderMenu({commit}, data) {
            // 等待联调权限
            commit('SET_ROUTERSIDES', constantRouterMap);
        }
    },
    mutations: {
        SET_ROUTERSIDES: (state, data) => {
            state.routerSides = data;
        },
    }
};