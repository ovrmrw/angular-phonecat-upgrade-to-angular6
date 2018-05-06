const path = require('path');
const ngtoolsWebpack = require('@ngtools/webpack');
const { AngularCompilerPlugin } = ngtoolsWebpack;

module.exports = [
  /* Angular */
  {
    mode: 'development',
    entry: './app/main.ts',
    resolve: {
      extensions: ['.js', '.ts']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          /* Components (Angular) */
          test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
          loader: '@ngtools/webpack'
        },
        {
          test: /\.(eot|svg|cur)$/,
          loader: 'file-loader'
        },
        {
          test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
          loader: 'url-loader'
        },
        {
          /* Component templates */
          test: /\.html$/,
          loader: 'raw-loader'
        },
        {
          /* Component CSS styles */
          test: /\.css$/,
          loader: 'raw-loader',
          exclude: /\/(styles|bootstrap)\//
        },
        {
          /* Component SCSS styles */
          test: /\.(scss|sass)$/,
          use: [{ loader: 'raw-loader' }, { loader: 'sass-loader' }],
          exclude: /\/(styles|bootstrap)\//
        },
        {
          /* Global CSS styles */
          test: /\/(styles|bootstrap)\/.+\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
        },
        {
          /* Global SCSS styles */
          test: /\/(styles|bootstrap)\/.+\.(scss|sass)$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
        }
      ]
    },
    plugins: [
      new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.build.json',
        entryModule: './app/app.module#AppModule',
        sourceMap: true
      })
    ],
    performance: {
      hints: false
    },
    devtool: 'source-map'
  },
  /* AngularJS */
  {
    mode: 'development',
    entry: './app/ajs-main.ts',
    resolve: {
      extensions: ['.js', '.ts']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'ajs-bundle.js'
    },
    module: {
      rules: [
        {
          /* Components (AngularJS) */
          test: /\.ts$/,
          use: [
            { loader: 'ng-annotate-loader' },
            { loader: 'ts-loader' },
            {
              loader: 'angularjs-template-loader',
              options: { relativeTo: path.resolve(__dirname, 'app') }
            }
          ]
        },
        {
          /* Component templates */
          test: /\.html$/,
          loader: 'raw-loader'
        }
      ]
    },
    performance: {
      hints: false
    },
    devtool: 'source-map'
  },
  /* Polyfills, Styles */
  {
    mode: 'development',
    entry: ['./app/polyfills.ts', './app/global-styles.ts'],
    resolve: {
      extensions: ['.js', '.ts']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'polyfills-bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader'
        },
        {
          test: /\.(eot|svg|cur)$/,
          loader: 'file-loader'
        },
        {
          test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
          loader: 'url-loader'
        },
        {
          /* Global CSS styles */
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
        },
        {
          /* Global SCSS styles */
          test: /\.(scss|sass)$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
        }
      ]
    },
    performance: {
      hints: false
    },
    devtool: 'source-map'
  }
];
