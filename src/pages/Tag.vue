<template>
    <div>
        <l-fullPic></l-fullPic>
        <div class="tags-container">
            <div class="tags">
                <lz-tag class="active" color="#f69178">All</lz-tag>
                <lz-tag color="#e5737b">Vue</lz-tag>
                <lz-tag color="#e5737b">React</lz-tag>
                <lz-tag color="#e5737b">Node</lz-tag>
            </div>
            <l-abstract :dataSource="dataSource"></l-abstract>
        </div>
    </div>
</template>

<script>
import LAbstract from '@/components/Abstract'
export default {
    components: {
        LAbstract
    },
    data() {
        return {
            dataSource: [
                { title: '搭建转移的新blog', imgUrl: 'https://zyj_yida.gitee.io/source/img/indexbg/5.jpg', create_time: '2021-01-18', content: '做网站的时候需要兼容PC端还要考虑适配移动端可以通过以下来进行判断引用'  }
            ]
        }
    },
}
</script>

<style scope lang="less">
.tags{
    margin: 26px 0;
    color: #fff;
    .active{
        transform: scale(1.2);
    }
}
.tags-container{
    max-width: 860px;
    margin: 0 auto;
    padding: 4.6rem 2rem 0;
}
</style>