<template>
    <el-container class="operation-management-container">
        <el-aside width="240px">
            <div class="aside-logo-container">
                <img src="~@/assets/logo.png" />
                &nbsp;|&nbsp;云端标定服务
            </div>
            <div class="aside-menu-container">
                <aside-menu />
            </div>
        </el-aside>
        <el-container>
            <el-header><header-common></header-common></el-header>
            <el-main>
                <bread-crumb></bread-crumb>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import AsideMenu from './Menu';
import HeaderCommon from './HeaderCommon.vue';
import BreadCrumb from './BreadCrumb.vue';
export default {
    components: {
        AsideMenu,
        HeaderCommon,
        BreadCrumb
    }
};
</script>
<style scoped lang="less">
.operation-management-container {
    height: 100%;

    .el-aside {
        background-color: #252629;
        text-align: center;

        .aside-logo-container {
            height: 112px;
            line-height: 112px;
            background: inherit;
            color: #f3f6ff;
            font-size: 13px;
            font-weight: bold;

            img {
                width: 78px;
                height: 25px;
                vertical-align: text-bottom;
            }
        }
    }

    .el-header {
        background: #f6f8fa;
        color: #424d55;
        height: 55px !important;
        padding: 0 32px 0 24px;
    }

    .el-main {
        background-color: #f6f8fa;
        color: #333;
        padding: 0.2rem;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
}
</style>
