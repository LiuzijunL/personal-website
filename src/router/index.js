import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '@/utils/config'
// import NProgress from 'nprogress'
import Layout from '@/pages/Layout.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: Layout,
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: () => import('@/pages/Home.vue')
                }
            ]
        }
    ]
})

router.beforeEach((to, form, next) => {
    document.title = config.title
    // NProgress.start()
    next()
})

// router.afterEach(() => {
//     NProgress.done()
// })


export default router