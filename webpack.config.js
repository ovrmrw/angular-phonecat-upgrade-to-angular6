const path = require('path');
const ngtoolsWebpack = require('@ngtools/webpack');
const { AngularCompilerPlugin } = ngtoolsWebpack;

module.exports = [
  /* Angular */
  {
    mode: 'development',
    entry: {
      angular: './app/main.ts'
    },
    resolve: {
      extensions: ['.js', '.ts']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name]-bundle.js'
    },
    module: {
      rules: [
        {
          /* Components (Angular) */
          test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
          loader: '@ngtools/webpack',
          exclude: [/\.spec\.ts$/]
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
    plugins: [
      new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.build.json',
        entryModule: './app/app.module#AppModule',
        sourceMap: true
      })
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'angular-vendor',
            chunks: 'initial',
            enforce: true
          }
        }
      }
    },
    performance: {
      hints: false
    },
    devtool: 'source-map'
  },
  /* AngularJS */
  {
    mode: 'development',
    entry: {
      ajs: './app/ajs-main.ts'
    },
    resolve: {
      extensions: ['.js', '.ts']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name]-bundle.js'
    },
    module: {
      rules: [
        {
          /* Components (AngularJS) */
          test: /\.ts$/,
          use: [
            { loader: 'ng-annotate-loader' },
            { loader: 'ts-loader', options: { transpileOnly: true } },
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
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /bower_components/,
            name: 'ajs-vendor',
            chunks: 'initial',
            enforce: true
          }
        }
      }
    },
    performance: {
      hints: false
    },
    devtool: 'source-map'
  },
  /* Polyfills, Styles */
  {
    mode: 'development',
    entry: {
      polyfills: './app/polyfills.ts',
      styles: './app/global-styles.ts'
    },
    resolve: {
      extensions: ['.js', '.ts']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name]-bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [{ loader: 'ts-loader', options: { transpileOnly: true } }]
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
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
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
    devtool: 'source-map'
  }
];
