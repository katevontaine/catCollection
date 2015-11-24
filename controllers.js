(function () {

    angular
    .module('cats')
// .controller('MainController', function ($scope) {
//
// })
.controller('CatsController', function ($scope, CatService) {

  CatService.getCats().success(function (cats) {
    console.log(cats);
    $scope.cats = cats;
  });
  $scope.addCat = function (newCat){
    CatService.createCat(newCat);
  }
})

})();
