angular.module('addressModule',[])
    .controller('addressCtrl',['$scope',function ($scope) {
        $scope.isTrue1=true;
        $scope.move=function () {
            $scope.isTrue1=!$scope.isTrue1;
        }
    }])
