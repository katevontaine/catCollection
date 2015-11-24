
(function () {
  "use strict";
  angular
    .module('cats')
    .factory('CatService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/thecatcollection';

      var addCat = function (newCat) {
        $http.post(url, newCat).then(function (res) {
          console.log(newCat);
        });
      };

      var getCats = function () {
        return $http.get(url);
      };

      return {
        createCat: addCat,
        getCats: getCats
      };

    });
})();
