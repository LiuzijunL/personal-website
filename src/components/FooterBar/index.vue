<template>
    <footer class="footer-wrapper">
        <span>
            <font-awesome-icon icon="shield-alt" />
            <a href="#" style="margin-left: .5rem">{{ $blogConfig.record }}</a>
        </span>
        <span>
            <font-awesome-icon icon="copyright" />
            <a>
                <span>{{ $blogConfig.author }}</span>
                <span>2021-2022</span>
            </a>
        </span>
        <!-- <span>
            <font-awesome-icon icon="eye" />
            <a><span>888</span></a>
        </span> -->
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scope lang="less">
@iconColor: #7f7f7f;
@color: #67cc86;
.footer-wrapper{
    padding: 1.5rem 2.5rem;
    border-top: 1px solid #eaecef;
    text-align: center;
    color: @iconColor;
    span{
        margin-left: .6rem;
    }
    a{
        font-size: 14px;
    }
}
</style>