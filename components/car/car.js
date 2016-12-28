angular.module('CarModule',[])
    .controller('carCtrl',['$scope',function($scope){
        $scope.backImg=true;
        $scope.changeBack=function () {
            $scope.backImg=!$scope.backImg;
        }
        $scope.arr1 = JSON.parse(localStorage.getItem('buycar'));
        console.log($scope.arr1);
    }])