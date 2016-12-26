/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('HufuModule',[])

    .service('dataService30',['$http',function($http){
        return $http.get('json/skin.json');
    }])
    .controller('hufuCtrl',['$scope','dataService30',function($scope,dataService30){
        dataService30.success(function(res){
            $scope.arr = res.data.special;
            console.log(res);
            $scope.arr1 = res.data.goods;
        })
        $scope.orderType = '';
        $scope.changeOrderType = function(type){
            $scope.orderType = type;
        }
    }])