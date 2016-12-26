/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('JapanModule',[])

    .service('dataServiceC',['$http',function($http){
        return $http.get('json/Japan.json');
    }])
    .controller('japanCtrl',['$scope','dataServiceC',function($scope,dataServiceC){
        dataServiceC.success(function(res){
            $scope.arr = res.data.special;
            $scope.arr1 = res.data.goods;
        })
        $scope.orderType = '';
        $scope.changeOrderType = function(type){
            $scope.orderType = type;
        }
    }])