const ENV_CONFIG = require('./env.config')

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/main.css',

    // 'ant-design-vue/dist/antd.css'
    // 引入需要的ant-design组件样式
    'ant-design-vue/lib/icon/style/css',
    'ant-design-vue/lib/button/style/css',
    'ant-design-vue/lib/layout/style/css',
    'ant-design-vue/lib/carousel/style/css',
    'ant-design-vue/lib/back-top/style/css',
    'ant-design-vue/lib/form/style/css',
    'ant-design-vue/lib/input/style/css',
    'ant-design-vue/lib/select/style/css',
    'ant-design-vue/lib/checkbox/style/css',
    'ant-design-vue/lib/cascader/style/css',
    'ant-design-vue/lib/pagination/style/css',
    'ant-design-vue/lib/breadcrumb/style/css',
    'ant-design-vue/lib/table/style/css',
    'ant-design-vue/lib/message/style/css',
    'ant-design-vue/lib/radio/style/css',
    'ant-design-vue/lib/spin/style/css'
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/antd-ui'
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // 开发模式下开启debug
    debug: process.env._ENV !== 'production',

    baseURL:

    process.env._ENV === 'production'

      ? 'http://localhost:3000/common'

      : 'http://localhost:3000/common'
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  proxy: {
    '/common/': {
      target: 'http://api.apishop.net',
      pathRewrite: { '^/api/': '' }
    }
  },
  // 环境变量配置
  env: {
    proxyURL: ENV_CONFIG[process.env.NODE_ENV].proxyURL || 'http://localhost:3000'
    // baseURL: ENV_CONFIG[process.env.NODE_ENV].BASE_URL,
  }
}
