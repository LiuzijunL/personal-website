<template>
    <header class="lz-header">
        <div class="lz-header_conetnt">
            <div class="sidebar-button">
                <font-awesome-icon icon="bars" />
            </div>
            <h1 class="logo">
                <a href="/">
                    <img src="@/assets/image/logo.png" alt="">
                    <span>{{ $blogConfig.title }}</span>
                </a>
            </h1>
            <div class="links">
                <nav-menu></nav-menu>
            </div>
        </div>
    </header>
</template>

<script>
import NavMenu from '@/components/Menu'
export default {
    components: {
        NavMenu
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
    background-color: rgba(0, 0, 0, .3);
    // box-shadow: 0 0 16px rgba(0,0,0,.06);
    z-index: 999;
}
.lz-header_conetnt{
    position: relative;
    padding: 0 1.5rem;
    height: 100%;
    display: flex;
    align-items: center;
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
            border-radius: 50%;
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
        z-index: 1;
        // li{
        //     padding: 10px;
        //     margin: 0 20px;
        //     font-size: 14px;
        //     cursor: pointer;
        //     transition: color .3s;
        //     &:hover{
        //         color: #ff7f21;
        //     }
        // }
        // .active{
        //     color: #ff7f21;
        // }
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
@media screen and (max-width: 719px){
    .lz-header_conetnt{
        padding-left: 4rem;
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