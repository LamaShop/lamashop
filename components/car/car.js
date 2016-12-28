angular.module('CarModule',[])
    .controller('carCtrl',['$scope','$rootScope',function($scope,$rootScope){
        $scope.backImg=true;
        // $scope.backImg1=false;
        $scope.changeBack=function () {
            $scope.backImg=!$scope.backImg;
            // $scope.backImg1=!$scope.backImg1;
        }

        // console.log($rootScope.goodsArr);
        $scope.arrGoods=JSON.parse(localStorage.getItem('buyCar'))
        $scope.sum=localStorage.getItem('sum')
        console.log($scope.sum);

        $scope.isShow3=true;
        $scope.isShow4=false;
        $scope.textChange=function () {
            $scopeisShow3=false;
            $scopeisShow4=true;
        }
        $scope.textChange1=function () {
            $scopeisShow3=true;
            $scopeisShow4=false;
        }
    }])