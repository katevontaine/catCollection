(function () {


  angular
    .module('cats')
    .controller('MainController', function($scope) {
      $scope.alertMe = function () {
          console.log("wheres da catz");
      };
    })
    .controller('catsController', function ($scope, catsService) {

      catsService.getcats().success(function (cats) {
        console.log(cats);
        $scope.theCats = cats;
      });

    });


})();
