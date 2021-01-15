<template>
    <div class="nav-links">
        <div class="nav-item" v-for="(item,i) in menuList" :key="i">
            {{ item.title }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuList: []
        }
    },
    created(){
        let { nav } = this.$blogConfig.themeConfig
        this.menuList = nav
    }
}
</script>

<style lang="less">
@color: #fff;
.nav-links{
    color: @color;
    font-size: .9rem;
    .nav-item{
        position: relative;
        display: inline-block;
        line-height: 2rem;
        margin-left: 1.5rem;
        &:first-child{
            margin-left: 0;
        }
    }
}
</style>