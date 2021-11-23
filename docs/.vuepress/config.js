module.exports = {
    head: [
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        // ...其他标签
    ],
    plugins: [
        [
            '@vuepress/pwa',
            {
                skipWaiting: true,
            },
        ],
    ],
    base: "/docs/",
    title: "wwj218",
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