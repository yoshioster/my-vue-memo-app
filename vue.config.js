module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-vue-memo-app/'
    : '/',
  outputDir: 'docs/'
}