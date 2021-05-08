module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  optimization: {
    usedExports: true,
  },
}
