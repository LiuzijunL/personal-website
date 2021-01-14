<template>
    <div class="lz-home-blog">
        <div class="lz-hero fullscreen">
            <div class="lz-copywriting">
                <h1>{{ relate.title }}</h1>
                <p>{{ relate.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            relateList: [
                {
                    title: '一别两三年，忽然又夏天。',
                    description: 'Two or three years later, it was summer again.'
                },
                {
                    title: '人生来来往往，来日并不方长。',
                    description: 'Life comes and goes, but the future is not long.'
                }
            ],
            relate: { title: '' }
        }
    },
    mounted(){
        let index = this.randomNumber(0, 1)
        let relate = this.relateList[index]
        let { description, title } = relate
        this.relate = { title, description: '_' }
        this.start(description)
    },
    methods: {
        //打印文字效果
        start(description){
            let length = description.length
            let index = 0
            let timer = null
            timer = setInterval(() => {
                let length2 = this.relate.description.length
                this.relate.description = this.relate.description.substring(0, length2 - 1) + description[index] + this.relate.description.substring(length2 - 1)
                index++
                if(index === length){
                    clearInterval(timer)
                    this.relate.description = this.relate.description.substring(0, this.relate.description.length - 1)
                    index = 0
                }
            }, 150)
        },
        //生成随机数
        randomNumber(min, max){
            return parseInt(Math.random()*(max- min + 1 )+ min, 10);
        }
    }
}
</script>

<style lang="less">
.lz-home-blog{
    padding: 0;
    margin: 0 auto;
    .lz-hero{
        position: relative;
        box-sizing: border-box;
        padding: 0 20px;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('../assets/image/1.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .lz-copywriting{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-family: Regular, cursive;
        text-align: center;
        h1{
            font-weight: 400;
            opacity: 1;
            font-size: 2.5rem;
        }
        p{
            font-size: 1.6rem;
            margin: 1.8rem auto;
        }
    }
}
</style>