/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('YimajingModule',[])

    .service('dataService6',['$http',function($http){
        return $http.get('json/red.json');
    }])
    .controller('yimajingCtrl',['$scope','dataService6',function($scope,dataService6){
        dataService6.success(function(res){
            $scope.arr = res.data.special;
            $scope.arr1 = res.data.goods;
            console.log($scope.arr1);
        })

    }])