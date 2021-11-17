const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    mode: 'production',
  },
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  }
})
