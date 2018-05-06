/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': '/node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      'ng-loader': '/src/systemjs-angular-loader.js',
      // our app is within the app folder
      app: '/dist',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic':
        'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',

      // other libraries
      rxjs: 'npm:rxjs/bundles/rxjs.umd.js',
      'rxjs/operators': 'npm:rxjs/operators',
      'rxjs/internal': 'npm:rxjs/internal',
      'rxjs/internal/observable': 'npm:rxjs/internal/observable',
      'rxjs/internal/operators': 'npm:rxjs/internal/operators',
      'rxjs/internal/util': 'npm:rxjs/internal/util'
      // 'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: '/src/systemjs-angular-loader.js'
          }
        }
      },
      'rxjs/operators': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      'rxjs/internal': {
        defaultExtension: 'js'
      },
      'rxjs/internal/observable': {
        defaultExtension: 'js'
      },
      'rxjs/internal/operators': {
        defaultExtension: 'js'
      },
      'rxjs/internal/util': {
        defaultExtension: 'js'
      }
    }
  });
})(this);
