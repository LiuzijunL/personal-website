// 博客配置
module.exports = {
    title: 'Feibo Cat',
    themeConfig: {
        nav: [
            {
                title: '主页', link: '/', icon: 'home'
            },
            {
                title: '博客', icon: 'th-large', children: [
                    { title: 'Others', link: '/categories/others' },
                    // { title: 'Front-end', link: '/categories/front-end' },
                    // { title: 'Back-end', link: '/categories/back-end' }
                ]
            },
            {
                title: '标签', icon: 'tag', link: '/tag'
            },
            {
                title: '时间轴', icon: 'clock', link: '/timeline'
            },
            {
                title: '关于我', icon: 'user', link: '/about'
            }
        ]
    },
    author: 'Feibo', // 作者
    authorAvatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/hA5SFhWH9TfA4Dw3H7HqnmNEFfR8AOYVPaI3vvgk4GGhZyAZc3BOvX5RjVWtlEic5MGv6IibJoxTicR48bpsWh9dQ/132', // 头像
    record: '鄂ICP备你的备案号', // icp备案
    socials: { // home社交配置
        github: 'https://github.com/LiuzijunL'
    },
    //主页文案配置
    mottos: [{
            zh: '一别两三年，忽然又夏天。',
            en: 'Two or three years later, it was summer again.'
        },
        {
            zh: '人生来来往往，来日并不方长。',
            en: 'Life comes and goes, but the future is not long.'
        },
        {
            zh: "年轻就是无限的可能。",
            en: "Youth means limitless possibilities."
        },
        {
            zh: "人生没有后悔，我们只能尽力去不让自己后悔。",
            en: "Life without regret, we can only do our best to not to regret."
        }
    ],
    //主页背景图配置
    covers: [
        'https://cdn.wentaowx.com/zj/1.jpg',
        'https://cdn.wentaowx.com/zj/11.jpg',
        'https://cdn.wentaowx.com/zj/41.jpg',
        'https://cdn.wentaowx.com/zj/43.jpg'
    ]
}