angular.module('phonecatApp').config([
  '$locationProvider',
  '$routeProvider',
  ($locationProvider: ng.ILocationProvider, $routeProvider: ng.route.IRouteProvider) => {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/phones', {
        template: '<phone-list></phone-list>'
      })
      .when('/phones/:phoneId', {
        template: '<phone-detail></phone-detail>'
      })
      .when('/hello', {
        template: '<app-hello></app-hello>'
      })
      .otherwise('/phones');
  }
]);
