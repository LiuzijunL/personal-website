<template>
    <span class="lz-tag" @click="onClick" :style="{ backgroundColor: color }">
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: {
        color: String
    },
    methods: {
        onClick(e){
            this.$emit('click', e)
        }
    }
}
</script>

<style scope lang="less">
.lz-tag{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    margin-bottom: 12px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: .25rem;
    font-size: 13px;
    line-height: 13px;
    color: inherit;
    background-color: #fff;
    box-shadow: 0 1px 8px 0 rgba(0,0,0,.1);
    transition: transform .3s;
    &:hover{
        transform: scale(1.04);
    }
}
</style>