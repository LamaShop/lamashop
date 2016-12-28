/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('YimajingModule',[])

    .service('dataServiceB',['$http',function($http){
        return $http.get('json/red.json');
    }])
    .controller('yimajingCtrl',['$scope','dataServiceB',function($scope,dataServiceB){
        dataServiceB.success(function(res){
            $scope.arr = res.data.special;
            $scope.arr1 = res.data.goods;
          //  console.log($scope.arr1);
        })
        $scope.orderType = '';
        $scope.changeOrderType = function(type){
            $scope.orderType = type;
        }
    }])