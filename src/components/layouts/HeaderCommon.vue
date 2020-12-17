<template>
    <div class="header-common-container">
        <div class="right-box">
            <robo-system-dropdown />
        </div>
    </div>
</template>
<script>
import roboSystemDropdown from '../robo-system-dropdown/robo-system-dropdown';
export default {
    name: '',
    components: {
        roboSystemDropdown
    },
    data() {
        return {};
    },
    mounted() {},
    methods: {}
};
</script>

<style lang="less">
.header-common-container {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
}
</style>
