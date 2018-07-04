module.exports = {
  title: '뷰프레스 타이틀',
  description: '잘됐으면 좋겠다',
  base: "/vuepress-playground/",
  dest: 'docs',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      '/day1',
      '/day2',
    ],
    nav: [{
        text: '내 블로그',
        link: 'https://milooy.wordpress.com/2017/06/21/working-together-with-github-tutorial/'
      },
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'tutorials'
      }
    }
  }
}