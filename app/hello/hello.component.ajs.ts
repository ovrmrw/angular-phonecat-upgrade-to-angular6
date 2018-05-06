// declare var angular: ng.IAngularStatic;

class HelloController {
  greeting = 'Hello';

  constructor() {
    console.log('HelloController');
  }
}

angular.module('hello').component('appHello', {
  templateUrl: '/hello/hello.template.ajs.html',
  controller: HelloController
});
