<template>
    <div class="fullPic" :style="{ backgroundImage: `url(${backgroundUrl})`}">
        <template v-if="$slots.default">
            <slot></slot>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            backgroundUrl: '' 
        }
    },
    created(){
        this.handleStartRandom()
    },
    methods: {
        //随机获取文案级背景图片
        handleStartRandom(){
            let { covers } = this.$blogConfig
            let index = this.randomNumber(0, covers.length - 1)
            let backgroundUrl = covers[index]
            Object.assign(this, { backgroundUrl })
        },
        //生成随机数
        randomNumber(min, max){
            return parseInt(Math.random()*(max- min + 1 )+ min, 10)
        }
    }
}
</script>

<style lang="less">
.fullPic{
    max-width: 2080px;
    width: 100%;
    height: 50vh;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>