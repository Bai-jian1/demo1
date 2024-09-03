import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  title: "我的项目",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '目录1',
    outline: [2, 6],
    nav: [
      {
        text: '家', items: [
          { text: '首页', link: '/' },
          { text: '关于', link: '/about' },
          { text: '联系', link: '/contact' }
        ]
      },
      { text: '实例', link: '/markdown-examples' },
      { text: '两边栏', link: '/ys' }
    ],
    logo: {
      src: '/logo.png',
    },
    /*     sidebar: [
          {
            text: 'Examples1',
            items: [
              { text: 'Markdown 演示1', link: '/markdown-examples' },
              { text: 'Runtime API 演示', link: '/api-examples' }
            ]
          },
          {
            text: 'Examples2',
            items: [
              { text: 'Markdown 演示1', link: '/markdown-examples' },
              { text: 'Runtime API 演示', link: '/api-examples' }
            ]
          },
          {
            text: 'Examples3',
            items: [
              {
                text: 'Markdown 演示1', items: [
                  { text: 'Runtime API 演示', link: '/api-examples' },
                  { text: 'Runtime API 演示', link: '/api-examples' }
                ]
              },
              { text: 'Runtime API 演示', link: '/api-examples' }
            ]
          }
        ], */
    sidebar: false,//关闭侧边栏
    aside: 'left',//设置右侧侧边栏在左侧显示
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    //底部配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Evan You'
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
})
