import Vue from 'vue'
import VueRouter from 'vue-router'
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


export default router