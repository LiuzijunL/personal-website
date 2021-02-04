import Vue from 'vue'
import VueRouter from 'vue-router'
import routerRoutes from './routes'
import config from '@/utils/config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const router = new VueRouter({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: routerRoutes
})

//路由确认跳转前
router.beforeEach((to, form, next) => {
    let { title } = config
    if(to.name){
        let name = to.name.replace('/', ' ')
        title = `${name} | ${title}`
    }
    document.title = title
    NProgress.start()
    next()
})

//路由确认跳转后
router.afterEach(() => {
    NProgress.done()
})


export default router