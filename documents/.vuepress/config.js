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
  title: 'Apache Zeppelin Docs (Korean)',
  description: 'Unofficial documentation of Apache Zeppelin(http://zeppelin.apache.org/)',
  base: "/Apache-Zeppelin-Docs-Ko/",
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
        '',
        'day1',
        'day2'
      ],
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Start', link: '/quickstart/' },
      { text: 'Go to Zeppelin', link: 'http://zeppelin.apache.org/' },
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