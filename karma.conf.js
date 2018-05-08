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
    singleRun: true,

    frameworks: ['jasmine'],

    browsers: ['Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-webpack',
      'karma-sourcemap-loader'
    ],

    preprocessors: {
      'app/test.ts': ['webpack', 'sourcemap']
    },

    color: true,

    reporters: ['progress'],

    webpack: {
      mode: 'development',
      resolve: {
        extensions: ['.js', '.ts']
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: [
              { loader: 'ts-loader', options: { transpileOnly: true } },
              { loader: 'angular2-template-loader' }
            ],
            exclude: [/\.spec\.ts$/]
          },
          {
            test: /\.ts$/,
            use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
            include: [/\.spec\.ts$/]
          },
          {
            test: /\.html$/,
            loader: 'raw-loader'
          },
          {
            test: /\.css$/,
            loader: 'raw-loader'
          },
          {
            test: /\.(scss|sass)$/,
            use: [{ loader: 'raw-loader' }, { loader: 'sass-loader', options: { sourceMap: true } }]
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
    }
  });
};
