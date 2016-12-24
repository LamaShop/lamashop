/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('NaiModule',[])

    .service('dataService5',['$http',function($http){
        return $http.get('json/milk.json');
    }])
    .controller('naiCtrl',['$scope','dataService5',function($scope,dataService5){
        dataService5.success(function(res){
            //$scope.arr = res.data;
            console.log(res);
        })
    }])