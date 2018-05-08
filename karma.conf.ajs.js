const path = require('path');
const webpack = require('webpack');

//jshint strict: false
module.exports = function(config) {
  config.set({
    basePath: '',

    mime: {
      'text/x-typescript': ['ts']
    },

    files: [
      'app/ajs-main.ts',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/**/*.ajs.spec.js',
      'app/**/*.ajs.spec.ts'
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
      'app/ajs-main.ts': ['webpack', 'sourcemap'],
      'app/**/*.ajs.spec.ts': ['webpack', 'sourcemap']
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
              { loader: 'ng-annotate-loader' },
              { loader: 'ts-loader', options: { transpileOnly: true } },
              {
                loader: 'angularjs-template-loader',
                options: { relativeTo: path.resolve(__dirname, 'app') }
              }
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
