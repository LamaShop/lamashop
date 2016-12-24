/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('HufuModule',[])

    .service('dataService3',['$http',function($http){
        return $http.get('json/skin.json');
    }])
    .controller('hufuCtrl',['$scope','dataService3',function($scope,dataService3){
        dataService3.success(function(res){
            $scope.arr = res.data.special;
            $scope.arr1 = res.data.goods;
        })
    }])