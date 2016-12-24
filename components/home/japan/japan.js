/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('JapanModule',[])

    .service('dataService4',['$http',function($http){
        return $http.get('json/Japan.json');
    }])
    .controller('japanCtrl',['$scope','dataService4',function($scope,dataService4){
        dataService4.success(function(res){
            $scope.arr = res.data.special;
            $scope.arr1 = res.data.goods;
        })
    }])