<template>
    <div class="dropdown-wrapper">
        <a class="dropdown-title">
            <span class="title">
                <font-awesome-icon :icon="menu.icon" v-if="menu.icon"/>{{ menu.title }}
            </span>
            <font-awesome-icon icon="caret-down" style="margin-right: 0"/>
        </a>
        <ul class="nav-dropdown" :style="navStyle">
            <li class="dropdown-item" v-for="(item,i) in menu.children" :key="i">
                <router-link :to="item.link">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        menu: {
            type: Object,
            required: true
        },
        navStyle: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="less">
.dropdown-wrapper{
    cursor: pointer;
    &:hover{
        .nav-dropdown{
            display: block;
        }
    }
    .dropdown-title{
        display: block;
        .title{
            display: inline-block;
            margin-right: 6px;
        }
    }
    .nav-dropdown{
        display: none;
        height: auto;
        box-sizing: border-box;
        overflow-y: auto;
        position: absolute;
        top: 100%;
        right: 0;
        background-color: #fff;
        padding: .6rem 0;
        box-shadow: 0 1px 8px 0 rgba(0,0,0,0.1);
        text-align: left;
        border-radius: .25rem;
        white-space: nowrap;
        margin: 0;
        .dropdown-item{
            color: inherit;
            line-height: 1.7rem;
            a{
                display: block;
                padding: 0 1.5rem 0 1.25rem;
                font-weight: 400;
                position: relative;
            }
        }
    }
}
</style>