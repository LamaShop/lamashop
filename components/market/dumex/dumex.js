angular.module('dumexModule',[])
    .service('dataService6',['$http',function($http){
        return $http.get('json/dumex.json');
    }])
    .controller('dumexCtrl',['$scope','dataService6',function($scope,dataService6){
        dataService6.success(function(res){
            // console.log(res.data.list)
            $scope.arr=res.data.list;
        })
    }])

