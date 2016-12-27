/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('NaiModule',[])

    .service('dataServiceA',['$http',function($http){
        return $http.get('json/milk.json');
    }])
    .controller('naiCtrl',['$scope','dataServiceA',function($scope,dataServiceA){
        dataServiceA.success(function(res){
            //第一张大图
        $scope.arr = res.data.special;
           // 下面的小图
            $scope.arr1 = res.data.goods;
            console.log($scope.arr1);
        })
    $scope.orderType = "";
        $scope.changeOrderType = function(type){
            $scope.orderType = type;
        }
    }])