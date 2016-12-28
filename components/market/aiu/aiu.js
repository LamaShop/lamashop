angular.module('aiuModule',[])
    .service('dataService5',['$http',function($http){
        return $http.get('json/aiu.json');
    }])
    .controller('aiuCtrl',['$scope','$rootScope','dataService5',function($scope,$rootScope,dataService5){
        dataService5.success(function(res){
            // console.log(res.data.list)
            $scope.arr=res.data.list;
            $scope.sendObj=function(obj){
                $rootScope.obj=obj;
                console.log($rootScope.obj);
            }
        })
    }])
