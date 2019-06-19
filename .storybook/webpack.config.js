const { resolve } = require('path')

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.s?css$/,
    loaders: [
      {
        loader: 'style-loader'
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


  config.resolve.alias['@'] = resolve(__dirname, '../src')
  config.resolve.alias['@utils'] = resolve(__dirname, 'utils')

  return config
}