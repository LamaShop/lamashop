angular.module('CarModule',[])
    .controller('carCtrl',['$scope','$rootScope',function($scope,$rootScope){
        $scope.backImg=true;
        $scope.changeBack=function () {
            $scope.backImg=!$scope.backImg;
        }
        console.log($rootScope.goodsArr);
    }])