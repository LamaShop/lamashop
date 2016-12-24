/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('NaiModule',[])

    .service('dataService5',['$http',function($http){
        return $http.get('json/milk.json');
    }])
    .controller('naiCtrl',['$scope','dataService5',function($scope,dataService5){
        dataService5.success(function(res){
            //第一张大图
        $scope.arr = res.data.special;
           // 下面的小图
            $scope.arr1 = res.data.goods;
            console.log($scope.arr1);
        })

    }])