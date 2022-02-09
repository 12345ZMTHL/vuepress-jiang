module.exports = {
    title: "个人博客",
    description: "个人博客",
    base: '/vuepress-jiang/',
    themeConfig: {
        searchMaxSuggestions: 10,
        sidebarDepth: 2,
        lastUpdated: 'Last Updated', // string | boolean
        // algolia 账户，全局搜索
        // algolia: {
        //     appId: "",
        //     apiKey: "",
        //     indexName: "srbmp",
        //     algoliaOptions: {
        //         hitsPerPage: 10,
        //         facetFilters: ""
        //     }
        // },
        nav: [
            {
                text: '工作记录',
                items: [
                    { text: 'CSS', link: '/jiang/JobLogging/CSS/' },
                    { text: 'Docker', link: '/jiang/JobLogging/Docker/' },
                    { text: 'Git', link: '/jiang/JobLogging/Git/' },
                    { text: 'Java', link: '/jiang/JobLogging/Java/' },
                    { text: 'JS', link: '/jiang/JobLogging/JS/' },
                    { text: 'MySQL', link: '/jiang/JobLogging/MySQL/' },
                    { text: 'VUE', link: '/jiang/JobLogging/VUE/' },
                ],
            }
        ],
        sidebar: {
            '/jiang/JobLogging/CSS/': [
                'CSS垂直居中的8种方法',
                'table表格内容过长处理'
            ],
            // '/jiang/JobLogging/Docker/': [
            //     'Docker使用记录',
            // ],
            '/': ['']
        },
        repo: "https://github.com/12345ZMTHL/vuepress-jiang.git",
        repoLabel: "GitHub"
    },
    plugins: [
        ["@tencent/vuepress-plugin-element-tabs"],
        [
            'fulltext-search',
            {
                tokenize: 'full',
                split: /\s+/,
                encode: 'icase',
            },
        ],
    ]
};
