const guideSidebar = [
  {
    title: "Getting started",
    collapsable: false,
    children: [
      '',
      '/day1',
      '/day2',
    ]
  },
]

module.exports = {
  title: 'Apache Zeppelin 사용자 가이드',
  description: 'Unofficial documentation of Apache Zeppelin(http://zeppelin.apache.org/)',
  // base: "/Apache-Zeppelin-Docs-Ko/",
  dest: 'docs',
  head: [
    ['link', {
      rel: 'icon',
      href: '/images/zeppelin_logo.png'
    }]
  ],
  themeConfig: {
    sidebar: {
      '/quickstart/': [
        'install',
        'explore_ui',
        'tutorial',
        'spark-with-zeppelin',
        'sql-with-zeppelin',
        'python-with-zeppelin',
      ],
    },
    nav: [
      { text: 'Zeppelin이란?', link: '/index.html' },
      { text: '시작하기', link: '/quickstart/' },
      { text: '공식 홈페이지', link: 'http://zeppelin.apache.org/' },
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