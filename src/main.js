import 'babel-polyfill' //处理一些兼容性
import Vue from 'vue'
import router from './router'
import Utils from './utils'
import App from './App.vue'
import config from './utils/config'
import LFullPic from '@/components/FullPic'
// 引入自己的组件
import LzUI from '@/components'
// 注册fontawesome5 字体图标库
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'github-markdown-css'
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('l-fullPic', LFullPic)

Vue.config.productionTip = false

Vue.use(LzUI)

Vue.prototype.$utils = Utils
Vue.prototype.$blogConfig = config

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
