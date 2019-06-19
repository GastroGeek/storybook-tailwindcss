const { resolve } = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.s?css$/,
    loaders: [
      {
        loader: 'style-loader'
      },
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../',
          hmr: process.env.NODE_ENV === 'development'
        }
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './.storybook/',
          },
        },
      },
      {
        loader: 'sass-loader',
      }
    ],

    include: resolve(__dirname, '../'),
  });

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    })
  )

  if (process.env.ANALYZE) {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: true
      })
    )
  }

  config.resolve.alias['@'] = resolve(__dirname, '../src')
  config.resolve.alias['@utils'] = resolve(__dirname, 'utils')

  return config
}