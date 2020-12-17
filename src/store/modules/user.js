/**
 * @file router permisson
 */
import {request} from '@/utils/network-helper';
import config from '@/config';
export default {
    namespaced: true,
    state: {
        token: window.localStorage.getItem('v2xConsoleToken') || '',
        userinfo: window.localStorage.getItem('v2xUserinfo') || ''
    },
    actions: {
        // 登录
        async Login({commit}, opts) {
            const {code, data, msg} = await request.post(`${config.userinfo.api}/auth/user/login`, opts);
            if (+code === 0 && data) {
                commit('ROOT_UPDATE_USER_INFO_MUTATION', {
                    token: data.accessToken,
                    userinfo: data.userInfo
                });
            }
            return {
                isLoginSuccess: +code === 0,
                msg: msg ? msg : '账号或密码错误，请重新输入'
            };
        },
        // 查看登录用户拥有的权限
        async GetUserInfo({commit}, opts) {
            try {
                const {code, data, msg} = await request.get(`${config.userinfo.api}/auth/user/userInfo`, opts);
                if (+code === 0 && data) {
                    commit('ROOT_UPDATE_USER_INFO_MUTATION', {
                        token: data.accessToken,
                        userinfo: data.userInfo
                    });
                }
                return {
                    isLoginSuccess: +code === 0,
                    msg: msg ? msg : '请重新登录'
                };
            } catch (e) {
                console.log(e); // eslint-disable-line
                return {
                    isLoginSuccess: false,
                    msg: '请重新登录'
                };
            }
        },
        // 登出
        Layout({commit}, opts) {
            commit('ROOT_LOGOUT_MUTATION');
            return {
                isLogoutSuccess: true
            };
        },
        // 修改密码
        async changePasswd({commit}, opts) {
            try {
                const {code, msg} = await request.post(`${config.userinfo.api}/auth/user/changeOwnPassword`, opts);
                return {
                    isChangePasswdSuccess: +code === 0,
                    msg: msg ? msg : '密码修改成功'
                };
            } catch (e) {
                console.log(e); // eslint-disable-line
                return {
                    isLoginSuccess: false,
                    msg: '密码修改未成功'
                };
            }
        },
    },
    mutations: {
        ROOT_UPDATE_USER_INFO_MUTATION: (state, {token, userinfo}) => {
            state.token = token || state.token;
            state.userinfo = userinfo || state.userinfo;
            window.localStorage.setItem('v2xConsoleToken', state.token);
            window.localStorage.setItem('v2xUserinfo', JSON.stringify(state.userinfo));
        },
        // 退出登录
        ROOT_LOGOUT_MUTATION: state => {
            state.token = '';
            state.userinfo = '';
            window.localStorage.removeItem('v2xConsoleToken');
            window.localStorage.removeItem('v2xUserinfo');
        }
    }
};