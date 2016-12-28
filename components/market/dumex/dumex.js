angular.module('dumexModule',[])
    .service('dataService6',['$http',function($http){
        return $http.get('json/dumex.json');
    }])
    .controller('dumexCtrl',['$scope','$rootScope','dataService6',function($scope,$rootScope,dataService6){
        dataService6.success(function(res){
            // console.log(res.data.list)
            $scope.arr=res.data.list;
            $scope.sendObj=function(obj){
                $rootScope.obj=obj;
                console.log($rootScope.obj);
            }
        })
    }])

