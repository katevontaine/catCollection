(function () {
  "use strict";

  angular
    .module('cats', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/cats/main.html',
          controller: 'CatsController'
        })
        .when('/cats', {
          templateUrl: 'views/cats/list.html',
          controller: 'CatsController'
        })
        .when('/cats/:catId', {
          templateUrl: 'views/cats/show.html',
          controller: 'CatsController'
        })
        .when('/cats/:catId/edit', {
          templateUrl: 'views/cats/edit.html',
          controller: 'CatsController'
        })

        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'})

    });




})();
