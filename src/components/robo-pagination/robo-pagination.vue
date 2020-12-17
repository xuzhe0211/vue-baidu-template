<template>
    <el-pagination
        class="robo-pagination"
        background
        :hide-on-single-page="false"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
</template>

<script>
export default {
    name: 'EnterpriseUserOverview',
    components: {},
    props: {
        currentPage: {type: Number, default: 1},
        pageSize: {type: Number, default: 10},
        total: {type: Number, default: 0},
    },
    data() {
        return {};
    },
    mounted() {},
    methods: {
        handleSizeChange(size) {
            this.$emit('size-change', size);
        },
        handleCurrentChange(currentPage) {
            this.$emit('current-change', currentPage);
        },
    },
};
</script>
<style lang="less">
.robo-pagination.el-pagination.is-background {
    .btn-next,
    .btn-prev,
    .el-pager li {
        background-color: #fff;
    }
}
</style>
<style scoped lang="less">
.robo-pagination {
    margin-top: 15px;
    text-align: right;
}
</style>
