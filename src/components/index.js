import Tag from './Tag'
import Link from './Link'

export default {
    install: function (Vue) {
        Vue.component('LzTag', Tag),
        Vue.component('LzLink', Link)
    }
}