angular.module('wylpModule',[])
    .service('dataService1',['$http',function($http){
        return $http.get('json/wylp.json');
    }])
    .controller('wylpCtrl',['$scope','dataService1',function($scope,dataService1){
        dataService1.success(function(res){
            // console.log(res.data.list)
            $scope.arr=res.data.list;
        })
    }])
