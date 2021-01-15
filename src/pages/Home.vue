<template>
    <div class="lz-home-blog">
        <div class="lz-hero fullscreen" :style="{ backgroundImage: `url(${backgroundUrl})` }">
            <div class="lz-copywriting">
                <h1>{{ relate.zh }}</h1>
                <p>{{ relate.en }}</p>
            </div>
            <h4 class="scroll-down" @click="handleScrollDown" v-if="sliding"></h4>
        </div>
        <div class="home-blog-wrapper">
            <div class="blog-list boxShdow">

            </div>
            <div class="info-wrapper boxShdow">
                <div class="personal-info-wrapper">
                    <img :src="$utils.userInfo.avatar" alt="">
                    <h3 class="name">{{ $utils.userInfo.nickName }}</h3>
                    <div class="num">
                        <div>
                            <h3>15</h3>
                            <h6>Article</h6>
                        </div>
                        <div>
                            <h3>10</h3>
                            <h6>Tag</h6>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            relate: {},
            sliding: true,
            backgroundUrl: ''
        }
    },
    created(){
        this.handleStartRandom()
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        //随机获取文案级背景图片
        handleStartRandom(){
            let { mottos, covers } = this.$blogConfig
            let index = this.randomNumber(0, mottos.length - 1)
            let index2 = this.randomNumber(0, covers.length - 1)
            console.log(index + '---' + index2)
            let relate = mottos[index]
            let backgroundUrl = covers[index2]
            let { zh, en } = relate
            Object.assign(this, { backgroundUrl, relate: { zh, en: '_' }})
            this.$nextTick(() => {
                this.start(en)
            })
        },
        //打印文字效果
        start(en){
            let length = en.length
            let index = 0
            let timer = null
            timer = setInterval(() => {
                let length2 = this.relate.en.length
                this.relate.en = this.relate.en.substring(0, length2 - 1) + en[index] + this.relate.en.substring(length2 - 1)
                index++
                if(index === length){
                    clearInterval(timer)
                    this.relate.en = this.relate.en.substring(0, this.relate.en.length - 1)
                    index = 0
                }
            }, 150)
        },
        //生成随机数
        randomNumber(min, max){
            return parseInt(Math.random()*(max- min + 1 )+ min, 10);
        },
        //监听角标显示
        handleScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.sliding = scrollTop < 10 ? true : false
        },
        //点击角标下滑
        handleScrollDown(){
            console.log('点击')
        }
    }
}
</script>

<style lang="less">
@box-shadow: 0 1px 8px rgba(0,0,0,.1);
@box-shadow-hover: 0 2px 16px rgba(0,0,0,.2);
@color: #242424;
.lz-home-blog{
    padding: 0 0 4rem;
    margin: 0 auto;
    .lz-hero{
        position: relative;
        box-sizing: border-box;
        padding: 0 20px;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        // background-image: url('../assets/image/1.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        transition: height .3s;
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
    .scroll-down{
        position: fixed;
        width: 20rem;
        bottom: 100px;
        left: calc(50% - 10rem);
        cursor: pointer;
        &::after{
            content: '';
            position: absolute;
            left: calc(50% - 1.5rem);
            display: block;
            bottom: -3rem;
            width: 1.5rem;
            height: 1.5rem;
            border: .25rem solid #fff;
            border-top: none;
            border-left: none;
            transform: rotate(45deg);
            transform-origin: 50% 50%;
            animation: arrowMove 1.2s infinite;
        }
    }
    @keyframes arrowMove {
        0%{
            opacity: 1;
            bottom: 0rem;
        }
        100% {
            opacity: 0;
            bottom: -3rem;
        }
    }
    .home-blog-wrapper{
        display: flex;
        align-items: flex-start;
        max-width: 1126px;
        margin: 3rem auto 0;
        padding: 0 20px;
        transition: all 0.25s ease-in-out .16s;
        opacity: 0.85!important;
        .blog-list{
            flex: auto;
            background-color: #fff;
            height: 50vh;
        }
        .info-wrapper{
            position: sticky;
            top: 20px;
            transition: all .3s;
            margin-left: 15px;
            flex: 0 0 300px;
            border-radius: .25rem;
            background-color: #fff;
            height: auto;
            padding: 0 15px;
            border-radius: .25rem;
            box-sizing: border-box;
            .personal-info-wrapper{
                display: flex;
                flex-direction: column;
                justify-content: center;
                img{
                    width: 100px;
                    border-radius: 50%;
                    display: block;
                    margin: 2rem auto 1rem;
                }
                .name{
                    color: @color;
                    font-size: 1rem;
                    margin-top: 0;
                    text-align: center;
                }
                .num{
                    display: flex;
                    width: 80%;
                    margin: 0 auto 1rem;
                    div{
                        text-align: center;
                        flex: 0 0 50%;
                        color: @color;
                        &:first-child{
                            border-right: 1px solid #333;
                        }
                        h3{
                            margin: 0 0 .6rem;
                        }
                        h6{
                            margin: 0;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 719px){
        .lz-hero{
            height: 450px;
            .scroll-down{
                display: none;
            }
        }
        .home-blog-wrapper{
            display: block;
            .info-wrapper{
                margin-left: 0;
            }
        }
    }
}
.boxShdow{
    box-shadow: @box-shadow;
    background-color: #fff;
    transition: all .3s;
    border-radius: .25rem;
    &:hover{
        box-shadow: @box-shadow-hover;
    }
}
</style>