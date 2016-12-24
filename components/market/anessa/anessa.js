angular.module('anessaModule',[])
    .service('dataService2',['$http',function($http){
        return $http.get('json/anessa.json');
    }])
    .controller('anessaCtrl',['$scope','dataService2',function($scope,dataService2){
        dataService2.success(function(res){
            // console.log(res.data.list)
            $scope.arr=res.data.list;
        })
    }])
