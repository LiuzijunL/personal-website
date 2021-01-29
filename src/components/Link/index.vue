<template>
    <div class="link-item" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
        <span class="list-style"></span>
        <slot></slot>
        <div class="popup-window-wrapper" :style="{ display: show }">
            <div class="popup-window">
                <div class="logo">
                    <img :src="avatar" alt="">
                </div>
                <div class="info">
                    <div class="title">
                        <h4>{{ title }}</h4>
                        <a :href="url" class="btn-go" target="_blank">GO</a>
                    </div>
                    <p>{{ description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        url: String,
        description: String,
        avatar: {
            type: String,
            default: 'https://1.gravatar.com/avatar/96c4520adcd6c7233dd9886bef10d862?s=50&amp;d=mm&amp;r=x'
        }
    },
    data() {
        return {
            show: 'none'
        }
    },
    methods: {
        //鼠标移入
        handleMouseOver(){
            this.show = 'block'
        },
        //鼠标移出
        handleMouseOut(){
            this.show = 'none'
        }
    }
}
</script>

<style scope lang="less">
.link-item{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding: 4px 8px 4px 20px;
    line-height: 20px;
    cursor: default;
    border-radius: .25rem;
    font-size: 13px;
    box-shadow: 0 1px 8px 0 rgba(0,0,0,.1);
    transition: all .3s;
    margin-right: 8px;
    margin-bottom: 12px;
}
.popup-window-wrapper{
    display: none;
}
.popup-window{
    position: absolute;
    width: 280px;
    top: -4px;
    left: 50%;
    background-color: #fff;
    box-shadow: 0px 1px 8px 0px rgba(0,0,0,.1);
    transform: translate(-50%, -100%);
    border-radius: .25rem;
    padding: .8rem 1rem;
    display: flex;
    .logo{
        margin-right: .4rem;
        width: 2rem;
        height: 2rem;
        flex: 0 0 2rem;
        border-radius: .25rem;
        overflow: hidden;
        img{
            width: 2rem;
            height: 2rem;
        }
    }
    .info{
        flex: 1 1;
        .title{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 2rem;
            h4{
                margin: 0;
            }
            .btn-go{
                width: 1.4rem;
                height: 1.2rem;
                border-radius: .25rem;
                font-size: 12px;
                color: #fff;
                text-align: center;
                line-height: 1.2rem;
                cursor: pointer;
                transition: transform .3s;
                background-color: rgb(225, 91, 100);
                &:hover{
                    transform: scale(1.1);
                }
            }
        }
    }
}
.list-style{
    position: absolute;
    left: .4rem;
    top: 0;
    bottom: 0;
    margin: auto;
    display: block;
    width: .4rem;
    height: .4rem;
    border-radius: .1rem;
    background-color: #67cc86;
    content: "";
}
</style>