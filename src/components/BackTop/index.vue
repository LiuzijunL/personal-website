<template>
    <transition name="backInUp" mode="out-in">
        <div class="back-to-ceiling" @click="handleBackTop" v-show="visible">
            <font-awesome-icon icon="rocket"/>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.visible = scrollTop > 500 ? true : false
        },
        handleBackTop(){
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            this.showAnimate(document.body, scrollTop)
        },
        //动画板块
        showAnimate(el, offHeight){
            clearInterval(el.timer)
            el.timer = setInterval(() => {
                let speed = offHeight / 10
                let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
                scrollTop -= speed
                document.body.scrollTop = document.documentElement.scrollTop = scrollTop
                if(scrollTop <= 0){
                    clearInterval(el.timer)
                }
            },20)
        }
    }
}
</script>

<style lang="less">
.back-to-ceiling{
    position: fixed;
    bottom: 100px;
    right: 16px;
    border-radius: 4px;
    width: 40px;
    height: 40px;
    background-color: #fff;
    box-shadow: 0 1px 8px 0 rgba(0,0,0,.1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .fa-w-16{
        font-size: 22px;
        color: #67cc86;
        margin: 0;
        transform: rotate(-45deg);
    }
}
.backInUp-enter-active,
.backInUp-leave-active{
    transition: all .3s ease;
}
.backInUp-enter,
.backInUp-leave-to{
    bottom: 20px;
    opacity: 0;
}
.backInUp-enter-to,
.backInUp-leave{
    opacity: 1;
}
</style>