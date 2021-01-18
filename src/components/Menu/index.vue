<template>
    <div class="nav-links can-hide">
        <div class="nav-item" v-for="(menu,i) in menuList" :key="i">
            <menu-item :menu="menu"></menu-item>
        </div>
    </div>
</template>

<script>
import menuItem from './menuItem'
export default {
    data() {
        return {
            menuList: []
        }
    },
    components:{
        menuItem
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
    a{
        display: inline-block;
        color: #fff;
    }
}
</style>