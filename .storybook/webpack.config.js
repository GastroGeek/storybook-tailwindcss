const { resolve } = require('path')

module.exports = async ({ config, mode }) => {
  config.module.rules = config.module.rules.filter(rule => !rule.test.toString().includes('styl'))
  config.module.rules = config.module.rules.filter(rule => !rule.test.toString().includes('css'))

  config.resolve.extensions.push('.scss')

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


  config.resolve.alias['@utils'] = resolve(__dirname, 'utils')

  return config
}