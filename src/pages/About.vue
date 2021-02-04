<template>
    <div class="theme-reco-content">
        <l-fullPic>
            <div style="text-align: center;color: #fff;">
                <h1>关于我</h1>
                <div style="display: flex;align-items: center;">
                    <span>
                        <font-awesome-icon icon="user" />
                        <span>{{ author }}</span>
                    </span>
                    <span style="margin: 0 20px;">
                        <font-awesome-icon icon="clock" />
                        <span>{{ revisionTime }}</span>
                    </span>
                    <span id="/about" class="leancloud_visitors" data-flag-title="Your Article Title">
                        <font-awesome-icon icon="eye" />
                        <span class="leancloud-visitors-count"></span>
                    </span>
                </div>
            </div>
        </l-fullPic>
        <div class="content__default theme-item">
            <div class="custom-block tip">
                <p>后来的我们依然走着</p>
                <p>只是不再并肩了</p>
            </div>
            <h3>自我介绍</h3>
            <p>web前端开发一枚</p>
            <h3>联系我</h3>
            <p>通过邮箱或者下方评论留言都可，记得留下你的邮箱便于及时收到回复</p>
            <p>邮箱：836200461@qq.com</p>
            <p>QQ：836200461</p>
        </div>
        <footer class="page-edit theme-item">
            <div class="last-updated">
                <span class="prefix">Last Updated: </span>
                <span class="time">{{ revisionTime }}</span>
            </div>
        </footer>
        <div class="comments-wrapper theme-item"></div>
    </div>
</template>

<script>
import Valine from 'valine'
export default {
    data() {
        return {
            author: '',
            revisionTime: '2021/01/29 14:52:59'
        }
    },
    created(){
        this.author = this.$blogConfig.author
    },
    mounted(){
        new Valine({
            el: '.comments-wrapper',
            appId: '',
            appKey: '',
            placeholder: `${this.author}同学需要你的评论...`,
            avatar: 'wavatar',
            visitor: true
        })
    }
}
</script>

<style lang="less">
.theme-reco-content{
    .custom-block.tip{
        border-left: 6px solid;
        border-color: #67cc86;
        padding: .1rem 1.5rem;
        background-color: hsla(0,0%,83.1%,.322);
    }
    .content__default{
        padding-top: 4.6rem;
    }
    p{
        font-size: 15px;
    }
    h3{
        margin-top: 3rem;
    }
    .page-edit{
        padding-top: 1.3rem;
        padding-bottom: 1.3rem;
        overflow: auto;
        .last-updated{
            float: right;
            font-size: 14px;
            .prefix{
                font-weight: 500;
                color: #67cc86;
            }
            .time{
                color: #aaa;
            }
        }
    }
}
.comments-wrapper{
    .vpanel{
        .vwrap{
            background-color: #f3f4f4;
        }
        .vbtn{
            background-color: #fff;
        }
    }
}
</style>