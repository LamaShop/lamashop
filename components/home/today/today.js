/**
 * Created by YZTC on 2016/12/24.
 */
angular.module('TodayModule',[])

    .service('dataServiceD',['$http',function($http){
        return $http.get('json/123.json');
    }])
    .controller('todayCtrl',['$scope','dataServiceD',function($scope,dataServiceD){
        dataServiceD.success(function(res){
            // $scope.arr = res.data.special;
            // $scope.arr1 = res.data.goods;
            // console.log($scope.arr1);
        })
    }])
