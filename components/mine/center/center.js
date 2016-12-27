angular.module('centerModule',[])
.controller('centerCtrl',['$scope',function ($scope) {
    $scope.color=true;
    $scope.isChange=true;
    $scope.isChange1=false;
    $scope.changeColor1=function () {
        $scope.color=true;
        $scope.isChange=true;
        $scope.isChange1=false;
    }
    $scope.changeColor2=function () {
        $scope.color=false;
        $scope.isChange=false;
        $scope.isChange1=true;
    }
}])