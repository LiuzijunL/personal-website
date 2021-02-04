import Layout from '@/pages/Layout.vue'
import NotFound from '@/components/Error/404.vue'

//根据文件夹自动生成路由 匹配路径
const files = require.context('@/pages', true, /\.vue$/)
let pages = {}
files.keys().forEach(key => {
    pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})
//生成路由规则
let generator = [
    {
        path: '/',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/views/blogs/:id',
        component: () => import('@/pages/Blogs.vue')
    }
]
Object.keys(pages).forEach(item => {
    if(['Home', 'Layout', 'Blogs'].includes(item)){
        return false
    }
    let path = '/' + item
    let array = path.split('/')
	let url = ''
	for (let i = 0; i < array.length; i++) {
		url += array[i].substring(0, 1).toLowerCase() + array[i].substring(1) + '/'
	}
    url = url.substring(0, url.length - 1)
    generator.push({
        path: url,
        name: item,
        component: pages[item]
    })
})

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: generator
    },
    {
        path: '*',
        name: 'NotFound',
        components: NotFound
    }
]


export default routes