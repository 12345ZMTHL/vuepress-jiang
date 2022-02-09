module.exports = {
    title: "个人博客",
    description: "个人博客",
    base: '/vuepress-jiang/',
    themeConfig: {
        searchMaxSuggestions: 10,
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
           
        ],
        sidebar: [
            '/',
        ],
        repo: "https://github.com/12345ZMTHL/vuepress-jiang",
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
