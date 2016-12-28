
/**
 * Created by YZTC on 2016/12/27.
 */
angular.module('ShoppingModule',[])
    .service('dataServiceH',['$http',function($http){
        return $http.get('json/mySwp.json');
    }])
.controller('shoppingCtrl',['$scope','dataServiceH',function($scope,dataServiceH){
    dataServiceH.success(function(res){
        $scope.arr = JSON.parse(localStorage.getItem('luobin'));
       // console.log($scope.arr);
        $scope.isShowa = false;
        $scope.setText = function(){
            $scope.isShowa = true;
        }

        $scope.gotHide = function(){
            $scope.isShowa = false;
        }
        $scope.right = function(){
            $scope.isShowa = false;
        }
        $scope.buy = function(arr){
            console.log(arr);
            localStorage.setItem('buycar',JSON.stringify(arr));

        }

    })
}])
