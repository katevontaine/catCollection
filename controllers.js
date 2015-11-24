(function () {

    angular.module('cats', [])
        .controller('MainController', ['$scope', function($scope) {
          $scope.list = [];
          $scope.text = 'hello';
          $scope.submit = function() {
            if ($scope.text) {
              $scope.cat.push(this.text);
              $scope.text = '';
            }
          };
        }]);



})();
