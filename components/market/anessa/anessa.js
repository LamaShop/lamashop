angular.module('anessaModule',[])
    .service('dataService2',['$http',function($http){
        return $http.get('json/anessa.json');
    }])
    .controller('anessaCtrl',['$scope','$rootScope','dataService2',function($scope,$rootScope,dataService2){
        dataService2.success(function(res){
            $scope.arr=res.data.list;
            $scope.sendObj=function(obj){
                $rootScope.obj=obj;
                console.log($rootScope.obj);
            }
        })
    }])
