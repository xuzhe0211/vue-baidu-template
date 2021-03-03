<template>
    <div :class="this.$route.name === 'index' ? 'crumbs crumbs_index' : 'crumbs'" v-if="crumbsVisible">
        <div class="title">
            {{ $route.meta.title }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'BreadCrumb',
    data() {
        return {};
    },
    computed: {
        crumbsVisible() {
            return this.$route.meta.title !== '404';
        }
    }
};
</script>
<style lang="less" scoped>
.crumbs {
    position: relative;
    height: 0;

    .title {
        position: absolute;
        top: 0;
        font-size: 20px;
        color: #282f3c;
        font-weight: 500;
        line-height: 1.5;
    }
}
</style>
