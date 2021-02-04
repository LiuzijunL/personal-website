<template>
    <div class="abstract-wrapper">
        <abstract-item v-for="(item,i) in dataSource" :key="i" :row="item" :index="i"></abstract-item>
    </div>
</template>

<script>
import AbstractItem from './item.vue'
export default {
    props: {
        dataSource: {
            type: Array,
            required: true
        },
        totalPage: {
            type: Number,
            default: 0
        },
        currentPage: {
            type: Number,
            default: 1
        }
    },
    components: {
        AbstractItem
    },
    methods: {
        
    }
}
</script>

<style lang="less">
.abstract-wrapper{
    width: 100%;
    transition: all 0.25s ease-in-out 0.08s;
    opacity: 1;
    transform: translateY(0px);
}
</style>