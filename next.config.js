const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching: true,
  mode: 'production',
})
const runtimeCaching = require('next-pwa/cache')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = withPWA({
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
  reactStrictMode: true,
})