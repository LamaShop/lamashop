angular.module('couponModule',[])
.controller('couponCtrl',['$scope',function ($scope) {
    $scope.isHide=false;
    $scope.back=false;
    $scope.show=function () {
       $scope.isHide=true;
    }
    $scope.hide=function () {
        $scope.isHide=false;
    }
    $scope.backChange1=function () {
        $scope.back=true;
    }
    $scope.backChange2=function () {
        $scope.back=false;
    }
}])