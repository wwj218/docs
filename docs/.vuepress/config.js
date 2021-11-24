module.exports = {
    base: "/docs/",
    title: "wwj218",

    plugins: [
        [
            '@vuepress/pwa',
            {
                skipWaiting: true,
            },
        ],
    ],
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