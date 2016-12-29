angular.module('CarModule',[])
    .controller('carCtrl',['$scope','$rootScope',function($scope,$rootScope){
        $scope.backImg=true;
        // $scope.backImg1=false;
        $scope.changeBack=function () {
            $scope.backImg=!$scope.backImg;
            // $scope.backImg1=!$scope.backImg1;
        }

<<<<<<< HEAD
        $scope.arrA = JSON.parse(localStorage.getItem('buycar'));
        console.log($scope.arrA);


        // console.log($rootScope.goodsArr);
        
=======
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
>>>>>>> 0be015175c94aebfddfb3d3895506247edad74f9
    }])