<template>
    <div>
        <l-fullPic>
            <h1 style="font-family: Regular, cursive; color: rgb(255, 255, 255); letter-spacing: 1rem;">流时的间</h1>
        </l-fullPic>
        <div class="theme-item">
            <ul class="timeline-content">
                <li class="desc">Yesterday Once More!</li>
                <li>
                    <h3 class="year desc">2021</h3>
                    <ul class="year-wrapper">
                        <li v-for="(item,i) in dataSource" :key="i">
                            <span class="date">{{ item.create_time | fomatTime }}</span>
                            <span class="title">{{ item.title }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
let that;
export default {
    data() {
        return {
            dataSource: [
                { title: '搭建转移的新blog', imgUrl: 'https://zyj_yida.gitee.io/source/img/indexbg/5.jpg', create_time: '2021-01-18', content: '做网站的时候需要兼容PC端还要考虑适配移动端可以通过以下来进行判断引用'  },
                { title: 'mysql查询分组显示数据结果之GROUP_CONCAT使用', imgUrl: 'https://zyj_yida.gitee.io/source/img/indexbg/16.jpg', create_time: '2021-01-17'  },
                { title: '搭建转移的新blog', imgUrl: 'https://zyj_yida.gitee.io/source/img/indexbg/5.jpg', create_time: '2021-01-16', content: '做网站的时候需要兼容PC端还要考虑适配移动端可以通过以下来进行判断引用'  },
                { title: 'mysql查询分组显示数据结果之GROUP_CONCAT使用', imgUrl: 'https://zyj_yida.gitee.io/source/img/indexbg/16.jpg', create_time: '2021-01-15'  },
            ]
        }
    },
    created(){
        that = this
    },
    filters: {
        fomatTime(val){
            return that.$utils.format(val, 'MM-DD')
        }
    }
}
</script>

<style scope lang="less">
@borderColor: #eaecef;
@color: #67cc86;
.timeline-content{
    position: relative;
    box-sizing: border-box;
    list-style: none;
    &::after{
        content: " ";
        position: absolute;
        top: 14px;
        left: 0;
        margin-left: -2px;
        width: 4px;
        height: 100%;
        background: @borderColor;
    }
    .desc{
        position: relative;
        line-height: 2.2rem;
        &::before{
            content: " ";
            position: absolute;
            top: 50%;
            left: -25px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid @borderColor;
            background-color: #fff;
            transform: translateY(-50%);
            z-index: 2;
        }
    }
    .year{
        margin: 70px 0 0;
        color: #242424;
        font-size: 26px;
    }
}
.year-wrapper{
    list-style: none;
    padding-left: 0px;
    li{
        display: flex;
        align-items: center;
        padding: 30px 0 20px;
        position: relative;
        border-bottom: 1px dashed @borderColor;
        font-size: 16px;
        color: #7f7f7f;
        cursor: pointer;
        transition: color .2s;
        .date{
            font-size: 12px;
            width: 40px;
        }
        &::after{
            content: " ";
            position: absolute;
            top: 58%;
            left: -24px;
            width: 8px;
            height: 8px;
            background-color: #fff;
            border-radius: 50%;
            border: 1px solid @borderColor;
            z-index: 2;
            transform: translateY(-50%);
            transition: background-color .2s;
        }
        &:hover{
            color: @color;
            &::after{
                background-color: @color;
            }
        }
    }
}
</style>