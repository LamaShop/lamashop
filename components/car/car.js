angular.module('CarModule',[])
    .controller('carCtrl',['$scope','$rootScope',function($scope,$rootScope){
        $scope.backImg=true;
        $scope.changeBack=function () {
            $scope.backImg=!$scope.backImg;
        }

        $scope.arrA = JSON.parse(localStorage.getItem('buycar'));
        console.log($scope.arrA);


        // console.log($rootScope.goodsArr);
        
    }])