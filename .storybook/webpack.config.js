// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  resolve: {
    alias: {
      'Theme': '../src/styles/',
      'Components': '../src/components',
    }
  },
  module: {
    rules: [
      {
      test: /\.css$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            // Necessary for external CSS imports to work
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            plugins: () => [
              require('postcss-modules-values'),
              require('postcss-flexbugs-fixes'),
              require('rucksack-css'),
              require('postcss-cssnext'),
            ],
          },
        },
      ],
    },
    ],
  },
};
