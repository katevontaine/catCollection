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
          controller: 'MainController'
        })
        .when('/cats', {
          templateUrl: 'views/cats/list.html',
          controller: 'catController'
        })
        .when('/cats/:catId', {
          templateUrl: 'views/cats/show.html',
          controller: 'catController'
        })
        .when('/cats/:catId/edit', {
          templateUrl: 'views/cats/edit.html',
          controller: 'catController'
        })

        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'})

    });




})();
