angular.module('CarModule',[])
    .controller('carCtrl',['$scope','$rootScope',function($scope,$rootScope){
        $scope.backImg=true;
        $scope.changeBack=function () {
            $scope.backImg=!$scope.backImg;
        }
<<<<<<< HEAD

=======
        console.log($rootScope.goodsArr);
>>>>>>> 61bd4817c099aebfe185192feac143037503565d
    }])