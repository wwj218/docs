module.exports = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    {
        text: 'Languages',
        items: [{
                text: 'About',
                items: [{ text: 'Home', link: '/' },
                    { text: 'About', link: '/about' },
                ]
            },
            {
                text: 'Article',
                items: [{ text: 'Home', link: '/' },
                    { text: 'Article', link: '/article' },
                ]
            }
        ]
    },
    { text: 'External', link: 'https://google.com' },

]