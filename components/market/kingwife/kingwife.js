angular.module('kingwifeModule',[])
    .service('dataService3',['$http',function($http){
        return $http.get('json/kingwife.json');
    }])
    .controller('kingwifeCtrl',['$scope','$rootScope','dataService3',function($scope,$rootScope,dataService3){
        dataService3.success(function(res){
            // console.log(res.data.list)
            $scope.arr=res.data.list;
            $scope.sendObj=function(obj){
                $rootScope.obj=obj;
                console.log($rootScope.obj);
            }
        })
    }])
