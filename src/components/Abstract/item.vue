<template>
    <div class="abstract-item" :class="[ sendMe ]">
        <div class="cover-wrap" :style="{ background: `url(${row.imgUrl}) center center / cover no-repeat`}"></div>
        <div class="abstract-content-wrap">
            <div class="title">
                <a>{{ row.title }}</a>
            </div>
            <div class="abstract" v-if="row.content">
                <div class="custom-block">{{ row.content }}</div>
            </div>
            <div class="tags">
                <span><font-awesome-icon icon="user" />{{ $blogConfig.author }}</span>
                <span><font-awesome-icon icon="clock" />{{ row.create_time }}</span>
                <span><font-awesome-icon icon="tag" />blog</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        row: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    computed: {
        sendMe(){
            return this.index%2 === 1 ? 'dirr' : ''
        }
    }
}
</script>

<style scope lang="less">
@color: #242424;
@color-hover: #67cc86;
@border-color: #67cc86;
@box-shadow: 0 1px 8px rgba(0,0,0,.1);
@box-shadow-hover: 0 2px 16px rgba(0,0,0,.2);
.abstract-item{
    position: relative;
    margin: 0 auto 20px;
    padding: 16px 20px;
    width: 100%;
    overflow: hidden;
    border-radius: .25rem;
    box-shadow: @box-shadow;
    box-sizing: border-box;
    transition: all .3s;
    background-color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    &:hover{
        box-shadow: @box-shadow-hover;
    }
}
.cover-wrap{
    width: 40%;
    height: 12.5rem;
    position: relative;
    border-radius: .5rem;
    text-align: center;
    transition: 1s ease-out;
}
.abstract-content-wrap{
    width: 55%;
    display: flex;
    height: 12rem;
    flex-direction: column;
    justify-content: center;
    transition: all .3s;
    .title{
        position: relative;
        font-size: 1.28rem;
        line-height: 46px;
        a{
            color: @color;
        }
        &:hover{
            a{
                color: @color-hover;
            }
        }
    }
    .abstract{
        flex: auto;
        overflow: hidden;
        .custom-block{
            padding: .2rem 1.5rem;
            border-left: .5rem solid @border-color;
            margin: .6rem 0;
            height: calc(100% - 1.2rem);
            background-color: hsla(0,0%,83.1%,.322);
            font-size: 14px;
            box-sizing: border-box;
            line-height: 1.6;
        }
    }
    .tags{
        display: flex;
        align-items: center;
        color: #7f7f7f;
        span{
            display: flex;
            align-items: center;
            margin-right: 16px;
        }
    }
}
.flyl{
    float: left;
}
.flyr{
    float: right;
}
.dirr{
    flex-direction: row-reverse;
}
</style>