angular.module('CarModule',[])
    .controller('carCtrl',['$scope',function($scope){
        $scope.backImg=true;
        $scope.changeBack=function () {
            $scope.backImg=!$scope.backImg;
        }
    }])