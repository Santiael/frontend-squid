const { merge } = require('webpack-merge')

const webpackCommon = require('./webpack/webpack.common')
const webpackProd = require('./webpack/webpack.prod')
const webpackDev = require('./webpack/webpack.dev')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = merge(webpackCommon, isProduction ? webpackProd : webpackDev)