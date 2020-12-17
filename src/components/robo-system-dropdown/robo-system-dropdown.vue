<template>
    <el-dropdown
        class="robo-system-dropdown"
        placement="bottom"
        @command="handleCommand"
        @visible-change="handleVisibleChange"
    >
        <span class="robo-system-dropdown-link">
            <i v-if="showUserIcon" class="robo-system-dropdown-user-icon"></i>
            <span class="robo-system-dropdown-link-text">{{ userinfo.username }}</span>
            <i class="robo-system-dropdown-link-icon el-icon-caret-bottom" :style="linkIconStyle"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="robo-system-dropdown-menu">
            <el-dropdown-item command="logout" class="robo-system-dropdown-menu-item">
                <i class="logout-icon"></i>
                <span class="logout-text">退出登录</span>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: '',
    components: {},
    props: {
        showUserIcon: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            linkIconStyle: {
                transform: 'rotate(0deg)'
            }
        };
    },
    computed: {
        ...mapState({
            userinfo: state => state.user.userinfo
        })
    },
    mounted() {},
    methods: {
        handleCommand(command) {
            switch (command) {
                case 'logout':
                default: {
                    this.logoutHandler();
                }
            }
        },

        handleVisibleChange(visible) {
            const angle = visible ? 180 : 0;
            this.linkIconStyle.transform = `rotate(${angle}deg)`;
        },

        logoutHandler() {
            this.$confirm('您确定要退出登录吗?', '提示', {
                type: 'warning'
            }).then(async () => {
                const isLogoutSuccess = await this.$store.dispatch('user/Layout');
                if (isLogoutSuccess) {
                    this.$message({
                        type: 'success',
                        message: '已退出',
                        duration: 1000,
                        onClose: () => {
                            this.$router.replace({path: '/login'});
                        }
                    });
                }
            }).catch(() => {});
        }
    }
};
</script>

<style scoped lang="less">
.robo-system-dropdown {
    font-family: PingFangSC-Regular;
    color: #424D55;
    font-size: 0.14rem;
    cursor: pointer;


    .robo-system-dropdown-user-icon {
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        background: #4d97ff url('~@/assets/icons/icon-user.png') no-repeat center center;
        background-size: contain;
        vertical-align: middle;
        border-radius: 50%;
    }

    .robo-system-dropdown-link-icon {
        color: #4d79bd;
        transition: all linear 0.1s;
        vertical-align: middle;
    }

    .robo-system-dropdown-link-text {
        margin-right: 0.04rem;
        vertical-align: middle;
    }

    .robo-system-dropdown-link-icon + .robo-system-dropdown-link-text {
        margin-left: 0.1rem;
    }
}
</style>
<style lang="less">
.el-popper {
    &.robo-system-dropdown-menu {
        padding: 0;
        font-size: 0.14rem;
        box-shadow: 0 12px 16px 1px rgba(0, 21, 51, 0.03);
        border-radius: 4px;
        border: none;

        .el-dropdown-menu__item {
            &.robo-system-dropdown-menu-item {
                padding: 0 0.2rem;
                height: 0.48rem;
                line-height: 0.48rem;
                font-size: 0.14rem;

                &:first-child {
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px;

                    &:hover ~ .popper__arrow::after,
                    &:active ~ .popper__arrow::after {
                        border-bottom-color: #f2f7ff;
                    }
                }

                &:nth-last-child(2) {
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                }

                .logout-icon {
                    display: inline-block;
                    width: 0.16rem;
                    height: 0.16rem;
                    background: url('~@/assets/icons/icon-logout.png') no-repeat center center;
                    background-size: cover;
                    vertical-align: middle;
                }

                .logout-text {
                    font-size: 0.14rem;
                    color: #333;
                    vertical-align: middle;
                }

                &:hover {
                    background: #f2f7ff;
                }

                &:active {
                    background: #f2f7ff;

                    .logout-icon {
                        background: url('~@/assets/icons/icon-logout-active.png') no-repeat center center;
                        background-size: cover;
                    }

                    .logout-text {
                        color: #006aff;
                    }
                }
            }
        }
    }
}
</style>
