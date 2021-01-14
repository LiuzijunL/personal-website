<template>
    <div class="lz-header">
        <div class="lz-header_conetnt">
            <h1 class="logo">
                <a href="/">
                    <span>MYBLOG</span>
                    <img src="@/assets/image/logo2.png" alt="">
                </a>
            </h1>
            <ul class="nav">
                <li class="active">文章</li>
                <li>微语</li>
                <li>留言</li>
                <li>相册</li>
                <li>关于</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
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
    padding: 0 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    color: #fff;
    .logo{
        margin: 0 80px 0 0;
        span{
            display: none;
        }
        img{
            width: 60px;
            display: block;
        }
    }
    .nav{
        display: flex;
        list-style: none;
        padding: 0;
        li{
            padding: 10px;
            margin: 0 20px;
            font-size: 14px;
            cursor: pointer;
            transition: color .3s;
            &:hover{
                color: #ff7f21;
            }
        }
        .active{
            color: #ff7f21;
        }
    }
}
</style>