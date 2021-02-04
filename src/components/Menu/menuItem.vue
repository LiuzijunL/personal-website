<template>
    <dropdown :menu="menu" v-if="menu.children" :navStyle="{ backgroundColor: 'rgba(0,0,0,0.2)' }"></dropdown>
    <router-link :to="menu.link" v-else>
        <font-awesome-icon :icon="menu.icon" v-if="menu.icon"/>{{ menu.title }}
    </router-link>
</template>

<script>
import Dropdown from '../Dropdown'
export default {
    props: {
        menu: {
            type: Object,
            required: true
        }
    },
    components: {
        Dropdown
    }
}
</script>

<style scope lang="less">
.svg-inline--fa{
    margin-right: 6px;
}
.can-hide{
    .dropdown-wrapper{
        .nav-dropdown{
            background-color: rgba(0,0,0,0.2);
        }
    }
}
</style>