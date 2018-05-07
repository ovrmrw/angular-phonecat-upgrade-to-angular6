const webpack = require('webpack');

module.exports = function(config) {
  config.set({
    basePath: '',

    mime: {
      'text/x-typescript': ['ts']
    },

    files: [
      'node_modules/core-js/client/shim.js',
      'node_modules/zone.js/dist/zone.js',
      'app/test.ts'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Firefox'],

    plugins: ['karma-firefox-launcher', 'karma-jasmine', 'karma-webpack', 'karma-sourcemap-loader'],

    preprocessors: {
      'app/test.ts': ['webpack', 'sourcemap']
    },

    webpack: {
      mode: 'development',
      resolve: {
        extensions: ['.js', '.ts']
      },
      module: {
        rules: [
          {
            /* Components */
            test: /\.ts$/,
            use: [
              {
                loader: 'ts-loader',
                options: { transpileOnly: true }
              },
              {
                loader: 'angular2-template-loader'
              }
            ]
          },
          {
            /* Component templates */
            test: /\.html$/,
            loader: 'raw-loader'
          },
          {
            /* Component CSS styles */
            test: /\.css$/,
            loader: 'raw-loader'
          },
          {
            /* Component SCSS styles */
            test: /\.(scss|sass)$/,
            use: [
              { loader: 'raw-loader' },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      performance: {
        hints: false
      },
      devtool: 'inline-source-map',
      plugins: [
        new webpack.SourceMapDevToolPlugin({
          filename: null, // if no value is provided the sourcemap is inlined
          test: /\.(ts|js)($|\?)/i // process .js and .ts files only
        })
      ]
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    color: true,

    reporters: ['progress']
  });
};
