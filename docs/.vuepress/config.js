const moment = require('moment');
moment.locale("zh-cn");

module.exports = {
    base: "/docs/",
    title: "wwj218",

    plugins: {

        '@vuepress/last-updated': {
            transformer: (timestamp) => {
                return moment(timestamp).format('LLLL')
            }
        },
        '@vuepress/pwa': {
            skipWaiting: true,
        },
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',

            // 其他的 Vssue 配置
            owner: 'wwj218',
            repo: 'docs',
            clientId: '5e037a127f8162709b06',
            clientSecret: 'a88caabfe4026ac2dbfa69d26452b476c8f381e2',
            autoCreateIssue: true,
        },
        '@vuepress/back-to-top': true,
    },
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/bc.jpg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about' },
            {
                text: 'Languages',
                items: [{
                        text: 'Group1',
                        items: [{ text: 'Home', link: '/' },
                            { text: 'Guide', link: '/about' },
                        ]
                    },
                    {
                        text: 'Group2',
                        items: [{ text: 'Home', link: '/' },
                            { text: 'Guide', link: '/about' },
                        ]
                    }
                ]
            },
            { text: 'External', link: 'https://google.com' },

        ]
    }
}