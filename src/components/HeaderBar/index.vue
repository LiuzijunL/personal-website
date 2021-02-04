<template>
    <header class="lz-header">
        <div class="lz-header_conetnt">
            <div class="sidebar-button" @click="handleCollapse">
                <font-awesome-icon icon="bars"/>
            </div>
            <h1 class="logo">
                <a href="/">
                    <img :src="$blogConfig.logo" alt="">
                    <span>{{ $blogConfig.title }}</span>
                </a>
            </h1>
            <div class="links" :class="[ collapse ? 'sidebar-open' : '' ]">
                <nav-menu></nav-menu>
            </div>
        </div>
        <div class="sidebar-mask" v-if="collapse" @click.stop="handleCollapse"></div>
    </header>
</template>

<script>
import NavMenu from '@/components/Menu'
export default {
    data() {
        return {
            collapse: false
        }
    },
    components: {
        NavMenu
    },
    methods: {
        handleCollapse(){
            this.collapse = !this.collapse
        }
    }
}
</script>

<style lang="less">
.lz-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    // box-shadow: 0 0 16px rgba(0,0,0,.06);
    z-index: 999;
}
.lz-header_conetnt{
    position: relative;
    padding: 0 1.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, .3);
    .logo{
        margin: 0;
        a{
            display: flex;
            align-items: center;
            text-decoration: none;
        }
        span{
            color: #fff;
            font-weight: 600;
            font-size: 1.2rem;
        }
        img{
            height: 2.2rem;
            min-width: 2.2rem;
            vertical-align: top;
            // border-radius: 50%;
            margin-right: .8rem;
        }
    }
    .links{
        position: absolute;
        right: 1.5rem;
        top: 50%;
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        transform: translateY(-50%);
        z-index: 10;
    }
}
.sidebar-button{
    cursor: pointer;
    display: none;
    .fa-bars{
        width: 100%;
        height: 100%;
        color: #242424;
    }
}
.sidebar-mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vh;
    height: 100vh;
    background-color: rgba(0,0,0,.65);
    z-index: -2;
}
@media screen and (max-width: 719px){
    .lz-header_conetnt{
        padding-left: 4rem;
        .links{
            top: 0;
            left: 0;
            height: 100vh;
            box-sizing: border-box;
            padding-top: 3.6rem;
            transform: translateX(-100%);
            transition: transform .2s ease;
            z-index: -1;
            overflow-y: auto;
            background-color: #fff;
            width: 14.76rem;
            border-right: 1px solid #eaecef;
            .nav-links{
                width: 100%;
                color: #333;
                padding: 1rem 0;
                .nav-item{
                    display: block;
                    margin-left: 0;
                    padding: .5rem 0 .5rem 1.5rem;
                    .dropdown-wrapper{
                        .nav-dropdown{
                            position: static;
                            display: block;
                        }
                    }
                }
                a{
                    color: #333;
                }
            }
        }
        .sidebar-open{
            transform: translateX(0);
            opacity: 1;
        }
    }
    .sidebar-button{
        display: block;
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        top: .6rem;
        left: 1rem;
        padding: .6rem;
    }
}
</style>