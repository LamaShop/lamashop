angular.module('wylpModule',[])
    .service('dataService1',['$http',function($http){
        return $http.get('json/wylp.json');
    }])
    .controller('wylpCtrl',['$scope','$rootScope','dataService1',function($scope,$rootScope,dataService1){
        dataService1.success(function(res){
            $scope.arr=res.data.list;
            $scope.sendObj=function(obj){
                $rootScope.obj=obj;
            }
        })
    }])
