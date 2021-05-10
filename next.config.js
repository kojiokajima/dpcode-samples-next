const path = require('path')
const withImages = require('next-images')

module.exports = withImages({
  exclude: path.resolve(__dirname, 'assets/svg'),
  webpack(config, options) {
    return config
  }
})