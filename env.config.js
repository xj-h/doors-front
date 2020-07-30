module.exports = {
  development: {
    MODE: 'development',
    proxyURL: 'http://api.apishop.net'
  },
  sit: {
    MODE: 'sit',
    proxyURL: 'http://htsit.hanhua.com'
  },
  production: {
    MODE: 'production',
    proxyURL: 'http://t.hanhua.com'
  }
}
