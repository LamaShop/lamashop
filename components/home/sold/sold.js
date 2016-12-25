/**
 * Created by YZTC on 2016/12/24.
 */
angular.module('SoldModule',[])

    .service('dataServiceF',['$http',function($http){
        return $http.get('json/red.json');
    }])
    .controller('soldCtrl',['$scope','dataServiceF',function($scope,dataServiceF){
        dataServiceB.success(function(res){
            $scope.arr = res.data.special;
            $scope.arr1 = res.data.goods;
            console.log($scope.arr1);
        })

    }])